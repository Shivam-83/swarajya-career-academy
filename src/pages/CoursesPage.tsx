import React, { useState } from 'react';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { coursesData } from '../data/academyData';
import { CourseCard } from '../components/CourseCard';

export const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTrainingType, setSelectedTrainingType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;
    const matchesTrainingType =
      selectedTrainingType === 'all' ||
      course.trainingTypes === selectedTrainingType ||
      course.trainingTypes === 'both';
    const matchesSearch =
      course.marathiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTrainingType && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 mb-3 border border-gold-200">
          <span>सर्व कोर्सेस व बॅचेस</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-army-950">
          तुमच्या गरजेनुसार योग्य बॅच निवडा
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          महाराष्ट्र पोलीस भरती, सैन्य अग्निवीर, फक्त मैदानी सराव किंवा केवळ लेखी परीक्षा तयारीचे वर्ग.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-card space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="कोर्स किंवा विषय शोधा (उदा. पोलीस, अग्निवीर, गणित)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-army-800 focus:ring-2 focus:ring-army-200"
              />
            </div>

            {/* Clear Filters Button if any */}
            {(selectedCategory !== 'all' || selectedTrainingType !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTrainingType('all');
                  setSearchQuery('');
                }}
                className="text-xs text-red-600 hover:text-red-700 font-semibold underline underline-offset-4 self-end md:self-center"
              >
                सर्व फिल्टर्स रीसेट करा
              </button>
            )}

          </div>

          {/* Filters Row */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-semibold flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>प्रवर्ग:</span>
              </span>
              {[
                { label: 'सर्व कोर्सेस', val: 'all' },
                { label: 'पोलीस भरती', val: 'police' },
                { label: 'सैन्य/अग्निवीर', val: 'army' },
                { label: 'विशेष बॅचेस', val: 'special' },
              ].map((cat) => (
                <button
                  key={cat.val}
                  onClick={() => setSelectedCategory(cat.val)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.val
                      ? 'bg-army-800 text-gold-300 font-bold shadow-sm'
                      : 'bg-surface-warm text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Training Type Pills */}
            <div className="flex flex-wrap items-center gap-2 md:ml-auto">
              <span className="text-slate-500 font-semibold">तयारी प्रकार:</span>
              {[
                { label: 'सर्व', val: 'all' },
                { label: 'शारीरिक (Ground)', val: 'physical' },
                { label: 'लेखी (Written)', val: 'written' },
              ].map((t) => (
                <button
                  key={t.val}
                  onClick={() => setSelectedTrainingType(t.val)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedTrainingType === t.val
                      ? 'bg-gold-600 text-white font-bold shadow-sm'
                      : 'bg-surface-warm text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Courses Grid or Empty State */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-subtle space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800">
              कोणताही कोर्स आढळला नाही
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              तुम्ही निवडलेल्या फिल्टर्सनुसार किंवा शोधशब्दानुसार सध्या कोणताही कोर्स उपलब्ध नाही. कृपया इतर निकष निवडून पहा.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTrainingType('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-army-800 text-gold-300 hover:bg-army-900 transition-colors"
            >
              सर्व कोर्सेस पूर्ववत करा
            </button>
          </div>
        )}
      </section>

    </div>
  );
};
