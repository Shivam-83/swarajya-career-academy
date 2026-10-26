import React, { useState } from 'react';
import { ShieldCheck, Quote, AlertCircle } from 'lucide-react';
import { resultStoriesData } from '../data/academyData';

export const ResultsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredStories = selectedFilter === 'All'
    ? resultStoriesData
    : resultStoriesData.filter((s) => s.category === selectedFilter);

  return (
    <div className="py-12 sm:py-16 space-y-14">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>यशोगाथा व अनुभव</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          विद्यार्थ्यांचे अनुभव व यशाचा प्रवास
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          अकॅडमीच्या शिस्तबद्ध वातावरणात घाम गाळून वर्दीचे स्वप्न साकार करणाऱ्या विद्यार्थ्यांचे मनोगत.
        </p>
      </section>

      {/* Honest Disclaimer Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>पारदर्शक नोंद:</strong> खालील अनुभव केवळ त्या त्या विद्यार्थ्यांच्या व्यक्तिगत सरावावर आधारित आहेत. कोणत्याही स्पर्धा परीक्षेत निवड होणे हे संपूर्णतः विद्यार्थ्यांचे स्वतःचे कष्ट, सातत्य आणि गुणवत्ता यावर अवलंबून असते. संस्था कोणत्याही निवडीची १००% हमी देत नाही.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-subtle">
          {['All', 'Police Bharti', 'Army/Agniveer'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === cat
                  ? 'bg-army-800 text-gold-300 shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat === 'All' ? 'सर्व यशोगाथा' : cat === 'Police Bharti' ? 'पोलीस भरती' : 'सैन्य/अग्निवीर'}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card flex flex-col justify-between relative group hover:border-gold-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.studentDisplayName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 shadow-md"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-army-950">
                      {story.studentDisplayName}
                    </h3>
                    <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mt-0.5 border border-emerald-200">
                      {story.rankOrPost}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      बॅच वर्ष: {story.year}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-gold-200 absolute -top-4 -left-2 -z-0 opacity-60" />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>सत्यापित मनोगत</span>
                </span>
                <span className="font-mono text-gold-700 font-medium">
                  {story.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
