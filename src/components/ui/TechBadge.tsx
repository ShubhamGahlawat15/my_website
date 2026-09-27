import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'cyan',
  size = 'md',
}) => {
  const styles = {
    cyan: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-400/40 hover:bg-sky-500/20',
    purple: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/40 hover:bg-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-400/40 hover:bg-amber-500/20',
    neutral: 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/10',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-xs md:text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border font-mono tracking-wide transition-colors duration-200 ${styles[variant]} ${sizes[size]}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-75" />
      {name}
    </span>
  );
};
