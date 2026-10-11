import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Phone, and Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "titanslabinc@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "titanslabinc@gmail.com";

    if (!gmailPass) {
      console.warn("GMAIL_APP_PASSWORD is not configured in .env.local.");
      return NextResponse.json(
        {
          error:
            "Email service is not fully configured on the server. Please ensure GMAIL_APP_PASSWORD is set in .env.local."
        },
        { status: 503 }
      );
    }

    // Configure Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s+/g, ""), // Strip spaces if copied directly from Google
      },
    });

    const formattedBudget = budget ? budget : "Not specified";
    const formattedCompany = company ? company : "Not specified";
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const mailOptions = {
      from: `"Titanslab Inquiry Bot" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `🚀 New Lead: ${name} (${service}) - Titanslab Inc.`,
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
            </div>
            
            <div class="content">
              <div class="meta-box">
                <div class="meta-row">
                  <div class="meta-label">Client Name:</div>
                  <div class="meta-value">${name}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Company:</div>
                  <div class="meta-value">${formattedCompany}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Email Address:</div>
                  <div class="meta-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Phone Number:</div>
                  <div class="meta-value"><a href="tel:${phone.replace(/\s+/g, "")}">${phone}</a></div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Service / Product:</div>
                  <div class="meta-value" style="color: #7c3aed;">${service}</div>
                </div>
                <div class="meta-row">
                  <div class="meta-label">Estimated Budget:</div>
                  <div class="meta-value">${formattedBudget}</div>
                </div>
              </div>

              <div class="message-box">
                <div class="message-label">Project Scope & Details</div>
                <div class="message-content">${message}</div>
              </div>
            </div>

            <div class="footer">
              <p>You can reply directly to this email to respond to <strong>${name}</strong> (${email}).</p>
              <p>© Titanslab Inc. Internal Lead Notification</p>
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
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
