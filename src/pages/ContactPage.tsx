import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { academyConfig } from '../data/academyData';
import { EnquiryForm } from '../components/EnquiryForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>संपर्क व पत्ता</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          अकॅडमीला थेट भेट द्या किंवा संपर्क साधा
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          आमचे करिअर मार्गदर्शक तुमच्या सर्व शंकांचे निरसन करण्यासाठी तत्पर आहेत.
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-army-50 text-army-900 flex items-center justify-center mb-4 border border-army-100">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-heading font-bold text-base text-army-950 mb-1">
                अकॅडमीचा पत्ता
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {academyConfig.address}
              </p>
            </div>
            {academyConfig.mapUrl && (
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={academyConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-army-800 hover:text-army-950"
                >
                  <span>Google Maps वर पहा</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-600" />
                </a>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-army-50 text-army-900 flex items-center justify-center mb-4 border border-army-100">
                <Phone className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-heading font-bold text-base text-army-950 mb-1">
                फोन व हेल्पलाइन
              </h3>
              <p className="text-xs text-slate-500 mb-2">थेट प्रवेश समन्वयकांशी संपर्क साधा</p>
              <a
                href={`tel:${academyConfig.phone}`}
                className="font-mono text-base font-bold text-army-900 hover:text-gold-600 block transition-colors"
              >
                {academyConfig.phone}
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">सकाळी ०६ ते रात्री ०८ उपलब्ध</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-100">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-heading font-bold text-base text-army-950 mb-1">
                WhatsApp हेल्पलाइन
              </h3>
              <p className="text-xs text-slate-500 mb-3">बॅच व शुल्काची माहिती मिळवा</p>
              <a
                href={`https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent('नमस्ते, मला पोलीस भरती बॅचची माहिती हवी आहे.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow hover:bg-emerald-500 transition-colors"
              >
                <span>चॅट सुरू करा</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">त्वरित प्रतिसाद</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-army-50 text-army-900 flex items-center justify-center mb-4 border border-army-100">
                <Clock className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-heading font-bold text-base text-army-950 mb-1">
                कार्यालयीन वेळ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {academyConfig.workingHours}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-xs text-emerald-600 font-semibold">आठवड्याचे सर्व दिवस खुले</span>
            </div>
          </div>

        </div>
      </section>

      {/* Map Embed Placeholder & Enquiry Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Map Preview */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading font-bold text-xl text-army-950">
              अकॅडमीचे ठिकाण (Location Map)
            </h3>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card bg-army-950 h-80 relative flex items-center justify-center text-center p-6 text-white group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="नकाशा पार्श्वभूमी"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold-500 text-army-950 flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">
                  {academyConfig.marathiName}
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  {academyConfig.address}
                </p>
                {academyConfig.mapUrl && (
                  <a
                    href={academyConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-army-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <span>Google Maps वर दिशानिर्देश मिळवा</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </section>

    </div>
  );
};
