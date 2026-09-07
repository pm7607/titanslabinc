import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TEAM_MEMBERS } from "@/data/company";
import { MessageCircle, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export const metadata = {
  title: "Our Team | Titanslab Inc.",
  description: "Meet the founders and lead engineers at Titanslab Inc. Anjan Patel, Dhyey Kathiriya, Pratik Mehta, and Udit Parekh."
};

export default function OurTeamPage() {
  return (
    <div className="py-12 space-y-16 bg-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            Leadership & Engineering Team
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            The People Behind <span className="text-gradient-purple">Titanslab Innovation.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Meet the founders, designers, full-stack developers, and DevOps engineers driving technology solutions at Titanslab Inc.
          </p>
        </AnimatedSection>
      </section>

      {/* 4 Team Member Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Team Photo Container */}
                <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Team Member Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-purple-700">{member.role}</p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social & Contact Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Email Icon Button before Instagram Icon */}
                    <a
                      href={`mailto:${member.email}`}
                      title={`Email ${member.name} (${member.email})`}
                      aria-label={`Email ${member.name}`}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    {/* Instagram Icon Button */}
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name} Instagram`}
                      aria-label={`${member.name} Instagram`}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </div>
  );
}
