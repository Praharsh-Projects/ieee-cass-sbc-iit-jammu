import React from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Linkedin } from 'lucide-react';
import { ChapterMember } from '../types';
import { useDialogFocus } from './useDialogFocus';
import { MemberPortrait } from './MemberPortrait';

interface MemberProfileModalProps {
  member: ChapterMember | null;
  onClose: () => void;
}

export const MemberProfileModal: React.FC<MemberProfileModalProps> = ({ member, onClose }) => {
  const dialogRef = useDialogFocus(Boolean(member?.profile), onClose);
  if (!member?.profile) return null;
  const profile = member.profile;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-6" onClick={onClose}>
      <div ref={dialogRef} id="member-profile-dialog" className="modal-panel member-profile-dialog flex w-full max-w-5xl max-h-[90dvh] flex-col overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="member-profile-title" onClick={event => event.stopPropagation()}>
        <div className="modal-heading flex shrink-0 items-center justify-between gap-3 p-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-100">{member.roleType === 'Faculty' ? 'Faculty' : 'Member'} Profile · IIT Jammu</p>
          <button onClick={onClose} className="lightbox-control" aria-label="Close member profile" data-autofocus><X className="w-5 h-5" /></button>
        </div>
        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid gap-7 md:grid-cols-[240px_minmax(0,1fr)] md:gap-9">
            <aside className="profile-sidebar flex flex-col items-center gap-4 p-5 text-center md:self-start">
              <MemberPortrait member={member} className="h-40 w-40" />
              <h2 id="member-profile-title" className="text-xl font-bold leading-snug text-[#003366]">{member.name}</h2>
              <p className="text-sm font-semibold text-sky-800">{member.position}</p>
              <p className="text-sm leading-relaxed text-slate-600">{member.department}</p>
              <p className="metadata-badge text-xs">{member.term}</p>
              {member.email && <a href={`mailto:${member.email}`} className="profile-contact"><Mail className="h-4 w-4 shrink-0" /><span className="break-all">{member.email}</span></a>}
              {member.linkedinUrl && <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="profile-contact"><Linkedin className="h-4 w-4" />LinkedIn</a>}
            </aside>
            <div className="min-w-0 space-y-7">
              <section className="space-y-3">
                <h3 className="subsection-heading">About</h3>
                <p className="font-semibold text-sky-800 leading-relaxed">{profile.introduction}</p>
                {profile.about?.map(paragraph => <p key={paragraph} className="text-sm leading-7 text-slate-600">{paragraph}</p>)}
                {profile.interests && <ul className="flex flex-wrap gap-2 pt-2" aria-label="Research interests">{profile.interests.map(interest => <li key={interest} className="metadata-badge text-xs">{interest}</li>)}</ul>}
              </section>
              {profile.highlights && <section className="space-y-3" aria-label="Profile highlights">{profile.highlights.map(({ label, detail }) => <div key={label} className="profile-detail"><h4 className="text-sm font-bold text-sky-800">{label}</h4><p className="mt-1 text-sm leading-relaxed text-slate-600">{detail}</p></div>)}</section>}
              {profile.experience && <section className="space-y-4"><h3 className="subsection-heading">Experience</h3><ol className="space-y-4">{profile.experience.map(experience => <li key={`${experience.organization}-${experience.role}`} className="profile-experience"><p className="text-xs font-semibold text-teal-700">{experience.dates}</p><h4 className="mt-1 text-base font-bold text-[#003366]">{experience.role}</h4><p className="mt-1 text-sm font-medium text-sky-800">{experience.organization}</p>{experience.description && <p className="mt-3 text-sm leading-relaxed text-slate-600">{experience.description}</p>}</li>)}</ol></section>}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 justify-end border-t border-sky-100 bg-sky-50/70 p-4 sm:px-6"><button onClick={onClose} className="button-primary">Close profile</button></div>
      </div>
    </div>, document.body
  );
};
