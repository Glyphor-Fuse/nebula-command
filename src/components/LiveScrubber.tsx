import { useState } from 'react';
import { Info, Play, Star } from 'lucide-react';

export const LiveScrubber = () => {
  const [progress, setProgress] = useState(75);

  return (
    <section className="py-24 bg-void border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] font-mono rounded border border-cyan-500/30">MODULE v4.2</span>
              <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase italic">Proprietary Tech</span>
            </div>
            <h2 className="text-5xl font-display font-bold text-white mb-6 leading-tight">
              REPLAY EVERY <br />
              <span className="text-cyan-400">CRITICAL EVENT.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl">
              Don't just watch your players leave. Scrutinize the 48 hours leading up to churn. Our Live Scrubber overlays server health, latency spikes, and in-game economy shifts on a single temporal axis.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg">
                  <Info className="text-cyan-400 w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-display uppercase tracking-widest text-sm mb-1">Micro-Churn Detection</h4>
                  <p className="text-sm text-white/40">Identify the exact millisecond players disconnect during gameplay spikes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-8 bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
            {/* Scrubber UI */}
            <div className="aspect-video bg-void relative rounded-lg border border-white/5 overflow-hidden mb-6">
               <img 
                 src="/images/scrubber-preview.png" 
                 alt="Scrubber View" 
                 className="w-full h-full object-cover opacity-60 mix-blend-screen"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cyan-500 flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(0,245,255,0.4)] cursor-pointer">
                    <Play className="text-void ml-1" />
                  </div>
               </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400/60 uppercase tracking-tighter">
                <span>-48:00:00</span>
                <span>REALTIME: T+0:00</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={(e) => setProgress(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-center gap-6">
                <button className="text-white/40 hover:text-white transition-colors"><Star size={18} /></button>
                <button className="text-white/40 hover:text-white transition-colors"><Play size={18} /></button>
                <button className="text-white/40 hover:text-white transition-colors"><Star size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveScrubber;
