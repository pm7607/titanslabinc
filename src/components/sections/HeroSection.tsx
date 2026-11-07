"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Hero3DCore from "@/components/3d/Hero3DCore";

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-700 animate-pulse" />
              <span>Technology & Digital Solutions Partner</span>
            </div>

            {/* Headline - critical LCP element rendered immediately */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Building Digital Solutions That{" "}
              <span className="text-gradient-purple">Move Businesses Forward.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Titanslab builds modern websites, software, automation, cloud solutions and digital experiences that help businesses operate smarter and grow faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="/contact" size="lg" showArrow className="w-full sm:w-auto">
                Let&apos;s Talk
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-700 text-left font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700" />
                <span>20+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700" />
                <span>Global Client Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700" />
                <span>End-to-End SLA</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive 3D Core Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <Hero3DCore />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
