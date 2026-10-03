import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { OfficeBearerCard } from '../components/OfficeBearerCard';
import { FACULTY_ADVISOR, STUDENT_OFFICE_BEARERS } from '../data/officeBearers';

export const OfficeBearersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <SectionHeader
        badge="CHAPTER LEADERSHIP"
        title="Office Bearers &amp; Faculty Leadership"
        subtitle="Meet the executive committee steering the IEEE Circuits and Systems Society Student Branch Chapter at IIT Jammu."
      />

      {/* 1. Faculty Advisor Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <ShieldCheck className="w-5 h-5 text-sky-600" />
          <h2 className="text-lg font-sans font-bold uppercase tracking-wider text-[#003366]">
            Faculty Mentorship
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <OfficeBearerCard bearer={FACULTY_ADVISOR} isFaculty={true} />
        </div>
      </div>

      {/* 2. Core Student Leadership Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Users className="w-5 h-5 text-sky-600" />
          <h2 className="text-lg font-sans font-bold uppercase tracking-wider text-[#003366]">
            Student Executive Committee
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_OFFICE_BEARERS.map((bearer) => (
            <OfficeBearerCard key={bearer.id} bearer={bearer} />
          ))}
        </div>
      </div>

      {/* Leadership Governance & Election Note */}
      <div className="p-6 rounded-3xl bg-white border border-sky-200 text-xs text-slate-500 space-y-2 max-w-3xl mx-auto text-center font-sans shadow-xs">
        <p className="text-[#003366] font-bold text-sm">
          IEEE CASS Student Branch Chapter — Indian Institute of Technology Jammu
        </p>
        <p>
          Executive committee elected at the Annual General Meeting held at Pushkar Bhawan (Room 11AC2023), IIT Jammu.
        </p>
      </div>

    </div>
  );
};
