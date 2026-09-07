import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Sparkles, Code2, Users, Rocket, Heart, Laptop } from "lucide-react";

export const metadata = {
  title: "Life @ Titanslab | Titanslab Inc.",
  description: "Explore life, work environment, culture, engineering practices, and career ethos at Titanslab Inc."
};

export default function LifeAtTitanslabPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Culture & Careers
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Engineering Culture That Values <span className="text-gradient-purple">Excellence.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            At Titanslab, we foster an environment of continuous learning, architectural freedom, modern toolsets, and collaborative problem-solving.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Modern Tech Stack</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We build with Next.js, React, TypeScript, Node.js, Python AI libraries, and cloud infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Impactful Work</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every developer contributes directly to production-grade applications serving real business users globally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Work-Life Balance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We believe in structured execution, reasonable hours, and clear milestone scheduling over chaotic crunch.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
