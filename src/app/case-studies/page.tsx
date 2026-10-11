import CaseStudyCard from "@/components/ui/CaseStudyCard";
import CTASection from "@/components/sections/CTASection";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | Titanslab Inc.",
  description: "Explore real project case studies demonstrating how Titanslab Inc. solves technical bottlenecks, automates workflows, and delivers business outcomes."
};

export default function CaseStudiesPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          Proven Outcomes
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Technical Problem Solving & <span className="text-gradient-purple">Client Results.</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Detailed breakdowns of how our web applications, custom ERPs, and automation systems resolve real-world operational challenges for clients.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </section>

      <CTASection />
    </div>
  );
}
