import Link from "next/link";
import { ArrowRight, ShoppingCart, Code2, Palette, Server, BrainCircuit, TrendingUp, QrCode, Megaphone, UserCheck, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  href: string;
  items?: string[];
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Code2,
  Palette,
  Server,
  BrainCircuit,
  TrendingUp,
  QrCode,
  Megaphone,
  UserCheck
};

export default function ServiceCard({
  title,
  description,
  iconName,
  href,
  items,
  className
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Code2;

  return (
    <Link
      href={href}
      aria-label={`Explore solutions for ${title}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 glass-panel",
        className
      )}
    >
      {/* Top Accent Gradient */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-700 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">
          <Icon className="w-6 h-6" />
        </div>

        {/* Heading */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
          {description}
        </p>

        {/* Sub-item highlights if provided */}
        {items && items.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
            {items.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Arrow Link */}
      <div className="flex items-center text-xs font-bold text-purple-700 group-hover:text-purple-800 pt-4 border-t border-slate-100">
        <span>Explore Solutions</span>
        <span className="sr-only">for {title}</span>
        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
      </div>
    </Link>
  );
}
