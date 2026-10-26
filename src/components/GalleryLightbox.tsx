import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['All', 'Ground', 'Classroom', 'Hostel', 'Events'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handleClose = () => setSelectedIndex(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Scroll lock
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-army-800 text-gold-300 shadow-md border border-gold-500/40'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat === 'All' ? 'सर्व फोटो' : cat === 'Ground' ? 'मैदान (Ground)' : cat === 'Classroom' ? 'वर्गखोली' : cat === 'Hostel' ? 'वसतिगृह' : 'समारंभ (Events)'}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-lifted border border-slate-200 bg-army-950 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-army-950/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-gold-400" />
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-army-900/90 px-2 py-0.5 rounded border border-gold-500/30">
                {item.category}
              </span>
              <h4 className="font-heading font-semibold text-white text-sm mt-1.5 line-clamp-2">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="फोटो व्ह्यूवर"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors z-10"
            aria-label="फोटो बंद करा"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors z-10"
            aria-label="मागील फोटो"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors z-10"
            aria-label="पुढील फोटो"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={filteredItems[selectedIndex].image}
              alt={filteredItems[selectedIndex].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center text-white max-w-lg">
              <h3 className="font-heading font-bold text-base sm:text-lg text-gold-300">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredItems[selectedIndex].alt} ({selectedIndex + 1} / {filteredItems.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
