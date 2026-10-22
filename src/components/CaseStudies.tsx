import React, { useState } from 'react';
import { 
  Layers, CheckCircle, Code2, ArrowRight, 
  Copy, Check, Sparkles, Server
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="case-studies" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Production Architectures</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Featured Case Studies & Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Real production architectures with zero-duplicate idempotency, serverless Sharp image pipelines, grounded LLM tool calling, and high-throughput n8n orchestration.
          </p>
        </div>

        {/* Tab selection */}
        <div className="mt-8 flex flex-wrap gap-2 pb-4 border-b border-neutral-800/80">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-2 ${
                activeTab === c.id
                  ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-neutral-900/60 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800/80'
              }`}
            >
              <span>{c.title.split(' | ')[0].split('–')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="mt-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                  {activeCase.category}
                </span>
                <span>•</span>
                <span>{activeCase.period}</span>
                <span>•</span>
                <span className="text-neutral-300 font-semibold">{activeCase.organization}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-100">
                {activeCase.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl">
                {activeCase.summary}
              </p>
            </div>

            {/* Impact Highlights Box */}
            <div className="lg:w-80 shrink-0 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-3 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span>Verified Impact</span>
              </div>
              <ul className="space-y-2">
                {activeCase.impactMetrics.map((metric, i) => (
                  <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture Pipeline Flow Diagram */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Server className="h-4 w-4 text-cyan-400" />
              <span>Pipeline Architecture & Data Flow</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeCase.architecture.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Step 0{idx + 1}
                      </span>
                      {idx < activeCase.architecture.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-neutral-600 hidden lg:block -mr-2" />
                      )}
                    </div>
                    <div className="text-sm font-semibold text-neutral-200">{step.title}</div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Code / Query View */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Features list */}
            <div className={`space-y-3 ${activeCase.codeOrQuerySnippet ? 'lg:col-span-5' : 'lg:col-span-12'}`}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-teal-400" />
                <span>Technical Implementation Nuances</span>
              </h4>
              <ul className="space-y-2.5">
                {activeCase.keyFeatures.map((feature, i) => (
                  <li key={i} className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                    <span className="text-teal-400 font-mono text-sm mt-0.5">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4">
                <div className="text-xs font-mono text-neutral-400 mb-2">Technologies Used:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Code / Query Snippet Window if available */}
            {activeCase.codeOrQuerySnippet && (
              <div className="lg:col-span-7 flex flex-col rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <span>{activeCase.codeOrQuerySnippet.caption}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(activeCase.codeOrQuerySnippet!.code)}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed bg-neutral-950 selection:bg-cyan-500/30">
                  <pre className="whitespace-pre">{activeCase.codeOrQuerySnippet.code}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
