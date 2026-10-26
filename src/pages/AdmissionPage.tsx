import React from 'react';
import { Award, CheckCircle2, FileText, Phone, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { EnquiryForm } from '../components/EnquiryForm';
import { academyConfig } from '../data/academyData';

export const AdmissionPage: React.FC = () => {
  const steps = [
    {
      num: '०१',
      title: 'ऑनलाइन चौकशी किंवा थेट भेट',
      desc: 'खालील फॉर्म भरून नोंदणी करा किंवा अकॅडमी कार्यालयात येऊन प्रशिक्षकांशी चर्चा करा.',
    },
    {
      num: '०२',
      title: 'प्राथमिक शारीरिक व उंची चाचणी',
      desc: 'शासकीय निकषांनुसार उंची, छाती आणि धावण्याच्या सुरुवातीच्या स्टॅमिनाची मोफत तपासणी केली जाते.',
    },
    {
      num: '०३',
      title: 'बॅच व वसतिगृह निवड',
      desc: 'विद्यार्थ्याच्या क्षमतेनुसार सकाळची, संध्याकाळची किंवा पूर्णवेळ निवासी (हॉस्टेल) बॅच निश्चित केली जाते.',
    },
    {
      num: '०४',
      title: 'प्रशिक्षण व किट वाटप',
      desc: 'अकॅडमी टी-शर्ट, ट्रॅक पॅन्ट आणि विषयवार छापील अभ्यास साहित्य देऊन प्रत्यक्ष प्रशिक्षणास सुरुवात.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>प्रवेश प्रक्रिया व चौकशी</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          {academyConfig.marathiName} प्रवेश मार्गदर्शन
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          सोप्या ४ टप्प्यांत प्रवेश प्रक्रिया पूर्ण करा आणि आजच तुमच्या वर्दीच्या प्रवासाला सुरुवात करा.
        </p>
      </section>

      {/* 4 Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <span className="font-mono font-extrabold text-2xl text-gold-600 block mb-3">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-base text-army-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form and Required Documents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Required Documents & Direct Helpline */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-bold text-lg text-army-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-600" />
                <span>प्रवेशासाठी लागणारी आवश्यक कागदपत्रे</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>१० वी व १२ वी गुणपत्रिका (मार्कशीट) झेरॉक्स</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>आधार कार्ड झेरॉक्स (ओळखीचा पुरावा)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>४ पासपोर्ट साईझ रंगीत फोटो</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>जातीचा दाखला / नॉन क्रिमीलेअर (लागू असल्यास)</span>
                </li>
              </ul>
            </div>

            <div className="bg-army-900 text-white p-6 sm:p-8 rounded-3xl border border-army-800 shadow-card space-y-4">
              <h3 className="font-heading font-bold text-lg text-gold-400">
                काही शंका असल्यास थेट संपर्क करा
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                प्रवेश शुल्क, हप्त्यांची सवलत आणि वसतिगृहाच्या नियमावलीबाबत अधिक माहितीसाठी आमच्या समन्वयकांशी बोला.
              </p>

              <div className="pt-2 flex flex-col gap-3">
                {academyConfig.phone && (
                  <a
                    href={`tel:${academyConfig.phone}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-army-950 text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>कॉल करा: {academyConfig.phone}</span>
                  </a>
                )}

                {academyConfig.whatsappNumber && (
                  <a
                    href={`https://wa.me/${academyConfig.whatsappNumber}?text=${encodeURIComponent('नमस्ते, मला अकॅडमीच्या प्रवेश प्रक्रियेबद्दल माहिती हवी आहे.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp वर चॅट करा</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right: The Form Prototype */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </section>

    </div>
  );
};
