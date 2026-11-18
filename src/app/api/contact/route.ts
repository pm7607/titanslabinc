import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory sliding-window rate limiter per IP (max 5 requests per 15 minutes)
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "10minutemail.com",
  "yopmail.com",
  "sharklasers.com",
  "throwawaymail.com",
  "trashmail.com",
  "getnada.com",
  "temp-mail.org",
]);

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(request: Request): string {
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipRequestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipRequestLog.set(ip, timestamps);

  // Prevent unbounded memory growth
  if (ipRequestLog.size > 1000) {
    for (const [key, times] of ipRequestLog.entries()) {
      const valid = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        ipRequestLog.delete(key);
      } else {
        ipRequestLog.set(key, valid);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // Layer 1: Rate Limiting
    if (clientIp !== "unknown" && isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many inquiries submitted recently. Please wait 15 minutes or reach out directly via WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      service,
      budget,
      message,
      turnstileToken,
      website, // Invisible honeypot field
      formLoadedAt, // Human fill-time check
    } = body;

    // Layer 2: Honeypot Trap (Bots fill hidden fields; silently accept without emailing)
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent successfully.",
      });
    }

    // Layer 3: Minimum Fill-Time Check (Block sub-2-second automated scripts)
    if (typeof formLoadedAt === "number") {
      const elapsedMs = Date.now() - formLoadedAt;
      if (elapsedMs >= 0 && elapsedMs < 2000) {
        return NextResponse.json(
          { error: "Submission detected as automated. Please try again normally." },
          { status: 400 }
        );
      }
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Phone, and Message)." },
        { status: 400 }
      );
    }

    const emailTrimmed = String(email).trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Reject disposable email domains
    const emailDomain = emailTrimmed.split("@")[1];
    if (emailDomain && DISPOSABLE_EMAIL_DOMAINS.has(emailDomain)) {
      return NextResponse.json(
        { error: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Reject link-stuffed spam messages
    const urlMatches = String(message).match(/(https?:\/\/|www\.)\S+/gi);
    if (urlMatches && urlMatches.length > 3) {
      return NextResponse.json(
        { error: "Messages with excessive external links cannot be submitted." },
        { status: 400 }
      );
    }

    // Layer 4: Cloudflare Turnstile Cryptographic Verification
    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Please complete the Cloudflare security check before submitting." },
        { status: 400 }
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.warn("TURNSTILE_SECRET_KEY is not configured on the server.");
      return NextResponse.json(
        {
          error:
            "Security verification is not configured on the server. Please set TURNSTILE_SECRET_KEY in environment variables.",
        },
        { status: 503 }
      );
    }

    const turnstileFormData = new URLSearchParams();
    turnstileFormData.append("secret", turnstileSecret);
    turnstileFormData.append("response", turnstileToken);
    if (clientIp !== "unknown") {
      turnstileFormData.append("remoteip", clientIp);
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: turnstileFormData.toString(),
      }
    );

    const verifyResult = (await verifyResponse.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verifyResult.success) {
      console.warn("Cloudflare Turnstile verification failed:", verifyResult["error-codes"]);
      return NextResponse.json(
        {
          error:
            "Cloudflare security verification failed or expired. Please complete the check again.",
        },
        { status: 403 }
      );
    }

    // Layer 5: Send verified email via Gmail SMTP
    const gmailUser = process.env.GMAIL_USER || "titanslabinc@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "titanslabinc@gmail.com";

    if (!gmailPass) {
      console.warn("GMAIL_APP_PASSWORD is not configured in .env.local.");
      return NextResponse.json(
        {
          error:
            "Email service is not fully configured on the server. Please ensure GMAIL_APP_PASSWORD is set in .env.local.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s+/g, ""),
      },
    });

    const safeName = escapeHtml(String(name).trim());
    const safeCompany = escapeHtml(company ? String(company).trim() : "Not specified");
    const safeEmail = escapeHtml(emailTrimmed);
    const safePhone = escapeHtml(String(phone).trim());
    const safeService = escapeHtml(service ? String(service).trim() : "General Inquiry");
    const safeBudget = escapeHtml(budget ? String(budget).trim() : "Not specified");
    const safeMessage = escapeHtml(String(message).trim());

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const mailOptions = {
      from: `"Titanslab Inquiry Bot" <${gmailUser}>`,
      to: recipient,
      replyTo: emailTrimmed,
      subject: `🚀 Verified Lead: ${String(name).trim()} (${service || "Inquiry"}) - Titanslab Inc.`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
            .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; }
            .header p { margin: 0; font-size: 13px; opacity: 0.9; }
            .verified-badge { display: inline-block; margin-top: 10px; padding: 4px 10px; border-radius: 999px; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(52, 211, 153, 0.5); color: #a7f3d0; font-size: 11px; font-weight: 700; }
            .content { padding: 24px; }
            .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
            .meta-row { display: flex; padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
            .meta-row:last-child { border-bottom: none; }
            .meta-label { width: 140px; font-weight: 600; color: #64748b; }
            .meta-value { font-weight: 700; color: #0f172a; flex: 1; }
            .meta-value a { color: #7c3aed; text-decoration: none; }
            .message-box { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 18px; margin-top: 10px; }
            .message-label { font-size: 12px; font-weight: 700; color: #7c3aed; text-transform: uppercase; margin-bottom: 8px; }
            .message-content { font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>Submitted via titanslab.in • ${submissionTime} IST</p>
              <span class="verified-badge">✓ Cloudflare Turnstile Verified</span>
            </div>
            
            <div class="content">
              <div class="meta-box">
                <div class="meta-row">
                  <div class="meta-label">Client Name:</div>
                  <div class="meta-value">${safeName}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Company:</div>
                  <div class="meta-value">${safeCompany}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Email Address:</div>
                  <div class="meta-value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Phone Number:</div>
                  <div class="meta-value"><a href="tel:${safePhone.replace(/\s+/g, "")}">${safePhone}</a></div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Service / Product:</div>
                  <div class="meta-value" style="color: #7c3aed;">${safeService}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Estimated Budget:</div>
                  <div class="meta-value">${safeBudget}</div>
                </div>
              </div>

              <div class="message-box">
                <div class="message-label">Project Scope & Details</div>
                <div class="message-content">${safeMessage}</div>
              </div>
            </div>

            <div class="footer">
              <p>You can reply directly to this email to respond to <strong>${safeName}</strong> (${safeEmail}).</p>
              <p>© Titanslab Inc. Internal Lead Notification • Protected by Cloudflare Turnstile</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully. Our engineering team will review it shortly.",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email inquiry.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
