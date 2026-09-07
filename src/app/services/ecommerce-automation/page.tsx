import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "E-Commerce & Automation Services | Titanslab Inc.",
  description: "High-converting online stores, Shopify custom apps, WooCommerce scaling, payment gateway integrations, and automated order fulfillment pipelines."
};

export default function EcommerceAutomationPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <ShoppingCart className="w-3.5 h-3.5 text-purple-600" />
            Service Pillar 01
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            E-Commerce Development & <span className="text-gradient-purple">Business Automation.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We build custom online storefronts, headless commerce platforms, payment middleware, and automated order fulfillment pipelines that reduce manual overhead.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Custom E-Commerce Storefronts</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Next.js headless commerce or Shopify/WooCommerce customized for high conversion rates, fast page load, mobile responsiveness, and seamless checkouts.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Custom product configurators & subscription billing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Multi-currency & multi-language localization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Instant search & AI product recommendation filters</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Business Process Automation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Automated invoice generation, WhatsApp/Email transaction alerts, automated CRM updates, inventory sync across channels, and custom webhooks.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Automated order dispatch & carrier API tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Payment gateway reconciliation (Stripe, Razorpay, PayPal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Automated tax reporting & ERP ledger sync</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
