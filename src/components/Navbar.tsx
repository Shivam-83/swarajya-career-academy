import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Shield, Award } from 'lucide-react';
import { academyConfig } from '../data/academyData';

const navLinks = [
  { name: 'मुख्यपृष्ठ', path: '/' },
  { name: 'आमच्याबद्दल', path: '/about' },
  { name: 'कोर्सेस व बॅचेस', path: '/courses' },
  { name: 'सुविधा व मैदान', path: '/facilities' },
  { name: 'यशस्वी विद्यार्थी', path: '/results' },
  { name: 'गॅलरी', path: '/gallery' },
  { name: 'भरती अपडेट्स', path: '/bharti-updates' },
  { name: 'संपर्क', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-army-800 text-white border-b border-army-700/80 shadow-md backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Academy Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-army-950 font-extrabold text-xl shadow-md border border-gold-300 transform group-hover:scale-105 transition-transform">
              <Shield className="w-7 h-7 text-army-900 fill-current" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg sm:text-xl text-white tracking-wide">
                  {academyConfig.marathiName}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                  Govt. Pattern
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-gold-400 font-medium tracking-wider">
                {academyConfig.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="मुख्य नेव्हिगेशन" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-army-900 text-gold-400 font-semibold shadow-inner border border-gold-500/30'
                      : 'text-slate-200 hover:text-white hover:bg-army-700/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {academyConfig.phone && (
              <a
                href={`tel:${academyConfig.phone}`}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-gold-300 px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-gold-500/50 transition-colors"
                title="फोन करा"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-mono">{academyConfig.phone}</span>
              </a>
            )}

            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-army-950 shadow-md hover:shadow-gold-500/20 transform hover:-translate-y-0.5 transition-all"
            >
              <Award className="w-4 h-4" />
              <span>प्रवेश अर्ज</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/admission"
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-gold-500 hover:bg-gold-400 text-army-950 transition-colors"
            >
              प्रवेश अर्ज
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-army-700 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label={isOpen ? "मेनू बंद करा" : "मेनू उघडा"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-army-950/80 backdrop-blur-sm z-30 animate-fadeIn">
          <div className="bg-army-900 border-b border-army-700 max-h-[calc(100vh-5rem)] overflow-y-auto px-4 pt-3 pb-8 shadow-2xl">
            <nav aria-label="मोबाईल नेव्हिगेशन" className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-army-800 text-gold-400 font-semibold border-l-4 border-gold-500'
                        : 'text-slate-200 hover:bg-army-800/60 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-army-800/80 flex flex-col gap-3">
              <Link
                to="/admission"
                className="w-full text-center py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 text-army-950 shadow-md text-sm"
              >
                🎓 आताच मोफत प्रवेश चौकशी करा
              </Link>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                {academyConfig.phone && (
                  <a
                    href={`tel:${academyConfig.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-army-800 text-slate-200 text-xs font-medium border border-army-700 hover:border-gold-500/40"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>कॉल करा</span>
                  </a>
                )}
                {academyConfig.whatsappNumber && (
                  <a
                    href={`https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent('नमस्ते, मला पोलीस/सैन्य भरती बॅचबद्दल चौकशी करायची आहे.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-900/60 text-emerald-300 text-xs font-medium border border-emerald-700/60 hover:bg-emerald-800/60"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
