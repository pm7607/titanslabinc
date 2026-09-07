import { COMPANY_INFO } from "@/data/company";

export default function TrustStats() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-purple-700 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-900 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-600 mt-0.5 font-medium">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
