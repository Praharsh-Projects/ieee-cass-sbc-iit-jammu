import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavPage } from '../types';
import { SITE_CONFIG } from '../data/site';

interface FooterProps {
  onNavigate: (tab: NavPage) => void;
}

const navigation: { page: NavPage; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'about-us', label: 'About Us' },
  { page: 'members', label: 'Members' },
  { page: 'events', label: 'Events' },
  { page: 'contact', label: 'Contact' },
  { page: 'gallery', label: 'Gallery' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="relative z-10 bg-[#002244] text-slate-300 text-sm">
    <div className="bg-white border-y border-slate-200">
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-6 sm:gap-10 max-w-4xl mx-auto py-8 sm:py-10" aria-label="Chapter affiliations">
          <a href={SITE_CONFIG.officialLinks.iitjammu} target="_blank" rel="noopener noreferrer" className="affiliation-logo" aria-label="IIT Jammu official website">
            <img src="/images/iit-jammu-logo.png" alt="IIT Jammu" loading="lazy" className="h-24 sm:h-28 w-full object-contain" />
          </a>
          <a href={SITE_CONFIG.ecosystem.labUrl} target="_blank" rel="noopener noreferrer" className="affiliation-logo" aria-label="IC-ResQ Lab website">
            <img src="/images/ic-resq-lab-logo.png" alt="IC-ResQ Lab, IIT Jammu" loading="lazy" className="h-28 sm:h-32 w-full object-contain" />
          </a>
          <a href={SITE_CONFIG.officialLinks.ieee} target="_blank" rel="noopener noreferrer" className="affiliation-logo" aria-label="IEEE official website">
            <img src="/images/ieee-master-brand.png" alt="IEEE" loading="lazy" className="h-24 sm:h-28 w-full object-contain" />
          </a>
          <a href={SITE_CONFIG.officialLinks.cass} target="_blank" rel="noopener noreferrer" className="affiliation-logo" aria-label="IEEE Circuits and Systems Society website">
            <img src="/images/ieee-cas-logo.png" alt="IEEE Circuits and Systems Society" loading="lazy" className="h-28 sm:h-32 w-full object-contain" />
          </a>
        </div>
      </div>
    </div>

    <div className="site-container py-12 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_1.1fr] gap-10 lg:gap-12">
        <div className="space-y-5">
          <h2 className="font-semibold text-white text-base leading-relaxed">
            Indian Institute of Technology-Jammu<br />
            IEEE Circuits and Systems Society<br />
            Student Branch Chapter
          </h2>
          <p className="text-sky-200">Geo-code: <span className="font-semibold">{SITE_CONFIG.chapterCode}</span> <span className="mx-1" aria-hidden="true">·</span> {SITE_CONFIG.region}</p>
          <p className="leading-relaxed max-w-md">
            The IEEE Circuits and Systems Society Student Branch Chapter at IIT Jammu is dedicated to advancing theory, design, and practical implementation of circuits and systems for next-generation electronics and computing.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">{SITE_CONFIG.campusAddress.street}, {SITE_CONFIG.campusAddress.city} – {SITE_CONFIG.campusAddress.pincode}</p>
        </div>

        <div className="space-y-4">
          <h2 className="footer-heading">Connect with us</h2>
          <ul className="space-y-2">
            <li><button onClick={() => onNavigate('contact')} className="footer-link text-sky-200 font-semibold">Join IEEE SBC IIT Jammu <ArrowUpRight className="w-3.5 h-3.5" /></button></li>
            <li><a href={SITE_CONFIG.officialLinks.iitjammu} target="_blank" rel="noopener noreferrer" className="footer-link">IIT Jammu <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            <li><a href={SITE_CONFIG.ecosystem.labUrl} target="_blank" rel="noopener noreferrer" className="footer-link">IC-ResQ Lab <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            <li><a href={SITE_CONFIG.officialLinks.cass} target="_blank" rel="noopener noreferrer" className="footer-link">IEEE CASS Global <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            <li><a href={SITE_CONFIG.officialLinks.ieee} target="_blank" rel="noopener noreferrer" className="footer-link">IEEE Official <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            <li><a href={SITE_CONFIG.officialLinks.ieeeRegion10} target="_blank" rel="noopener noreferrer" className="footer-link">IEEE Region 10 <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
          </ul>
        </div>

        <nav className="space-y-4" aria-label="Footer navigation">
          <h2 className="footer-heading">Explore</h2>
          <ul className="space-y-2">
            {navigation.map(({ page, label }) => (
              <li key={page}><button onClick={() => onNavigate(page)} className="footer-link">{label}</button></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          <h2 className="footer-heading">Research &amp; Domains</h2>
          <ul className="space-y-3 leading-relaxed">
            <li>VLSI &amp; Microelectronics</li>
            <li>RISC-V &amp; Open Silicon</li>
            <li>Edge AI Hardware</li>
            <li>Bioelectronic Systems</li>
            <li>Reconfigurable Nanotech</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs">
        <p className="text-sky-200">{SITE_CONFIG.copyright}</p>
        <p className="text-slate-400">Chapter Code: {SITE_CONFIG.chapterCode}</p>
      </div>
    </div>
  </footer>
);
