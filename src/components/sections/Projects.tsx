import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from '../common/ProjectModal';
import { ExternalLink, Github, Code2, Globe, Terminal, Database, Sparkles, ArrowRight } from 'lucide-react';
import { TechBadge } from '../ui/TechBadge';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Python & AI', 'Database & Backend'];

  const filteredProjects = resumeData.projects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  const projectIcons: Record<string, React.ElementType> = {
    Globe: Globe,
    Terminal: Terminal,
    Database: Database,
    Sparkles: Sparkles,
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#03050a]/70">
      {/* Background ambient radial light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          title="Featured Projects"
          subtitle="Explore hands-on software implementations spanning modern React & Node web apps, Python OOP algorithms, and multi-database architectures."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const IconComp = projectIcons[project.iconName] || Code2;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  glowColor="cyan"
                  className="h-full flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="space-y-4">
                    {/* Card Top Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[11px] font-mono text-sky-400">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{project.category}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400 transition-colors flex items-center gap-1">
                        DETAILS <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description & Problem Solved */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} name={tech} variant="cyan" size="sm" />
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-mono text-slate-500 self-center">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Footer Link Trigger */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                      <Github className="w-3.5 h-3.5" /> GitHub Code Repository
                    </span>
                    <span className="text-sky-400 font-semibold group-hover:underline">
                      Explore Architecture →
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
