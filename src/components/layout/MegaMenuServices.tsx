import Link from "next/link";
import { MAIN_SERVICES_MEGA, SPECIALIZED_SERVICES } from "@/data/services";
import { ShoppingCart, Code2, Palette, Server, LucideIcon } from "lucide-react";

interface MegaMenuServicesProps {
  onClose?: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Code2,
  Palette,
  Server
};

export default function MegaMenuServices({ onClose }: MegaMenuServicesProps) {
  return (
    <div className="w-full bg-white backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl shadow-slate-900/10">
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            End-to-End Digital Solutions & Services
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Explore our comprehensive engineering, cloud, automation & design services.</p>
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="text-xs text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1"
        >
          View All Services &rarr;
        </Link>
      </div>

      {/* 4 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MAIN_SERVICES_MEGA.map((cat) => {
          const Icon = iconMap[cat.iconName] || Code2;
          return (
            <div key={cat.id} className="flex flex-col space-y-3">
              <Link
                href={`/services/${cat.slug}`}
                onClick={onClose}
                className="group flex items-center gap-2 pb-2 border-b border-slate-200 hover:border-purple-500 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {cat.title}
                  </h4>
                </div>
              </Link>

              <ul className="space-y-1.5 text-xs text-slate-600">
                {cat.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/services/${cat.slug}`}
                      onClick={onClose}
                      className="hover:text-purple-600 transition-colors block py-0.5 hover:translate-x-1 duration-150 transform"
                    >
                      <span className="text-purple-500 mr-1.5">•</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Specialized Solutions Bar */}
      <div className="mt-6 pt-4 border-t border-slate-200 bg-purple-50/60 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-slate-700 font-semibold">Specialized Capabilities:</span>
        <div className="flex flex-wrap items-center gap-2">
          {SPECIALIZED_SERVICES.map((spec) => (
            <Link
              key={spec.slug}
              href={`/services#${spec.slug}`}
              onClick={onClose}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-purple-400 text-slate-700 hover:text-purple-700 font-medium transition-all shadow-xs"
            >
              {spec.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
