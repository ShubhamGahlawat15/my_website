import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Download, Phone, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050a] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white tracking-tight text-lg">
                SHUBHAM GAHLAWAT
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Final-year Computer Science Engineering student & Web Developer Intern.
              Specializing in React, Node.js, Python, and modern web application development.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" /> {resumeData.personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400" /> {resumeData.personalInfo.phone}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="capitalize hover:text-sky-400 transition-colors"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect & Resume */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // Connect & PDF
            </h4>
            <div className="flex gap-3">
              <a
                href={resumeData.personalInfo.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personalInfo.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/20 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href={resumeData.personalInfo.resumePdfUrl}
              download="Shubham_Gahlawat_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-sky-500/10 border border-sky-500/30 text-sky-300 rounded-xl hover:bg-sky-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" /> Download Official Resume
            </a>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Shubham Gahlawat. Built with React, Three.js & Tailwind CSS.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
