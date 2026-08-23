import React from 'react';
import { 
  Eye, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  CreditCard 
} from 'lucide-react';
import { Product } from '../types';
import { formatNaira, calculateInstallment, buildProductWhatsAppUrl } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart
}) => {
  const pss = calculateInstallment(product.price, product.minDownPaymentPercent || 30, 3);
  const directWhatsAppUrl = buildProductWhatsAppUrl(product);

  const isUKUsed = product.condition === 'UK Used';
  const isBrandNew = product.condition === 'Brand New';

  return (
    <div className="group relative bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#FFC700] rounded-xl p-4 flex flex-col justify-between transition-all duration-300 shadow-lg">
      
      {/* Top Media & Badges Container */}
      <div>
        <div className="relative w-full aspect-square bg-[#1A1A1A] rounded-lg overflow-hidden mb-3.5 flex items-center justify-center">
          
          {/* Main Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Badges on Top Left */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {isUKUsed && (
              <span className="px-2 py-0.5 rounded bg-black/90 text-[#FFC700] border border-[#FFC700]/50 text-[9px] font-black uppercase tracking-widest">
                UK Used Grade A+
              </span>
            )}
            {isBrandNew && (
              <span className="px-2 py-0.5 rounded bg-[#25D366] text-white text-[9px] font-black uppercase tracking-widest">
                Brand New Sealed
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2 py-0.5 rounded bg-[#FFC700] text-black text-[9px] font-black uppercase tracking-widest self-start">
                Top Seller
              </span>
            )}
          </div>

          {/* Quick View Hover Button */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-3">
            <button
              onClick={() => onQuickView(product)}
              className="px-4 py-2 rounded-md bg-white text-black font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xl hover:bg-[#FFC700] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>

        </div>

        {/* Rating & Stock Status */}
        <div className="flex items-center justify-between text-xs mb-1.5">
          <div className="flex items-center gap-1 text-gray-300">
            <Star className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
            <span className="font-black text-white">{product.rating.toFixed(1)}</span>
            <span className="text-gray-500 font-bold text-[11px]">({product.reviewsCount})</span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#25D366]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
            <span>Ekosodin In-Stock</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 
          onClick={() => onQuickView(product)}
          className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#FFC700] transition-colors line-clamp-1 cursor-pointer"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Short Specs / Subtitle */}
        <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

      </div>

      {/* Pricing & Installment Section */}
      <div className="mt-4 pt-3 border-t border-white/10 space-y-3">
        
        {/* Outright Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wider">Outright Price:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-black font-['Outfit',sans-serif] text-white tracking-tighter">
                {formatNaira(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-gray-500 line-through font-bold">
                  {formatNaira(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Warranty tag */}
          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest bg-[#1A1A1A] border border-white/10 px-2 py-1 rounded">
            {product.warranty}
          </span>
        </div>

        {/* Pay Small Small / Financing Pill */}
        {product.paySmallSmallEligible && (
          <div 
            onClick={() => onQuickView(product)}
            className="cursor-pointer p-2 rounded-md bg-[#1A1A1A] border border-[#FFC700]/30 hover:border-[#FFC700] transition-colors flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-1.5 text-[#FFC700] font-black uppercase tracking-wider text-[10px]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Small Small:</span>
            </div>
            <span className="font-black text-white text-[11px]">
              from {formatNaira(pss.weeklyPayment)}/wk
            </span>
          </div>
        )}

        {/* Conversion Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          
          {/* Add to Cart */}
          <button
            onClick={() => onAddToCart(product)}
            className="py-2.5 px-3 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#FFC700]" />
            <span>Add to Cart</span>
          </button>

          {/* Direct WhatsApp Order */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-md bg-[#25D366] hover:bg-[#20bd5b] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(37,211,102,0.2)] transition-all"
            title="Order directly via WhatsApp to 07055100195"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

        </div>

      </div>

    </div>
  );
};

