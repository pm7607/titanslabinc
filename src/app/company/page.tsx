import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY_NAV_ITEMS } from "@/components/layout/MegaMenuCompany";
import { COMPANY_INFO, MILESTONES } from "@/data/company";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Company | Titanslab Inc.",
  description: "Learn about Titanslab Inc., our capabilities, values, technology expertise, team, and approach to delivering digital solutions."
};

export default function CompanyPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Company Overview
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            We Build Technology That Moves <span className="text-gradient-purple">Businesses Forward.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Titanslab Inc. is a digital solutions and technology engineering company based in Rajkot, Gujarat, India. We specialize in custom software, e-commerce, cloud infrastructure, AI/ML integrations, and business automation.
          </p>
        </AnimatedSection>
      </section>

      {/* Grid of Company Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 transition-all duration-300 glass-panel flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-purple-900/10"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-purple-600 group-hover:text-purple-700">
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Company Story Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12">
        <AnimatedSection>
          <SectionHeading
            badge="Growth & Milestones"
            title="Our Journey So Far"
            subtitle="From early development projects to delivering custom web applications, cloud hosting, and automation solutions across countries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((ms, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <span className="text-xs font-mono text-purple-700 font-bold bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                  {ms.year}
                </span>
                <h4 className="text-base font-bold text-slate-900 pt-1">{ms.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{ms.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
