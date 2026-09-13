import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Smartphone, 
  Headphones, 
  Wrench, 
  Zap, 
  Layers, 
  Search, 
  Check,
  ArrowUpDown,
  Filter,
  CreditCard
} from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenRepair: () => void;
  onOpenDataTopUp: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onQuickView,
  onAddToCart,
  onOpenRepair,
  onOpenDataTopUp
}) => {
  const [conditionFilter, setConditionFilter] = useState<'all' | 'UK Used' | 'Brand New' | 'Repair Service'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlyFinancing, setOnlyFinancing] = useState(false);

  const categories = [
    { id: 'all', label: 'All Catalog', icon: Layers },
    { id: 'phones', label: 'Phones (New & UK Used)', icon: Smartphone },
    { id: 'accessories', label: 'Original Accessories', icon: Headphones },
    { id: 'repairs', label: 'Expert Repairs', icon: Wrench },
    { id: 'data-pos', label: 'Data & POS', icon: Zap },
  ];

  // Filter and sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Condition match
      if (conditionFilter !== 'all' && p.condition !== conditionFilter) {
        return false;
      }

      // Financing toggle
      if (onlyFinancing && !p.paySmallSmallEligible) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesCondition = p.condition.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesCondition) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default featured
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [products, selectedCategory, conditionFilter, onlyFinancing, searchQuery, sortBy]);

  // Best Sellers subset (matching Image 1 layout)
  const bestSellers = useMemo(() => {
    return products.filter(p => p.isBestSeller).slice(0, 4);
  }, [products]);

  return (
    <section id="products-section" className="py-14 sm:py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
            PROGADGET HUB CATALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
            Smart Tech. Honest Rates.
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium">
            Every UK Used device comes tested with 30-day warranty & free screen protector in Ekosodin.
          </p>
        </div>

        {/* Category Tabs (High Converting Filter Bar) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFC700] text-black shadow-[0_0_15px_rgba(255,199,0,0.3)] scale-[1.02]'
                    : 'bg-[#161616] hover:bg-[#202020] text-gray-300 border border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#FFC700]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search, Secondary Filter & Sort Controls */}
        <div className="mt-6 p-4 rounded-xl bg-[#111111] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Quick Condition & Financing Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#FFC700]" /> FILTER:
            </span>

            <button
              onClick={() => setConditionFilter('all')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-colors ${
                conditionFilter === 'all'
                  ? 'bg-white text-black'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setConditionFilter('UK Used')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-colors ${
                conditionFilter === 'UK Used'
                  ? 'bg-[#FFC700] text-black'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
              }`}
            >
              UK Used
            </button>

            <button
              onClick={() => setConditionFilter('Brand New')}
              className={`px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-colors ${
                conditionFilter === 'Brand New'
                  ? 'bg-[#25D366] text-white'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
              }`}
            >
              Brand New
            </button>

            <button
              onClick={() => setOnlyFinancing(!onlyFinancing)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors border ${
                onlyFinancing
                  ? 'bg-[#FFC700]/20 border-[#FFC700] text-[#FFC700]'
                  : 'bg-[#1A1A1A] border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3 h-3" />
              <span>Pay Small Small</span>
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest hidden sm:inline">SORT:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#1A1A1A] border border-white/15 rounded-md px-3 py-1.5 text-xs text-white font-bold uppercase tracking-wider focus:outline-none focus:border-[#FFC700] cursor-pointer"
              >
                <option value="featured">Featured / Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Search status notification */}
        {searchQuery && (
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400 px-1 font-medium">
            <span>Showing results for "{searchQuery}"</span>
            <button 
              onClick={() => onSearchChange('')}
              className="text-[#FFC700] font-black uppercase tracking-wider hover:underline"
            >
              RESET SEARCH
            </button>
          </div>
        )}

        {/* Main Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-12 text-center py-16 px-4 rounded-2xl bg-[#111111] border border-white/10 max-w-lg mx-auto">
            <Search className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-black text-white uppercase tracking-tight">No Matching Gadgets Found</h3>
            <p className="text-xs text-gray-400 mt-1 mb-6 font-medium">
              We may still have it in our physical store inventory at Edo Lane, Ekosodin!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setConditionFilter('all');
                  setOnlyFinancing(false);
                  onSearchChange('');
                }}
                className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-colors"
              >
                Clear Filters
              </button>
              <a
                href={`https://wa.me/2347055100195?text=${encodeURIComponent(`Hello ProGadget Hub! I'm looking for a specific gadget (${searchQuery || 'custom item'}). Do you have it in stock in Ekosodin?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md bg-[#25D366] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Ask Desk on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Quick Department Action Banners (Repairs & POS Highlights) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Repair Callout Banner */}
          <div className="rounded-2xl bg-[#111111] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="inline-block px-2.5 py-1 rounded bg-[#FFC700] text-black text-[10px] font-black uppercase tracking-widest mb-3">
                EXPERT LAB BENCH
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                Phone Screen or Battery Issue?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-medium">
                Same-day repair while you wait at Edo Lane. We handle OLED screen replacements, zero-cycle batteries, FaceID restoration, and micro-soldering IC diagnostics.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenRepair}
                className="px-6 py-3 rounded-md bg-[#FFC700] hover:bg-[#e6b300] text-black font-black text-xs uppercase tracking-widest transition-all"
              >
                Book Repair Desk
              </button>
              <a
                href="tel:09044071621"
                className="px-5 py-3 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest"
              >
                Call Tech
              </a>
            </div>
          </div>

          {/* POS & Data Callout Banner */}
          <div className="rounded-2xl bg-[#111111] border border-[#25D366]/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="inline-block px-2.5 py-1 rounded bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest mb-3">
                INSTANT VTU & POS
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
                Buy SME Data & Cashout at POS
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-medium">
                Cheapest MTN, Airtel, Glo data bundles delivered instantly to your line. Plus always-available mint cash withdrawals with low transaction charges.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenDataTopUp}
                className="px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(37,211,102,0.2)]"
              >
                Top-Up Data
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('location-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest"
              >
                Visit POS
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
