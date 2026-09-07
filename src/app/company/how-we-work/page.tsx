import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "How We Work | Titanslab Inc.",
  description: "Explore our 7-step engineering delivery process: Discovery, Solution Architecture, UI/UX Prototyping, Agile Sprints, QA Audits, Deployment & SLA Support."
};

export default function HowWeWorkPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Engineering Lifecycle
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            7-Step Delivery Process for <span className="text-gradient-purple">Predictable Outcomes.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We follow a structured engineering workflow that guarantees code quality, milestone visibility, performance benchmarking, and seamless production deployments.
          </p>
        </AnimatedSection>
      </section>

      <ProcessSection />

      <CTASection />
    </div>
  );
}
