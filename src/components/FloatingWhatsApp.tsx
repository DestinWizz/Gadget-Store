import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Smartphone, Wrench, CreditCard, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: 'Inquire Phone Stock / Price',
      icon: Smartphone,
      msg: 'Hello ProGadget Hub! I want to check availability and current prices for your UK Used / Brand New iPhones & Samsung phones.'
    },
    {
      title: 'Book Phone Repair Desk',
      icon: Wrench,
      msg: 'Hello ProGadget Hub Repair Team! My phone needs a screen/battery/IC fix. Can I bring it to your workshop at Edo Lane today?'
    },
    {
      title: 'Pay Small Small / Financing',
      icon: CreditCard,
      msg: 'Hello ProGadget Hub! I want to apply for the Pay Small Small installment financing for a smartphone in Ekosodin.'
    },
    {
      title: 'Directions to Edo Lane Store',
      icon: MapPin,
      msg: 'Hello ProGadget Hub! How do I locate your physical shop on Edo Lane off Edo Street in Ekosodin?'
    }
  ];

  const handleSendPrompt = (msg: string) => {
    window.open(`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Pop-up Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#161616] border border-[#25D366]/40 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4 animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                <MessageCircle className="w-5 h-5 fill-black" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-300 ring-2 ring-black"></span>
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">ProGadget Hub Desk</h4>
                <span className="text-[10px] text-[#25D366] font-black uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  Online | Fast Reply
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-white bg-[#1A1A1A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 font-medium">
            Welcome to ProGadget Hub Ekosodin! Choose a quick topic to start chatting with our store team on WhatsApp:
          </p>

          {/* Quick options */}
          <div className="space-y-2">
            {quickPrompts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(item.msg)}
                  className="w-full text-left p-2.5 rounded-lg bg-[#111111] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-xs font-black uppercase tracking-wider text-gray-200 hover:text-white flex items-center gap-2.5 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#FFC700] shrink-0" />
                  <span className="truncate text-[11px]">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 text-[10px] text-gray-400 font-black uppercase tracking-wider text-center">
            📍 Edo Lane off Edo Street • Ekosodin
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all cursor-pointer flex items-center gap-2"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-black uppercase text-xs tracking-wider whitespace-nowrap text-white">
          Chat With Us
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFC700] text-black text-[10px] font-black flex items-center justify-center ring-2 ring-black">
          1
        </span>
      </button>

    </div>
  );
};
