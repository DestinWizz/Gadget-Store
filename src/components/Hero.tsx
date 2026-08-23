import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Headphones, 
  Wrench, 
  CreditCard, 
  CheckCircle2, 
  Star, 
  Flame,
  Zap,
  Repeat
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface HeroProps {
  onExploreGadgets: () => void;
  onOpenFinancing: () => void;
  onOpenRepair: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreGadgets,
  onOpenFinancing,
  onOpenRepair,
  onSelectCategory
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFC700]/5 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Massive Bold Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Label matching Bold Typography theme */}
            <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block">
              EKOSODIN'S NUMBER ONE TECH HUB
            </span>

            {/* Main Massive Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Outfit',sans-serif] text-white tracking-tighter leading-[0.92] uppercase">
              YOUR ONE STOP <br />
              <span className="text-[#FFC700]">TECH SOLUTION.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-medium leading-relaxed">
              <strong className="text-white font-bold">{STORE_INFO.tagline}</strong> Sales of pristine UK Used & New Phones, 100% original accessories, same-day expert repairs, and student-friendly <span className="text-[#FFC700] font-bold">Pay Small Small</span> financing in Ekosodin.
            </p>

            {/* CTAs with uppercase bold typography */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreGadgets}
                className="px-8 py-3.5 rounded-md bg-[#FFC700] hover:bg-[#e6b300] text-black font-black text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 shadow-[0_0_25px_rgba(255,199,0,0.35)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Gadgets</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenFinancing}
                className="px-8 py-3.5 rounded-md bg-transparent border-2 border-white/20 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 transition-all"
              >
                <CreditCard className="w-4 h-4 text-[#FFC700]" />
                <span>Pay Small Small</span>
              </button>

              <button
                onClick={onOpenRepair}
                className="px-6 py-3.5 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 transition-all"
              >
                <Wrench className="w-4 h-4 text-[#FFC700]" />
                <span>Fix Phone</span>
              </button>
            </div>

            {/* Trust Metrics Bar matching Layout */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-gray-300">
              <div>
                <div className="text-3xl font-black text-white font-['Outfit',sans-serif] tracking-tighter">3,500+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Gadgets Sold</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-black text-white font-['Outfit',sans-serif] tracking-tighter flex items-center gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Customer Rating</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-black text-[#25D366] font-['Outfit',sans-serif] tracking-tighter">100%</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Genuine Guarantee</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md bg-[#111111] rounded-2xl p-5 sm:p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              
              {/* Badges Overlay */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFC700] text-black font-black text-[10px] uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  HOT IN EKOSODIN
                </span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Ready In-Store
                </span>
              </div>

              {/* Gadget Showcase Image */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#1A1A1A] overflow-hidden flex items-center justify-center group">
                <img 
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" 
                  alt="ProGadget Hub Tech Selection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">Top Flagship</span>
                      <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-tight">iPhone 15 Pro Max & 14</h4>
                      <p className="text-xs text-gray-300 font-medium">UK Used Grade A+ • 96%+ Battery</p>
                    </div>
                    <span className="text-xs bg-[#FFC700] text-black font-black px-2.5 py-1 rounded uppercase tracking-wider">
                      From ₦49.5k/wk
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Feature Cards */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFC700] shrink-0" />
                  <span className="text-gray-200 font-bold uppercase text-[10px] tracking-wider">30-Day Testing Warranty</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-white/5 flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="text-gray-200 font-bold uppercase text-[10px] tracking-wider">Phone Swap & Trade-In</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
                <span className="text-white">📍 Store Pickup</span>
                <span className="text-[#FFC700]">Edo Lane, Ekosodin</span>
              </div>

            </div>

          </div>

        </div>

        {/* High-Impact 4-Pillar Trust Strip directly from Design HTML */}
        <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-xl">
          <div className="flex items-center gap-3 px-5 py-4 border-r border-b sm:border-b-0 border-white/10">
            <div className="text-[#FFC700] font-black text-2xl sm:text-3xl font-['Outfit',sans-serif] tracking-tighter">100%</div>
            <div className="text-[10px] sm:text-xs text-gray-400 leading-tight uppercase font-black tracking-wider">
              Genuine <br />Products
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-4 border-b sm:border-b-0 md:border-r border-white/10">
            <div className="text-[#FFC700] font-black text-2xl sm:text-3xl font-['Outfit',sans-serif] tracking-tighter">UK</div>
            <div className="text-[10px] sm:text-xs text-gray-400 leading-tight uppercase font-black tracking-wider">
              Used & New <br />Devices
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-4 border-r border-white/10">
            <div className="text-[#FFC700] font-black text-2xl sm:text-3xl font-['Outfit',sans-serif] tracking-tighter">FIX</div>
            <div className="text-[10px] sm:text-xs text-gray-400 leading-tight uppercase font-black tracking-wider">
              Expert <br />Repairs
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-4">
            <div className="text-[#FFC700] font-black text-2xl sm:text-3xl font-['Outfit',sans-serif] tracking-tighter">FAST</div>
            <div className="text-[10px] sm:text-xs text-gray-400 leading-tight uppercase font-black tracking-wider">
              Reliable <br />Service
            </div>
          </div>
        </div>

        {/* 4 Quick Category Cards */}
        <div className="mt-14 sm:mt-18">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">
                Explore Departments
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                Featured Categories
              </h2>
            </div>
            <button 
              onClick={onExploreGadgets}
              className="text-xs font-black uppercase tracking-widest text-[#FFC700] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Phones */}
            <div 
              onClick={() => onSelectCategory('phones')}
              className="group bg-[#111111] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#FFC700] rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">DEPT 01</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#FFC700] transition-colors mt-0.5">Phones</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">Sales of New & UK Used iPhones and Samsung with warranty.</p>
                </div>
                <div className="p-3 rounded-lg bg-black text-[#FFC700] border border-white/10 group-hover:bg-[#FFC700] group-hover:text-black transition-colors shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-white/10">
                <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">Explore Phones</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Accessories */}
            <div 
              onClick={() => onSelectCategory('accessories')}
              className="group bg-[#111111] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#FFC700] rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">DEPT 02</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#FFC700] transition-colors mt-0.5">Accessories</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">Original AirPods, 20W Chargers, JBL Speakers & Powerbanks.</p>
                </div>
                <div className="p-3 rounded-lg bg-black text-[#FFC700] border border-white/10 group-hover:bg-[#FFC700] group-hover:text-black transition-colors shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-white/10">
                <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">Explore Audio & Power</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Repairs */}
            <div 
              onClick={onOpenRepair}
              className="group bg-[#111111] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#FFC700] rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">DEPT 03</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#FFC700] transition-colors mt-0.5">Expert Repairs</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">Fast screen swap, zero-cycle batteries, FaceID & motherboard fix.</p>
                </div>
                <div className="p-3 rounded-lg bg-black text-[#FFC700] border border-white/10 group-hover:bg-[#FFC700] group-hover:text-black transition-colors shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-white/10">
                <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">Book Repair Desk</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: POS & Data */}
            <div 
              onClick={() => onSelectCategory('data-pos')}
              className="group bg-[#111111] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#FFC700] rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">DEPT 04</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#FFC700] transition-colors mt-0.5">POS & Data VTU</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">Instant cash withdrawals, SIM registration & cheap SME data bundles.</p>
                </div>
                <div className="p-3 rounded-lg bg-black text-[#FFC700] border border-white/10 group-hover:bg-[#FFC700] group-hover:text-black transition-colors shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-white/10">
                <span className="text-gray-300 font-bold uppercase tracking-wider text-[11px]">View POS & Data</span>
                <ArrowRight className="w-4 h-4 text-[#FFC700] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>

        {/* Limited-Time Banner */}
        <div className="mt-8 rounded-2xl bg-[#111111] border border-[#FFC700]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left z-10">
            <span className="inline-block px-3 py-1 rounded bg-[#FFC700] text-black text-[10px] font-black uppercase tracking-widest">
              SPECIAL EKOSODIN PROMOTION
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
              Limited-Time Semester Steals!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg font-medium">
              Get an extra 5% student discount on all iPhone UK Used purchases + Free MagSafe clear case when you order or pick up at Edo Lane today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 z-10">
            <button
              onClick={onExploreGadgets}
              className="px-8 py-3.5 rounded-md bg-[#FFC700] hover:bg-[#e6b300] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,199,0,0.3)] transition-transform hover:scale-105 active:scale-95"
            >
              Shop Hot Deals
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
