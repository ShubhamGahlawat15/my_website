import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, Building } from 'lucide-react';
import { TechBadge } from '../ui/TechBadge';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          title="Academic Education"
          subtitle="Diploma coursework, university affiliation, and academic foundation."
        />

        <div className="max-w-4xl mx-auto">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard glowColor="purple" className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 font-mono text-xs text-indigo-300 font-semibold mb-1">
                        FINAL YEAR STUDENT
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-mono text-slate-300 flex items-center gap-1.5 mt-1">
                        <Building className="w-4 h-4 text-indigo-400" />
                        {edu.institution}, {edu.university}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-xs text-slate-400 sm:text-right shrink-0">
                    <div className="flex items-center sm:justify-end gap-1.5 text-indigo-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </div>
                    <div className="inline-block bg-white/5 px-3 py-1 rounded-lg border border-white/10 text-sky-400 font-semibold">
                      CGPA / Percentage: {edu.score}
                    </div>
                  </div>
                </div>

                {/* Highlights & Coursework */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    // Relevant Academic Coursework & Practical Focus
                  </h4>

                  <ul className="space-y-2.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic Skill Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">// Core Modules:</span>
                  {['Web Development', 'Python Programming', 'Data Structures', 'OOP', 'MySQL', 'MongoDB'].map(
                    (module) => (
                      <TechBadge key={module} name={module} variant="purple" size="sm" />
                    )
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
