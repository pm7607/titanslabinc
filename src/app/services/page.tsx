import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { MAIN_SERVICES_MEGA, SPECIALIZED_SERVICES } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | Titanslab Inc.",
  description: "Explore Titanslab Inc. services: E-Commerce & Automation, Industry Web Development, UI/UX & Domain Hosting, ERP & Cloud Services, AI/ML, Algo Trading, and Digital Marketing."
};

export default function ServicesHubPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          End-to-End Capabilities
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Technology & Software Services Built for <span className="text-gradient-purple">Growth.</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine modern web engineering, cloud infrastructure, AI integrations, and process automation to solve complex business challenges.
        </p>
      </section>

      {/* 4 Main Service Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Primary Service Categories"
          title="Explore Our Core Engineering Pillars"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAIN_SERVICES_MEGA.map((cat) => (
            <ServiceCard
              key={cat.id}
              title={cat.title}
              description={cat.shortDesc}
              iconName={cat.iconName}
              href={`/services/${cat.slug}`}
              items={cat.items.slice(0, 4).map(i => i.title)}
            />
          ))}
        </div>
      </section>

      {/* Specialized Solutions Detailed Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Specialized Expertise"
          title="Targeted Technological Solutions"
          subtitle="Modernized service offerings preserved from our core capabilities, tailored to specific commercial operational needs."
        />

        <div className="space-y-8">
          {SPECIALIZED_SERVICES.map((spec) => (
            <div
              key={spec.slug}
              id={spec.slug}
              className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-6 scroll-mt-28 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                    ★
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{spec.title}</h3>
                    <span className="text-xs text-purple-700 font-semibold">Specialized Solution</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl font-normal">
                {spec.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {spec.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
