import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { academyConfig } from '../data/academyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div className="border-b border-slate-200 pb-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-army-950">
          गोपनीयता धोरण (Privacy Policy)
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          अंतिम अपडेट: ऑक्टोबर २०२६ | {academyConfig.name}
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3 text-xs sm:text-sm">
        <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>प्रोटोटाईप गोपनीयता हमी:</strong> ही वेबसाइट सध्या केवळ फ्रंटएंड प्रोटोटाईप म्हणून कार्यरत आहे. प्रवेश चौकशी फॉर्ममधील नाव अथवा फोन नंबर कोणत्याही बाह्य सर्व्हरवर, डेटाबेसवर किंवा तिसऱ्या पक्षाकडे पाठवला अथवा जतन केला जात नाही.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">१. माहिती संकलन</h2>
          <p>
            वेबसाइटवरील फॉर्म केवळ वापरकर्ता इंटरफेस (UI) प्रात्यक्षिकासाठी डिझाईन केला आहे. आम्ही वापरकर्त्यांची कोणतीही संवेदनशील आर्थिक, बायोमेट्रिक किंवा आधार माहिती गोळा करत नाही.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">२. कुकीज व ट्रॅकिंग</h2>
          <p>
            या वेबसाइटवर कोणताही ॲनालिटिक्स ट्रॅकर किंवा जाहिरातींची कुकी वापरली जात नाही. संपूर्ण अनुभव जलद, सुरक्षित आणि खाजगी आहे.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">३. बाह्य संकेतस्थळ लिंक्स</h2>
          <p>
            आमच्या वेबसाइटवर शासकीय भरतीविषयक अधिकृत पोर्टलच्या (उदा. महाराष्ट्र पोलीस, इंडियन आर्मी) लिंक्स विद्यार्थ्यांच्या सोयीसाठी दिलेल्या आहेत. त्या संकेतस्थळांच्या गोपनीयतेची जबाबदारी त्या त्या विभागाची आहे.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">४. संपर्क</h2>
          <p>
            गोपनीयतेबाबत काहीही प्रश्न असल्यास आपण {academyConfig.email} वर ईमेल करू शकता.
          </p>
        </section>
      </div>

    </div>
  );
};
