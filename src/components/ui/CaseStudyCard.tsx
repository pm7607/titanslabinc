import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div
      id={study.slug}
      className="group rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-900/10 glass-panel"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-700 font-bold border border-purple-200">
            {study.industry}
          </span>
          <span className="text-slate-600 font-medium">• {study.client}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {study.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-4">
        <Link href={`/case-studies/${study.slug}`}>
          {study.title}
        </Link>
      </h3>

      {/* Hero Showcase Image */}
      {study.heroImage && (
        <Link
          href={`/case-studies/${study.slug}`}
          className="block relative w-full h-52 sm:h-72 rounded-xl overflow-hidden border border-slate-200 mb-6 shadow-xs bg-slate-950 group/img"
        >
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            className="object-cover group-hover/img:scale-[1.02] transition-transform duration-500 opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </Link>
      )}

      {/* Challenge vs Solution Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-rose-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>The Challenge</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-normal">
            {study.challenge}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-purple-700">
            <Lightbulb className="w-4 h-4 shrink-0 text-purple-700" />
            <span>The Solution</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-normal">
            {study.solution}
          </p>
        </div>
      </div>

      {/* Results Badges */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {study.results.map((res, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
              <div>
                <span className="text-sm font-black text-slate-900 block leading-none">{res.value}</span>
                <span className="text-[10px] text-slate-600 font-medium block">{res.label}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          aria-label={`Read full case study: ${study.title}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800 transition-colors py-1"
        >
          <span>Read Full Case Study</span>
          <span className="sr-only">: {study.title}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
