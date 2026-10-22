import React from 'react';
import { TECHNICAL_SKILLS, PERSONAL_INFO } from '../data/portfolioData';
import { Award, GraduationCap } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Technical Competencies</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Skills Matrix & Engineering Toolkit
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            Comprehensive breakdown of languages, orchestration engines, serverless environments, and database patterns.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-neutral-200 mb-4 pb-2 border-b border-neutral-800/80">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-mono hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Certifications Bento */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-neutral-800/80">
          {/* Education Box */}
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-100">{PERSONAL_INFO.education.school}</h4>
                <p className="text-xs text-neutral-400">{PERSONAL_INFO.education.degree}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                GPA: <strong className="text-cyan-400">{PERSONAL_INFO.education.gpa}</strong>
              </span>
              <span className="text-neutral-500">{PERSONAL_INFO.education.period}</span>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-100">Professional Certifications</h4>
                <p className="text-xs text-neutral-400">Verified credentials in Security, SQL & English</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
              {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                <li key={cIdx} className="flex items-center gap-2">
                  <span className="text-teal-400">✔</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
