import React from 'react';
import { ShieldCheck, RefreshCw, Lock, ExternalLink } from 'lucide-react';
import { Legal } from '../type/legal';

interface ProductTrustSectionProps {
  onOpenLegalModal: (tab: Legal) => void;
}

export const ProductTrustSection: React.FC<ProductTrustSectionProps> = ({ onOpenLegalModal }) => {
  return (
    <div className="space-y-4 pt-4 border-t border-white/10 font-sans">
      
      {/* Micro BNPL Terms Link */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-white uppercase tracking-wider">Pay Small Small Available</span>
          <span className="text-[10px] bg-[#FFC700]/20 text-[#FFC700] px-2 py-0.5 rounded font-mono font-bold">
            Installments
          </span>
        </div>
        <button
          type="button"
          onClick={() => onOpenLegalModal('bnpl')}
          className="text-xs text-[#FFC700] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
        >
          View Eligibility & Terms <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      {/* Trust Badges Row */}
      <div className="grid grid-cols-3 gap-2 pt-1 text-slate-300">
        
        {/* Warranty Badge */}
        <button
          type="button"
          onClick={() => onOpenLegalModal('returns')}
          className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex flex-col items-center text-center gap-1.5 group transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 text-[#FFC700] group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold text-white leading-tight">30-Day Testing</span>
          <span className="text-[9px] text-slate-400">View Return Rules</span>
        </button>

        {/* Protection Badge */}
        <button
          type="button"
          onClick={() => onOpenLegalModal('privacy')}
          className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex flex-col items-center text-center gap-1.5 group transition-all cursor-pointer"
        >
          <Lock className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold text-white leading-tight">NDPA Protected</span>
          <span className="text-[9px] text-slate-400">Data Privacy</span>
        </button>

        {/* Store Terms Badge */}
        <button
          type="button"
          onClick={() => onOpenLegalModal('terms')}
          className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex flex-col items-center text-center gap-1.5 group transition-all cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold text-white leading-tight">Verified Hub</span>
          <span className="text-[9px] text-slate-400">Store Policies</span>
        </button>

      </div>
    </div>
  );
};
