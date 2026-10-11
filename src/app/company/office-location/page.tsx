import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY_INFO } from "@/data/company";
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react";

export const metadata = {
  title: "Office Location | Titanslab Inc.",
  description: "Titanslab Inc. headquarters details in Rajkot, Gujarat, India. Get location info, contact lines, and client collaboration hours."
};

export default function OfficeLocationPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Headquarters
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Our Headquarters in <span className="text-gradient-purple">Rajkot, Gujarat, India.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Operating from Rajkot, Gujarat, India, Titanslab serves clients locally and internationally across multiple timezone requirements.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 glass-panel space-y-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">Rajkot Engineering Center</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our main office houses our full-stack engineering team, UI/UX designers, project managers, and cloud operations desk.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Address</span>
                    <span className="text-slate-600 font-normal">{COMPANY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Mail className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiry</span>
                    <span className="text-slate-600 font-normal">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Line</span>
                    <span className="text-slate-600 font-normal">{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <span className="text-slate-600 font-normal">Monday – Saturday: 9:00 AM – 7:00 PM IST (Global Support 24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Location Visual */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Global Service Capability</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  While our primary headquarters is rooted in Gujarat, India, our engineering architecture is designed for distributed client delivery worldwide.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-purple-700">Multi-Country Project Execution</div>
                <p className="text-slate-600 font-normal">
                  We maintain active project workflows across clients in India, USA, UK, UAE, and Southeast Asia.
                </p>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
