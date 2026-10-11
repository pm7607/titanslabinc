"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import MegaMenuCompany from "./MegaMenuCompany";
import MegaMenuServices from "./MegaMenuServices";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"company" | "services" | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const menuTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: "company" | "services") => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-7 w-36 sm:w-44 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/assets/titanslab-logo.webp"
                alt="Titanslab Inc."
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              className="px-3.5 py-2 rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Home
            </Link>

            {/* Company Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/company"
                className={`px-3.5 py-2 rounded-xl flex items-center gap-1 hover:text-purple-600 transition-colors ${
                  activeMenu === "company" ? "text-purple-600 bg-purple-50" : ""
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "company" ? "rotate-180 text-purple-600" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Company Mega Dropdown */}
              {activeMenu === "company" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[800px] max-w-[90vw]">
                  <MegaMenuCompany onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </div>

            {/* Services Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`px-3.5 py-2 rounded-xl flex items-center gap-1 hover:text-purple-600 transition-colors ${
                  activeMenu === "services" ? "text-purple-600 bg-purple-50" : ""
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180 text-purple-600" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Services Mega Dropdown */}
              {activeMenu === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1000px] max-w-[95vw]">
                  <MegaMenuServices onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="px-3.5 py-2 rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-colors flex items-center gap-1.5"
            >
              <span>Products</span>
              <span className="text-[10px] uppercase font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded border border-amber-300">
                New
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="px-3.5 py-2 rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Our Work
            </Link>

            <Link
              href="/case-studies"
              className="px-3.5 py-2 rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="px-3.5 py-2 rounded-xl hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20 transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-purple-600 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
