import React, { useEffect } from 'react';
import { X, ShieldCheck, CreditCard, RefreshCw, FileText, Cookie } from 'lucide-react';
import { Legal } from '../type/legal';
import { LEGAL_POLICIES } from '../data/Legal_policies';

interface LegalModalProps {
  activeTab: Legal | null;
  onClose: () => void;
  onSelectTab: (tab: Legal) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeTab,
  onClose,
  onSelectTab
}) => {
  // Close modal on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeTab) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeTab, onClose]);

  if (!activeTab) return null;

  // Retrieve policy data for current activeTab
  const currentPolicy = LEGAL_POLICIES[activeTab];

  const tabs: { id: Legal; label: string; icon: React.ReactNode }[] = [
    { id: 'bnpl', label: 'Pay Small Small', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'returns', label: 'Return Policy', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <Cookie className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#111111] border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070707]">
          <h3 className="text-lg font-black text-white font-['Outfit',sans-serif] uppercase tracking-wider">
            ProGadget Hub • Store Policies
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="flex overflow-x-auto border-b border-white/10 bg-[#0a0a0a] px-4 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3.5 text-xs font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#FFC700] text-[#FFC700] bg-white/5'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="uppercase tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-300 text-sm">
          {currentPolicy ? (
            <>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                <h4 className="text-lg font-bold text-white">{currentPolicy.title}</h4>
                <span className="text-xs text-[#FFC700] font-mono">
                  Last Updated: {currentPolicy.lastUpdated}
                </span>
              </div>

              <div className="prose prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {currentPolicy.content}
              </div>
            </>
          ) : (
            <p className="text-slate-500">No policy content found for this section.</p>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-4 border-t border-white/10 bg-[#070707] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#FFC700] text-black font-bold uppercase text-xs hover:bg-[#e6b300] transition-colors cursor-pointer"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};