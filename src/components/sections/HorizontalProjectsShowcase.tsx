"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function HorizontalProjectsShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const featuredProjects = PORTFOLIO_ITEMS.filter((p) => p.featured);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal percentage
  // 5 cards + intro spacer -> translates from 0% to approximately -68%
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-slate-950 text-white selection:bg-purple-600 selection:text-white"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-8 sm:py-12 overflow-hidden">
        
        {/* Subtle Ambient Background Neon Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Section Header with Live Horizontal Progress */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                Interactive Showcase • Horizontal Scroll
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                <span>Work Engineered For Impact</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                Scroll down to glide horizontally &rarr;
              </span>
              <Button href="/portfolio" variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                All Projects
              </Button>
            </div>
          </div>

          {/* Smooth Scroll Progress Bar */}
          <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400"
            />
          </div>
        </div>

        {/* Horizontally Moving Track of Massive Project Cards */}
        <div className="relative z-10 flex-1 flex items-center overflow-visible my-auto">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-4 sm:px-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="w-[85vw] sm:w-[540px] md:w-[640px] lg:w-[720px] h-[400px] sm:h-[460px] rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-purple-500/60 shadow-2xl overflow-hidden flex flex-col justify-between shrink-0 group transition-all duration-300 hover:shadow-purple-900/20"
              >
                {/* Top Image Preview */}
                <div className="relative h-[65%] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 720px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Floating Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-purple-300 border border-purple-500/30">
                      0{index + 1} / 0{featuredProjects.length} • {project.category}
                    </span>

                    {project.metrics && (
                      <span className="px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-md text-[11px] font-bold text-white shadow-sm">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-slate-900/90 backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {project.client}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      Production Deployment
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-900/30 hover:scale-105"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Final "See All Work" End Card */}
            <div className="w-[300px] sm:w-[380px] h-[400px] sm:h-[460px] rounded-3xl bg-gradient-to-br from-purple-900/80 via-slate-900 to-indigo-950 border border-purple-500/40 p-8 flex flex-col justify-between shrink-0 shadow-2xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-purple-300">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Have a Project in Mind?
                </h3>
                <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                  We build custom web platforms, e-commerce stores, ERPs, and automated workflows customized to your exact requirements.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/portfolio"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-slate-100 transition-all shadow-lg"
                >
                  <span>Browse Full Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600/40 hover:bg-purple-600/60 border border-purple-400/40 text-white text-sm font-bold transition-all"
                >
                  <span>Start Your Project</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Hint */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 shrink-0 text-center sm:text-left">
          <p className="text-[11px] font-mono text-slate-400">
            ✦ Smooth 60 FPS GPU-accelerated horizontal track • Titanslab Design System
          </p>
        </div>

      </div>
    </section>
  );
}

