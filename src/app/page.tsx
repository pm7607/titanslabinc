import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import TrustStats from "@/components/sections/TrustStats";
import ProcessSection from "@/components/sections/ProcessSection";
import TechGrid from "@/components/sections/TechGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Card3DTilt from "@/components/ui/Card3DTilt";
import SecurityQR3DScanner from "@/components/3d/SecurityQR3DScanner";
import HorizontalProjectsShowcase from "@/components/sections/HorizontalProjectsShowcase";

import { MAIN_SERVICES_MEGA, SPECIALIZED_SERVICES } from "@/data/services";
import { WHY_US_REASONS } from "@/data/company";

import { Target, Cpu, Layers, ShieldCheck, MessageSquareText, Award, ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

const whyUsIconMap: Record<string, LucideIcon> = {
  Target,
  Cpu,
  Layers,
  ShieldCheck,
  MessageSquareText,
  Award
};

export default function HomePage() {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Stats Bar */}
      <TrustStats />

      {/* 3. About Section on Homepage with Uploaded Brand Images */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                  About Titanslab Inc.
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Technology Built Around <span className="text-gradient-purple">Your Business.</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Titanslab combines full-stack web development, UI/UX design, business process automation, cloud infrastructure, and custom engineering to create practical digital solutions tailored to your operational goals.
                </p>

                <div className="space-y-3 pt-2 text-sm text-slate-700 font-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Custom engineering focused on measurable commercial outcomes rather than generic templates.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Multi-country experience delivering scalable web systems and specialized software.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>Dedicated ongoing maintenance, server monitoring, and transparent project milestones.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button href="/company/about-us" showArrow>
                    More About Titanslab
                  </Button>
                </div>
              </div>

              {/* Uploaded Company Brand Poster Image Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl bg-white border border-slate-200 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/Titans_poster-scaled.jpg"
                      alt="Titanslab Digital Engineering Showcase"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                      <span className="text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded bg-purple-700 text-white backdrop-blur-md">
                        TITANSLAB INC.
                      </span>
                      <p className="text-xl font-bold text-white pt-1">
                        Empowering Digital Growth & Innovation
                      </p>
                      <p className="text-xs text-slate-200 font-normal">
                        Full-Stack Development • Cloud Infrastructure • Automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Services Section on Homepage */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Core Service Pillars"
              title="Comprehensive Technology & Digital Solutions"
              subtitle="From e-commerce storefronts and custom web applications to cloud infrastructure and business process automation."
            />
          </AnimatedSection>

          {/* 4 Main Pillar Cards with 3D Gyroscopic Perspective */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {MAIN_SERVICES_MEGA.map((cat) => (
                <Card3DTilt key={cat.id} maxTilt={9} perspective={1100}>
                  <ServiceCard
                    title={cat.title}
                    description={cat.shortDesc}
                    iconName={cat.iconName}
                    href={`/services/${cat.slug}`}
                    items={cat.items.slice(0, 4).map(i => i.title)}
                  />
                </Card3DTilt>
              ))}
            </div>
          </AnimatedSection>

          {/* Specialized Solutions Bar */}
          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-700" />
                Specialized Industry & Technology Solutions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPECIALIZED_SERVICES.map((spec) => (
                  <div key={spec.slug} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 transition-colors flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">{spec.title}</h4>
                      <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">{spec.description}</p>
                    </div>
                    <Link
                      href={`/services#${spec.slug}`}
                      aria-label={`Learn more about ${spec.title}`}
                      className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <span className="sr-only">about {spec.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 3D Flagship Product Showcase */}
      <SecurityQR3DScanner />

      {/* 5. Why Titanslab */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              badge="Why Work With Us"
              title="Why Leading Businesses Choose Titanslab"
              subtitle="We bridge technical complexity and commercial objectives with transparent execution and modern engineering standards."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_US_REASONS.map((item, idx) => {
                const Icon = whyUsIconMap[item.iconName] || Target;
                return (
                  <Card3DTilt key={idx} maxTilt={7} perspective={1000}>
                    <div className="h-full p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-900/10 glass-panel flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 mb-6">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{item.description}</p>
                      </div>
                    </div>
                  </Card3DTilt>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Technology Section */}
      <TechGrid />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Pinned Horizontal Scroll Portfolio Showcase */}
      <HorizontalProjectsShowcase />

      {/* 10. CTA Section */}
      <CTASection />
    </div>
  );
}
