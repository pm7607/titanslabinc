// Google Analytics event tracking helpers

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KXXJEXV711";

/**
 * Log a generic custom event to Google Analytics
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Track lead / contact form submissions
 */
export function trackLeadSubmission(service?: string) {
  trackEvent("generate_lead", "Contact Form", service);
}

/**
 * Track WhatsApp conversation triggers
 */
export function trackWhatsAppClick(location: string = "floating_button") {
  trackEvent("whatsapp_click", "Engagement", location);
}
