import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  Tag, 
  Truck, 
  MapPin, 
  CreditCard,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';
import { formatNaira, buildCartWhatsAppUrl } from '../utils/helpers';
import { STORE_INFO } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [deliveryMethod, setDeliveryMethod] = useState<string>('In-Store Pickup (Edo Lane, Ekosodin)');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.05) : 0;
  const grandTotal = subtotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'UNIBEN5' || couponCode.trim().toUpperCase() === 'EKOSODIN') {
      setDiscountApplied(true);
    } else {
      alert('Invalid promo code. Try "UNIBEN5" for 5% student discount!');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const url = buildCartWhatsAppUrl(
      items,
      grandTotal,
      deliveryMethod,
      customerName,
      customerAddress,
      discountApplied
    );
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Top Header */}
          <div className="px-6 py-5 bg-[#161616] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#FFC700]" />
              <h2 className="text-sm font-black font-['Outfit',sans-serif] text-white uppercase tracking-wider">
                Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-gray-400 hover:text-white bg-[#1A1A1A] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] mx-auto flex items-center justify-center text-gray-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight">Your Bag is Empty</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto font-medium">
                  Explore our UK Used iPhones, Samsung flagships, and original accessories in Ekosodin!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 rounded-md bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-gray-400 pb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest">Selected Products:</span>
                  <button 
                    onClick={onClearCart}
                    className="text-red-400 hover:underline text-[10px] font-black uppercase tracking-wider cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#181818] border border-white/10 flex gap-3 items-center justify-between"
                  >
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-14 h-14 rounded-lg object-cover bg-black shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-black uppercase text-white truncate">
                        {item.product.name}
                      </h4>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {item.selectedStorage && (
                          <span className="text-[9px] font-black uppercase bg-[#1A1A1A] text-gray-300 px-1.5 py-0.5 rounded">
                            {item.selectedStorage}
                          </span>
                        )}
                        {item.isPaySmallSmall && (
                          <span className="text-[9px] bg-[#FFC700]/20 text-[#FFC700] px-1.5 py-0.5 rounded font-black uppercase">
                            Pay Small Small
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-black text-[#FFC700] font-['Outfit',sans-serif] mt-1">
                        {formatNaira(item.product.price * item.quantity)}
                      </div>
                    </div>

                    {/* Quantity Modifier */}
                    <div className="flex items-center gap-1.5 bg-black p-1 rounded-md border border-white/10 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 text-gray-400 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-black text-white px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 text-gray-400 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove item */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-gray-500 hover:text-red-400 ml-1 shrink-0 cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Promo Code Box */}
                <div className="pt-2">
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="PROMO CODE (E.G. UNIBEN5)"
                      className="flex-1 bg-[#181818] border border-white/10 rounded-md px-3 py-2 text-xs text-white uppercase placeholder-gray-500 focus:outline-none focus:border-[#FFC700] font-bold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {discountApplied && (
                    <span className="text-[10px] font-black uppercase text-[#25D366] block mt-1">
                      ✓ 5% Student Promo Discount Applied!
                    </span>
                  )}
                </div>

                {/* Delivery Preference */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest block">
                    Delivery / Pickup in Ekosodin:
                  </label>
                  <select
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="w-full bg-[#181818] border border-white/10 rounded-md py-2 px-3 text-xs text-white focus:outline-none focus:border-[#FFC700] font-medium"
                  >
                    <option value="In-Store Pickup (Edo Lane, Ekosodin)">📍 In-Store Pickup at Edo Lane off Edo Street, Ekosodin</option>
                    <option value="UNIBEN Campus Delivery (Hall / Faculty)">🎓 UNIBEN Campus Delivery (Hostel / Faculty)</option>
                    <option value="Ekosodin Express Doorstep Delivery">🚚 Ekosodin Express Doorstep Delivery</option>
                    <option value="Benin City Metropolis Delivery">🏙️ Benin City Metropolis Delivery</option>
                  </select>
                </div>

                {/* Optional Customer Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (Optional)"
                    className="bg-[#181818] border border-white/10 rounded-md py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC700]"
                  />
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Hostel / Address"
                    className="bg-[#181818] border border-white/10 rounded-md py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC700]"
                  />
                </div>
              </>
            )}

          </div>

          {/* Drawer Bottom Footer (Summary & WhatsApp Checkout) */}
          {items.length > 0 && (
            <div className="p-6 bg-[#161616] border-t border-white/10 space-y-4">
              
              {/* Financial Calculation */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400 font-medium">
                  <span className="uppercase text-[10px] font-black tracking-wider">Subtotal:</span>
                  <span className="text-white font-black">{formatNaira(subtotal)}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-[#25D366] font-medium">
                    <span className="uppercase text-[10px] font-black tracking-wider">Student Discount (5%):</span>
                    <span className="font-black">-{formatNaira(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400 font-medium">
                  <span className="uppercase text-[10px] font-black tracking-wider">Ekosodin Pickup Fee:</span>
                  <span className="text-[#25D366] font-black uppercase text-[10px]">FREE</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase tracking-wider text-white">Estimated Total:</span>
                  <span className="text-xl font-black text-[#FFC700] font-['Outfit',sans-serif]">
                    {formatNaira(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-6 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Order to WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-gray-400 font-black uppercase tracking-wider">
                🔒 Instant desk response (07055100195)
              </p>

            </div>
          )}

        </div>
      </div>

    </div>
  );
};
