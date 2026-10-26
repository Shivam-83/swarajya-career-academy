import React from 'react';
import { academyConfig } from '../data/academyData';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light'; // Light text for dark backgrounds (navbar/footer)
  
  const badgeSizes = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <div className="flex items-center gap-3">
      {/* Authentic Monogram Wordmark Badge */}
      <div
        className={`${badgeSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center font-heading font-extrabold text-army-950 shadow-md border border-gold-300/80 tracking-tight select-none`}
        aria-hidden="true"
      >
        <span className="font-heading font-bold text-center leading-none text-army-950">
          स्वराज्य
        </span>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span
            className={`font-heading font-extrabold ${titleSizes[size]} tracking-tight leading-tight ${
              isLight ? 'text-white' : 'text-army-950'
            }`}
          >
            {academyConfig.marathiName}
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[11px] sm:text-xs font-medium tracking-wide ${
              isLight ? 'text-gold-400' : 'text-gold-700'
            }`}
          >
            तासगाव, सांगली | {academyConfig.name}
          </span>
        )}
      </div>
    </div>
  );
};
