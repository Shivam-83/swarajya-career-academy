import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { facilitiesData } from '../data/academyData';

export const FacilitiesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>कॅम्पस व भौतिक पायाभूत सुविधा</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          शारीरिक व मानसिक वाढीसाठी सुसज्ज वातावरण
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          विद्यार्थ्यांना भरतीच्या प्रत्यक्ष मैदानासारखा अनुभव देण्यासाठी मानक क्रीडांगण, आधुनिक अभ्यासिका आणि सुरक्षित वसतिगृह सुविधा.
        </p>
      </section>

      {/* Facilities Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {facilitiesData.map((facility, index) => (
            <div
              key={facility.id}
              className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-stretch`}
            >
              {/* Media */}
              <div className="lg:w-1/2 h-72 sm:h-96 relative bg-army-950">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>सत्यापित सुविधा (Confirmed)</span>
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest mb-2">
                    सुविधा क्र. ०{index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-army-950 mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">
                    प्रमुख वैशिष्ट्ये:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {facility.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-warm border border-slate-200 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    प्रत्यक्ष भेट देऊन सुविधांची पाहणी करा
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-army-800 hover:text-army-950"
                  >
                    <span>पत्ता व वेळ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Safety & Hostel Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-army-950 text-white rounded-3xl p-8 sm:p-12 border border-army-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-lg text-gold-400">सुरक्षा व सीसीटीव्ही</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                संपूर्ण कॅम्पस, अभ्यासिका आणि वसतिगृह परिसरात २४ तास सीसीटीव्ही निगराणी व सुरक्षारक्षक तैनात असतात.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-lg text-gold-400">सकस व पौष्टिक आहार</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                क्रीडापटूंच्या शारीरिक क्षमतेसाठी आवश्यक प्रथिने, मोड आलेली कडधान्ये, ताजी फळे, दूध व अंडी यांचा आहारात समावेश.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-lg text-gold-400">आरोग्य व प्राथमिक उपचार</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                सरावादरम्यान कोणतीही दुखापत झाल्यास तात्काळ प्रथमोपचार पेटी व नजीकच्या मल्टीस्पेशालिटी हॉस्पिटलशी टाय-अप.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
