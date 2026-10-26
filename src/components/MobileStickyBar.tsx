import React from 'react';
import { Phone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { academyConfig } from '../data/academyData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside aria-label="त्वरित संपर्क" className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-army-950/95 border-t border-army-700/80 backdrop-blur-md px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {academyConfig.phone && (
          <a
            href={`tel:${academyConfig.phone}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-army-800 text-slate-100 text-xs font-semibold border border-army-600 active:scale-95 transition-all"
            aria-label="अकॅडमीला कॉल करा"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>कॉल करा</span>
          </a>
        )}

        {academyConfig.whatsappNumber && (
          <a
            href={`https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent('नमस्ते, मला पोलीस व सैन्य भरती बॅचेसबद्दल माहिती हवी आहे.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
            aria-label="WhatsApp वर मेसेज करा"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        )}

        <Link
          to="/admission"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-army-950 text-xs font-bold shadow-md active:scale-95 transition-all"
        >
          <Award className="w-4 h-4" />
          <span>प्रवेश अर्ज</span>
        </Link>
      </div>
    </aside>
  );
};
