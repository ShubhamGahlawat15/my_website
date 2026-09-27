import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Award, ShieldCheck, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#03050a]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06"
          title="Certifications & Achievements"
          subtitle="Official skill development programs, technical certifications, and recognized credentials."
        />

        <div className="max-w-4xl mx-auto">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glowColor="amber" className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <Award className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300 font-semibold mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        OFFICIAL CERTIFICATE
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-mono text-amber-300/90">
                        {cert.program} // {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-amber-400 font-semibold bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 shrink-0 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Duration: {cert.duration}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{cert.description}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
