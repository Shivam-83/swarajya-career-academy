import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-subtle transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-army-950 hover:text-army-800 focus:outline-none focus:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-gold-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-surface-warm/40 animate-fadeIn">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
