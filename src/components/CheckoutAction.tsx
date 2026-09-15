import React, { useState } from 'react';
import { MessageSquare, ShieldCheck } from 'lucide-react';
import { Legal } from '../type/legal';

interface CheckoutActionProps {
  onOpenLegalModal: (tab: Legal) => void;
  onProceedToWhatsApp: () => void;
}

export const CheckoutAction: React.FC<CheckoutActionProps> = ({
  onOpenLegalModal,
  onProceedToWhatsApp
}) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="space-y-4 pt-4 border-t border-white/10 font-sans">
      
      {/* Checkbox Acceptance Trigger */}
      <label className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer select-none group">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="w-4 h-4 mt-0.5 accent-[#FFC700] rounded cursor-pointer shrink-0"
        />
        <span className="text-xs text-slate-300 leading-relaxed">
          I have read and agree to ProGadget Hub's{' '}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLegalModal('terms');
            }}
            className="text-[#FFC700] underline font-semibold hover:text-[#e6b300]"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLegalModal('returns');
            }}
            className="text-[#FFC700] underline font-semibold hover:text-[#e6b300]"
          >
            Return Policy
          </button>
          .
        </span>
      </label>

      {/* Main WhatsApp Order Trigger */}
      <button
        type="button"
        disabled={!agreedToTerms}
        onClick={onProceedToWhatsApp}
        className={`w-full py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
          agreedToTerms
            ? 'bg-[#25D366] hover:bg-[#20bd5a] text-black cursor-pointer shadow-emerald-950/40'
            : 'bg-white/10 text-slate-500 cursor-not-allowed border border-white/5'
        }`}
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>Complete Order on WhatsApp</span>
      </button>

      {/* NDPA Security Footer Note */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Pre-dispatch video verification & NDPA data protection active</span>
      </div>

    </div>
  );
};
