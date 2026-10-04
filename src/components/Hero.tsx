import React from 'react';
import { ArrowRight, Cpu, Users, Binary, ShieldCheck } from 'lucide-react';
import { NavPage } from '../types';
import { SITE_CONFIG } from '../data/site';
import { CampusSlideshow } from './CampusSlideshow';

interface HeroProps {
  onNavigate: (tab: NavPage) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => (
  <section className="relative">
    <CampusSlideshow />

    <div className="hero-introduction">
      <div className="site-container text-center">
        <div className="max-w-4xl mx-auto space-y-7">
          <p className="eyebrow">IEEE Circuits and Systems Society <span className="mx-2 text-sky-300" aria-hidden="true">/</span> IIT Jammu</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#003366] leading-tight">
            <span className="block">IEEE CASS</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-sky-700 mt-3">Student Branch Chapter</span>
            <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-slate-600 mt-3">Indian Institute of Technology Jammu</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="metadata-badge font-sans">Chapter Code: {SITE_CONFIG.chapterCode}</span>
            <span className="metadata-badge">{SITE_CONFIG.region}</span>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Advancing circuits and systems through technical learning, research, innovation and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button onClick={() => onNavigate('events')} className="button-primary w-full sm:w-auto group">
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => onNavigate('members')} className="button-secondary w-full sm:w-auto">
              <Users className="w-4 h-4 text-sky-700" />
              <span>Meet Our Team</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10 pt-7 border-t border-sky-100 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><Cpu className="w-4 h-4 text-sky-700" />VLSI &amp; Hardware Design</span>
          <span className="inline-flex items-center gap-2"><Binary className="w-4 h-4 text-sky-700" />RISC-V &amp; Open Silicon</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-700" />Bioelectronics &amp; Edge AI</span>
        </div>
      </div>
    </div>
  </section>
);
