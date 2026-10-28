"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import {
  QrCode,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Zap,
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Smartphone,
  Server
} from "lucide-react";

export default function SecurityQrEntryPage() {
  // Interactive Simulation State
  const [visitorName, setVisitorName] = useState("Sarah Jenkins");
  const [ticketTier, setTicketTier] = useState<"VIP Access" | "General Delegate" | "Staff / Crew">("VIP Access");
  const [tokenId, setTokenId] = useState("TL-QR-8842");
  const [scanStatus, setScanStatus] = useState<"idle" | "granted" | "duplicate">("idle");
  const [scanLog, setScanLog] = useState<{ gate: string; time: string; latency: string } | null>(null);

  const handleGenerateNewPass = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    setTokenId(`TL-QR-${randomSuffix}`);
    setScanStatus("idle");
    setScanLog(null);
  };

  const handleSimulateValidScan = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    setScanStatus("granted");
    setScanLog({
      gate: "Gate 01 • Main Atrium Turnstile",
      time: timeStr,
      latency: "42ms"
    });
  };

  const handleSimulateDuplicateScan = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    setScanStatus("duplicate");
    setScanLog({
      gate: "Gate 03 • West Wing Turnstile",
      time: timeStr,
      latency: "38ms"
    });
  };

  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Top Breadcrumb & Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Products</span>
        </Link>

        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-xs">
              ★ Flagship Product
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              STATUS: LIVE PRODUCTION
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security QR Entry System & <span className="text-gradient-purple">Access Engine.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            High-speed, anti-fraud QR access control and visitor verification platform. Engineered for summits, enterprise towers, exhibition arenas, and corporate facilities.
          </p>
        </div>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 mt-6">
          <Image
            src="/images/product-qr-entry.webp"
            alt="Security QR Entry System Hardware Turnstile Integration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-purple-300 font-bold font-mono">Hardware & Cloud Integrated</span>
              <h3 className="text-lg sm:text-xl font-bold">Sub-Second Scan Response with Anti-Passback Protection</h3>
            </div>
            <Link
              href="/contact?service=Security+QR+Entry+System"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all hover:-translate-y-0.5"
            >
              Request Custom Deployment
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Live QR Simulation Sandbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              Interactive Product Demo
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Experience the Access Verification Engine Live
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Generate a digital visitor token and test how our cloud gate engine evaluates valid scans versus fraudulent duplicate entries in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Pass Generator Controls */}
            <div className="lg:col-span-6 space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono font-bold uppercase text-purple-300 tracking-wider">
                  Pass Configuration
                </span>
                <button
                  onClick={handleGenerateNewPass}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Regenerate Token</span>
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label htmlFor="visitor-name-input" className="text-slate-300 font-semibold block">Visitor Name</label>
                  <input
                    id="visitor-name-input"
                    type="text"
                    aria-label="Visitor Name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold block">Access Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["VIP Access", "General Delegate", "Staff / Crew"] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setTicketTier(tier)}
                        className={`px-3 py-2 rounded-xl text-[11px] font-bold border transition-all ${
                          ticketTier === tier
                            ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-600/30"
                            : "bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white hover:border-slate-600"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-purple-500/20 font-mono text-[11px] space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>TOKEN ID:</span>
                    <span className="text-purple-300 font-bold">{tokenId}</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>ENCRYPTION:</span>
                    <span className="text-emerald-400 font-bold">HMAC-SHA256 • ACTIVE</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>ANTI-PASSBACK:</span>
                    <span className="text-amber-400 font-bold">ENFORCED</span>
                  </div>
                </div>
              </div>

              {/* Simulation Action Triggers */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-bold text-slate-300 block">Test Turnstile Reader Scans:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleSimulateValidScan}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98]"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Simulate Valid Entry</span>
                  </button>

                  <button
                    onClick={handleSimulateDuplicateScan}
                    className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20 transition-all active:scale-[0.98]"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>Simulate Fraud Duplicate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Pass & Gate Terminal Feedback */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
              {/* Virtual Digital Pass Card */}
              <div className="w-full max-w-sm rounded-2xl bg-white text-slate-900 p-6 shadow-2xl border border-slate-200 relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-700 tracking-widest block font-mono">
                      TITANSLAB VERIFIED PASS
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">{visitorName || "Delegate"}</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
                    {ticketTier}
                  </span>
                </div>

                {/* Simulated QR Code Canvas Visual */}
                <div className="relative aspect-square w-48 mx-auto bg-slate-900 p-3 rounded-2xl flex items-center justify-center border-4 border-slate-800 shadow-inner group">
                  <div className="w-full h-full bg-white rounded-xl p-2.5 flex items-center justify-center relative overflow-hidden">
                    <QrCode className="w-full h-full text-slate-950" />
                    {/* Simulated Sweeping Laser Scan Line */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee] animate-pulse" />
                  </div>
                </div>

                <div className="text-center font-mono text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  REF: {tokenId} • SCANNER READY
                </div>
              </div>

              {/* Dynamic Scanner Outcome Display */}
              <div className="w-full max-w-sm">
                {scanStatus === "idle" && (
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center text-xs text-slate-400 font-mono">
                    READY FOR SCAN • Click either simulation button above
                  </div>
                )}

                {scanStatus === "granted" && scanLog && (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 space-y-1.5 font-mono text-xs shadow-lg shadow-emerald-950">
                    <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>ACCESS GRANTED • TURNSTILE UNLOCKED</span>
                    </div>
                    <div className="text-[11px] text-emerald-300">
                      <div>▶ LOCATION: {scanLog.gate}</div>
                      <div>▶ TIMESTAMP: {scanLog.time}</div>
                      <div>▶ ENGINE LATENCY: {scanLog.latency}</div>
                      <div>▶ ATTENDANCE LOGGED: YES</div>
                    </div>
                  </div>
                )}

                {scanStatus === "duplicate" && scanLog && (
                  <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 space-y-1.5 font-mono text-xs shadow-lg shadow-rose-950">
                    <div className="flex items-center gap-2 font-bold text-rose-400 text-sm">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>SECURITY ALERT: DUPLICATE ENTRY BLOCKED</span>
                    </div>
                    <div className="text-[11px] text-rose-300">
                      <div>▶ TOKEN ID: {tokenId}</div>
                      <div>▶ REJECTION: Pass already redeemed at Gate 01</div>
                      <div>▶ FRAUD PREVENTION: Anti-Passback Engaged</div>
                      <div>▶ ALERT DISPATCHED: Security Officer Pinged</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Enterprise Architecture
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Built for High-Concurrency Crowd Flow
          </h2>
          <p className="text-sm text-slate-600">
            Everything your venue operations team needs to verify attendees without long queues or entrance bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Sub-50ms Verification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Optimized local cache synchronization ensures turnstiles unlock in milliseconds even with thousands of attendees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Anti-Passback Safeguard</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant multi-gate synchronization prevents attendees from passing digital screenshots to friends outside.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">WhatsApp & SMS Passes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated delivery of branded passes directly to attendees&apos; WhatsApp or Apple/Google Wallet apps upon RSVP.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Hardware Turnstile SDK</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compatible with commercial optical turnstiles, Android handheld PDA scanners, and iPad camera check-in kiosks.
            </p>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Deployed Across Diverse Environments</h3>
            <p className="text-xs text-slate-600">Tailored configurations for specific event and organizational security protocols.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Tech Conferences & Summits</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Seamless badge printing and access validation across multiple breakout rooms and VIP lounges.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Building2 className="w-4 h-4 text-purple-600" />
                <span>Commercial Corporate Towers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Automated visitor pre-registration, host notifications on arrival, and elevator gate integration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Server className="w-4 h-4 text-purple-600" />
                <span>Manufacturing & Logistics Hubs</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Vendor verification, temporary contractor badges, and automated safety compliance acknowledgments.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/contact?service=Security+QR+Entry+System"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-lg shadow-purple-600/20 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule a Customized Rollout Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
