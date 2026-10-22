import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-neutral-800 bg-neutral-950 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
              <Terminal className="h-3.5 w-3.5" />
              <span>Let's Build Something High-Impact</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100">
              Ready to scale your automation & AI architecture?
            </h3>
            <p className="text-sm text-neutral-400 max-w-lg leading-relaxed">
              Whether you need to architect multi-store e-commerce pipelines, streamline high-speed serverless image processing, or ground autonomous LLM agents in production databases — I'm open for engineering roles and collaborations.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
              >
                <Mail className="h-4 w-4" />
                <span>Send Direct Email</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-xs font-medium transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-cyan-400" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Direct Contact Channels</div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors font-mono text-xs sm:text-sm">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-teal-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-300 transition-colors font-mono text-xs sm:text-sm">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-xs sm:text-sm">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <span>backend-extension</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Deployed on <span className="text-neutral-300">Vercel</span> • Workflows verified in <span className="text-cyan-400">n8n</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
