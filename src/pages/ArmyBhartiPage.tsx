import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  CheckCircle2,
  Award,
  BookOpen,
  Target,
  FileCheck,
} from 'lucide-react';
import { coursesData } from '../data/academyData';
import { FaqAccordion } from '../components/FaqAccordion';
import { EnquiryForm } from '../components/EnquiryForm';

export const ArmyBhartiPage: React.FC = () => {
  const course = coursesData.find((c) => c.id === 'army-bharti') || coursesData[1];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Course Hero Banner */}
      <section className="bg-army-950 text-white py-14 sm:py-20 -mt-12 sm:-mt-16 border-b border-army-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-army-900 border border-gold-500/30 text-gold-300 text-xs font-semibold">
                <Target className="w-4 h-4 text-gold-400" />
                <span>भारतीय सैन्य अग्निवीर योजना अधिकृत पॅटर्न</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
                {course.marathiTitle}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {course.details.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm text-gold-300">
                <div className="flex items-center gap-1.5 bg-army-900/80 px-3 py-1.5 rounded-lg border border-army-800">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>कालावधी: {course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-army-900/80 px-3 py-1.5 rounded-lg border border-army-800">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>{course.batchTiming}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  to="/admission"
                  className="px-6 py-3.5 rounded-xl font-bold bg-gold-500 hover:bg-gold-400 text-army-950 text-sm shadow-md transition-colors"
                >
                  अग्निवीर बॅचसाठी प्रवेश चौकशी
                </Link>
                <a
                  href="#army-standards"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-army-800 hover:bg-army-700 text-slate-200 text-sm border border-army-700 transition-colors"
                >
                  फिजिकल व लेखी निकष पहा
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-army-900">
                <img
                  src={course.image}
                  alt={course.marathiTitle}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Physical Standards Breakdown (100 Marks) */}
      <section id="army-standards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-army-950 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-gold-600" />
            <span>शारीरिक चाचणी निकष — १०० गुण (Physical Fitness Test - PFT)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-heading font-bold text-base text-army-950 mb-4 text-gold-700">
                १.६ किमी धावणे (१६०० मीटर) — ६० गुण
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 flex items-center justify-between">
                  <span><strong>ग्रुप १:</strong> ५ मिनिटे ३० सेकंदांच्या आत</span>
                  <span className="font-bold font-mono">६० गुण</span>
                </div>
                <div className="p-3 bg-surface-warm rounded-xl border border-slate-200 flex items-center justify-between">
                  <span><strong>ग्रुप २:</strong> ५ मिनिटे ३१ ते ५:४५ सेकंद</span>
                  <span className="font-bold font-mono">४८ गुण</span>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  *अकॅडमीमध्ये दररोज सकाळी पेस ट्रेनिंगद्वारे ५:२० ते ५:२५ मिनिटांचे लक्ष्य साध्य करून घेतले जाते.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-heading font-bold text-base text-army-950 mb-4 text-gold-700">
                बीम (Pull-ups) — ४० गुण
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                <div className="p-2.5 bg-surface-warm rounded-lg border border-slate-200">
                  १० बीम = <strong>४० गुण</strong>
                </div>
                <div className="p-2.5 bg-surface-warm rounded-lg border border-slate-200">
                  ९ बीम = <strong>३३ गुण</strong>
                </div>
                <div className="p-2.5 bg-surface-warm rounded-lg border border-slate-200">
                  ८ बीम = <strong>२७ गुण</strong>
                </div>
                <div className="p-2.5 bg-surface-warm rounded-lg border border-slate-200">
                  ७ बीम = <strong>२१ गुण</strong>
                </div>
              </div>
              <div className="mt-3 p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200">
                <strong>इतर चाचण्या:</strong> ९ फूट खड्डा उडी (Qualifying) व जिग-झॅग बॅलन्स (Qualifying)
              </div>
            </div>

          </div>
        </div>

        {/* Written Exam CEE (Common Entrance Exam) */}
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-army-950 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-gold-600" />
            <span>ऑनलाइन CEE लेखी परीक्षा स्वरूप (Computer Based Test)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.details.writtenSyllabus?.map((sub, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-army-50 text-army-900 font-bold text-xs flex items-center justify-center mb-3 border border-army-100">
                    ०{i + 1}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-army-950 mb-2">
                    {sub.split(':')[0]}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sub.split(':')[1]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-gold-600">
                  नेगेटिव्ह मार्किंग: १/४
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
          <h3 className="font-heading font-bold text-lg text-army-950 mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-gold-600" />
            <span>अग्निवीर GD व ट्रेड्समन भरती पात्रता अटी</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            {course.details.eligibility.map((el, i) => (
              <li key={i} className="flex items-start gap-2 bg-surface-warm/60 p-3 rounded-xl border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{el}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-army-950 mb-6">
            अग्निवीर भरतीबद्दल नेहमी विचारले जाणारे प्रश्न
          </h3>
          <FaqAccordion items={course.faqs} />
        </div>

      </section>

      {/* Bottom Form */}
      <section className="max-w-4xl mx-auto px-4">
        <EnquiryForm />
      </section>

    </div>
  );
};
