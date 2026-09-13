import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  Navigation, 
  Store, 
  CreditCard
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const TrustAndLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location-section" className="py-14 sm:py-20 bg-[#0C0C0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
            PHYSICAL STORE ANCHOR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
            Visit Us in Ekosodin
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium">
            Inspect devices in person, test cameras & TrueTone, charge, withdrawal cash at POS, or pick up your order.
          </p>
        </div>

        {/* 3 Interactive Contact & Location Cards (Matching the Flyer's bottom strip) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: CALL ONLY */}
          <div className="rounded-2xl bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#FFC700] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-black border-2 border-[#FFC700] flex items-center justify-center text-[#FFC700] group-hover:bg-[#FFC700] group-hover:text-black transition-all shadow-[0_0_15px_rgba(255,199,0,0.2)]">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest block">
                  DIRECT CALL TRIGGER
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit',sans-serif] mt-0.5 uppercase tracking-tight">
                  {STORE_INFO.phoneCall}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  For phone stock confirmation, pricing, emergency device repair check, and POS inquiries.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={`tel:${STORE_INFO.phoneCall}`}
                className="w-full py-3 rounded-md bg-[#1A1A1A] hover:bg-[#FFC700] hover:text-black text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>Call {STORE_INFO.phoneCall}</span>
              </a>
            </div>
          </div>

          {/* Card 2: WHATSAPP ONLY */}
          <div className="rounded-2xl bg-[#111111] hover:bg-[#161616] border border-[#25D366]/40 hover:border-[#25D366] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-black border-2 border-[#25D366] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                <MessageCircle className="w-6 h-6 fill-[#25D366] group-hover:fill-white" />
              </div>

              <div>
                <span className="text-[10px] font-black text-[#25D366] uppercase tracking-widest block">
                  WHATSAPP OFFICIAL DESK
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit',sans-serif] mt-0.5 uppercase tracking-tight">
                  {STORE_INFO.phoneWhatsApp}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Always online to send pictures/videos of UK Used phones, calculate Pay Small Small, and dispatch.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent("Hello ProGadget Hub Ltd! I'm chatting from your website to make inquiries.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.25)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp ({STORE_INFO.phoneWhatsApp})</span>
              </a>
            </div>
          </div>

          {/* Card 3: STORE LOCATION */}
          <div className="rounded-2xl bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#FFC700] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-black border-2 border-[#FFC700] flex items-center justify-center text-[#FFC700] group-hover:bg-[#FFC700] group-hover:text-black transition-all shadow-[0_0_15px_rgba(255,199,0,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest block">
                  PHYSICAL STORE ADDRESS
                </span>
                <h3 className="text-base font-black text-white font-['Outfit',sans-serif] mt-0.5 leading-snug uppercase">
                  Edo Lane off Edo Street, Ekosodin
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  Walking distance from UNIBEN back gate. Easy landmark with visible ProGadget Hub signage.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex gap-2">
              <button
                onClick={handleCopyAddress}
                className="flex-1 py-3 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Address'}</span>
              </button>

              <a
                href="https://maps.google.com/?q=Ekosodin+Benin+City+Edo+State"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md bg-[#FFC700] text-black font-black text-xs hover:bg-[#e6b300] transition-colors flex items-center justify-center"
                title="Open in Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Operating Hours & In-Store Perks Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-[#111111] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300 shadow-xl">
          
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] text-[#FFC700] shrink-0 border border-white/10">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white font-black uppercase text-xs tracking-wider block">Store Opening Hours</strong>
              <span className="text-gray-400 block mt-0.5 font-medium">Mon – Sat: 8:00 AM – 8:00 PM</span>
              <span className="text-gray-400 block font-medium">Sunday: 12:00 PM – 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] text-[#25D366] shrink-0 border border-white/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white font-black uppercase text-xs tracking-wider block">In-Store Diagnostic Desk</strong>
              <span className="text-gray-400 block mt-0.5 font-medium">
                Full 3uTools & Apple diagnostics testing before payment on every UK Used unit.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] text-[#FFC700] shrink-0 border border-white/10">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white font-black uppercase text-xs tracking-wider block">Payment & Pickups</strong>
              <span className="text-gray-400 block mt-0.5 font-medium">
                Pay in cash, transfer, or POS at pickup. Free screen guard installed on spot.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
