import React from 'react';
import { Terminal, Mail, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <span className="font-semibold text-neutral-100 tracking-tight text-sm sm:text-base">
              Khanh Duong
            </span>
            <span className="text-cyan-400 font-mono text-xs ml-1.5 hidden sm:inline-block">
              /ai-automation
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#pillars" className="hover:text-neutral-100 transition-colors">Specialties</a>
          <a href="#case-studies" className="hover:text-neutral-100 transition-colors">Case Studies</a>
          <a href="#interactive-demo" className="hover:text-neutral-100 transition-colors">Sharp Demo</a>
          <a href="#skills" className="hover:text-neutral-100 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-neutral-100 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            <span>Email</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-sm font-semibold"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};
