import React from 'react';
import { Activity, ShieldCheck, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const CommandHeader = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-void/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center rounded-sm rotate-45">
            <Activity className="text-void -rotate-45 w-5 h-5" />
          </div>
          <span className="font-display text-xl font-bold tracking-widest text-white uppercase">
            Nebula <span className="text-cyan-400">Command</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-tighter text-cyan-500/60 font-mono">Live Players</span>
            <span className="text-sm font-mono text-cyan-400 font-bold">142,892</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-tighter text-emerald-500/60 font-mono">Server Health</span>
            <span className="text-sm font-mono text-emerald-400 font-bold">99.9%</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-tighter text-orange-500/60 font-mono">Threat Level</span>
            <span className="text-sm font-mono text-orange-400 font-bold">Low</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 border border-cyan-500/30 text-cyan-400 text-xs font-mono hover:bg-cyan-500/10 transition-colors uppercase tracking-widest">
            Deploy Patch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CommandHeader;
