import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Privacy Policy | Titanslab Inc.",
  description: "Privacy Policy for Titanslab Inc. describing how we collect, protect, and process user data."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Last Updated: January 2026 • Titanslab Inc.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6 font-normal pt-6 border-t border-slate-200">
            <p>
              At Titanslab Inc., accessible from titanslab.in, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Titanslab Inc. and how we use it.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
            <p>
              When you contact us through our website form, subscribe to project updates, or engage our engineering services, we may collect personal information including your name, business email address, phone number, company name, and project requirements.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information to respond to project inquiries, deliver technical services, maintain server SLA support, send administrative notifications, and improve our web application offerings.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Security & Protection</h2>
            <p>
              Titanslab Inc. implements industry-standard security measures including SSL encryption, secure server access controls, and restricted data handling procedures to safeguard your commercial information.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Contact Us</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>titanslabinc@gmail.com</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
