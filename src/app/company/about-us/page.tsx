"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import TrustStats from "@/components/sections/TrustStats";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ABOUT_FAQS } from "@/data/company";
import { Target, Cpu, ShieldCheck, ChevronDown, CheckCircle2, Building2, Code2, Server } from "lucide-react";

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            About Titanslab Inc.
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Technology Built Around Your Commercial <span className="text-gradient-purple">Goals.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Titanslab Inc. is a technology and digital solutions company based in Rajkot, Gujarat, India. We build high-performance web applications, e-commerce stores, business process automation, cloud hosting, and custom software.
          </p>
        </AnimatedSection>
      </section>

      {/* Trust Stats Bar */}
      <TrustStats />

      {/* Company Visual Showcase & Uploaded Billboard Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Our Engineering Environment
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Modern Software Engineering & Agile Delivery
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our engineering lab brings together full-stack developers, UI/UX designers, and DevOps engineers. We replace outdated IT agency templates with clean architecture, modern frameworks, and transparent sprint cycles.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Rajkot HQ Engineering Center</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Code2 className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Next.js & TypeScript Stack</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Elastic AWS/GCP Cloud Infrastructure</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>24/7 SLA Server Monitoring</span>
                </div>
              </div>
            </div>

            {/* Uploaded Billboard Showcase Image Container */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-white border border-slate-200 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/assets/billborad-scaled.jpg"
                    alt="Titanslab Digital Billboard & Engineering Hub"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                    <span className="text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded bg-purple-600/90 text-white backdrop-blur-md">
                      TITANSLAB BRAND HUB
                    </span>
                    <h3 className="text-xl font-bold text-white pt-1">
                      Engineered for Global Scale & Excellence
                    </h3>
                    <p className="text-xs text-slate-200 font-normal">
                      Rajkot, Gujarat, India • Multi-Country Client Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Our Principles"
            title="What Drives Titanslab"
            subtitle="Our engineering practices are guided by clarity, speed, transparency, and architectural scalability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Business-First Strategy</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We analyze the underlying business challenge, target users, and commercial goal before writing a single line of code.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Modern Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We utilize modern frameworks like Next.js, React, TypeScript, and cloud-native infrastructure for maximum speed and security.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Long-term SLA Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our relationship extends beyond initial launch with dedicated server maintenance, security updates, and ongoing enhancements.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Interactive FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Clear answers about our engineering capabilities, project timelines, global reach, and SLA agreements."
          />

          <div className="space-y-4">
            {ABOUT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50/50 transition-colors focus:outline-none"
                  >
                    <span className="text-base font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-purple-100 text-purple-600 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 bg-purple-600 text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
