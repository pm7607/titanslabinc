"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            badge="Client Feedback"
            title="Trusted by Forward-Thinking Businesses"
            subtitle="Discover how our engineering solutions, custom web portals, and automation systems drive measurable outcomes for clients globally."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <AnimatedSection key={t.id} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                {/* Background Quote Graphic */}
                <Quote className="w-24 h-24 text-slate-100 absolute -right-4 -bottom-4 pointer-events-none group-hover:text-purple-50 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                      {t.projectType}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                    "{t.content}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-normal">{t.role} • <span className="text-purple-700 font-semibold">{t.company}</span></p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
