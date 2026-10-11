import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Cookie Policy | Titanslab Inc.",
  description: "Cookie Policy for Titanslab Inc. detailing how cookies and web tracking technologies are used on our website."
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 bg-white space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            Legal & Privacy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Last Updated: January 2026 • Titanslab Inc.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6 font-normal pt-6 border-t border-slate-200">
            <p>
              This Cookie Policy explains how Titanslab Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at <strong>titanslab.in</strong>. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and provide reporting information.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm">Essential Cookies</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as secure form submissions and session states.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm">Analytics & Performance Cookies</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Managing Cookie Preferences</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality may be restricted.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at <strong>titanslabinc@gmail.com</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <CTASection />
    </div>
  );
}
