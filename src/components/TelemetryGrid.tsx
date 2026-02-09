import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, AlertTriangle } from 'lucide-react';

const MetricCard = ({ title, value, change, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="relative p-6 bg-white/5 border border-white/10 rounded-lg overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/10 blur-3xl -mr-12 -mt-12 group-hover:bg-${color}-500/20 transition-all`} />
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 bg-${color}-500/20 rounded-md border border-${color}-500/30`}>
        <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border border-${change >= 0 ? 'emerald' : 'orange'}-500/30 text-${change >= 0 ? 'emerald' : 'orange'}-400 bg-white/5`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
    <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-3xl font-display font-bold text-white tracking-tight">{value}</h3>
  </motion.div>
);

export const TelemetryGrid = () => {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard title="Total Users" value="2.4M" change={12.4} icon={Users} color="cyan" />
        <MetricCard title="Session Length" value="42m" change={-2.1} icon={Clock} color="purple" />
        <MetricCard title="Daily Revenue" value="$42.1k" change={8.7} icon={DollarSign} color="emerald" />
        <MetricCard title="Server Load" value="64%" change={3.2} icon={TrendingUp} color="orange" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative h-[400px] bg-white/5 border border-white/10 rounded-lg p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-display text-white uppercase tracking-widest">Global Retention Map</h3>
              <p className="text-xs font-mono text-white/40">Real-time player concentration by region</p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-400">LIVE FEED</span>
            </div>
          </div>
          <div className="absolute inset-0 top-24 pointer-events-none opacity-40">
            <img src="/images/heatmap.png" alt="Heatmap" className="w-full h-full object-cover grayscale brightness-150 contrast-125 mix-blend-screen" />
          </div>
          {/* Simulated HUD elements */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[10px] text-white/20">
            <span>LAT: 40.7128° N, LON: 74.0060° W</span>
            <span>SYSTEM: NOMINAL</span>
            <span>DATA_SYNC: 0.02ms</span>
          </div>
        </div>

        <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-display text-orange-400 uppercase tracking-widest">Churn Alerts</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-white/5 border-l-2 border-orange-500 rounded-r-md">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-mono text-orange-400 uppercase">High Risk Zone</span>
                  <span className="text-[10px] font-mono text-white/20">2m ago</span>
                </div>
                <p className="text-xs text-white/70">Segment 'Tier-3 North America' showing 15% drop in session frequency.</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-mono uppercase tracking-widest hover:bg-orange-500/20 transition-all">
            Initiate Retention Event
          </button>
        </div>
      </div>
    </section>
  );
};
