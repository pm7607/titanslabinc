"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, ShieldCheck, CheckCircle2, Zap, Lock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SecurityQR3DScanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden selection:bg-purple-600 selection:text-white">
      {/* Background Cyber Grid & Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Information */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Flagship SaaS Product • 3D Holographic System
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Security QR Entry <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen Access Verification.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Transform campus, corporate office, and facility security with encrypted dynamic QR passes, real-time cloud logging, and instant automated guard verification.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-100ms Optical Scan</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <Lock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>End-to-End Cryptography</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Physical Hardware</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Live Admin Telemetry</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="/products/security-qr-entry"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-xl shadow-purple-900/30 border-none"
              >
                <span>Live Product Showcase</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Request Custom Deployment
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Holographic Scanner Mockup */}
          <div
            className="lg:col-span-6 flex items-center justify-center relative perspective-[1200px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D Angled Phone & Scanner Glass Plate */}
            <motion.div
              animate={{
                rotateY: isHovered ? -8 : -14,
                rotateX: isHovered ? 6 : 10,
                y: isHovered ? -8 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[36px] bg-gradient-to-b from-slate-900 via-slate-900/90 to-purple-950/80 p-5 border border-purple-500/40 shadow-2xl shadow-purple-950/80"
            >
              {/* Glowing Bezel Ambient Light */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-purple-600/10 via-cyan-400/10 to-transparent pointer-events-none" />

              {/* Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  GATE SCANNER #01
                </span>
                <span className="bg-purple-900/40 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-[10px]">
                  ONLINE
                </span>
              </div>

              {/* Central QR Hologram Chamber */}
              <div className="relative mt-4 h-[65%] rounded-2xl bg-slate-950 border border-slate-800/80 flex flex-col items-center justify-center overflow-hidden p-6">
                
                {/* Laser Scan Line Animation */}
                <motion.div
                  animate={{
                    top: ["5%", "90%", "5%"],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-2 right-2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] z-20"
                />

                {/* Laser Sweep Glow Area */}
                <motion.div
                  animate={{
                    top: ["0%", "85%", "0%"],
                    opacity: [0.2, 0.45, 0.2],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-cyan-400/20 via-purple-500/10 to-transparent pointer-events-none z-10"
                />

                {/* QR Code Symbol with Corner Framing Brackets */}
                <div className="relative p-6 rounded-2xl bg-slate-900 border border-purple-500/30 flex items-center justify-center">
                  {/* Framing brackets */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                  <QrCode className="w-24 h-24 text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" />
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Scanning Dynamic Cryptographic Token...
                </p>
              </div>

              {/* Bottom Holographic Verification Card */}
              <div className="mt-4 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">ACCESS GRANTED</div>
                    <div className="text-[10px] font-mono text-slate-400">Visitor: Enterprise Verified</div>
                  </div>
                </div>

                <div className="text-right font-mono text-[11px]">
                  <span className="text-emerald-400 font-bold">0.07s</span>
                  <div className="text-[9px] text-slate-500">Latency</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

