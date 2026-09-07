import Link from "next/link";
import { Info, Users, History, Cpu, MapPin, Sparkles } from "lucide-react";

export const COMPANY_NAV_ITEMS = [
  {
    title: "About Us",
    href: "/company/about-us",
    description: "Learn about Titanslab, our capabilities, values, technology expertise and approach.",
    icon: Info
  },
  {
    title: "Our Team",
    href: "/company/our-team",
    description: "Introduce the people behind Titanslab and their engineering expertise.",
    icon: Users
  },
  {
    title: "Our Story",
    href: "/company/our-story",
    description: "Show the journey, milestones, and growth of Titanslab Inc.",
    icon: History
  },
  {
    title: "How We Work",
    href: "/company/how-we-work",
    description: "Explain our 7-step development lifecycle from Discovery to SLA Support.",
    icon: Cpu
  },
  {
    title: "Office Location",
    href: "/company/office-location",
    description: "Rajkot, Gujarat, India office location and travel information.",
    icon: MapPin
  },
  {
    title: "Life @ Titanslab",
    href: "/company/life-at-titanslab",
    description: "Explore our company culture, work environment, and team activities.",
    icon: Sparkles
  }
];

interface MegaMenuCompanyProps {
  onClose?: () => void;
}

export default function MegaMenuCompany({ onClose }: MegaMenuCompanyProps) {
  return (
    <div className="w-full bg-white backdrop-blur-2xl border border-slate-200 rounded-2xl p-6 shadow-2xl shadow-slate-900/10">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Company Overview
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Discover our mission, engineering culture, and delivery process.</p>
        </div>
        <Link
          href="/company"
          onClick={onClose}
          className="text-xs text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1"
        >
          View Company Hub &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {COMPANY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/60 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
