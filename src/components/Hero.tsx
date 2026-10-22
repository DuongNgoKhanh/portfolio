import React from 'react';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO, IMPACT_METRICS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-teal-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>UIT Graduate (GPA 8.12) • 590+ Production Workflows Operated</span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-[1.15]">
            Engineering <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Autonomous Systems</span>, Serverless APIs & Resilient Pipelines.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            Hi, I'm <strong className="text-neutral-200">{PERSONAL_INFO.name}</strong> – an AI & Automation Engineer with a solid Information Security foundation. I build production-grade n8n orchestrations across 35+ storefronts, deploy high-throughput Vercel Serverless APIs with Sharp image manipulation, and architect database-grounded LLM workflows.
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#interactive-demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 hover:border-neutral-700 font-medium text-sm transition-all"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Interactive Sharp Canvas Demo</span>
          </a>
          <a
            href="https://github.com/BloomMediaDev/backend-extension.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300 border border-neutral-800/80 font-mono text-xs transition-all"
          >
            <Layers className="h-4 w-4 text-teal-400" />
            <span>backend-extension (Vercel)</span>
          </a>
        </div>

        {/* Quantified Impact Metrics Grid */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-snug">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
