import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send, RotateCcw, ShieldCheck, Info } from 'lucide-react';
import { AdmissionFormData } from '../types';
import { coursesData } from '../data/academyData';

export const EnquiryForm: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    fullName: '',
    mobileNumber: '',
    courseInterest: 'police-bharti',
    preferredBatch: 'morning',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'कृपया तुमचे पूर्ण नाव टाका.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'नाव किमान ३ अक्षरांचे असावे.';
    }

    const phoneClean = formData.mobileNumber.replace(/\D/g, '');
    if (!phoneClean) {
      newErrors.mobileNumber = 'कृपया १० अंकी मोबाईल नंबर टाका.';
    } else if (!/^[6-9]\d{9}$/.test(phoneClean)) {
      newErrors.mobileNumber = 'कृपया वैध १० अंकी भारतीय मोबाईल नंबर टाका (उदा. 9876543210).';
    }

    if (!formData.courseInterest) {
      newErrors.courseInterest = 'कृपया इच्छित कोर्स निवडा.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Prototype only: Explicitly NO backend, no API request, no persistence
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      courseInterest: 'police-bharti',
      preferredBatch: 'morning',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-card ${compact ? 'p-6' : 'p-6 sm:p-10'}`}>
      
      {/* Prototype Badge */}
      <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
        <span>डेमो आवृत्ती — क्लायंट-साइड व्हॅलिडेशन प्रोटोटाईप</span>
      </div>

      <div className="mb-6">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-army-950">
          प्रवेश चौकशी व मोफत समुपदेशन
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          तुमची माहिती भरा, आमचे करिअर मार्गदर्शक भरती प्रक्रियेबाबत योग्य मार्गदर्शन करतील.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-4 animate-fadeIn">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-base text-emerald-900">
                फॉर्म व्हॅलिडेशन यशस्वी (Demo Only)!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                तुमचा फॉर्म क्लायंट-साइडवर यशस्वीपणे तपासला गेला आहे. ही केवळ <strong>फ्रंटएंड प्रोटोटाईप आवृत्ती</strong> आहे. कोणताही डेटा सर्व्हरवर पाठवला किंवा सेव्ह केला गेलेला नाही.
              </p>
            </div>
          </div>

          <div className="p-3 bg-white/80 rounded-lg text-xs space-y-1 border border-emerald-100 text-slate-700">
            <div><strong>नाव:</strong> {formData.fullName}</div>
            <div><strong>मोबाईल:</strong> {formData.mobileNumber}</div>
            <div><strong>कोर्स:</strong> {coursesData.find(c => c.id === formData.courseInterest)?.marathiTitle || formData.courseInterest}</div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>पुन्हा नवीन अर्ज भरा</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
              विद्यार्थ्याचे पूर्ण नाव <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="उदा. राहुल प्रकाश गायकवाड"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-slate-300 focus:border-army-800 focus:ring-army-200'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-700 mb-1">
              १० अंकी मोबाईल नंबर <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-mono">+91</span>
              <input
                id="mobileNumber"
                type="tel"
                maxLength={10}
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                placeholder="98XXXXXXXX"
                className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 font-mono focus:outline-none focus:ring-2 transition-all ${
                  errors.mobileNumber ? 'border-red-400 focus:ring-red-300 bg-red-50/20' : 'border-slate-300 focus:border-army-800 focus:ring-army-200'
                }`}
              />
            </div>
            {errors.mobileNumber && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.mobileNumber}</span>
              </p>
            )}
          </div>

          {/* Course Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="courseInterest" className="block text-xs font-semibold text-slate-700 mb-1">
                कोणत्या भरतीसाठी प्रवेश हवा आहे? <span className="text-red-500">*</span>
              </label>
              <select
                id="courseInterest"
                value={formData.courseInterest}
                onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-army-800 focus:ring-2 focus:ring-army-200 bg-white"
              >
                {coursesData.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.marathiTitle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredBatch" className="block text-xs font-semibold text-slate-700 mb-1">
                सोयीची बॅच वेळ
              </label>
              <select
                id="preferredBatch"
                value={formData.preferredBatch}
                onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-army-800 focus:ring-2 focus:ring-army-200 bg-white"
              >
                <option value="morning">सकाळची बॅच (मैदान: ०५:४५)</option>
                <option value="evening">संध्याकाळची बॅच (मैदान: ०५:००)</option>
                <option value="full-day">पूर्णवेळ निवासी (Hostel Batch)</option>
              </select>
            </div>
          </div>

          {/* Message / Query */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
              काही विशेष शंका किंवा संदेश (पर्यायी)
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="उदा. माझी उंची १६५ सेमी आहे, मला हॉस्टेलची गरज आहे..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-army-800 focus:ring-2 focus:ring-army-200"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-bold bg-gradient-to-r from-army-800 to-army-900 hover:from-army-700 hover:to-army-800 text-gold-300 shadow-lg flex items-center justify-center gap-2 transform active:scale-[0.99] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>चौकशी अर्ज सादर करा (Demo Submit)</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>तुमचा डेटा १००% सुरक्षित राहील. स्पॅम केला जाणार नाही.</span>
          </p>

        </form>
      )}

    </div>
  );
};
