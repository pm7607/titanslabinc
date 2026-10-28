import Link from "next/link";
import { Home, Compass, MessageSquare, Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        {/* 404 Badge & Numbers */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
            404 Error • Page Not Found
          </div>

          <h1 className="text-7xl sm:text-9xl font-black text-slate-900 tracking-tight select-none">
            4<span className="text-gradient-purple">0</span>4
          </h1>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Looks like you&apos;ve wandered into cyberspace
          </h2>

          <p className="text-sm sm:text-base text-slate-700 max-w-md mx-auto leading-relaxed font-normal">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold shadow-md shadow-purple-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold border border-slate-200/80 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4 text-purple-700" />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Helpful Shortcut Cards */}
        <div className="pt-6 border-t border-slate-200">
          <span className="text-xs text-slate-600 font-semibold uppercase tracking-wider block mb-4">
            Or Jump Directly To:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/portfolio"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition-all text-xs group"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-purple-700 mb-1">
                <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                <span>Our Work</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">Client projects & showcase</p>
            </Link>

            <Link
              href="/blog"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition-all text-xs group"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-purple-700 mb-1">
                <Compass className="w-3.5 h-3.5 text-purple-600" />
                <span>Tech Blog</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">Engineering articles</p>
            </Link>

            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition-all text-xs group col-span-2 sm:col-span-1"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-purple-700 mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-purple-600" />
                <span>Contact Us</span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">Get in touch directly</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
