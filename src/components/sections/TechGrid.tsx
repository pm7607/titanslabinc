"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TECH_CATEGORIES } from "@/data/techStack";

export default function TechGrid() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Ecosystem"
          title="Modern Stack Built for Speed & Scale"
          subtitle="We select robust, battle-tested technologies and frameworks tailored to your application performance, security, and scalability requirements."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              aria-label={`View ${cat.category} technologies`}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
                activeCategory === idx
                  ? "bg-purple-700 border-purple-700 text-white shadow-md shadow-purple-900/20"
                  : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_CATEGORIES[activeCategory].items.map((tech, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-200 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
