import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Code, BookOpen, Clock, Award, Terminal, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Clock,
      title: '120-Hour Python Internship',
      description: 'Completed at Ulterior Associates (Hartron Advanced Skill Centre) covering OOP, Python syntax, and AI tools.',
      accent: 'cyan',
    },
    {
      icon: BookOpen,
      title: 'Final-Year CS Student',
      description: 'Diploma in Computer Science Engineering at Chhotu Ram Polytechnic (MDU, Haryana).',
      accent: 'purple',
    },
    {
      icon: Code,
      title: 'Full Stack Tech Foundations',
      description: 'Hands-on experience across HTML, CSS, JavaScript, React.js, Node.js, MySQL, and MongoDB.',
      accent: 'emerald',
    },
    {
      icon: Award,
      title: 'RSDC Skill Certified',
      description: 'Completed 1-month RSDC Certification Course focused on practical technical skill development.',
      accent: 'amber',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Explore my background, education, internship journey, and technical aspirations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="cyan" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {resumeData.personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-400">
                    {resumeData.personalInfo.title} // Sonipat, Haryana
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                {resumeData.personalInfo.aboutBio.map((paragraph, idx) => (
                  <p key={idx} className="flex items-start gap-3">
                    <span className="text-sky-400 font-mono text-xs mt-1">0{idx + 1}.</span>
                    <span>{paragraph}</span>
                  </p>
                ))}
              </div>

              {/* Objective Quote Box */}
              <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs font-mono text-slate-300 leading-relaxed">
                <span className="text-sky-400 font-bold block mb-1">// CAREER OBJECTIVE</span>
                "{resumeData.personalInfo.objective}"
              </div>
            </GlassCard>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard
                    glowColor={item.accent as 'cyan' | 'purple' | 'emerald' | 'amber'}
                    className="p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-mono">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
