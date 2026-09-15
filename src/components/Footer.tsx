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
import { Legal } from '../type/legal';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenRepair: () => void;
  onOpenDataTopUp: () => void;
  onOpenLegal: (tab: Legal) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenRepair,
  onOpenDataTopUp,
  onOpenLegal
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
              Legal Policies
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick = {() => onOpenLegal('terms')}
                  className= "hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')}
                  className= "hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold text-left cursor-pointer"
                  >
                    Privacy Policy
                </button>
                 </li>
                    <li>
                <button onClick={() => onOpenLegal('bnpl')}
                  className= "hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold text-left cursor-pointer"
                  >
                   Bnpl Policy
                </button>
                 </li>
              <li>
               <button onClick={() => onOpenLegal('returns')}
                className='hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold text-left cursor-pointer'>
                  Return Policy
                </button>
                </li>
             <li>
               <button onClick={() => onOpenLegal('cookies')}
                className='hover:text-[#FFC700] transition-colors uppercase text-[11px] font-bold text-left cursor-pointer'>
                  Cookie Policy
                </button>
                </li>
                <li>
                  <button onClick={() => {
                    localStorage.removeItem('pg_cookie_consent');
                    window.location.reload();
                  }}
                  className='text-xs text-slate-400 hover:text-[#FFC700] transition-colors underline cursor-pointer'
                  >
                    Cookie Preference / Settings
                  </button>
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
  {/* Authentic SVG WhatsApp Icon */}
  <svg 
    className="w-4 h-4 fill-[#25D366] shrink-0" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M12.011 1.985c-5.522 0-10.011 4.49-10.011 10.011 0 1.765.46 3.487 1.332 5.006L2 22l5.127-1.339a9.96 9.96 0 0 0 4.884 1.335h.004c5.52 0 10.011-4.49 10.011-10.01 0-2.672-1.041-5.183-2.932-7.073-1.892-1.891-4.403-2.933-7.083-2.933zm0 1.637c2.235 0 4.337.872 5.918 2.453 1.58 1.582 2.451 3.684 2.451 5.92 0 4.62-3.759 8.378-8.379 8.378a8.31 8.31 0 0 1-4.237-1.157l-.304-.181-3.146.822.838-3.067-.198-.316a8.32 8.32 0 0 1-1.272-4.479c0-4.62 3.759-8.379 8.379-8.379zm4.595 11.233c-.252-.126-1.492-.736-1.723-.82-.231-.084-.399-.126-.567.126-.168.252-.651.82-.798.988-.147.168-.294.189-.546.063-.252-.126-1.064-.392-2.027-1.25-.749-.668-1.255-1.493-1.402-1.745-.147-.252-.016-.388.11-.513.113-.113.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.567-1.365-.777-1.869-.205-.492-.413-.425-.567-.433-.147-.008-.315-.008-.483-.008-.168 0-.441.063-.672.315-.231.231-.882.861-.882 2.1 0 1.239.903 2.436 1.029 2.604.126.168 1.777 2.713 4.305 3.803.601.26 1.07.415 1.436.531.603.191 1.152.164 1.586.1.484-.071 1.492-.609 1.701-1.197.209-.588.209-1.092.147-1.197-.063-.105-.231-.168-.483-.294z" />
  </svg>
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
