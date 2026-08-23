import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showTagline = false }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13'
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none">
      {/* Stylized PG Emblem matching flyer icon */}
      <div className={`relative ${iconSizes[size]} rounded-lg bg-black border-2 border-[#FFC700] flex items-center justify-center shadow-[0_0_15px_rgba(255,199,0,0.25)] group-hover:shadow-[0_0_22px_rgba(255,199,0,0.5)] transition-all duration-300`}>
        <span className="font-['Outfit',sans-serif] font-black text-[#FFC700] text-sm sm:text-base tracking-tighter leading-none flex items-baseline">
          P<span className="text-white">G</span>
        </span>
        <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FFC700] ring-2 ring-black"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-['Outfit',sans-serif] font-black text-white tracking-tighter uppercase ${textSizes[size]}`}>
            PRO<span className="text-[#FFC700]">GADGET</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#FFC700] text-black">
            HUB LTD
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
            Smart Gadgets • Reliable Services • Maximum Value
          </span>
        )}
      </div>
    </div>
  );
};

