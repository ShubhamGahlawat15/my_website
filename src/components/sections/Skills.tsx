import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Code, Layers, Database, Wrench, Terminal, CheckCircle2 } from 'lucide-react';
import { TechBadge } from '../ui/TechBadge';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    Languages: Code,
    'Frameworks & Libraries': Layers,
    Databases: Database,
    'Developer Tools & Platforms': Wrench,
  };

  const allSkills = resumeData.skillCategories.flatMap((cat) => cat.skills);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#03050a]/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          title="Technical Skills & Stack"
          subtitle="A comprehensive breakdown of programming languages, web frameworks, databases, and development tools."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', ...resumeData.skillCategories.map((c) => c.title)].map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-[0_0_15px_rgba(56,189,248,0.2)] font-semibold'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.skillCategories
            .filter((cat) => activeCategory === 'All' || activeCategory === cat.title)
            .map((cat, catIdx) => {
              const IconComp = categoryIcons[cat.title] || Terminal;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  <GlassCard glowColor="cyan" className="h-full flex flex-col justify-between">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white font-mono">
                            {cat.title}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400">
                            {cat.skills.length} Technologies
                          </span>
                        </div>
                      </div>

                      {/* Skill Items List */}
                      <div className="space-y-4">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-sm font-medium text-slate-100 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                                {skill.name}
                              </span>
                            </div>
                            {skill.description && (
                              <p className="text-xs text-slate-400 pl-5 leading-normal">
                                {skill.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Pill Tags */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <TechBadge key={s.name} name={s.name} variant="cyan" size="sm" />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
        </div>

        {/* Antigravity & Modern Tools Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <GlassCard glowColor="purple" className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="font-mono text-xs text-indigo-400 tracking-wider font-semibold">
                  // TOOLSET HIGHLIGHT
                </span>
                <h4 className="text-lg font-bold text-white">
                  Modern IDEs & AI Development Workflows
                </h4>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Proficient in VS Code extensions, Git version control, Google Colab cloud notebooks, 
                  and Antigravity AI-assisted engineering environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center shrink-0">
                {['Git', 'GitHub', 'VS Code', 'Google Colab', 'Antigravity'].map((tool) => (
                  <TechBadge key={tool} name={tool} variant="purple" size="md" />
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
