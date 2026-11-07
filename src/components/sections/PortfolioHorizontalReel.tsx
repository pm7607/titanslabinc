"use client";

import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import Card3DTilt from "@/components/ui/Card3DTilt";

export default function PortfolioHorizontalReel() {
  const featured = PORTFOLIO_ITEMS.filter((p) => p.featured);

  return (
    <div className="py-8 bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden my-8 shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
            Featured Highlights • Horizontal Reel
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Scroll horizontally to view top client deployments &rarr;
        </span>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="overflow-x-auto pb-4 pt-1 scrollbar-none flex gap-5 snap-x snap-mandatory relative z-10">
        {featured.map((item) => (
          <Card3DTilt key={item.id} maxTilt={6} perspective={900} className="shrink-0 snap-center">
            <div className="w-[300px] sm:w-[380px] h-[320px] rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 overflow-hidden flex flex-col justify-between group shadow-xl">
              {/* Image Preview */}
              <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 300px, 380px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/30">
                  {item.category}
                </span>
                {item.metrics && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-purple-600/90 text-[10px] font-bold text-white shadow-xs">
                    {item.metrics}
                  </span>
                )}
              </div>

              {/* Info & External Link */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-purple-400" />
                    Production
                  </span>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-bold"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card3DTilt>
        ))}
      </div>
    </div>
  );
}
