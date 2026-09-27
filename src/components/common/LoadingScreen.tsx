import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT...');

  useEffect(() => {
    const statuses = [
      'INITIALIZING WEBGL 3D CORE...',
      'LOADING REACT & NODE MODULES...',
      'PARSING PYTHON & DATA STRUCTURES...',
      'ESTABLISHING CYBER IDENTITY...',
      'SYSTEM READY',
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(timer);
          setStatusText('SYSTEM READY');
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }

        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070e] text-white px-4"
      >
        {/* Futuristic Background Grid */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

        {/* Ambient Radial Glow */}
        <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-md text-center">
          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono font-bold text-2xl mb-8 border-glow-cyan"
          >
            SG
          </motion.div>

          {/* Name & Title */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            SHUBHAM GAHLAWAT
          </h1>
          <p className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-8">
            Web Developer Intern // CS Student
          </p>

          {/* Progress Bar Container */}
          <div className="relative w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-white/10 mb-4 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage & Status */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span className="text-sky-400 font-semibold">{statusText}</span>
            <span className="text-slate-200">{progress}%</span>
          </div>

          {/* Terminal Accents */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>LOC: SONIPAT, HARYANA</span>
            <span>MDU CHHOTU RAM POLYTECHNIC</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
