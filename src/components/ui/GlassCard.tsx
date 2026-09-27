import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'cyan',
  ...props
}) => {
  const glowClasses = {
    cyan: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
    purple: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(129,140,248,0.15)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]',
    amber: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
    none: '',
  };

  return (
    <motion.div
      className={twMerge(
        clsx(
          'relative rounded-2xl bg-[#0b0f19]/70 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 overflow-hidden',
          hoverEffect && `hover:-translate-y-1 ${glowClasses[glowColor]}`,
          className
        )
      )}
      {...props}
    >
      {/* Corner Tech Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sky-400/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-sky-400/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-sky-400/40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sky-400/40 pointer-events-none" />

      {/* Radial Gradient Glow on top right */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

      {children}
    </motion.div>
  );
};
