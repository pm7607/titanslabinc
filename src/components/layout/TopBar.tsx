"use client";

import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { COMPANY_INFO } from "@/data/company";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-slate-100 border-b border-slate-200 text-xs text-slate-700 py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            aria-label={`Email us at ${COMPANY_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-purple-700 transition-colors py-1"
          >
            <Mail className="w-3.5 h-3.5 text-purple-700" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
            aria-label={`Call us at ${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-purple-700 transition-colors py-1"
          >
            <Phone className="w-3.5 h-3.5 text-purple-700" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-1.5">
          <a
            href={COMPANY_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Titanslab on Facebook"
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:text-purple-700 transition-colors"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={COMPANY_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Titanslab on Instagram"
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:text-purple-700 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={COMPANY_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Titanslab on LinkedIn"
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:text-purple-700 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
