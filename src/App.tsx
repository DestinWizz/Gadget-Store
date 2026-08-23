import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, STORE_INFO } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBanner } from './components/ServicesBanner';
import { ProductSection } from './components/ProductSection';
import { FinancingCalculatorSection } from './components/FinancingCalculatorSection';
import { TrustAndLocation } from './components/TrustAndLocation';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RepairBookingModal } from './components/RepairBookingModal';
import { DataTopUpModal } from './components/DataTopUpModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { formatNaira } from './utils/helpers';

export default function App() {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('progadget_hub_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isRepairOpen, setIsRepairOpen] = useState<boolean>(false);
  const [isDataTopUpOpen, setIsDataTopUpOpen] = useState<boolean>(false);

  // Search & Category state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('progadget_hub_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Toast timeout
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    storage?: string,
    color?: string,
    isPSS?: boolean
  ) => {
    setCart((prev) => {
      const cartItemId = `${product.id}-${storage || 'default'}-${color || 'default'}-${isPSS ? 'pss' : 'outright'}`;
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          quantity: 1,
          selectedStorage: storage,
          selectedColor: color,
          isPaySmallSmall: !!isPSS
        }
      ];
    });

    showToast(`Added ${product.name} to your bag!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFinancing = () => {
    const el = document.getElementById('financing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'repairs') {
      setIsRepairOpen(true);
    } else if (cat === 'data-pos') {
      setIsDataTopUpOpen(true);
    } else {
      scrollToProducts();
    }
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col relative selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Navbar */}
      <Navbar
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRepair={() => setIsRepairOpen(true)}
        onOpenDataTopUp={() => setIsDataTopUpOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section (combining Layout Inspiration with Brand Flyer) */}
        <Hero
          onExploreGadgets={scrollToProducts}
          onOpenFinancing={scrollToFinancing}
          onOpenRepair={() => setIsRepairOpen(true)}
          onSelectCategory={handleSelectCategory}
        />

        {/* 2. Official Brand Services Banner (6 Pillars from the flyer) */}
        <ServicesBanner
          onSelectCategory={handleSelectCategory}
          onOpenRepair={() => setIsRepairOpen(true)}
          onOpenDataTopUp={() => setIsDataTopUpOpen(true)}
        />

        {/* 3. Product & Service Grid with Categories & Installment Badges */}
        <ProductSection
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenRepair={() => setIsRepairOpen(true)}
          onOpenDataTopUp={() => setIsDataTopUpOpen(true)}
        />

        {/* 4. Pay Small Small Dedicated Calculator Section */}
        <FinancingCalculatorSection />

        {/* 5. Physical Anchor & Location Details from Flyer */}
        <TrustAndLocation />

        {/* 6. Customer Testimonials & Social Proof */}
        <Testimonials />

      </main>

      {/* Official Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenRepair={() => setIsRepairOpen(true)}
        onOpenDataTopUp={() => setIsDataTopUpOpen(true)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <RepairBookingModal
        isOpen={isRepairOpen}
        onClose={() => setIsRepairOpen(false)}
      />

      <DataTopUpModal
        isOpen={isDataTopUpOpen}
        onClose={() => setIsDataTopUpOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#161616] border border-[#FFC700] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5 text-[#FFC700]" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 px-3 py-1 rounded bg-[#FFC700] text-black text-xs font-black uppercase tracking-wider hover:bg-[#e6b300] cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}

    </div>
  );
}
