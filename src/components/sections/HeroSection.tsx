"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Server, Cpu, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden purple-glow-bg bg-white">
      {/* Background Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              <span>Technology & Digital Solutions Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Building Digital Solutions That{" "}
              <span className="text-gradient-purple">Move Businesses Forward.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Titanslab builds modern websites, software, automation, cloud solutions and digital experiences that help businesses operate smarter and grow faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button href="/contact" size="lg" showArrow className="w-full sm:w-auto">
                Let&apos;s Talk
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600 text-left font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>20+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>Global Client Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span>End-to-End SLA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Abstract Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-br from-purple-200 via-slate-100 to-purple-100 shadow-xl shadow-slate-900/5">
              <div className="rounded-[22px] bg-white p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-200">
                {/* Floating Glass Graphic Nodes */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200 font-bold">
                    titanslab.in/core
                  </span>
                </div>

                {/* Simulated Tech Stack Card */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-bold text-slate-900">Custom Web Architecture</div>
                        <div className="text-[10px] text-slate-600 font-sans font-medium">Next.js • React • TypeScript</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">ACTIVE</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-bold text-slate-900">Business Process Automation</div>
                        <div className="text-[10px] text-slate-600 font-sans font-medium">ERP • Workflow • API Pipelines</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-purple-700 font-bold bg-purple-100 px-2 py-0.5 rounded">RUNNING</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="font-bold text-slate-900">Cloud Infrastructure & Security</div>
                        <div className="text-[10px] text-slate-600 font-sans font-medium">High Availability • SSL • Hosting</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-purple-700 font-bold bg-purple-100 px-2 py-0.5 rounded">OPTIMIZED</span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>Production Grade Security</span>
                  </div>
                  <span className="text-purple-700 font-bold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
