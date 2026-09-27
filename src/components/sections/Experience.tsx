import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Briefcase, MapPin, Calendar, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { TechBadge } from '../ui/TechBadge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          title="Internship & Industry Experience"
          subtitle="Professional practical training, hands-on programming programs, and skill development work."
        />

        <div className="max-w-4xl mx-auto">
          {resumeData.internships.map((internship, idx) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 space-y-6"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#05070e] shadow-[0_0_12px_rgba(56,189,248,0.8)]" />

              <GlassCard glowColor="cyan" className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 font-semibold">
                        INTERNSHIP
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {internship.hours}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {internship.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-300 font-mono mt-1">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span className="text-white font-semibold">{internship.company}</span>
                      <span className="text-slate-500">|</span>
                      <span className="text-sky-300">{internship.center}</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-slate-400 sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-sky-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {internship.location}
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities Checklist */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                    // Key Responsibilities & Learnings
                  </h4>
                  <ul className="space-y-3">
                    {internship.responsibilities.map((item, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">// Technologies & Tools:</span>
                  {internship.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="cyan" size="sm" />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
