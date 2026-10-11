import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-slate-400 pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-8 w-44">
                <Image
                  src="/assets/titanslab-logo.webp"
                  alt="Titanslab Inc."
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Titanslab Inc. is a technology and digital solutions company. We build modern web applications, e-commerce platforms, business automation, cloud infrastructure, AI/ML tools, and custom software designed to accelerate business growth.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/company/about-us" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/our-team" className="hover:text-purple-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/company/our-story" className="hover:text-purple-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/company/how-we-work" className="hover:text-purple-400 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/company/office-location" className="hover:text-purple-400 transition-colors">
                  Office Location
                </Link>
              </li>
              <li>
                <Link href="/company/life-at-titanslab" className="hover:text-purple-400 transition-colors">
                  Life @ Titanslab
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/ecommerce-automation" className="hover:text-purple-400 transition-colors">
                  E-commerce & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/industry-web-development" className="hover:text-purple-400 transition-colors">
                  Industry Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-domain-hosting" className="hover:text-purple-400 transition-colors">
                  UI/UX & Domain Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/erp-cloud" className="hover:text-purple-400 transition-colors">
                  ERP & Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml-solutions" className="hover:text-purple-400 transition-colors">
                  AI/ML Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#algo-trading" className="hover:text-purple-400 transition-colors">
                  Algorithmic Trading
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="hover:text-purple-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Explore */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Explore & Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/products" className="hover:text-purple-400 transition-colors flex items-center justify-between">
                  <span>Products</span>
                  <span className="text-[10px] text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-purple-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Titanslab Inc. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
