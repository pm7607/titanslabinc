"use client";

import { Compass, Palette, Code2, Rocket, Headphones, Sparkles, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "Deep dive into your business workflows, database requirements, cloud infrastructure, and technical specifications.",
    icon: Compass,
    accent: "from-purple-600 to-indigo-600",
    badge: "Phase 1: Planning",
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description: "Modern, accessible digital interfaces designed with responsive typography, dark/light modes, and interactive user journeys.",
    icon: Palette,
    accent: "from-indigo-600 to-cyan-600",
    badge: "Phase 2: Experience",
  },
  {
    step: "03",
    title: "Full-Stack Development",
    description: "Clean Next.js, React, Node.js, and TypeScript architectures optimized for speed, security, SEO, and maintainability.",
    icon: Code2,
    accent: "from-cyan-600 to-emerald-600",
    badge: "Phase 3: Build",
  },
  {
    step: "04",
    title: "Testing & Cloud Launch",
    description: "Zero-downtime CI/CD deployment, SSL certificate hardening, Google Analytics integration, and automated CDN caching.",
    icon: Rocket,
    accent: "from-emerald-600 to-amber-600",
    badge: "Phase 4: Launch",
  },
  {
    step: "05",
    title: "24/7 SLA & Maintenance",
    description: "Proactive server health monitoring, security patch management, bug fixes, and continuous technical scaling support.",
    icon: Headphones,
    accent: "from-amber-600 to-purple-600",
    badge: "Phase 5: Scale",
  },
];

export default function HorizontalServiceProcess() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden rounded-3xl border border-slate-800 my-12">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Horizontal Delivery Pipeline
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              How We Engineer & Deliver Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-xs">
            Swipe or scroll horizontally to inspect our 5-phase engineering methodology &rarr;
          </p>
        </div>

        {/* Horizontal Scroll Track Container */}
        <div className="overflow-x-auto pb-6 pt-2 scrollbar-none flex gap-6 snap-x snap-mandatory">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] md:w-[360px] p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-purple-500/60 shadow-xl flex flex-col justify-between shrink-0 snap-center group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                    <span className="text-2xl font-black font-mono text-purple-400">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-900/60 to-indigo-900/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 mt-6">
                  <span>Milestone Verified</span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
