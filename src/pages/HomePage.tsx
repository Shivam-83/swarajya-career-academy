import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Award,
  BookOpen,
  Dumbbell,
  CheckCircle2,
  Phone,
  ArrowRight,
  Flame,
  Building2,
  Users,
  Trophy,
  Home,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import {
  academyConfig,
  coursesData,
  facilitiesData,
  instructorsData,
  resultStoriesData,
  galleryItemsData,
  recruitmentNoticesData,
  whyChooseUsData,
} from '../data/academyData';
import { CourseCard } from '../components/CourseCard';
import { EnquiryForm } from '../components/EnquiryForm';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden bg-army-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle camo / geometric grid background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C99A3B_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-army-800/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-army-900 border border-gold-500/30 text-gold-300 text-xs font-semibold shadow-inner">
                <Flame className="w-4 h-4 text-gold-400 animate-pulse" />
                <span>महाराष्ट्र पोलीस व अग्निवीर भरती पूर्व विशेष सराव बॅच</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-tight sm:leading-snug">
                वर्दीचे स्वप्न आता सत्यात उतरा!{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                  शास्त्रोक्त ग्राउंड व लेखी तयारी
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                {academyConfig.marathiName} मध्ये १६०० मी धावणे, गोळाफेक, १०० मी स्प्रिंट आणि संपूर्ण लेखी परीक्षेची पायाभूत तयारी करून घेतली जाते. माजी सैन्य प्रशिक्षक व अनुभवी प्राध्यापकांचे वैयक्तिक लक्ष.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/admission"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-army-950 shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 text-sm sm:text-base transform hover:-translate-y-0.5 transition-all"
                >
                  <Award className="w-5 h-5" />
                  <span>आताच प्रवेश चौकशी करा</span>
                </Link>

                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold bg-army-800/80 hover:bg-army-800 text-slate-100 border border-army-700 hover:border-gold-500/50 flex items-center justify-center gap-2 text-sm sm:text-base transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-gold-400" />
                  <span>सर्व कोर्सेस पहा</span>
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-army-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-gold-400">४०० मी</div>
                  <div className="text-[11px] sm:text-xs text-slate-400">मानक धावण्याचा ट्रॅक</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-gold-400">१००%</div>
                  <div className="text-[11px] sm:text-xs text-slate-400">OMR सराव परीक्षा</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl sm:text-2xl text-gold-400">स्वतंत्र</div>
                  <div className="text-[11px] sm:text-xs text-slate-400">मुले/मुली हॉस्टेल व मेस</div>
                </div>
              </div>

            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-army-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="पोलीस भरती मैदानी प्रशिक्षण सराव"
                    className="w-full h-96 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-army-950 via-army-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-army-900/90 backdrop-blur-md border border-gold-500/30 text-white">
                    <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                      <Shield className="w-4 h-4" />
                      <span>कडक शिस्त व परिपूर्ण मार्गदर्शन</span>
                    </div>
                    <div className="text-sm font-semibold mt-1">
                      दैनंदिन मैदानी सराव व ३ तास विषयवार सखोल लेक्चर्स
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Highlights / Benefits Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-army-50 border border-army-100 flex items-center justify-center text-army-800 mb-4" aria-hidden="true">
                  {index === 0 && <ShieldCheck className="w-6 h-6 text-gold-600" />}
                  {index === 1 && <Trophy className="w-6 h-6 text-gold-600" />}
                  {index === 2 && <ClipboardCheck className="w-6 h-6 text-gold-600" />}
                  {index === 3 && <Home className="w-6 h-6 text-gold-600" />}
                </div>
                <h3 className="font-heading font-bold text-base text-army-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
            <span>प्रशिक्षण अभ्यासक्रम</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
            पोलीस व सैन्य भरती विशेष बॅचेस
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            प्रत्येक परीक्षेच्या नवीनतम अधिकृत पद्धतीनुसार मैदानी व लेखी तयारीचे अचूक नियोजन.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-army-800 hover:bg-army-900 text-gold-300 shadow-md transition-colors text-sm"
          >
            <span>सर्व कोर्सेस व संपूर्ण सिलॅबस पहा</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Dual Preparation Pillars: Physical Ground & Written Class */}
      <section className="bg-gradient-to-b from-army-950 to-army-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
              यशस्वी होण्यासाठी दोन्ही आघाड्यांवर तयारी
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              केवळ ग्राउंड किंवा केवळ लेखी नव्हे; दोन्हीमध्ये मेरिट मिळवणे हीच वर्दीची खरी किल्ली आहे.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Ground Pillar */}
            <div className="bg-army-900/90 rounded-3xl p-8 border border-army-700/80 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-500/20 text-gold-400 text-xs font-semibold mb-4 border border-gold-500/30">
                  <Dumbbell className="w-4 h-4" />
                  <span>मैदानी चाचणी (Ground Training)</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">
                  शारीरिक क्षमता व तंत्रशुद्ध सराव
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  १६०० मीटर धावताना श्वास रोखून न ठेवता पेस वाढवणे, गोळाफेकीत खांद्याची ताकद आणि योग्य ४५ अंश अँगल, आणि स्प्रिंटमधील सुरुवातीचा वेग यावर विशेष मेहनत घेतली जाते.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>४०० मीटर धावण्याच्या ट्रॅकवर वेळेनुसार अचूक सराव</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>सैन्य बीम (Pull-ups) आणि गोळाफेक तंत्र</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>स्नायूंच्या दुखापती टाळण्यासाठी स्ट्रेचिंग व प्रथिनयुक्त आहार मार्गदर्शन</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-army-800">
                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold text-xs sm:text-sm"
                >
                  <span>आमच्या क्रीडांगणाचे तपशील पहा</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Written Pillar */}
            <div className="bg-army-900/90 rounded-3xl p-8 border border-army-700/80 shadow-card flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/30">
                  <BookOpen className="w-4 h-4" />
                  <span>लेखी परीक्षा कोचिंग (Written Exam)</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">
                  १०० पैकी ९०+ गुणांचे अचूक नियोजन
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  अंकगणित, बुद्धिमत्ता, मराठी व्याकरण आणि चालू घडामोडी या चारही विषयांचे बेसिकपासून शॉर्टकट ट्रिक्ससह सखोल अध्यापन आणि साप्ताहिक ओएमआर टेस्ट.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>विषयवार तज्ज्ञ प्राध्यापकांचे दररोज ३ तास लेक्चर्स</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>प्रत्येक रविवारी १०० गुणांची OMR शीटवर मॉडेल परीक्षा</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>शांत अभ्यासिका (Library) व परिपूर्ण छापील अभ्यास साहित्य</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-army-800">
                <Link
                  to="/courses/police-bharti"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-xs sm:text-sm"
                >
                  <span>लेखी परीक्षेचा सविस्तर सिलॅबस पहा</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Facilities Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-2 border border-gold-200">
              <span>कॅम्पस व पायाभूत सुविधा</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
              प्रशिक्षणासाठी सुसज्ज वातावरण
            </h2>
          </div>
          <Link
            to="/facilities"
            className="inline-flex items-center gap-1.5 font-bold text-army-800 hover:text-army-900 text-sm"
          >
            <span>सर्व सुविधा पहा</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesData.map((facility) => (
            <div key={facility.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card flex flex-col group">
              <div className="h-44 overflow-hidden bg-army-950">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-army-950">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-army-800 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                  <span>अकॅडमी संकुलात उपलब्ध</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Instructors / Mentors Preview */}
      <section className="bg-surface-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
              अनुभवी प्रशिक्षक व मार्गदर्शक
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              माजी सैन्य अधिकारी व स्पर्धा परीक्षा तज्ज्ञांचे थेट मार्गदर्शन.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructorsData.map((inst) => (
              <div key={inst.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card flex flex-col">
                <div className="h-56 overflow-hidden bg-army-950">
                  <img
                    src={inst.photo}
                    alt={inst.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-army-950">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-gold-600 font-semibold mt-0.5">{inst.role}</p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">{inst.qualifications}</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {inst.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-army-900">
                    अनुभव: {inst.experienceLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Verified Results / Student Stories Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2 border border-emerald-200">
            <span>यशस्वी विद्यार्थी अनुभव</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
            कष्टाला जेव्हा योग्य दिशा मिळते!
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            *खालील अनुभव प्रातिनिधिक असून विद्यार्थ्यांच्या संमतीने प्रकाशित करण्यात आले आहेत.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultStoriesData.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={story.image}
                    alt={story.studentDisplayName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-base text-army-950">
                      {story.studentDisplayName}
                    </h3>
                    <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {story.rankOrPost}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">बॅच: {story.year}</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between">
                <span>सत्यापित निवड</span>
                <span className="text-gold-600 font-semibold">{story.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 font-bold text-army-800 hover:text-army-900 text-sm"
          >
            <span>अधिक निकाल व यशोगाथा पहा</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. Recruitment Updates Preview (Demo-labeled) */}
      <section className="bg-army-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 mb-2 border border-amber-500/30">
                <span>अधिकृत भरती अपडेट्स (Demo Content)</span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                नवीन शासकीय भरती जाहिराती
              </h2>
            </div>
            <Link
              to="/bharti-updates"
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold text-sm"
            >
              <span>सर्व अपडेट्स पहा</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recruitmentNoticesData.map((notice) => (
              <div key={notice.id} className="bg-army-900 rounded-2xl p-6 border border-army-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-army-800 px-2 py-0.5 rounded border border-gold-500/20">
                      {notice.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      notice.status === 'Active'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : notice.status === 'Upcoming'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {notice.status === 'Active' ? 'नोंदणी सुरू' : notice.status === 'Upcoming' ? 'लवकरच' : 'मुदत संपली'}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white line-clamp-2">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {notice.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-army-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>अंतिम तारीख: {notice.deadline}</span>
                  <Link
                    to="/bharti-updates"
                    className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>तपशील</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Admission Form & Contact CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-200">
              <span>प्रवेश प्रक्रिया</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-army-950">
              आजच अकॅडमीला भेट द्या किंवा ऑनलाइन चौकशी करा
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              नवीन बॅचमध्ये मर्यादित ५० जागा उपलब्ध आहेत. वैयक्तिक लक्ष व योग्य सरावासाठी लवकरात लवकर नाव नोंदणी करा.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <Building2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-army-950">अकॅडमी पत्ता</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{academyConfig.address}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <Users className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-army-950">समुपदेशन वेळ</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{academyConfig.workingHours}</p>
                </div>
              </div>

              {academyConfig.phone && (
                <div className="p-4 rounded-xl bg-army-800 text-white flex items-center justify-between shadow-card">
                  <div>
                    <span className="text-[11px] text-gold-400 font-semibold block">थेट संपर्क क्रमांक</span>
                    <a href={`tel:${academyConfig.phone}`} className="font-mono text-base font-bold hover:text-gold-300">
                      {academyConfig.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${academyConfig.phone}`}
                    className="p-2.5 rounded-lg bg-gold-500 text-army-950 hover:bg-gold-400 transition-colors"
                    aria-label="कॉल करा"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </section>

    </div>
  );
};
