import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFC700]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
            COMMUNITY FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
            Customer Reviews
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium">
            Real experiences from students, content creators, and residents in Ekosodin & UNIBEN.
          </p>
        </div>

        {/* Highlighted Testimonial Feature Card */}
        <div className="max-w-3xl mx-auto bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          <Quote className="w-10 h-10 text-[#FFC700]/20 absolute top-6 right-6 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover ring-2 ring-[#FFC700]"
              />
              <div className="absolute -bottom-2 -right-2 p-1 bg-[#25D366] text-black rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 fill-black text-white" />
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              
              {/* Star Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
                ))}
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 ml-2">5.0 Star Review</span>
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-lg text-gray-200 font-medium italic leading-relaxed">
                "{current.comment}"
              </p>

              {/* Author and item bought */}
              <div className="pt-2">
                <h4 className="text-base font-black text-white font-['Outfit',sans-serif] uppercase tracking-tight">
                  {current.name}
                </h4>
                <div className="text-xs text-gray-400 font-medium">{current.role}</div>
                <div className="inline-block mt-1.5 px-2.5 py-0.5 rounded bg-[#1A1A1A] border border-[#FFC700]/40 text-[#FFC700] text-[10px] font-black uppercase tracking-wider">
                  Verified: {current.verifiedItem}
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? 'w-6 bg-[#FFC700]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-md bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-md bg-[#FFC700] hover:bg-[#e6b300] text-black transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
