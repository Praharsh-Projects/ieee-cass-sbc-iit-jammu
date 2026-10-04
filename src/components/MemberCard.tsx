import React from 'react';
import { Clock, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { ChapterMember } from '../types';
import { MemberPortrait } from './MemberPortrait';

interface MemberCardProps {
  member: ChapterMember;
  isFaculty?: boolean;
  onSelect?: (member: ChapterMember) => void;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, isFaculty = false, onSelect }) => (
  <article className={`member-card surface-card relative h-full flex flex-col ${isFaculty ? 'faculty-card' : member.isCurrent ? '' : 'past-member-card'} ${onSelect ? 'interactive-card' : ''}`}>
    <div className="member-card-accent" aria-hidden="true" />
    <div className="p-6 sm:p-7 flex flex-col items-center text-center flex-1">
      <MemberPortrait member={member} className={`${isFaculty ? 'h-36 w-36' : 'h-28 w-28'} mb-5`} />
      <h3 className={`font-bold text-[#003366] tracking-tight leading-snug ${isFaculty ? 'text-xl' : 'text-lg'}`}>{member.name}</h3>
      <span className="member-role mt-3">{member.position}</span>
      <p className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-500"><Clock className="w-3.5 h-3.5 shrink-0" />{member.term}</p>
      {member.department && <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.department}</p>}
      {member.statusNote && <p className="mt-4 px-3 py-2 rounded-lg bg-sky-50 text-xs leading-relaxed text-sky-800">{member.statusNote}</p>}
      {member.bio && <p className="mt-4 text-sm text-slate-500 leading-relaxed">{member.bio}</p>}
      <div className="w-full mt-auto pt-5">
        {onSelect && <button type="button" onClick={() => onSelect(member)} className="stretched-action inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-sky-800" aria-label={`Open profile for ${member.name}, ${member.position}`} aria-haspopup="dialog" aria-controls="member-profile-dialog">View profile<ArrowUpRight className="h-4 w-4" /></button>}
        {(member.email || member.linkedinUrl) && <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-3 pt-3 border-t border-sky-100 pointer-events-none">
          {member.email && <a href={`mailto:${member.email}`} className="member-contact pointer-events-auto" aria-label={`Email ${member.name}`} title={member.email}><Mail className="h-4 w-4" />Email</a>}
          {member.linkedinUrl && <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="member-contact pointer-events-auto" aria-label={`${member.name} on LinkedIn`}><Linkedin className="h-4 w-4" />LinkedIn</a>}
        </div>}
      </div>
    </div>
  </article>
);
