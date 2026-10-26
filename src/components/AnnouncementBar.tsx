import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';
import { academyConfig } from '../data/academyData';

export const AnnouncementBar: React.FC = () => {
  if (!academyConfig.announcement?.enabled) return null;

  return (
    <aside aria-label="नवीन घोषणा" className="bg-gradient-to-r from-army-900 via-army-800 to-army-900 text-gold-200 border-b border-gold-500/30 text-xs sm:text-sm py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-gold-500/20 text-gold-400 shrink-0">
            <Bell className="w-3.5 h-3.5 animate-pulse" />
          </span>
          <span className="font-medium text-slate-100 truncate">
            {academyConfig.announcement.text}
          </span>
        </div>
        {academyConfig.announcement.link && (
          <Link
            to={academyConfig.announcement.link}
            className="shrink-0 flex items-center gap-1 font-semibold text-gold-400 hover:text-gold-300 transition-colors underline decoration-gold-400/50 underline-offset-4"
          >
            <span>अधिक माहिती</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </aside>
  );
};
