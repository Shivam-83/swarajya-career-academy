import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-lifted transition-all duration-300 flex flex-col group">
      {/* Course Image & Badge */}
      <div className="relative h-48 overflow-hidden bg-army-900">
        <img
          src={course.image}
          alt={course.marathiTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-army-950/80 via-transparent to-black/20" />
        
        {course.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-army-950 shadow-md">
            {course.badge}
          </span>
        )}

        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-md ${
          course.admissionStatus === 'Open'
            ? 'bg-emerald-600/90 text-white'
            : course.admissionStatus === 'Filling Fast'
            ? 'bg-amber-600/90 text-white'
            : 'bg-slate-700/90 text-slate-200'
        }`}>
          {course.admissionStatus === 'Open' ? 'प्रवेश सुरू' : course.admissionStatus === 'Filling Fast' ? 'जागा मर्यादित' : course.admissionStatus}
        </span>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold-300 bg-army-900/80 px-2 py-0.5 rounded border border-gold-500/20">
            {course.category === 'police' ? 'पोलीस भरती' : course.category === 'army' ? 'सैन्य भरती' : 'कंबाइंड बॅच'}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-army-950 group-hover:text-army-800 transition-colors">
            {course.marathiTitle}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">{course.title}</p>

          <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {course.summary}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
              <span><strong>कालावधी:</strong> {course.duration}</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1"><strong>वेळ:</strong> {course.batchTiming}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {course.topics.slice(0, 3).map((topic, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium bg-surface-warm text-army-800 px-2.5 py-1 rounded-md border border-slate-200">
                <CheckCircle2 className="w-3 h-3 text-gold-600" />
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-slate-500">
            {course.feeLabel}
          </span>
          <Link
            to={course.id === 'police-bharti' ? '/courses/police-bharti' : course.id === 'army-bharti' ? '/courses/army-bharti' : `/courses`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-army-800 hover:bg-army-900 text-gold-300 transition-colors"
          >
            <span>तपशील</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
