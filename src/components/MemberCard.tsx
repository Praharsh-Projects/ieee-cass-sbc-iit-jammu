import React from 'react';
import { ShieldCheck, Cpu, Clock, Building2, Mail, Linkedin } from 'lucide-react';
import { ChapterMember } from '../types';

interface MemberCardProps {
  member: ChapterMember;
  isFaculty?: boolean;
  onSelect?: (member: ChapterMember) => void;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, isFaculty = false, onSelect }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!onSelect || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    onSelect(member);
  };

  return (
    <article
      className={'surface-card h-full overflow-hidden flex flex-col ' + (isFaculty ? 'border-sky-200' : member.isCurrent ? '' : 'bg-slate-50 border-slate-200') + (onSelect ? ' interactive-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2' : '')}
      onClick={onSelect ? () => onSelect(member) : undefined}
      onKeyDown={handleKeyDown}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-label={onSelect ? `Open faculty profile for ${member.name}, ${member.position}` : undefined}
      aria-haspopup={onSelect ? 'dialog' : undefined}
      aria-controls={onSelect ? 'faculty-profile-dialog' : undefined}
    >
      <div className={'h-1 w-full ' + (isFaculty ? 'bg-[#007fb5]' : member.isCurrent ? 'bg-sky-200' : 'bg-slate-200')} aria-hidden="true" />
      <div className="p-6 sm:p-7 flex flex-col items-center text-center flex-1">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={`Portrait of ${member.name}`}
            className={'w-24 h-24 mb-5 rounded-full object-cover object-center border shadow-sm ' + (isFaculty ? 'border-sky-200 ring-4 ring-sky-50' : member.isCurrent ? 'border-sky-100' : 'border-slate-200')}
            loading="lazy"
          />
        ) : (
          <div className={'relative w-20 h-20 mb-5 rounded-full flex flex-col items-center justify-center border ' + (isFaculty ? 'bg-sky-50 border-sky-200 ring-4 ring-sky-50' : member.isCurrent ? 'bg-sky-50/70 border-sky-100' : 'bg-slate-100 border-slate-200')}>
            <span className="text-xl font-bold text-[#003366] tracking-wide">{member.avatarInitials}</span>
            <span className="text-[9px] font-semibold tracking-wide text-sky-700">{isFaculty ? 'ADVISOR' : 'IEEE CASS'}</span>
            <span className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-white border border-sky-100 text-sky-700">
              {isFaculty ? <ShieldCheck className="w-4 h-4" /> : <Cpu className="w-3.5 h-3.5" />}
            </span>
          </div>
        )}
        <h3 className={'font-bold text-[#003366] tracking-tight leading-snug ' + (isFaculty ? 'text-xl' : 'text-lg')}>{member.name}</h3>
        <span className={'inline-block mt-3 px-3 py-1 rounded-md text-xs font-semibold ' + (member.isCurrent ? 'bg-sky-50 text-sky-800' : 'bg-slate-100 text-slate-600')}>{member.position}</span>
        <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5 shrink-0" />{member.term}
        </span>
        {member.department && (
          <p className="flex items-start justify-center gap-2 mt-4 text-xs sm:text-sm leading-relaxed text-slate-500">
            <Building2 className="w-4 h-4 mt-0.5 shrink-0 text-sky-700" />
            <span>{member.department}</span>
          </p>
        )}
        {member.statusNote && <p className="mt-4 px-3 py-2 rounded-lg bg-sky-50 text-xs leading-relaxed text-sky-800">{member.statusNote}</p>}
        {member.bio && <p className="w-full mt-5 pt-5 border-t border-slate-100 text-sm text-slate-600 leading-relaxed text-left">{member.bio}</p>}
        {(member.email || member.linkedinUrl) && (
          <div className="w-full flex flex-wrap items-center justify-center gap-3 mt-5 pt-4 border-t border-slate-100" onClick={(event) => event.stopPropagation()}>
            {member.email && (
              <a href={`mailto:${member.email}`} className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-xs font-medium text-sky-800 hover:bg-sky-50 break-all" aria-label={`Email ${member.name} at ${member.email}`}>
                <Mail className="w-4 h-4 shrink-0" />{member.email}
              </a>
            )}
            {member.linkedinUrl && (
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-sky-800 hover:bg-sky-50" aria-label={`LinkedIn profile for ${member.name}`}>
                <Linkedin className="w-4 h-4 shrink-0" />LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

