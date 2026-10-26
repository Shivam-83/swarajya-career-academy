import React, { useState } from 'react';
import { Search, ExternalLink, Calendar, AlertCircle, Clock, ShieldAlert } from 'lucide-react';
import { recruitmentNoticesData } from '../data/academyData';

export const BhartiUpdatesPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filteredNotices = recruitmentNoticesData.filter((notice) => {
    const matchesCategory =
      categoryFilter === 'All' || notice.category === categoryFilter;
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.authority.toLowerCase().includes(search.toLowerCase()) ||
      notice.summary.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>शासकीय भरती सूचना केंद्र</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          नवीनतम पोलीस व सैन्य भरती अपडेट्स
        </h1>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          विद्यार्थ्यांच्या माहितीसाठी अधिकृत स्रोतांवरून गोळा केलेल्या संभाव्य व चालू भरती प्रक्रियांच्या सूचना.
        </p>
      </section>

      {/* Demo Notice Disclaimer Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>डेमो सूचना इशारा:</strong> या पानावर दर्शवलेल्या जाहिराती प्रात्यक्षिक स्वरूपातील (Demo Mock Content) आहेत. कोणत्याही शासकीय परीक्षेसाठी अर्ज करण्यापूर्वी अधिकृत सरकारी पोर्टल (उदा. mahapolice.gov.in किंवा joinindianarmy.nic.in) वरील मूळ जाहिरात काळजीपूर्वक तपासावी.
          </p>
        </div>
      </section>

      {/* Search and Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="भरती किंवा विभागाचे नाव शोधा..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-army-800 focus:ring-2 focus:ring-army-200"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Police', 'Army', 'Other'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  categoryFilter === cat
                    ? 'bg-army-800 text-gold-300 shadow-sm'
                    : 'bg-surface-warm text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'सर्व जाहिराती' : cat === 'Police' ? 'पोलीस भरती' : cat === 'Army' ? 'सैन्य भरती' : 'इतर'}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Notices List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNotices.length > 0 ? (
          <div className="space-y-6">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover:border-gold-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
                      {notice.category}
                    </span>
                    
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      notice.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : notice.status === 'Upcoming'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-slate-200 text-slate-700 border border-slate-300'
                    }`}>
                      {notice.status === 'Active' ? 'नोंदणी सुरू' : notice.status === 'Upcoming' ? 'लवकरच अपेक्षित' : 'मुदत संपली (Expired)'}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Demo Content
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-army-950">
                    {notice.title}
                  </h3>

                  <p className="text-xs font-semibold text-gold-700">
                    अधिकृत विभाग: {notice.authority}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {notice.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>तपासलेली तारीख: {notice.lastCheckedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span>अंतिम मुदत: {notice.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                  {notice.officialNoticeUrl && (
                    <a
                      href={notice.officialNoticeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-army-800 hover:bg-army-900 text-gold-300 shadow-sm transition-colors"
                    >
                      <span>अधिकृत संकेतस्थळ</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            कोणतीही भरती सूचना आढळली नाही.
          </div>
        )}
      </section>

    </div>
  );
};
