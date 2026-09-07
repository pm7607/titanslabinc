import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MILESTONES } from "@/data/company";

export const metadata = {
  title: "Our Story | Titanslab Inc.",
  description: "Discover the journey, milestones, and evolution of Titanslab Inc. from inception to 20+ completed projects across countries."
};

export default function OurStoryPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Our Story
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            The Growth & Evolution of <span className="text-gradient-purple">Titanslab Inc.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            From custom website development to engineering full-scale ERPs, algorithmic trading execution systems, and cloud infrastructure.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative border-l-2 border-purple-200 pl-6 sm:pl-8 space-y-12">
            {MILESTONES.map((ms, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white group-hover:scale-125 transition-transform shadow-xs" />

                <div className="p-6 rounded-2xl bg-white border border-slate-200 glass-panel space-y-2 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
                    {ms.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 pt-1">{ms.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {ms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
