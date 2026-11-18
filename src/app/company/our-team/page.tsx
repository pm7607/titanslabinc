"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/CTASection";
import Card3DTilt from "@/components/ui/Card3DTilt";
import GlobalNetwork3D from "@/components/3d/GlobalNetwork3D";
import { MessageCircle, Mail, Sparkles, Terminal, Code2, ShieldCheck, Zap } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

interface TitanDossier {
  id: string;
  code: string;
  name: string;
  persona: string;
  title: string;
  image: string;
  email: string;
  whatsapp: string;
  instagram: string;
  quote: string;
  bio: string;
  skills: string[];
}

const TITANS: TitanDossier[] = [
  {
    id: "anjan",
    code: "01",
    name: "Anjan Patel",
    persona: "Tech Titan",
    title: "Founder & Technology Architect",
    image: "/our-team/anjan.webp",
    email: "al@titanslab.in",
    whatsapp: "https://wa.me/+916352078531",
    instagram: "https://www.instagram.com/anjan_patel__?igsh=aDU1OWNtdGp0YW85",
    quote: "Every architectural choice should drive speed, security, and measurable ROI.",
    bio: "Leads full-stack architecture, blending crisp design with scalable web and cloud systems.",
    skills: ["System Architecture", "Next.js & React 19", "Full-Stack", "Databases"],
  },
  {
    id: "dhyey",
    code: "02",
    name: "Dhyey Kathiriya",
    persona: "Chief Titan",
    title: "Founder & Project Manager",
    image: "/our-team/dhyey.webp",
    email: "dk@titanslab.in",
    whatsapp: "https://wa.me/+919157264448",
    instagram: "https://www.instagram.com/dk_btx",
    quote: "Clear milestones turn complex ideas into reliable shipped software.",
    bio: "Drives agile delivery, client communication, and on-time project execution.",
    skills: ["Agile Delivery", "Scrum", "Client SLAs", "Operations"],
  },
  {
    id: "pratik",
    code: "03",
    name: "Pratik Mehta",
    persona: "Dev Titan",
    title: "Co-Founder & Technical Designer",
    image: "/our-team/pratik.webp",
    email: "pm@titanslab.in",
    whatsapp: "https://wa.me/+919712117087",
    instagram: "https://www.instagram.com/prem_7607",
    quote: "Great design is how effortlessly the product works.",
    bio: "Crafts fast, responsive interfaces, design systems, and interactive frontend experiences.",
    skills: ["UI/UX Systems", "TypeScript & React", "Performance", "Responsive Web"],
  },
  {
    id: "udit",
    code: "04",
    name: "Udit Parekh",
    persona: "Dev Titan",
    title: "DevOps & Cloud Engineer",
    image: "/our-team/udit.webp",
    email: "udit@titanslab.in",
    whatsapp: "https://wa.me/+917046440827",
    instagram: "https://www.instagram.com/udit__1211",
    quote: "Automate everything that can fail, monitor everything that runs.",
    bio: "Owns CI/CD pipelines, server hardening, and 99.9% uptime cloud infrastructure.",
    skills: ["CI/CD Pipelines", "Docker & Linux", "Cloud Infra", "Security"],
  },
];

const ENGINEERING_LAWS = [
  {
    num: "01",
    title: "Zero Templates",
    desc: "Custom-engineered from scratch for your exact workflow.",
    icon: Code2,
  },
  {
    num: "02",
    title: "Speed First",
    desc: "Edge caching, lean bundles, and smooth 60 FPS interactions.",
    icon: Zap,
  },
  {
    num: "03",
    title: "Security Built-In",
    desc: "End-to-end encryption, Turnstile protection, and hardened APIs.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Direct Access",
    desc: "Work directly with the founders and engineers building your product.",
    icon: Terminal,
  },
];

export default function OurTeamPage() {
  const [selectedTitan, setSelectedTitan] = useState<TitanDossier>(TITANS[0]);

  return (
    <div className="py-12 space-y-16 bg-white selection:bg-purple-600 selection:text-white">
      {/* 1. Crisp Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
          <span>Leadership</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          The Engineers Behind <span className="text-gradient-purple">Titanslab.</span>
        </h1>

        <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
          Four founders and senior builders shipping custom web, automation, and cloud systems.
        </p>
      </section>

      {/* 2. Interactive Spotlight Command Deck */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

          {/* Interactive Member Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pb-8 border-b border-slate-800 relative z-10">
            {TITANS.map((titan) => {
              const isSelected = selectedTitan.id === titan.id;
              return (
                <button
                  key={titan.id}
                  onClick={() => setSelectedTitan(titan)}
                  className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex items-center gap-3 ${
                    isSelected
                      ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-900/30"
                      : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-white/15">
                    <Image
                      src={titan.image}
                      alt={titan.name}
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold truncate ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {titan.name}
                    </div>
                    <div className="text-[10px] font-mono text-purple-400 truncate">
                      {titan.persona}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Titan Detailed Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 relative z-10">
            {/* Left: Titan 3D Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3DTilt maxTilt={10} perspective={1000} className="w-full max-w-sm">
                <div className="relative rounded-3xl bg-slate-900 border border-purple-500/40 p-3 shadow-2xl overflow-hidden group">
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950">
                    <Image
                      src={selectedTitan.image}
                      alt={selectedTitan.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-purple-300 border border-purple-500/30">
                        TITAN // {selectedTitan.code}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                        {selectedTitan.persona}
                      </span>
                      <h2 className="text-2xl font-black text-white">{selectedTitan.name}</h2>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </div>

            {/* Right: Crisp Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTitan.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedTitan.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {selectedTitan.bio}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm italic">
                    &ldquo;{selectedTitan.quote}&rdquo;
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedTitan.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedTitan.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${selectedTitan.email}`}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 transition-all"
                    >
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{selectedTitan.email}</span>
                    </a>

                    <a
                      href={selectedTitan.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      aria-label={`${selectedTitan.name} Instagram`}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-purple-900/50 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white transition-all"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ENGINEERING_LAWS.map((law, idx) => {
            const Icon = law.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black font-mono text-purple-700">{law.num}</span>
                  <Icon className="w-5 h-5 text-slate-500 group-hover:text-purple-700 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{law.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{law.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. 3D Interactive Global Delivery Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Global Delivery
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Built in Rajkot. <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Shipped Worldwide.
                </span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                Delivering production platforms for businesses across India, Canada, the US, and Southeast Asia.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-purple-300">📍 Rajkot HQ</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇨🇦 Canada</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇻🇳 Vietnam</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇺🇸 USA</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <GlobalNetwork3D />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
