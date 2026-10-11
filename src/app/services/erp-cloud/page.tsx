import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Server } from "lucide-react";

export const metadata = {
  title: "ERP Solutions & Cloud Services | Titanslab Inc.",
  description: "Custom ERP systems, Cloud infrastructure setup, AWS/GCP deployment, database optimization, CRM software, and DevOps pipelines."
};

export default function ErpCloudPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Server className="w-3.5 h-3.5 text-purple-600" />
            Service Pillar 04
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            ERP Solutions & <span className="text-gradient-purple">Cloud Infrastructure.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Modular enterprise resource planning software, cloud migrations, AWS/GCP architecture, custom CRM cloud software, and database optimization.
          </p>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Custom Enterprise ERP Solutions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Multi-branch inventory control, purchase order processing, automated payroll & tax calculations, role permissions, and executive analytics dashboards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 glass-panel space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Cloud Services & DevOps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                AWS, Google Cloud, and DigitalOcean server provisioning, CI/CD pipeline automation, Docker containerization, PostgreSQL/MySQL optimization, and 24/7 server monitoring.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
