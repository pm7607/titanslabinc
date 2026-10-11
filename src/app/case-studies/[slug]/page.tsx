import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/caseStudies";
import CTASection from "@/components/sections/CTASection";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Clock,
  Layers,
  Quote,
  Cpu
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found | Titanslab Inc." };

  return {
    title: `${study.title} | Titanslab Case Study`,
    description: study.challenge,
  };
}

export default async function SingleCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Find next case study for navigation
  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <article className="py-12 space-y-16 bg-white">
      {/* Top Navigation & Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Case Studies</span>
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 font-bold uppercase tracking-wider text-[11px]">
              {study.industry}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-700">{study.client}</span>
            {study.timeline && (
              <>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  {study.timeline} Delivery
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {study.servicesProvided.map((service, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image Showcase */}
        {study.heroImage && (
          <div className="relative w-full h-72 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {study.results.map((result, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-purple-300 hover:bg-purple-50/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-gradient-purple">
                {result.value}
              </div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-Depth Breakdown */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Challenge vs Solution Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-4">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm uppercase tracking-wider">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>The Problem & Bottlenecks</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed font-normal">
              {study.challenge}
            </p>
            {study.challengeDetails && (
              <ul className="space-y-2.5 pt-2">
                {study.challengeDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solution Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-extrabold text-sm uppercase tracking-wider">
              <Lightbulb className="w-5 h-5 shrink-0 text-purple-600" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed font-normal">
              {study.solution}
            </p>
            {study.solutionDetails && (
              <ul className="space-y-2.5 pt-2">
                {study.solutionDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Deliverables & Technologies Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Deliverables */}
          {study.deliverables && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm uppercase tracking-wider">
                <Layers className="w-5 h-5 text-purple-600 shrink-0" />
                <span>Key Platform Deliverables</span>
              </div>
              <ul className="space-y-3 pt-2">
                {study.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                    <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm uppercase tracking-wider">
              <Cpu className="w-5 h-5 text-purple-600 shrink-0" />
              <span>Technologies & Architecture</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Production stack components deployed to ensure high availability, fast execution, and maintainability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {study.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        {study.testimonial && (
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-950 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <span>Client Feedback</span>
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed italic text-white/95">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="pt-2 text-xs">
                <div className="font-extrabold text-white text-sm">{study.testimonial.author}</div>
                <div className="text-purple-300">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        )}

        {/* Next Case Study Navigation */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="text-xs font-bold text-slate-600 hover:text-purple-600 transition-colors"
          >
            ← View All Case Studies
          </Link>

          <Link
            href={`/case-studies/${nextStudy.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md group"
          >
            <span>Next Project: {nextStudy.client}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
