import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Palette } from "lucide-react";

export const metadata = {
  title: "UI/UX & Domain Hosting | Titanslab Inc.",
  description: "Figma design systems, intuitive UI/UX, domain registration, SSL certificates, cloud server deployment, and managed web hosting."
};

export default function UiUxDomainHostingPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Palette className="w-3.5 h-3.5 text-purple-600" />
            Service Pillar 03
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            UI/UX Design & <span className="text-gradient-purple">Domain & Hosting Services.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            From intuitive UI/UX wireframes to domain registration, DNS management, SSL provisioning, and high-availability managed web hosting.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">UI/UX Design & Prototyping</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                User research, wireframing, high-fidelity Figma prototypes, micro-interactions, responsive design systems, and usability testing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Domain & Managed Hosting</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Domain procurement, DNS records configuration, CDN integration (Cloudflare), automated SSL renewal, daily backups, and 99.9% server uptime.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
