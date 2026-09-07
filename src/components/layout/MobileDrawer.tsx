"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { COMPANY_NAV_ITEMS } from "./MegaMenuCompany";
import { MAIN_SERVICES_MEGA } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-200 p-6 overflow-y-auto flex flex-col justify-between shadow-2xl z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                TITANS<span className="text-purple-600">LAB</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
              aria-label="Close Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="py-6 space-y-2 text-sm font-semibold">
            <Link
              href="/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>

            {/* Company Accordion */}
            <div>
              <button
                onClick={() => setCompanyExpanded(!companyExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors text-left"
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    companyExpanded ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>

              {companyExpanded && (
                <div className="ml-3 mt-1 pl-3 border-l border-purple-500/30 space-y-1 text-xs">
                  {COMPANY_NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="block py-2 px-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors text-left"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    servicesExpanded ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>

              {servicesExpanded && (
                <div className="ml-3 mt-1 pl-3 border-l border-purple-500/30 space-y-1 text-xs">
                  {MAIN_SERVICES_MEGA.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.slug}`}
                      onClick={onClose}
                      className="block py-2 px-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors"
            >
              Products <span className="ml-1 text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-300">New</span>
            </Link>

            <Link
              href="/portfolio"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors"
            >
              Our Work
            </Link>

            <Link
              href="/blog"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-purple-600 transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Footer Contact CTA inside Mobile Drawer */}
        <div className="pt-6 border-t border-slate-200 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full block text-center py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md shadow-purple-600/20 transition-all"
          >
            Let's Talk
          </Link>

          <div className="text-xs text-slate-500 space-y-1.5 text-center">
            <p className="flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-600" />
              <span>{COMPANY_INFO.email}</span>
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>{COMPANY_INFO.phone}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
