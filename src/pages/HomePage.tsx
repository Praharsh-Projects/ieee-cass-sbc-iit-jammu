import React, { useState } from 'react';
import { ArrowRight, Cpu, BookOpen, Sparkles, Binary, Microscope, ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { SectionHeader } from '../components/SectionHeader';
import { MemberCard } from '../components/MemberCard';
import { FacultyProfileModal } from '../components/FacultyProfileModal';
import { FACULTY_ADVISOR, FACULTY_CO_ADVISOR, CURRENT_STUDENT_OFFICERS } from '../data/members';
import { GALLERY_ITEMS } from '../data/gallery';
import { SITE_CONFIG } from '../data/site';
import { ChapterMember, NavPage } from '../types';

interface HomePageProps {
  onNavigate: (tab: NavPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedFaculty, setSelectedFaculty] = useState<ChapterMember | null>(null);
  // 3 Gallery preview items
  const galleryPreview = GALLERY_ITEMS.slice(0, 3);

  return (
    <div className="home-page pb-16 sm:pb-24">
      
      {/* 1. HERO SECTION */}
      <Hero onNavigate={onNavigate} />

      {/* 2. SECTION C: CHAPTER AT A GLANCE (Animated Verified Stats) */}
      <section className="relative z-10 bg-white pt-10 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Official Chapter Metrics • 2025
          </span>
        </div>
        <Statistics />
      </section>

      {/* 3. SECTION A & B: ABOUT IEEE CASS & ABOUT THE CHAPTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card A: ABOUT IEEE CASS */}
          <div className="surface-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                  SECTION A • GLOBAL SOCIETY
                </span>
                <span className="text-xs font-sans text-slate-400">IEEE CASS</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003366]">
                    About IEEE CASS
                  </h2>
                  <p className="text-xs text-sky-700 font-medium">
                    IEEE Circuits and Systems Society
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The IEEE Circuits and Systems Society (CASS) is the leading international technical society focused on the theory, analysis, design, and practical implementation of circuits and systems. It encompasses fundamental domains including VLSI design, digital signal processing, analog and mixed-signal circuits, Edge AI accelerators, neuromorphic hardware, and bioelectronic systems.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700 font-medium">
                <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2">
                  <Binary className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>VLSI &amp; ASIC Design</span>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Bioelectronic Systems</span>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Edge AI Hardware</span>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Open Silicon &amp; RISC-V</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about-us')}
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
              >
                <span>Read more about IEEE CASS global scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card B: ABOUT THE CHAPTER */}
          <div className="surface-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                  SECTION B • INSTITUTIONAL CHAPTER
                </span>
                <span className="text-xs font-sans text-slate-400">{SITE_CONFIG.chapterCode}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center p-1 shrink-0">
                  <img
                    src="/images/iit-jammu-logo.png"
                    alt="IIT Jammu"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#003366]">
                    About The Chapter
                  </h2>
                  <p className="text-xs text-sky-700 font-medium">
                    IEEE CASS SBC IIT Jammu • Region 10
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Established under Chapter Code <strong>{SITE_CONFIG.chapterCode}</strong> at the Indian Institute of Technology Jammu, the IEEE CASS Student Branch Chapter serves as an active academic platform for undergraduate, postgraduate, and doctoral researchers. It facilitates technical learning through international expert talks, workshops, and hands-on laboratory sessions.
              </p>

              {/* Verified chapter details */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2 font-sans text-xs text-slate-700">
                <div className="info-row">
                  <span className="text-slate-500">Institution:</span>
                  <span className="font-bold text-[#003366]">IIT Jammu (Jagti Campus)</span>
                </div>
                <div className="info-row">
                  <span className="text-slate-500">Faculty Advisors:</span>
                  <span className="font-bold text-slate-800">Dr. Ambika Prasad Shah · Dr. Anup Shukla</span>
                </div>
                <div className="info-row">
                  <span className="text-slate-500">Research Ecosystem:</span>
                  <span className="font-bold text-sky-700">{SITE_CONFIG.ecosystem.labName}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about-us')}
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 group"
              >
                <span>Explore chapter constitution &amp; history</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION E: LEADERSHIP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="SECTION E • LEADERSHIP PREVIEW"
          title="Executive Mentorship &amp; Officers"
          subtitle="Guided by faculty advisors and led by dedicated student researchers at IIT Jammu."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Faculty Advisor */}
          <MemberCard member={FACULTY_ADVISOR} isFaculty onSelect={setSelectedFaculty} />
          <MemberCard member={FACULTY_CO_ADVISOR} isFaculty onSelect={setSelectedFaculty} />
          
          {/* Student Chair */}
          <MemberCard member={CURRENT_STUDENT_OFFICERS[0]} />

          {/* Student Vice Chair */}
          <MemberCard member={CURRENT_STUDENT_OFFICERS[1]} />
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('members')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white hover:bg-sky-50 text-[#003366] text-xs font-sans font-bold border border-sky-300 shadow-sm transition-all hover:shadow-md"
          >
            <span>View All Members &amp; Leadership</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </div>
      </section>

      {/* 6. SECTION F: GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase bg-sky-50 border border-sky-200 text-sky-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              <span>SECTION F • GALLERY ARCHIVE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003366] tracking-tight">
              Activity Showcase
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Visual records of technical talks, workshops, and student branch activities.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-sky-600 hover:text-sky-700 text-xs font-sans font-bold border border-sky-300 shadow-xs transition-colors self-start md:self-auto"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryPreview.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              role="button"
              tabIndex={0}
              aria-label={'View gallery: ' + item.title}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigate('gallery'); } }}
              className="surface-card interactive-card p-6 cursor-pointer space-y-3"
            >
              <div className="h-36 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50/70 border border-sky-100 flex flex-col justify-between p-4 relative overflow-hidden">
                <div className="absolute inset-0 pcb-grid opacity-30" />
                <span className="relative z-10 text-[10px] font-sans font-bold text-sky-800 bg-white/90 px-2 py-0.5 rounded border border-sky-200 w-fit">
                  {item.chipSubtitle}
                </span>
                <div className="relative z-10 flex items-center justify-between text-xs text-[#003366] font-bold">
                  <span>{item.date}</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-600" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-[#003366] line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION G: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#003366] via-[#004A75] to-[#007fb5] p-6 sm:p-12 overflow-hidden shadow-sm text-center space-y-6">
          <div className="absolute inset-0 pcb-grid opacity-15" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-sans text-xs text-sky-200 uppercase tracking-widest block font-bold">
              JOIN IEEE CASS SBC IIT JAMMU
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Be part of the IEEE CASS community at IIT Jammu.
            </h2>
            <p className="text-sm text-sky-100 leading-relaxed">
              Connect with fellow hardware enthusiasts, participate in hands-on workshops, explore microelectronics research, and engage with international technical leaders.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 rounded-lg bg-white hover:bg-sky-50 text-[#003366] font-semibold text-sm transition-colors shadow-sm"
              >
                Contact &amp; Join
              </button>
              <button
                onClick={() => onNavigate('members')}
                className="px-8 py-3 rounded-xl bg-sky-950/60 hover:bg-sky-950 text-white font-semibold text-sm border border-sky-300/40 transition-colors"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <FacultyProfileModal member={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </div>
  );
};
