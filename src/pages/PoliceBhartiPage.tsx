import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Calendar,
  CheckCircle2,
  Award,
  BookOpen,
} from 'lucide-react';
import { coursesData } from '../data/academyData';
import { FaqAccordion } from '../components/FaqAccordion';
import { EnquiryForm } from '../components/EnquiryForm';

export const PoliceBhartiPage: React.FC = () => {
  const course = coursesData.find((c) => c.id === 'police-bharti') || coursesData[0];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Course Hero Banner */}
      <section className="bg-army-950 text-white py-14 sm:py-20 -mt-12 sm:-mt-16 border-b border-army-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-army-900 border border-gold-500/30 text-gold-300 text-xs font-semibold">
                <Shield className="w-4 h-4 text-gold-400" />
                <span>महाराष्ट्र शासन अधिकृत भरती पॅटर्ननुसार</span>
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
                  या बॅचसाठी प्रवेश चौकशी करा
                </Link>
                <a
                  href="#syllabus"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-army-800 hover:bg-army-700 text-slate-200 text-sm border border-army-700 transition-colors"
                >
                  अभ्यासक्रम व निकष पहा
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

      {/* Eligibility & Physical Criteria Section */}
      <section id="syllabus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-army-950 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-gold-600" />
            <span>पात्रता व शारीरिक चाचणी निकष (५० गुण)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Eligibility Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-heading font-bold text-base text-army-950 mb-3 text-gold-700">
                शैक्षणिक व वयोमर्यादा निकष
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {course.details.eligibility.map((el, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Physical Test Breakdown */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
              <h3 className="font-heading font-bold text-base text-army-950 mb-3 text-gold-700">
                शारीरिक मैदानी इव्हेंट्स (५० गुण)
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-surface-warm rounded-lg border border-slate-200">
                  <strong>धावणे:</strong> {course.details.physicalStandards?.running}
                </div>
                <div className="p-3 bg-surface-warm rounded-lg border border-slate-200">
                  <strong>गोळाफेक:</strong> {course.details.physicalStandards?.shotPut}
                </div>
                <div className="p-3 bg-surface-warm rounded-lg border border-slate-200">
                  <strong>उंची / छाती:</strong> {course.details.physicalStandards?.height} | {course.details.physicalStandards?.chest}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Written Exam Syllabus Breakdown (100 Marks) */}
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-army-950 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-gold-600" />
            <span>लेखी परीक्षा स्वरूप व अभ्यासक्रम (१०० गुण - ९० मिनिटे)</span>
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
                  गुण: २५ | वस्तुनिष्ठ बहुपर्यायी
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-army-900 text-white rounded-3xl p-8 sm:p-10 border border-army-800">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-gold-400 mb-6">
            पोलीस भरती बॅचचे दैनंदिन वेळापत्रक
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="bg-army-800/80 p-5 rounded-xl border border-army-700">
              <span className="text-gold-400 font-bold block mb-1">१. सकाळचे मैदान</span>
              <p className="text-slate-300">{course.details.batchSchedule.morningGround}</p>
            </div>
            <div className="bg-army-800/80 p-5 rounded-xl border border-army-700">
              <span className="text-gold-400 font-bold block mb-1">२. दुपारचे लेक्चर्स</span>
              <p className="text-slate-300">{course.details.batchSchedule.writtenClass}</p>
            </div>
            <div className="bg-army-800/80 p-5 rounded-xl border border-army-700">
              <span className="text-gold-400 font-bold block mb-1">३. साप्ताहिक सराव</span>
              <p className="text-slate-300">{course.details.batchSchedule.weeklyTest}</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-army-950 mb-6">
            वारंवार विचारले जाणारे प्रश्न (FAQs)
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
