import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  project: PortfolioItem;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div
      data-cursor="view"
      className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between shadow-xs"
    >
      {/* Image / Graphic Placeholder */}
      <div className="relative h-48 w-full bg-gradient-to-br from-purple-100 via-slate-50 to-purple-50 overflow-hidden flex items-center justify-center p-6 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent_60%)]" />

        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Sleek Domain Card Placeholder when image is blank */
          <div className="text-center space-y-2.5 z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 border border-purple-500 mx-auto flex items-center justify-center text-white font-mono font-black text-lg shadow-md shadow-purple-600/30">
              {project.title.substring(0, 2).toUpperCase()}
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-mono font-bold text-slate-900 block truncate">
                {project.url ? project.url.replace("https://", "") : project.client}
              </span>
              <span className="text-[10px] text-purple-700 font-semibold uppercase tracking-wider block">
                Verified Client Project
              </span>
            </div>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 border border-slate-200 text-purple-700 shadow-xs">
            {project.category}
          </span>
        </div>

        {/* Metric Pill if present */}
        {project.metrics && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-purple-600 text-white shadow-xs">
              {project.metrics}
            </span>
          </div>
        )}
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
              className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors group/link"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-600" />
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
