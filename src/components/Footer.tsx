import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Wrench, 
  Zap, 
  ArrowUp,
  Instagram,
  Facebook
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STORE_INFO } from '../data/products';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenRepair: () => void;
  onOpenDataTopUp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenRepair,
  onOpenDataTopUp
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] text-slate-400 border-t border-white/10 pt-16 pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" showTagline={true} />
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mt-2">
              ProGadget Hub Ltd is your premier physical tech destination in Ekosodin, Benin City. We provide certified UK Used & New smartphones, 100% original accessories, same-day expert hardware repairs, POS withdrawals, and flexible Pay Small Small installment financing.
            </p>

            {/* Flyer Sub-Motto Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFC700] text-black font-black text-[10px] uppercase tracking-widest">
              <span>CONNECT • REPAIR • POWER • PAY</span>
            </div>

            {/* Social Links from flyer */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-black text-white uppercase tracking-wider">Follow Us:</span>
              <a
                href={STORE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#161616] hover:bg-[#FFC700] hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#161616] hover:bg-[#FFC700] hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#161616] hover:bg-[#FFC700] hover:text-black text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="TikTok"
              >
                <span className="font-black text-xs">TT</span>
              </a>
            </div>
          </div>

          {/* Quick Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-black text-xs font-['Outfit',sans-serif] uppercase tracking-widest">
              Departments
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick={() => onSelectCategory('phones')}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  UK Used iPhones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('phones')}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  Brand New Samsungs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  AirPods & Audio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  20W Fast Chargers
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenRepair}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  Screen & Battery Repairs
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDataTopUp}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  SME Data & VTU
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service & Finance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-black text-xs font-['Outfit',sans-serif] uppercase tracking-widest">
              Financing & Trust
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('financing-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold"
                >
                  Pay Small Small Plan
                </button>
              </li>
              <li>
                <span className="text-gray-400 uppercase text-[11px] font-bold">30-Day Testing Warranty</span>
              </li>
              <li>
                <span className="text-gray-400 uppercase text-[11px] font-bold">Phone Swap & Trade-In</span>
              </li>
              <li>
                <span className="text-gray-400 uppercase text-[11px] font-bold">Student ID Verification</span>
              </li>
              <li>
                <span className="text-gray-400 uppercase text-[11px] font-bold">In-Store Diagnostics</span>
              </li>
              <li>
                <span className="text-gray-400 uppercase text-[11px] font-bold">POS Cash Withdrawal</span>
              </li>
            </ul>
          </div>

          {/* Contact Anchor (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-black text-xs font-['Outfit',sans-serif] uppercase tracking-widest">
              Store Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">
                  {STORE_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC700] shrink-0" />
                <a href={`tel:${STORE_INFO.phoneCall}`} className="text-gray-300 hover:text-white font-bold">
                  {STORE_INFO.phoneCallDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366]" />
                <a 
                  href={`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#25D366] font-bold"
                >
                  WhatsApp: {STORE_INFO.phoneWhatsApp}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                Mon - Sat: 8:00am - 8:00pm <br />
                Sunday: 12:00pm - 6:00pm
              </div>
            </div>
          </div>

        </div>

        {/* Official Brand Slogan Banner from Flyer */}
        <div className="p-6 rounded-xl bg-[#111111] border border-[#FFC700]/30 text-center shadow-xl">
          <p className="font-['Outfit',sans-serif] font-black uppercase text-base sm:text-lg md:text-xl text-[#FFC700] tracking-wider">
            {STORE_INFO.name} – {STORE_INFO.slogan}
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved. Registered tech enterprise in Edo State, Nigeria.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#161616] hover:bg-[#FFC700] hover:text-black text-gray-300 transition-colors uppercase font-black text-[11px] tracking-wider cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
