"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/CTASection";
import Card3DTilt from "@/components/ui/Card3DTilt";
import GlobalNetwork3D from "@/components/3d/GlobalNetwork3D";
import { MessageCircle, Mail, Sparkles, Terminal, Code2, ShieldCheck, Zap, ArrowRight, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

interface TitanDossier {
  id: string;
  code: string;
  name: string;
  persona: string;
  title: string;
  badge: string;
  image: string;
  email: string;
  whatsapp: string;
  instagram: string;
  quote: string;
  bio: string;
  skills: string[];
  color: string;
}

const TITANS: TitanDossier[] = [
  {
    id: "anjan",
    code: "TITAN // 01",
    name: "Anjan Patel",
    persona: "Tech Titan",
    title: "Founder & Technology Architect",
    badge: "Co-Founder",
    image: "/our-team/anjan.webp",
    email: "al@titanslab.in",
    whatsapp: "https://wa.me/+916352078531",
    instagram: "https://www.instagram.com/anjan_patel__?igsh=aDU1OWNtdGp0YW85",
    quote: "Every architectural decision must drive speed, security, and measurable ROI.",
    bio: "Multifaceted engineering lead combining high-end design sensibilities with modern full-stack web and cloud architectures.",
    skills: ["System Architecture", "Next.js & React 19", "Full-Stack Strategy", "PostgreSQL / DB"],
    color: "from-purple-600 via-indigo-600 to-purple-800",
  },
  {
    id: "dhyey",
    code: "TITAN // 02",
    name: "Dhyey Kathiriya",
    persona: "Chief Titan",
    title: "Founder & Chief Project Manager",
    badge: "Co-Founder",
    image: "/our-team/dhyey.webp",
    email: "dk@titanslab.in",
    whatsapp: "https://wa.me/+919157264448",
    instagram: "https://www.instagram.com/dk_btx",
    quote: "Precision project management turns ambiguous visions into reliable shipped software.",
    bio: "Senior project leader ensuring agile milestone delivery, transparent stakeholder workflows, and enterprise delivery standards.",
    skills: ["Agile Execution", "Scrum Leadership", "Client SLAs", "Resource Scaling"],
    color: "from-indigo-600 via-purple-600 to-cyan-600",
  },
  {
    id: "pratik",
    code: "TITAN // 03",
    name: "Pratik Mehta",
    persona: "Dev Titan",
    title: "Co-Founder & Technical Designer",
    badge: "Co-Founder",
    image: "/our-team/pratik.webp",
    email: "pm@titanslab.in",
    whatsapp: "https://wa.me/+919712117087",
    instagram: "https://www.instagram.com/prem_7607",
    quote: "Design is not just visual flair; it is the mathematical interaction between human and code.",
    bio: "Specialist in high-performance frontend interfaces, responsive design frameworks, and interactive web component systems.",
    skills: ["Technical UI/UX", "TypeScript & React", "Design Systems", "Web Performance"],
    color: "from-cyan-600 via-purple-600 to-indigo-600",
  },
  {
    id: "udit",
    code: "TITAN // 04",
    name: "Udit Parekh",
    persona: "Dev Titan",
    title: "DevOps & Cloud Infrastructure Lead",
    badge: "DevOps",
    image: "/our-team/udit.webp",
    email: "udit@titanslab.in",
    whatsapp: "https://wa.me/+917046440827",
    instagram: "https://www.instagram.com/udit__1211",
    quote: "Automate failure recovery, eliminate downtime, and ship with continuous confidence.",
    bio: "DevOps engineer specializing in CI/CD pipeline automation, server hardening, 24/7 monitoring, and high-availability cloud setups.",
    skills: ["CI/CD Automation", "Docker / Linux", "Cloud Infrastructure", "Security Hardening"],
    color: "from-emerald-600 via-teal-600 to-indigo-600",
  },
];

const ENGINEERING_LAWS = [
  {
    num: "01",
    title: "Zero Template Dogma",
    desc: "Every system is custom-crafted from first principles to match your exact commercial operations — zero bloated generic templates.",
    icon: Code2,
  },
  {
    num: "02",
    title: "Sub-100ms Speed Standard",
    desc: "We engineer code for extreme speed with edge CDN caching, image optimization, and GPU-accelerated 60 FPS transitions.",
    icon: Zap,
  },
  {
    num: "03",
    title: "Hardened Security Standards",
    desc: "From SSL encryption to HMAC-SHA256 tokens and sanitised API pipelines, security is built into our foundational layer.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Direct Founder Access",
    desc: "You collaborate directly with senior architects and technical founders — never middle-layer account managers.",
    icon: Terminal,
  },
];

export default function OurTeamPage() {
  const [selectedTitan, setSelectedTitan] = useState<TitanDossier>(TITANS[0]);

  return (
    <div className="py-12 space-y-20 bg-white selection:bg-purple-600 selection:text-white">

      {/* 1. Futuristic Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
          <span>The Titan Protocol • Engineering Leadership</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Architects of Modern <br />
          <span className="text-gradient-purple">Digital Intelligence.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Meet the four founders and senior engineers building mission-critical software, custom web systems, and cloud automation at Titanslab Inc.
        </p>

        {/* Live Telemetry Bar */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs shadow-xl">
          <div className="border-r border-slate-800/80 last:border-none">
            <span className="text-purple-400 font-bold block text-base">4 CORE</span>
            <span className="text-slate-400 text-[10px]">Technical Leads</span>
          </div>
          <div className="border-r border-slate-800/80 last:border-none">
            <span className="text-cyan-400 font-bold block text-base">20+</span>
            <span className="text-slate-400 text-[10px]">Architectures Shipped</span>
          </div>
          <div className="border-r border-slate-800/80 last:border-none">
            <span className="text-emerald-400 font-bold block text-base">99.9%</span>
            <span className="text-slate-400 text-[10px]">SLA Uptime</span>
          </div>
          <div>
            <span className="text-amber-400 font-bold block text-base">GLOBAL</span>
            <span className="text-slate-400 text-[10px]">Client Reach</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Spotlight Command Deck (Feature Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                COMMAND STAGE • SELECT A TITAN
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                Engineering Leadership Dossier
              </h2>
            </div>

            {/* Quick Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {TITANS.map((titan) => (
                <button
                  key={titan.id}
                  onClick={() => setSelectedTitan(titan)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${selectedTitan.id === titan.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                      : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                >
                  {titan.code}
                </button>
              ))}
            </div>
          </div>

          {/* Active Titan Detailed Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 relative z-10">
            {/* Left: Titan Holographic Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <Card3DTilt maxTilt={10} perspective={1000} className="w-full max-w-sm">
                <div className="relative rounded-3xl bg-slate-900 border border-purple-500/40 p-4 shadow-2xl overflow-hidden group">
                  {/* Portrait */}
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

                    {/* Watermark Code */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-purple-300 border border-purple-500/30">
                        {selectedTitan.code}
                      </span>
                    </div>

                    {/* Live Online Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ACTIVE HQ
                      </span>
                    </div>

                    {/* Bottom Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                        {selectedTitan.persona}
                      </span>
                      <h3 className="text-2xl font-black text-white">{selectedTitan.name}</h3>
                      <p className="text-xs text-slate-300">{selectedTitan.title}</p>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </div>

            {/* Right: Technical Dossier Details */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTitan.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider">
                      Executive & Technical Bio
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedTitan.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {selectedTitan.bio}
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium italic">
                    &ldquo;{selectedTitan.quote}&rdquo;
                  </div>

                  {/* Technical Specializations */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Core Specializations & Arsenal:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTitan.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold"
                        >
                          ✦ {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedTitan.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>WhatsApp Direct Channel</span>
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

      {/* 3. The 4 Titans Complete Grid (Futuristic Glass Cards with 3D Tilt) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold">
            THE COMPLETE ROSTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Meet Every Titan Behind Your Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TITANS.map((member) => (
            <Card3DTilt key={member.id} maxTilt={9} perspective={1000} className="h-full">
              <div
                onClick={() => setSelectedTitan(member)}
                className={`group rounded-3xl bg-white border p-5 shadow-lg transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:shadow-2xl hover:shadow-purple-900/10 ${selectedTitan.id === member.id
                    ? "border-purple-600 ring-2 ring-purple-600/20"
                    : "border-slate-200 hover:border-purple-300"
                  }`}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 shadow-inner">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Code badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-purple-300 border border-purple-500/30">
                      {member.code}
                    </span>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono font-bold text-purple-400 uppercase block">
                        {member.persona}
                      </span>
                      <h4 className="text-lg font-bold leading-tight">{member.name}</h4>
                    </div>
                  </div>

                  {/* Title & Bio */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-purple-700">{member.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200/80 text-[10px] font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Quick Contact */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                    <span>Chat</span>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
                  >
                    <span>Email</span>
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </section>

      {/* 4. Horizontal Titan Engineering Laws */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
                CORE PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                The 4 Laws of Titan Engineering
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-xs">
              How our team approaches every line of code, cloud deployment, and architectural sprint &rarr;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_LAWS.map((law, idx) => {
              const Icon = law.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                      <span className="text-2xl font-black font-mono text-purple-400">
                        {law.num}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{law.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{law.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 3D Interactive Global Delivery Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Global Presence
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Engineered in Rajkot, <br />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Delivered Worldwide.
                </span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Headquartered in Rajkot, Gujarat, Titanslab builds and maintains commercial digital platforms for enterprises and retail businesses across Canada, USA, Europe, and Asia.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-purple-300">📍 Rajkot (HQ)</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇨🇦 Canada</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇻🇳 Vietnam</span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">🇺🇸 United States</span>
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
