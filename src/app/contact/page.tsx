"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY_INFO } from "@/data/company";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { trackLeadSubmission } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to deliver inquiry. Please try again or reach out on WhatsApp.");
      }

      setSubmitted(true);
      trackLeadSubmission(formData.service);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Website Development",
        budget: "",
        message: ""
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Let&apos;s Talk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Start Your Digital Project With <span className="text-gradient-purple">Titanslab Inc.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us about your technical requirements, upcoming project, product inquiry, or automation goals. Our team will review your inquiry and respond promptly.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 glass-panel shadow-lg shadow-slate-900/5">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-600" />
                Send Us a Project Inquiry
              </h3>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-300 text-purple-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Inquiry Delivered!</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                      Thank you for reaching out to Titanslab Inc. Your message has been sent directly to our engineering desk at{" "}
                      <strong className="text-purple-700 font-semibold">{COMPANY_INFO.email}</strong>. We will review your project requirements and respond promptly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/20 active:scale-95 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <div className="flex-1 space-y-1">
                        <span className="font-bold block">Delivery Issue</span>
                        <span className="font-normal block leading-relaxed">{errorMessage}</span>
                        <div className="pt-1 text-[11px] text-rose-600 font-medium">
                          You can also email us directly at{" "}
                          <a href={`mailto:${COMPANY_INFO.email}`} className="underline font-bold hover:text-rose-800">
                            {COMPANY_INFO.email}
                          </a>{" "}
                          or connect on WhatsApp.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs text-slate-700 font-semibold block mb-1.5">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="text-xs text-slate-700 font-semibold block mb-1.5">Company Name</label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        disabled={isSubmitting}
                        placeholder="Company / Organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="text-xs text-slate-700 font-semibold block mb-1.5">Business Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="text-xs text-slate-700 font-semibold block mb-1.5">Phone Number *</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        disabled={isSubmitting}
                        placeholder="+91 97121 17087"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="text-xs text-slate-700 font-semibold block mb-1.5">Service / Product Interested In *</label>
                      <select
                        id="contact-service"
                        name="service"
                        disabled={isSubmitting}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors font-medium disabled:opacity-60"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Security QR Entry System">Security QR Entry System (Flagship Product)</option>
                        <option value="AI/ML Solutions">AI/ML Solutions</option>
                        <option value="ERP Solutions">ERP Solutions</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="text-xs text-slate-700 font-semibold block mb-1.5">Project Budget (Optional)</label>
                      <input
                        id="contact-budget"
                        name="budget"
                        type="text"
                        disabled={isSubmitting}
                        placeholder="e.g. $2k - $10k"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs text-slate-700 font-semibold block mb-1.5">Project Details / Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      placeholder="Tell us about your project scope, product inquiry, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors disabled:opacity-60"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    showArrow={!isSubmitting}
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </span>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Right Column: Information & Map Visual */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 glass-panel space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Direct Contact</h3>

                <div className="space-y-4 text-sm">
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700 transition-all">
                    <Mail className="w-5 h-5 text-purple-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Email Support</span>
                      <span className="font-semibold text-xs text-slate-900">{COMPANY_INFO.email}</span>
                    </div>
                  </a>

                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700 transition-all">
                    <Phone className="w-5 h-5 text-purple-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Phone Line</span>
                      <span className="font-semibold text-xs text-slate-900">{COMPANY_INFO.phone}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                    <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Headquarters</span>
                      <span className="font-semibold text-xs text-slate-900">{COMPANY_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-600 font-semibold block mb-3">Connect On Social Media:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={COMPANY_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-purple-400 hover:text-purple-600 transition-colors text-slate-700"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-purple-400 hover:text-purple-600 transition-colors text-slate-700"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={COMPANY_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-purple-400 hover:text-purple-600 transition-colors text-slate-700"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
