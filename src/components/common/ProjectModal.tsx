import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Code2 } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { TechBadge } from '../ui/TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#03050a]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl bg-[#0b0f19] border border-sky-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 my-auto"
        >
          {/* Top Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 font-mono text-xs text-sky-400 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            {project.category}
          </div>

          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-slate-400 mb-6">
            {project.subtitle}
          </p>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
                // Project Overview
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
                // Problem Solved & Engineering Focus
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
              // Key Functionality & Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFunctionality.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2.5">
              // Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} variant="cyan" size="sm" />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code on GitHub
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-xs font-mono text-slate-400 hover:text-white px-4 py-2"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
