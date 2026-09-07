"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

const CATEGORIES = ["All", "Websites", "E-commerce", "Web Applications", "UI/UX", "Automation", "AI/ML", "Cloud"];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Client Work & Showcase
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Our Work & Delivered <span className="text-gradient-purple">Client Projects.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our work portfolio featuring live web applications, e-commerce storefronts, business platforms, and custom software delivered for clients globally.
          </p>
        </AnimatedSection>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Client Projects Grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
