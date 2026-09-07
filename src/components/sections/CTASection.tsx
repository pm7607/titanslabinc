import Button from "@/components/ui/Button";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white border border-purple-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-purple-950/30">
          {/* Background Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Start Your Digital Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <span className="text-purple-300">Let's Build It.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
              Tell us what you're building, what you're trying to improve, or where your business needs help. We'll help you find the right digital solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" showArrow className="w-full sm:w-auto bg-white text-purple-900 hover:bg-slate-100 border-none shadow-lg">
                Let's Talk
              </Button>
              <Button href="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:border-white">
                Explore Our Portfolio
              </Button>
            </div>

            {/* Quick Contact Info Pills */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-300" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-purple-300" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
