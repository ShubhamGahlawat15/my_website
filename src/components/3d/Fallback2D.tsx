import React from 'react';
import { motion } from 'framer-motion';

export const Fallback2D: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute w-60 h-60 bg-indigo-500/20 rounded-full blur-2xl" />

      {/* Outer Rotating Cyber Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 rounded-full border border-dashed border-sky-400/40"
      />

      {/* Outer Rotating Cyber Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute w-80 h-80 rounded-full border border-sky-500/20"
      />

      {/* Core Glowing Orb */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-sky-600 via-indigo-600 to-sky-400 p-1 shadow-[0_0_50px_rgba(56,189,248,0.5)] flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-[#070b14]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 border border-sky-400/30">
          <span className="font-mono text-3xl font-bold text-sky-400">SG</span>
          <span className="font-mono text-[10px] text-slate-300 tracking-widest uppercase mt-1">
            Web Developer
          </span>
          <div className="mt-3 flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse delay-100" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse delay-200" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
