"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Send, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hi Titanslab Team! I am interested in your services and would like to connect."
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Interactive WhatsApp Chat Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* WhatsApp Chat Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 p-1 flex items-center justify-center border border-white/30">
                <Image
                  src="/assets/titanslab-logo.webp"
                  alt="Titanslab Support"
                  width={32}
                  height={16}
                  className="object-contain brightness-0 invert"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1">
                  <span>Titanslab Support</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </h4>
                <p className="text-[11px] text-emerald-200 font-medium">
                  Online • Replies in minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Window Body */}
          <div className="p-4 bg-[#efeae2] min-h-[160px] space-y-3">
            <div className="max-w-[85%] rounded-2xl rounded-tl-xs p-3 bg-white text-slate-800 shadow-xs text-xs space-y-1">
              <p className="font-semibold text-purple-700 text-[11px]">Titanslab Support</p>
              <p className="leading-relaxed">
                👋 Hi there! Welcome to Titanslab Inc. How can we help you build your website, app, or automation system today?
              </p>
              <span className="text-[9px] text-slate-400 block text-right">Just now</span>
            </div>
          </div>

          {/* Message Form Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 space-y-2">
            <label htmlFor="whatsapp-chat-message" className="sr-only">
              Type your message for Titanslab Support
            </label>
            <textarea
              id="whatsapp-chat-message"
              name="message"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              aria-label="Type your message for Titanslab Support"
              className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#25D366] focus:bg-white resize-none transition-colors"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] text-slate-500 font-medium">Direct to +91 97121 17087</span>
              <button
                type="submit"
                aria-label="Send WhatsApp message"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Official Floating WhatsApp Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp with Titanslab Support"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40 cursor-pointer"
      >
        {/* Pulse Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-60" />

        {isOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <svg
            className="w-7 h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
}
