import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass } from 'lucide-react';
import { academyConfig, instructorsData } from '../data/academyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>आमच्याबद्दल माहिती</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          शिस्त, सातत्य आणि ध्येयवेडी मेहनत!
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          {academyConfig.marathiName} ही केवळ एक अकॅडमी नसून महाराष्ट्रातील हजारो तरुणांच्या वर्दीच्या स्वप्नांना पंख देणारे शिस्तबद्ध केंद्र आहे.
        </p>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-army-950">
              संस्थेची स्थापना व पार्श्वभूमी
            </h2>
            <p>
              ग्रामीण व शहरी भागातील मेहनती तरुणांमध्ये प्रचंड शारीरिक क्षमता असते; मात्र योग्य तांत्रिक मार्गदर्शन, वेळेचे नियोजन आणि लेखी परीक्षेतील अचूक स्ट्रॅटेजीच्या अभावामुळे अनेक हुशार तरुण भरतीत मागे पडतात.
            </p>
            <p>
              हीच उणीव भरून काढण्यासाठी माजी सैन्य अधिकारी आणि स्पर्धा परीक्षा क्षेत्रातील निष्णात प्राध्यापकांनी एकत्र येऊन <strong>{academyConfig.marathiName}</strong> ची स्थापना केली. येथे विद्यार्थ्यांच्या खाण्यापिण्यापासून ते धावण्याच्या प्रत्येक सेकंदापर्यंत बारकाईने लक्ष दिले जाते.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
                <div className="font-heading font-bold text-2xl text-gold-600">१००%</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">पारदर्शक व शास्त्रोक्त पद्धती</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
                <div className="font-heading font-bold text-2xl text-gold-600">२४ तास</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">शिस्तबद्ध निवासी संकुल वातावरण</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-card bg-army-950">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
              alt="अकॅडमी विद्यार्थी व प्रशिक्षक सराव"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-army-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-army-800/80 p-8 rounded-2xl border border-army-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">आमचे ध्येय (Mission)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                प्रत्येक विद्यार्थ्याला त्याच्या शारीरिक क्षमतेच्या सर्वोच्च पातळीवर नेणे आणि लेखी परीक्षेत गुणवत्तेच्या जोरावर पहिल्याच प्रयत्नात शासकीय सेवेत दाखल करणे.
              </p>
            </div>

            <div className="bg-army-800/80 p-8 rounded-2xl border border-army-700 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">आमची दृष्टी (Vision)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                महाराष्ट्रातील एक अग्रगण्य, विश्वासार्ह व निकाल देणारी भरती पूर्व संस्था म्हणून ओळख निर्माण करणे, जिथे सचोटी आणि मेहनत हीच यशाची पहिली अट आहे.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
            आमची तज्ज्ञ मार्गदर्शक टीम
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            प्रत्येक विषयासाठी स्वतंत्र, अनुभवी आणि ध्येयनिष्ठ शिक्षक.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructorsData.map((inst) => (
            <div key={inst.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card flex flex-col">
              <div className="h-60 overflow-hidden bg-army-950">
                <img
                  src={inst.photo}
                  alt={inst.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-army-950">{inst.name}</h3>
                  <p className="text-xs text-gold-600 font-semibold mt-0.5">{inst.role}</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{inst.qualifications}</p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{inst.bio}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700 font-medium">
                  {inst.experienceLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-army-800 to-army-950 text-white p-8 sm:p-12 rounded-3xl border border-gold-500/30 shadow-xl">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-gold-300">
            तुम्हीही वर्दी परिधान करण्यास सज्ज आहात का?
          </h3>
          <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">
            आजच अकॅडमीला भेट देऊन मैदानाची पाहणी करा व मोफत मार्गदर्शन मिळवा.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="px-6 py-3.5 rounded-xl font-bold bg-gold-500 hover:bg-gold-400 text-army-950 text-sm shadow-md transition-colors"
            >
              प्रवेश चौकशी अर्ज भरा
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold bg-army-900 hover:bg-army-800 text-slate-200 border border-army-700 text-sm transition-colors"
            >
              पत्ता व संपर्क तपशील
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
