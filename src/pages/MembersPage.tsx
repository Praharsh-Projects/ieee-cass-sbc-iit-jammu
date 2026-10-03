import React, { useState } from 'react';
import { ShieldCheck, Users, History, Lock, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MemberCard } from '../components/MemberCard';
import { FacultyProfileModal } from '../components/FacultyProfileModal';
import { FACULTY_ADVISOR, FACULTY_CO_ADVISOR, CURRENT_STUDENT_OFFICERS, CURRENT_STUDENT_SUPPORT, PAST_CHAPTER_LEADERS } from '../data/members';
import { ChapterMember } from '../types';
import { SITE_CONFIG } from '../data/site';

export const MembersPage: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<ChapterMember | null>(null);

  return (
    <>
      <div className="page-shell space-y-12 sm:space-y-16">
        <SectionHeader
          level="h1"
          badge="EXECUTIVE LEADERSHIP"
          title="Chapter Leadership &amp; Members"
          subtitle="Meet the faculty advisors and student executive committee of the IEEE Circuits and Systems Society Student Branch Chapter at IIT Jammu."
        />

        <section aria-labelledby="current-leadership-heading" className="space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-200 pb-3">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-sky-600" />
              <h2 id="current-leadership-heading" className="subsection-heading">Current Leadership</h2>
            </div>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">Current team</span>
          </div>

          <section aria-labelledby="faculty-heading" className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              <h3 id="faculty-heading">Faculty Mentorship &amp; Advisory</h3>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">Select a faculty profile for background, experience, and recognition details.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[FACULTY_ADVISOR, FACULTY_CO_ADVISOR].map((faculty) => (
                <MemberCard key={faculty.id} member={faculty} isFaculty onSelect={setSelectedFaculty} />
              ))}
            </div>
          </section>

          <section aria-labelledby="student-board-heading" className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800">
              <Users className="h-4 w-4 text-sky-600" />
              <h3 id="student-board-heading">Student Executive Board</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CURRENT_STUDENT_OFFICERS.map((officer) => (
                <MemberCard key={officer.id} member={officer} />
              ))}
            </div>
          </section>

          <section aria-labelledby="student-support-heading" className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800">
              <Users className="h-4 w-4 text-sky-600" />
              <h3 id="student-support-heading">Student Support</h3>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">M.Tech VLSI Design students supporting the chapter.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CURRENT_STUDENT_SUPPORT.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        </section>

        <section aria-labelledby="previous-leadership-heading" className="space-y-8 border-t border-sky-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <History className="h-5 w-5 text-slate-500" />
              <h2 id="previous-leadership-heading" className="text-xl font-bold tracking-tight text-slate-700 sm:text-2xl">Previous Leadership</h2>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-500">Archived terms</span>
          </div>
          <p className="max-w-3xl text-sm text-slate-600">
            Past chapter leaders are listed below with their roles and areas of study.
          </p>

          <section aria-labelledby="past-chapter-leaders-heading" className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <GraduationCap className="h-4 w-4" />
              <h3 id="past-chapter-leaders-heading">Past IEEE Student Branch Chapter Leaders</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {PAST_CHAPTER_LEADERS.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

        </section>

        <aside className="surface-card mx-auto max-w-3xl space-y-2 p-6 text-center text-xs text-slate-500">
          <div className="mb-1 flex items-center justify-center gap-1.5 font-bold text-sky-700">
            <Lock className="h-3.5 w-3.5" />
            <span>IEEE Institutional Compliance Notice</span>
          </div>
          <p className="font-bold text-[#003366]">IEEE Circuits and Systems Society Student Branch Chapter • IIT Jammu (Code: {SITE_CONFIG.chapterCode})</p>
          <p>Student officers are elected in accordance with IEEE Member and Geographic Activities (MGA) and IEEE CASS Student Branch Chapter bylaws. Contact links shown here were supplied for the chapter directory.</p>
        </aside>
      </div>
      <FacultyProfileModal member={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </>
  );
};
