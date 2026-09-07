"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { PRODUCTS_LIST } from "@/data/products";
import { Sparkles, Bell, CheckCircle2, QrCode, Cpu, Layers, Lock, ShieldCheck, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  QrCode,
  Cpu,
  Layers,
  Sparkles
};

export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const flagshipProduct = PRODUCTS_LIST.find(p => p.isFlagship) || PRODUCTS_LIST[0];
  const upcomingProducts = PRODUCTS_LIST.filter(p => !p.isFlagship);

  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Launch Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 purple-glow-bg">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
            <span>Titanslab Software Products</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Proprietary Products Built for <span className="text-gradient-purple">Business Control.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover Titanslab's in-house software products designed to simplify visitor verification, workflow automation, and enterprise resource planning.
          </p>
        </AnimatedSection>
      </section>

      {/* Flagship Product Showcase: Security QR Entry System */}
      {flagshipProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white border border-purple-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-sm">
                      ★ {flagshipProduct.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      STATUS: {flagshipProduct.status}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {flagshipProduct.title}
                  </h2>

                  <p className="text-sm sm:text-base text-purple-200 font-medium">
                    {flagshipProduct.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {flagshipProduct.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {flagshipProduct.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button href="/contact" size="md" className="bg-white text-purple-900 hover:bg-slate-100 border-none">
                      Request Demo / Inquiry
                    </Button>
                    <span className="text-xs text-slate-400 italic">
                      More product details & portal updates coming soon!
                    </span>
                  </div>
                </div>

                {/* Graphic Visual Representation of QR Entry */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center space-y-4">
                    <div className="w-20 h-20 rounded-2xl bg-white text-purple-900 mx-auto flex items-center justify-center shadow-xl">
                      <QrCode className="w-12 h-12" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">Instant QR Access Verification</div>
                      <div className="text-xs text-purple-200">Duplicate Prevention • Real-Time Logs</div>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-[11px] text-slate-300 text-left font-mono">
                      <div>▶ SCANNER: GATE_01_ACTIVE</div>
                      <div>▶ STATUS: ACCESS_GRANTED</div>
                      <div>▶ LATENCY: 120ms</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Upcoming Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimatedSection>
          <SectionHeading
            badge="Product Roadmap"
            title="In Active Engineering Pipeline"
            subtitle="Software suites currently being built and tested by Titanslab's engineering team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProducts.map((prod) => {
              const Icon = iconMap[prod.iconName] || Cpu;
              return (
                <div
                  key={prod.id}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold font-mono text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
                        {prod.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{prod.title}</h3>
                      <p className="text-xs text-purple-700 font-semibold mt-0.5">{prod.tagline}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {prod.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {prod.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Development Phase: {prod.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Early Access Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-white border border-purple-200 glass-panel shadow-xl text-center">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
              <Bell className="w-4 h-4 text-purple-600" />
              Get Launch & Product Updates
            </h3>
            <p className="text-xs text-slate-600 mb-4 font-normal">
              Subscribe to get notified as new features, QR access modules, and products go live.
            </p>

            {submitted ? (
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Thank you! We'll notify you at launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-colors"
                />
                <Button type="submit" size="sm">
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
