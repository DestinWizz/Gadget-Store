import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Wrench, 
  MapPin, 
  Sparkles,
  CreditCard,
  Wifi
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STORE_INFO } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenRepair: () => void;
  onOpenDataTopUp: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenRepair,
  onOpenDataTopUp,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { label: 'All Tech', cat: 'all' },
    { label: 'Phones (UK Used & New)', cat: 'phones' },
    { label: 'Original Accessories', cat: 'accessories' },
    { label: 'Expert Repairs', cat: 'repairs', action: onOpenRepair },
    { label: 'Data & POS', cat: 'data-pos', action: onOpenDataTopUp },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.action) {
      link.action();
    } else {
      onSelectCategory(link.cat);
      const target = document.getElementById('products-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#FFC700] text-black px-4 py-1.5 text-xs font-black uppercase tracking-wider flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 mx-auto truncate text-center">
          <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0 text-black" />
          <span className="truncate">
            <strong className="tracking-wide">EKOSODIN TECH SPECIAL:</strong> 30-DAY WARRANTY ON UK USED PHONES + FREE SCREEN PROTECTOR
          </span>
          <span className="hidden md:inline text-black/60">•</span>
          <span className="hidden md:inline font-bold">
            📍 EDO LANE OFF EDO STREET, EKOSODIN
          </span>
        </div>
        <a 
          href={`tel:${STORE_INFO.phoneCall}`}
          className="hidden lg:flex items-center gap-1 bg-black text-[#FFC700] text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full hover:bg-black/80 transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span>CALL: {STORE_INFO.phoneCall}</span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Identity */}
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0"
          >
            <BrandLogo size="md" showTagline={true} />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search iPhone, Samsung, Repairs..."
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC700]/60 transition-all font-medium"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Direct Actions & Quick Links */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="lg:hidden p-2.5 text-gray-300 hover:text-white rounded-full bg-[#1A1A1A] border border-white/10"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Repair Trigger Button */}
            <button
              onClick={onOpenRepair}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-xs font-black text-white uppercase tracking-wider transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Fix Phone</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent("Hello ProGadget Hub Ltd! I want to order a gadget or inquire about stock in Ekosodin.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5b] text-white px-4 sm:px-5 py-2.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.25)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat Order</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFC700] hover:bg-[#e6b300] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(255,199,0,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-black text-[#FFC700] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center -mr-1">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-300 hover:text-white rounded-full bg-[#1A1A1A] border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Expandable Mobile Search Bar */}
        {showSearchInput && (
          <div className="lg:hidden pb-3 pt-1">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search iPhone, Samsung, Repairs..."
                className="w-full bg-[#1A1A1A] border border-[#FFC700]/50 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#FFC700]"
                autoFocus
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Secondary Category Navigation Strip (Desktop) */}
        <div className="hidden lg:flex items-center justify-between border-t border-white/5 py-2.5 text-xs font-black uppercase tracking-wider text-gray-400">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors flex items-center gap-1.5 py-1 ${
                  selectedCategory === link.cat
                    ? 'text-[#FFC700] border-b-2 border-[#FFC700]'
                    : 'hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-5 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => {
                const el = document.getElementById('location-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFC700]" />
              <span>Edo Lane, Ekosodin</span>
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('financing-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1 text-[#FFC700] hover:underline"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Small Small</span>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-white/10 px-4 py-5 space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">Categories</span>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-black uppercase tracking-wider flex items-center justify-between ${
                  selectedCategory === link.cat
                    ? 'bg-[#FFC700] text-black'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {selectedCategory === link.cat && (
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onOpenDataTopUp();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#1A1A1A] text-left text-xs font-black uppercase tracking-wider text-white flex items-center gap-2 hover:bg-white/10"
            >
              <Wifi className="w-4 h-4 text-[#FFC700]" />
              <span>Cheap Data & Airtime VTU</span>
            </button>

            <button
              onClick={() => {
                onOpenRepair();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#1A1A1A] text-left text-xs font-black uppercase tracking-wider text-white flex items-center gap-2 hover:bg-white/10"
            >
              <Wrench className="w-4 h-4 text-[#FFC700]" />
              <span>Book Phone Repair Desk</span>
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-2 text-gray-300 font-bold uppercase tracking-wide text-[11px]">
              <MapPin className="w-4 h-4 text-[#FFC700]" />
              <span>Edo Lane off Edo Street, Ekosodin</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-[11px]">
              <Phone className="w-4 h-4 text-[#FFC700]" />
              <a href={`tel:${STORE_INFO.phoneCall}`} className="hover:text-white">CALL: {STORE_INFO.phoneCall}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
