import React from 'react';
import { AlertCircle, FileCheck2 } from 'lucide-react';
import { academyConfig } from '../data/academyData';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div className="border-b border-slate-200 pb-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-army-950">
          नियम व अटी (Terms & Conditions)
        </h1>
        <p className="text-xs text-slate-500 mt-2">
          अंतिम बदल: ऑक्टोबर २०२६ | {academyConfig.name}
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>महत्त्वाची सूचना:</strong> {academyConfig.marathiName} ही केवळ पोलीस व संरक्षण परीक्षांची पूर्वतयारी करून देणारी खाजगी मार्गदर्शन संस्था आहे. ही संस्था कोणत्याही शासकीय विभागाशी संलग्न नाही.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">१. निवड व हमी अस्वीकरण</h2>
          <p>
            अकॅडमीमध्ये दिल्या जाणाऱ्या प्रशिक्षणाने विद्यार्थ्यांची शारीरिक व बौद्धिक क्षमता वाढवणे हा एकमेव उद्देश आहे. शासकीय भरतीमधील निवड ही शासकीय मंडळाच्या अधिकृत निकषांवर आणि विद्यार्थ्यांच्या स्वतःच्या गुणवत्तेवर होते.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">२. वैद्यकीय व शारीरिक जोखीम</h2>
          <p>
            मैदानी सरावादरम्यान खेळाडूंच्या सुरक्षेची सर्वतोपरी काळजी घेतली जाते. तथापि, तीव्र शारीरिक हालचालींदरम्यान होणाऱ्या अनपेक्षित दुखापतींसाठी अकॅडमी तात्काळ प्रथमोपचार पुरवते, पण कोणत्याही गंभीर वैद्यकीय स्थितीसाठी विद्यार्थी स्वतः जबाबदार राहतील.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">३. शिस्त व वर्तणूक</h2>
          <p>
            कॅम्पस, अभ्यासिका आणि वसतिगृह परिसरात कडक शिस्तीचे पालन करणे अनिवार्य आहे. गैरवर्तन किंवा गैरहजेरी आढळल्यास संस्थेला विद्यार्थ्याचा प्रवेश रद्द करण्याचा अधिकार राहील.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-army-900">४. बौद्धिक संपदा</h2>
          <p>
            अकॅडमीने तयार केलेले अभ्यास साहित्य, प्रश्नपत्रिका आणि लोगो यांचा अनधिकृत व्यावसायिक पुनर्वापर अथवा कॉपी करणे कायद्याने गुन्हा आहे.
          </p>
        </section>
      </div>

    </div>
  );
};
