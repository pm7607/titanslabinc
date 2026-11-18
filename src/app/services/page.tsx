import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Card3DTilt from "@/components/ui/Card3DTilt";
import HorizontalServiceProcess from "@/components/sections/HorizontalServiceProcess";
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
          Services
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Software Built for <span className="text-gradient-purple">Growth.</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Web engineering, cloud infrastructure, AI, and automation under one roof.
        </p>
      </section>

      {/* 4 Main Service Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Pillars"
          title="What We Build"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAIN_SERVICES_MEGA.map((cat) => (
            <Card3DTilt key={cat.id} maxTilt={8} perspective={1000}>
              <ServiceCard
                title={cat.title}
                description={cat.shortDesc}
                iconName={cat.iconName}
                href={`/services/${cat.slug}`}
                items={cat.items.slice(0, 3).map(i => i.title)}
              />
            </Card3DTilt>
          ))}
        </div>
      </section>

      {/* Horizontal Engineering Delivery Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalServiceProcess />
      </section>

      {/* Specialized Solutions Compact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="Specialized"
          title="AI, Trading & Growth Systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIALIZED_SERVICES.map((spec) => (
            <div
              key={spec.slug}
              id={spec.slug}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 scroll-mt-28 shadow-sm hover:border-purple-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900">{spec.title}</h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {spec.description}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {spec.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span className="truncate">{hl}</span>
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
