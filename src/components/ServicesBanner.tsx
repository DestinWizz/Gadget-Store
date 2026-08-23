import React from 'react';
import { 
  Smartphone, 
  Headphones, 
  Wrench, 
  CreditCard, 
  Radio, 
  Zap, 
  ShieldCheck, 
  Tag, 
  Clock, 
  Smile, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface ServicesBannerProps {
  onSelectCategory: (cat: string) => void;
  onOpenRepair: () => void;
  onOpenDataTopUp: () => void;
}

export const ServicesBanner: React.FC<ServicesBannerProps> = ({
  onSelectCategory,
  onOpenRepair,
  onOpenDataTopUp
}) => {
  const services = [
    {
      id: 'phones',
      title: 'PHONES',
      subtitle: 'Sales of New & UK Used Phones',
      desc: 'iPhones, Samsung Galaxy, Pixels with 30-Day Testing Warranty.',
      icon: Smartphone,
      action: () => onSelectCategory('phones')
    },
    {
      id: 'accessories',
      title: 'ACCESSORIES',
      subtitle: 'Original Accessories at the Best Prices',
      desc: 'AirPods, Fast Chargers, JBL Speakers, Powerbanks & Armor Cases.',
      icon: Headphones,
      action: () => onSelectCategory('accessories')
    },
    {
      id: 'repairs',
      title: 'REPAIRS',
      subtitle: 'Expert Repairs for Phones & Tablets',
      desc: 'Same-day OLED screen replacement, battery swap & IC fixes.',
      icon: Wrench,
      action: onOpenRepair
    },
    {
      id: 'pos',
      title: 'POS SERVICES',
      subtitle: 'POS Transactions & Withdrawals',
      desc: 'Fast cash withdrawals, instant transfers, low student charges.',
      icon: CreditCard,
      action: () => onSelectCategory('data-pos')
    },
    {
      id: 'sim',
      title: 'SIM REGISTRATION',
      subtitle: 'All Networks SIM Registration',
      desc: 'MTN, Airtel, Glo & 9mobile instant verification & NIN linking.',
      icon: Radio,
      action: onOpenDataTopUp
    },
    {
      id: 'data',
      title: 'AIRTIME & DATA',
      subtitle: 'Airtime Top-up & Data Subscription',
      desc: 'Superfast 1GB - 20GB SME & Corporate data at discount rates.',
      icon: Zap,
      action: onOpenDataTopUp
    },
  ];

  const guarantees = [
    { title: '100% Genuine Products', icon: ShieldCheck },
    { title: 'Affordable Prices', icon: Tag },
    { title: 'Fast & Reliable Service', icon: Clock },
    { title: 'Customer Satisfaction Guaranteed', icon: Smile },
  ];

  return (
    <section id="services-section" className="py-14 sm:py-20 bg-[#0C0C0C] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Tag style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
              Complete Tech Solutions
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-medium">
              Located right in Ekosodin behind UNIBEN back gate
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent("Hello ProGadget Hub! I'd like to ask about your services in Ekosodin.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md bg-[#25D366] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:bg-[#20bd5b] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Desk</span>
            </a>
            <a
              href={`tel:${STORE_INFO.phoneCall}`}
              className="px-5 py-3 rounded-md bg-[#161616] border border-white/10 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#FFC700]" />
              <span>Call Us: {STORE_INFO.phoneCall}</span>
            </a>
          </div>
        </div>

        {/* 6 Services Grid (Directly faithful to the flyer's layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={srv.action}
                className="group relative bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#FFC700] rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-lg"
              >
                {/* Circular Icon with Gold Outline */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-[#FFC700] flex items-center justify-center text-[#FFC700] group-hover:scale-105 group-hover:bg-[#FFC700] group-hover:text-black transition-all shrink-0 shadow-[0_0_15px_rgba(255,199,0,0.2)]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black font-['Outfit',sans-serif] text-[#FFC700] group-hover:text-white transition-colors tracking-tight uppercase">
                      {srv.title}
                    </h3>
                    <h4 className="text-xs font-black uppercase tracking-wider text-white mt-1 leading-snug">
                      {srv.subtitle}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-medium">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#FFC700]">
                  <span>Open Department</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Flyer Guarantees Checklist Bar */}
        <div className="mt-10 rounded-xl bg-[#111111] border border-[#FFC700]/30 p-5 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((item, i) => {
              const GIcon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFC700] text-black flex items-center justify-center shrink-0">
                    <GIcon className="w-4 h-4 font-bold" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
