import React from 'react';
import { galleryItemsData } from '../data/academyData';
import { GalleryLightbox } from '../components/GalleryLightbox';

export const GalleryPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>फोटो व व्हिडिओ गॅलरी</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          अकॅडमीतील दैनंदिन सराव व क्षणचित्रे
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          क्रीडांगणावरील घाम, वर्गखोलीतील एकाग्रता आणि विद्यार्थ्यांच्या यशाचे सोहळे.
        </p>
      </section>

      {/* Gallery with Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryLightbox items={galleryItemsData} />
      </section>

    </div>
  );
};
