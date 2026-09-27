import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { HeroScene } from '../3d/HeroScene';
import { TechBadge } from '../ui/TechBadge';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 font-mono text-xs text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Available for Web Developer Internship</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-200 bg-clip-text text-transparent">{resumeData.personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono text-slate-300 font-medium flex items-center gap-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                {resumeData.personalInfo.title}
              </h2>
            </div>

            {/* Location & Academic Badge */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {resumeData.personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Chhotu Ram Polytechnic (MDU)
              </span>
            </div>

            {/* Short Career Objective Paragraph */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
              Motivated final-year Computer Science student with a strong foundation in web development 
              fundamentals (<strong className="text-sky-300 font-semibold">HTML, CSS, JavaScript, React, Node.js</strong>) 
              and hands-on <strong className="text-sky-300 font-semibold">Python</strong> programming experience from 
              Hartron Advanced Skill Centre.
            </p>

            {/* Key Skill Pills preview */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React.js', 'Node.js', 'Python', 'JavaScript', 'MySQL', 'MongoDB'].map((skill) => (
                <TechBadge key={skill} name={skill} variant="cyan" size="sm" />
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={resumeData.personalInfo.resumePdfUrl}
                download="Shubham_Gahlawat_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-500">// Connect:</span>
              <a
                href={resumeData.personalInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-sky-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personalInfo.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-sky-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="p-2.5 text-slate-400 hover:text-sky-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-[#0b0f19]/40 border border-white/10 backdrop-blur-md overflow-hidden p-2 shadow-2xl">
              <HeroScene />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#05070e]/80 border border-white/10 rounded-full font-mono text-[10px] text-slate-400 backdrop-blur-md flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>3D Interactive Environment (Drag to Rotate)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
