import React, { useState } from 'react';
import { 
  CreditCard, 
  Calculator, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  UserCheck
} from 'lucide-react';
import { formatNaira, calculateInstallment } from '../utils/helpers';
import { STORE_INFO, PRODUCTS } from '../data/products';

export const FinancingCalculatorSection: React.FC = () => {
  const [selectedGadgetPrice, setSelectedGadgetPrice] = useState<number>(495000); // Default iPhone 13
  const [customPriceInput, setCustomPriceInput] = useState<string>('495000');
  const [downPercent, setDownPercent] = useState<number>(30);
  const [tenureMonths, setTenureMonths] = useState<number>(3);

  const calc = calculateInstallment(selectedGadgetPrice, downPercent, tenureMonths);

  const presetGadgets = [
    { name: 'iPhone 11 Pro Max (UK Used)', price: 365000 },
    { name: 'iPhone 13 128GB (UK Used)', price: 495000 },
    { name: 'iPhone 14 Pro (UK Used)', price: 790000 },
    { name: 'iPhone 15 Pro Max (Titanium)', price: 1180000 },
  ];

  const handleApply = () => {
    const message = `Hello ProGadget Hub Ltd! \n\nI want to apply for the *Pay Small Small Financing Plan*:\n` +
      `- Item Value: ${formatNaira(selectedGadgetPrice)}\n` +
      `- Down Payment (${downPercent}%): ${formatNaira(calc.downPayment)}\n` +
      `- Repayment Tenure: ${tenureMonths} Month(s)\n` +
      `- Estimated Weekly Installment: ${formatNaira(calc.weeklyPayment)} / week\n` +
      `- Estimated Monthly Installment: ${formatNaira(calc.monthlyPayment)} / month\n\n` +
      `Please let me know the requirements and how I can complete verification in Ekosodin!`;

    window.open(`https://wa.me/${STORE_INFO.phoneWhatsAppInternational}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="financing-section" className="py-14 sm:py-20 bg-gradient-to-b from-[#0A0A0A] via-[#12110D] to-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FFC700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
            PAY SMALL SMALL / FINANCING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
            Upgrade Your Phone. Pay In Bits.
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-medium">
            Flexible installment plans designed for UNIBEN students, corp members, and Ekosodin residents. Down payment from only 30%!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Requirements & Steps */}
          <div className="lg:col-span-5 space-y-6 w-full">
            
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4 shadow-xl w-full max-w-full">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#FFC700]" />
                <span>Simple 3-Step Ekosodin Verification</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-[#FFC700] text-black font-black flex items-center justify-center shrink-0 text-xs">1</span>
                  <div>
                    <strong className="text-white block font-black uppercase text-[11px] tracking-wide">Pick Your Desired Gadget</strong>
                    <span className="text-gray-400 font-medium">Choose any UK Used or Brand New phone from our catalog.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-[#FFC700] text-black font-black flex items-center justify-center shrink-0 text-xs">2</span>
                  <div>
                    <strong className="text-white block font-black uppercase text-[11px] tracking-wide">Pay 30% Down Payment</strong>
                    <span className="text-gray-400 font-medium">Provide basic ID (Student ID / NIN) and student hostel in Ekosodin.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-[#25D366] text-white font-black flex items-center justify-center shrink-0 text-xs">3</span>
                  <div>
                    <strong className="text-white block font-black uppercase text-[11px] tracking-wide">Collect Gadget & Spread Balance</strong>
                    <span className="text-gray-400 font-medium">Pick up phone at Edo Lane and make easy weekly or monthly transfers.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">
                Quick Select Popular Gadgets:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {presetGadgets.map((g) => (
                  <button
                    key={g.name}
                    onClick={() => {
                      setSelectedGadgetPrice(g.price);
                      setCustomPriceInput(g.price.toString());
                    }}
                    className={`p-3 rounded-lg text-left border transition-all ${
                      selectedGadgetPrice === g.price
                        ? 'bg-[#FFC700]/15 border-[#FFC700] text-white'
                        : 'bg-[#111111] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-wider truncate">{g.name}</div>
                    <div className="text-sm font-black text-[#FFC700] font-['Outfit',sans-serif] mt-0.5">{formatNaira(g.price)}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Calculator Card */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border-2 border-[#FFC700]/40 shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-6 w-full max-w-full">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-black text-[#FFC700] uppercase tracking-widest">
                    Financing Estimator
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                    Calculate Your Installment
                  </h3>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFC700]/10 text-[#FFC700] border border-[#FFC700]/30">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Price Customizer */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="total-gadget-cost" className="font-black text-gray-300 uppercase tracking-widest text-[10px]">
                    Total Gadget Cost (₦):
                  </label>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Type or adjust</span>
                </div>
                <input
                  id="total-gadget-cost"
                  type="number"
                  value={customPriceInput}
                  onChange={(e) => {
                    setCustomPriceInput(e.target.value);
                    const val = Number(e.target.value);
                    if (val > 0) setSelectedGadgetPrice(val);
                  }}
                  className="w-full bg-[#1A1A1A] border border-white/15 rounded-lg py-3 px-4 text-xl font-black text-white font-['Outfit',sans-serif] focus:outline-none focus:border-[#FFC700]"
                />
              </div>

              {/* Down Payment Controls */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="down-payment-slider" className="font-black text-gray-300 uppercase tracking-widest text-[10px]">
                    Initial Down Payment ({downPercent}%):
                  </label>
                  <strong className="text-base font-black text-[#FFC700] font-['Outfit',sans-serif]">{formatNaira(calc.downPayment)}</strong>
                </div>
                <input
                  id="down-payment-slider"
                  type="range"
                  min="30"
                  max="70"
                  step="5"
                  value={downPercent}
                  onChange={(e) => setDownPercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-black uppercase tracking-wider">
                  <span>30% (Standard)</span>
                  <span>50% (Recommended)</span>
                  <span>70% (Lowest Weekly)</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div className="space-y-2">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest block">
                  Repayment Duration:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  {[1, 3, 6].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTenureMonths(m)}
                      className={`py-2.5 rounded-lg text-xs font-black uppercase tracking-wider border transition-all ${
                        tenureMonths === m
                          ? 'bg-[#FFC700] text-black border-[#FFC700] shadow-md'
                          : 'bg-[#1A1A1A] text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {m === 1 ? 'Month (4 Wks)' : `${m} Months`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Output Highlight Box */}
              <div className="p-5 rounded-xl bg-black border border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 block font-black uppercase tracking-widest">Pay on Day 1:</span>
                  <div className="text-lg font-black text-white font-['Outfit',sans-serif] mt-0.5">
                    {formatNaira(calc.downPayment)}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 block font-black uppercase tracking-widest">Weekly Rate:</span>
                  <div className="text-lg font-black text-[#25D366] font-['Outfit',sans-serif] mt-0.5">
                    {formatNaira(calc.weeklyPayment)}/wk
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-gray-400 block font-black uppercase tracking-widest">Monthly Rate:</span>
                  <div className="text-lg font-black text-[#FFC700] font-['Outfit',sans-serif] mt-0.5">
                    {formatNaira(calc.monthlyPayment)}/mo
                  </div>
                </div>
              </div>

              {/* CTA Trigger to WhatsApp */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-6 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Apply for Financing on WhatsApp</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
