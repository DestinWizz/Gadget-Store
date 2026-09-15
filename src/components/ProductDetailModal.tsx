import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  CheckCircle2, 
  Calculator,
  Info,
  Calendar,
  Percent
} from 'lucide-react';
import { Product } from '../types';
import { formatNaira, calculateInstallment, buildProductWhatsAppUrl } from '../utils/helpers';
import { STORE_INFO } from '../data/products';
import { ProductTrustSection } from './ProductTrustSection';
import { Legal } from '../type/legal';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, storage?: string, color?: string, isPSS?: boolean) => void;
  onOpenLegalModal?: (tab: Legal) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenLegalModal
}) => {
  const [selectedStorage, setSelectedStorage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  // Pay Small Small interactive states
  const [activePlan, setActivePlan] = useState<'outright' | 'financing'>('outright');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [durationMonths, setDurationMonths] = useState<number>(3);
  const [deliveryOption, setDeliveryOption] = useState<string>('In-Store Pickup (Edo Lane, Ekosodin)');

  React.useEffect(() => {
    if (!product) return;

    setSelectedStorage(product.storageOptions ? product.storageOptions[0] : '');
    setSelectedColor(product.colorOptions ? product.colorOptions[0] : '');
    setActivePlan(product.paySmallSmallEligible ? 'financing' : 'outright');
    setDownPaymentPercent(product.minDownPaymentPercent || 30);
    setDurationMonths(3);
    setDeliveryOption('In-Store Pickup (Edo Lane, Ekosodin)');
  }, [product]);

  if (!product) return null;

  const installmentCalc = calculateInstallment(
    product.price,
    downPaymentPercent,
    durationMonths
  );

  const totalpayment = installmentCalc.downPayment + (durationMonths * installmentCalc.monthlyPayment);

  const directWhatsAppUrl = buildProductWhatsAppUrl(product, {
    storage: selectedStorage,
    color: selectedColor,
    isPaySmallSmall: activePlan === 'financing',
    downPaymentPercent,
    totalPayment: totalpayment,
    durationMonths,
    deliveryMethod: deliveryOption
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#FFC700] uppercase tracking-widest">
              {product.category.toUpperCase()} • {product.condition}
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Official ProGadget Hub Ekosodin</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-400 hover:text-white bg-[#1A1A1A] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Media Showcase */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square w-full rounded-xl bg-[#0B0B0B] border border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-black/90 text-[#FFC700] border border-[#FFC700]/40 text-[10px] font-black uppercase tracking-wider">
                    {product.condition}
                  </span>
                  {product.paySmallSmallEligible && (
                    <span className="px-2.5 py-1 rounded bg-[#FFC700] text-black text-[10px] font-black uppercase tracking-wider">
                      Pay Small Small Eligible
                    </span>
                  )}
                </div>
              </div>

              {/* Guarantees Mini Strip */}
              <div className="p-3.5 rounded-xl bg-[#161616] border border-white/10 space-y-2 text-xs font-medium">
                <div className="flex items-center gap-2 text-gray-200">
                  <ShieldCheck className="w-4 h-4 text-[#FFC700] shrink-0" />
                  <span>{product.warranty} & Verified Serial Check</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <Truck className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Same-Day Ekosodin / UNIBEN Campus Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <RotateCcw className="w-4 h-4 text-[#FFC700] shrink-0" />
                  <span>In-Store Inspection & Testing at Edo Lane</span>
                </div>
              </div>
            </div>

            {/* Product Configuration & Details */}
            <div className="md:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs mb-1">
                  <div className="flex items-center gap-1 text-gray-300">
                    <Star className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                    <span className="font-black text-white">{product.rating.toFixed(1)}</span>
                    <span className="text-gray-400 font-medium">({product.reviewsCount} customer reviews)</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <span className="text-[#25D366] font-black uppercase text-[10px] tracking-wider">Available for In-Store Pickup</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                  {product.name}
                </h1>
                
                <p className="text-sm text-gray-300 mt-2 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              {/* Storage Variants if applicable */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-gray-400 block">
                    Select Storage Capacity:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.storageOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedStorage(opt)}
                        className={`px-3.5 py-2 rounded-md text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                          selectedStorage === opt
                            ? 'bg-[#FFC700] text-black border-[#FFC700]'
                            : 'bg-[#181818] text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Variants if applicable */}
              {product.colorOptions && product.colorOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-gray-400 block">
                    Select Color Finish:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colorOptions.map((col) => (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`px-3.5 py-2 rounded-md text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                          selectedColor === col
                            ? 'bg-[#FFC700] text-black border-[#FFC700]'
                            : 'bg-[#181818] text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Mode Selector: Outright vs Pay Small Small */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-400 block">
                  Choose Payment Method:
                </label>

                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Outright Option */}
                  <button
                    type="button"
                    onClick={() => setActivePlan('outright')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      activePlan === 'outright'
                        ? 'bg-[#1F1F1F] border-[#FFC700] ring-1 ring-[#FFC700]'
                        : 'bg-[#141414] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-white">Outright Full Payment</span>
                      {activePlan === 'outright' && <CheckCircle2 className="w-4 h-4 text-[#FFC700]" />}
                    </div>
                    <div className="text-lg font-black text-[#FFC700] font-['Outfit',sans-serif] mt-1">
                      {formatNaira(product.price)}
                    </div>
                    <span className="text-[10px] text-gray-400 block mt-0.5 font-bold uppercase">Pay & collect in-store</span>
                  </button>

                  {/* Pay Small Small Option */}
                  <button
                    type="button"
                    disabled={!product.paySmallSmallEligible}
                    onClick={() => setActivePlan('financing')}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      !product.paySmallSmallEligible
                        ? 'opacity-40 cursor-not-allowed bg-[#141414] border-white/5'
                        : activePlan === 'financing'
                        ? 'bg-[#1F1F1F] border-[#FFC700] ring-1 ring-[#FFC700] cursor-pointer'
                        : 'bg-[#141414] border-white/10 hover:border-white/20 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1">
                        <CreditCard className="w-3.5 h-3.5 text-[#FFC700]" />
                        <span>Pay Small Small</span>
                      </span>
                      {activePlan === 'financing' && <CheckCircle2 className="w-4 h-4 text-[#FFC700]" />}
                    </div>
                    <div className="text-lg font-black text-[#25D366] font-['Outfit',sans-serif] mt-1">
                      from {formatNaira(installmentCalc.weeklyPayment)}/wk
                    </div>
                    <span className="text-[10px] text-gray-400 block mt-0.5 font-bold uppercase">Installment financing</span>
                  </button>

                </div>
              </div>

              {/* Pay Small Small Interactive Calculator Breakdown */}
              {activePlan === 'financing' && product.paySmallSmallEligible && (
                <div className="p-4 sm:p-5 rounded-xl bg-[#161616] border border-[#FFC700]/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#FFC700] uppercase tracking-wider flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5" />
                      Interactive Financing Calculator
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Ekosodin Scheme</span>
                  </div>

                  {/* Down Payment Slider */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label htmlFor="pdp-down-payment-slider" className="text-gray-300 font-bold uppercase text-[11px]">Initial Down Payment ({downPaymentPercent}%):</label>
                      <span className="font-black text-white text-sm">{formatNaira(installmentCalc.downPayment)}</span>
                    </div>
                    <input
                      id="pdp-down-payment-slider"
                      type="range"
                      min="30"
                      max="70"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full h-2 bg-[#2A2A2A] rounded-lg appearance-none cursor-pointer accent-[#FFC700]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase">
                      <span>30% Min</span>
                      <span>50%</span>
                      <span>70%</span>
                    </div>
                  </div>

                  {/* Duration Tenure Buttons */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-gray-300 font-bold uppercase text-[11px] block">Repayment Tenure:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 3, 6].map((months) => (
                        <button
                          key={months}
                          type="button"
                          onClick={() => setDurationMonths(months)}
                          className={`py-2 rounded-md text-xs font-black uppercase tracking-wider border transition-colors cursor-pointer ${
                            durationMonths === months
                              ? 'bg-[#FFC700] text-black border-[#FFC700]'
                              : 'bg-black/40 text-gray-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {months} {months === 1 ? 'Month' : 'Months'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Breakdown Summary Grid */}
                  <div className="pt-2 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-black/50 border border-white/5">
                      <span className="text-gray-400 block text-[10px] font-black uppercase">Down Payment (Day 1):</span>
                      <strong className="text-white font-black text-sm block mt-0.5">{formatNaira(installmentCalc.downPayment)}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/50 border border-white/5">
                      <span className="text-gray-400 block text-[10px] font-black uppercase">Weekly Installment:</span>
                      <strong className="text-[#25D366] font-black text-sm block mt-0.5">{formatNaira(installmentCalc.weeklyPayment)} / wk</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 col-span-2 sm:col-span-1">
                      <span className="text-gray-400 block text-[10px] font-black uppercase">Monthly Installment:</span>
                      <strong className="text-[#FFC700] font-black text-sm block mt-0.5">{formatNaira(installmentCalc.monthlyPayment)} / mo</strong>
                    </div>

                    {/*Cumulative Payment*/}

                    <div className="p-2.5 rounded-lg bg-black/50 border border-[#FFC700]/30">
                    <span className="text-gray-400 block text-[10px] font-black uppercase"> Total Cumulative Payout:
                    </span>
                    <strong className="text-white font-black text-sm block mt-0.5">{formatNaira(totalpayment)}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 leading-snug font-medium">
                    Simple documentation: Valid Student ID or Govt ID + Proof of address in Ekosodin / UNIBEN. Pick up gadget after down payment verification at Edo Lane!
                  </p>
                </div>
              )}

              {/* Delivery / Pickup Choice */}
              <div className="space-y-1.5">
                <label htmlFor="pdp-delivery-option" className="text-xs font-black uppercase tracking-wider text-gray-400 block">
                  Delivery / Collection Preference:
                </label>
                <select
                  id="pdp-delivery-option"
                  value={deliveryOption}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-white/15 rounded-md py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#FFC700] font-medium"
                >
                  <option value="In-Store Pickup (Edo Lane, Ekosodin)">In-Store Pickup at Edo Lane off Edo Street, Ekosodin</option>
                  <option value="UNIBEN Campus Delivery (Hostel / Faculty)">UNIBEN Campus Delivery (Hostel / Faculty)</option>
                  <option value="Ekosodin Express Doorstep Delivery">Ekosodin Express Doorstep Delivery</option>
                  <option value="Benin City Metropolis Delivery (Pay on Delivery)">Benin City Metropolis Delivery (Pay on Delivery)</option>
                </select>
              </div>

              {/* Final CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                
                {/* Direct WhatsApp Order */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>
                    {activePlan === 'financing' ? 'Apply on WhatsApp' : 'Order via WhatsApp'}
                  </span>
                </a>

                {/* Add To Cart */}
                <button
                  onClick={() => {
                    onAddToCart(product, selectedStorage, selectedColor, activePlan === 'financing');
                    onClose();
                  }}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-md bg-[#FFC700] hover:bg-[#e6b300] text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

              </div>

              <ProductTrustSection onOpenLegalModal={(tab) => onOpenLegalModal?.(tab)} />

            </div>

          </div>

          {/* Technical Specs Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="text-sm font-black text-white font-['Outfit',sans-serif] uppercase tracking-wider">
                Full Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="p-3 rounded-lg bg-[#161616] border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-bold uppercase text-[11px]">{key}:</span>
                    <span className="text-white font-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
