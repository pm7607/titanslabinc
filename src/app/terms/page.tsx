import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Terms & Conditions | Titanslab Inc.",
  description: "Terms and conditions governing the use of Titanslab Inc. website and engineering services."
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            Legal & Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 font-mono mt-2">
            Last Updated: January 2026 • Titanslab Inc.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6 font-normal pt-6 border-t border-slate-200">
            <p>
              Welcome to Titanslab Inc. These terms and conditions outline the rules and regulations for the use of Titanslab Inc.'s Website and Technology Services.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging Titanslab Inc. for web development, software engineering, domain hosting, or cloud automation services, you accept these terms and conditions in full.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated in a project master service agreement (MSA), Titanslab Inc. and/or its licensors own the intellectual property rights for all material on titanslab.in.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Project Milestones & Deliverables</h2>
            <p>
              All software development projects proceed according to agreed statement of work (SOW) documents, with clear milestones for architecture, prototyping, user testing, and deployment.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
