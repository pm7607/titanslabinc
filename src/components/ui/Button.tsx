import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-purple-700 hover:bg-purple-800 text-white shadow-md shadow-purple-900/20 hover:shadow-lg hover:shadow-purple-900/30 border border-purple-600/40",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 shadow-xs",
    outline: "bg-transparent hover:bg-purple-50 text-purple-700 border border-purple-700/50 hover:border-purple-700",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], "group", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], "group", className)} {...props}>
      {content}
    </button>
  );
}
