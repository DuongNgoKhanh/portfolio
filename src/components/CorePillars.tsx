import React from 'react';
import { Workflow, Cpu, Brain, ShieldCheck } from 'lucide-react';
import { CORE_PILLARS } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Workflow: <Workflow className="h-6 w-6 text-cyan-400" />,
  Cpu: <Cpu className="h-6 w-6 text-teal-400" />,
  Brain: <Brain className="h-6 w-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-blue-400" />,
};

export const CorePillars: React.FC = () => {
  return (
    <section id="pillars" className="py-16 border-t border-neutral-900 bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Engineering Focus</h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
            Core Technical Pillars & Architecture Mindset
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Bridging distributed automation workflows, high-speed serverless endpoints, and context-grounded AI engines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                  {iconMap[pillar.icon]}
                </div>
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                {pillar.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800/80 text-neutral-300 font-mono"
                  >
                    • {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
