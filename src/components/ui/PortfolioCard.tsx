import Image from "next/image";
import { ExternalLink, Globe, Lock } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  project: PortfolioItem;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const cleanDomain = project.url
    ? project.url.replace("https://", "").replace("http://", "").replace(/\/$/, "")
    : `${project.client.toLowerCase().replace(/\s+/g, "")}.com`;

  return (
    <div
      data-cursor="view"
      className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between shadow-xs"
    >
      {/* Option A: Clean Minimalist Browser Frame Mockup */}
      <div className="relative w-full bg-slate-900 border-b border-slate-200 overflow-hidden flex flex-col">
        {/* Minimalist Browser Top Window Bar */}
        <div className="h-8 px-3.5 bg-slate-100 border-b border-slate-200/90 flex items-center justify-between select-none shrink-0 z-20">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90 group-hover:bg-rose-500 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 group-hover:bg-amber-500 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 group-hover:bg-emerald-500 transition-colors" />
          </div>

          {/* Centered URL Address Pill Bar */}
          <div className="flex-1 mx-2 flex items-center justify-center">
            <div className="w-full max-w-[220px] px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600 flex items-center gap-1.5 truncate shadow-xs">
              <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
              <span className="truncate">{cleanDomain}</span>
            </div>
          </div>

          {/* Quick External Link Preview */}
          <div className="w-8 flex justify-end shrink-0">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${cleanDomain}`}
                aria-label={`Visit live website ${cleanDomain}`}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-700 transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Browser Viewport Area (h-48) */}
        <div className="relative h-48 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} live website showcase`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            /* Sleek simulated browser viewport fallback when screenshot is not uploaded */
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-950/60 to-slate-900 p-5 flex flex-col justify-between relative group-hover:scale-102 transition-transform duration-300">
              {/* Simulated mini website navigation header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] shadow-xs">
                    {project.title.substring(0, 1)}
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight truncate max-w-[120px]">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
                  <span className="text-purple-300 font-bold">Live Site</span>
                </div>
              </div>

              {/* Simulated hero headline and live indicator */}
              <div className="space-y-1 my-auto text-center">
                <span className="inline-block px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-mono font-bold uppercase tracking-wider border border-purple-500/30">
                  {project.category}
                </span>
                <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1">
                  {project.title}
                </h4>
                <p className="text-[10px] text-slate-400 line-clamp-1 font-mono max-w-[200px] mx-auto">
                  {cleanDomain}
                </p>
              </div>

              {/* Simulated bottom action CTA bar */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px]">
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </span>
                <span className="text-purple-300 font-semibold group-hover:underline">
                  Visit Site →
                </span>
              </div>
            </div>
          )}

          {/* Category Pill Overlay */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold bg-slate-900/80 text-white backdrop-blur-xs border border-white/20 shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Metric Pill if present */}
          {project.metrics && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold bg-purple-600/90 text-white backdrop-blur-xs shadow-xs">
                {project.metrics}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-1.5 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-normal">
            {project.shortDesc}
          </p>
        </div>

        <div>
          {/* External Live Website Link */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live website ${project.title}`}
              className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700 hover:text-purple-800 transition-colors group/link py-1"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-700" />
                <span>{project.url.replace("https://", "")}</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
