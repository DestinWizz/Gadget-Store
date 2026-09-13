import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-[#0C0C0C] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#FFC700] text-xs font-black tracking-[0.3em] uppercase block mb-2">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit',sans-serif] text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-medium">
            Everything you need to know about our devices, physical inspection, warranties, and payment pathways.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FFC700] shrink-0" />
                    <span className="text-sm font-bold text-white uppercase tracking-wide leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#FFC700] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 font-medium leading-relaxed border-t border-white/5 bg-[#141414]/50 animate-in fade-in slide-in-from-top-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
