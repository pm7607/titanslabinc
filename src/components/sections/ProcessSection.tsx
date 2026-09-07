import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/company";

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="How We Work"
          title="Engineered Process for Predictable Delivery"
          subtitle="Our 7-step development lifecycle ensures transparency, quality assurance, and seamless execution from concept to post-launch SLA support."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-900/10 glass-panel flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-purple-900 font-mono">
                    {item.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>Phase {item.step}</span>
                <span className="text-purple-600 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
