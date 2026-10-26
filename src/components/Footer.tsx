import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import { academyConfig } from '../data/academyData';
import { Logo } from './Logo';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-army-950 text-slate-300 border-t border-army-800 pt-16 pb-24 lg:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block" aria-label={`${academyConfig.marathiName} मुख्यपृष्ठ`}>
              <Logo size="sm" variant="light" />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {academyConfig.marathiTagline}. शारीरिक चाचणी (Ground) आणि लेखी परीक्षेची परिपूर्ण शास्त्रोक्त पूर्वतयारी.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-army-900/80 border border-gold-500/20 text-xs text-gold-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>नवीन बॅचेस प्रवेश सुरू</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide flex items-center gap-2 border-l-2 border-gold-500 pl-2">
              महत्त्वाच्या लिंक्स
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>अकॅडमीबद्दल माहिती</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>सर्व कोर्सेस व बॅचेस</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>मैदान व हॉस्टेल सुविधा</span>
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>यशस्वी विद्यार्थी अनुभव</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>फोटो व व्हिडिओ गॅलरी</span>
                </Link>
              </li>
              <li>
                <Link to="/bharti-updates" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>शासकीय भरती अपडेट्स</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide flex items-center gap-2 border-l-2 border-gold-500 pl-2">
              प्रमुख बॅचेस
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/courses/police-bharti" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>महाराष्ट्र पोलीस शिपाई बॅच</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/army-bharti" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>भारतीय सैन्य अग्निवीर GD बॅच</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>फक्त मैदानी (Ground) प्रशिक्षण बॅच</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>लेखी परीक्षा फाउंडेशन बॅच</span>
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors font-medium text-gold-400">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>प्रवेश अर्ज व चौकशी</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Working Hours */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide flex items-center gap-2 border-l-2 border-gold-500 pl-2">
              संपर्क व पत्ता
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{academyConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${academyConfig.phone}`} className="hover:text-gold-400 font-mono transition-colors">
                  {academyConfig.phone}
                </a>
              </div>
              {academyConfig.whatsappNumber && (
                <div className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`https://wa.me/${academyConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition-colors"
                  >
                    WhatsApp चॅट सुरू करा
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${academyConfig.email}`} className="hover:text-gold-400 truncate transition-colors">
                  {academyConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{academyConfig.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="mt-12 pt-6 border-t border-army-800/80">
          <div className="p-3 rounded-lg bg-army-900/60 border border-army-800 text-xs text-slate-400 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <p>
              <strong>पारदर्शक घोषणा:</strong> ही संस्था महाराष्ट्र पोलीस व सैन्य भरती पूर्व तयारी करून देणारी खाजगी अकॅडमी आहे. आम्ही कोणत्याही शासकीय भरतीमध्ये निवडीची १००% हमी देत नाही; विद्यार्थ्यांची मेहनत व गुणवत्ता यावरच त्यांचे यश अवलंबून असते.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {academyConfig.name}. सर्व हक्क राखीव.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">
              गोपनीयता धोरण (Privacy)
            </Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">
              नियम व अटी (Terms)
            </Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">
              नकाशा व दिशा
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
