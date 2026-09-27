import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-3 mb-2 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className="font-mono text-xs tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
          // {number}
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-sky-500/50 to-transparent" />
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
