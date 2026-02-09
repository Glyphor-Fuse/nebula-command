import React from 'react';
import { CommandHeader } from '@/components/CommandHeader';
import { TelemetryGrid } from '@/components/TelemetryGrid';
import { LiveScrubber } from '@/components/LiveScrubber';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';

const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden grid-background pt-16">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void pointer-events-none" />
    
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <Terminal className="text-cyan-400 w-4 h-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/80">System Initialization: Complete</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 tracking-tighter leading-none">
          OWN YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">TELEMETRY.</span>
        </h1>
        
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-sans font-light">
          The tactical command deck for indie developers. Visualize player behavior, monitor server health, and intercept churn before it happens. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-cyan-500 text-void font-display font-bold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_0_40px_rgba(0,245,255,0.3)]">
            Establish Command
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
            View Live Demo
          </button>
        </div>
      </motion.div>
    </div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 flex flex-col items-center gap-2 text-white/20"
    >
      <span className="font-mono text-[10px] uppercase tracking-widest">Downlink</span>
      <ChevronDown size={20} />
    </motion.div>
  </header>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <CommandHeader />
      <Hero />
      <TelemetryGrid />
      <LiveScrubber />
      
      <footer className="py-24 border-t border-white/5 text-center">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-cyan-500/20 mb-8 font-display text-4xl font-bold uppercase tracking-widest">
            Nebula Command
          </div>
          <div className="flex justify-center gap-12 font-mono text-[10px] text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400">Documentation</a>
            <a href="#" className="hover:text-cyan-400">API Access</a>
            <a href="#" className="hover:text-cyan-400">Tactical Support</a>
          </div>
          <div className="mt-12 text-[10px] font-mono text-white/20">
            &copy; 2024 NEBULA ANALYTICS CORP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
