import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "Industry Web Development | Titanslab Inc.",
  description: "Custom web development tailored for healthcare, real estate, education, logistics, finance, and manufacturing sectors."
};

export default function IndustryWebDevPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Code2 className="w-3.5 h-3.5 text-purple-600" />
            Service Pillar 02
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Industry-Specific <span className="text-gradient-purple">Web Development.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Custom corporate websites, SaaS web portals, client portals, and industry-tailored platforms built with Next.js, React, and TypeScript.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Healthcare & Telemedicine</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Patient booking portals, doctor scheduling, electronic record integration, HIPAA/GDPR compliant web architecture.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Real Estate & Property</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                MLS listing integration, virtual property tour viewers, lead capture automation, interactive map search filters.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-3 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">EdTech & Learning Portals</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Custom LMS platforms, student portals, course subscription billing, video streaming, interactive quiz engines.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
