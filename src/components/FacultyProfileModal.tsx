import React from 'react';
import { createPortal } from 'react-dom';
import { X, BriefcaseBusiness, Mail } from 'lucide-react';
import { ChapterMember } from '../types';
import { useDialogFocus } from './useDialogFocus';

interface FacultyProfileModalProps {
  member: ChapterMember | null;
  onClose: () => void;
}

export const FacultyProfileModal: React.FC<FacultyProfileModalProps> = ({ member, onClose }) => {
  const dialogRef = useDialogFocus(Boolean(member), onClose);
  if (!member?.facultyProfile) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-6" onClick={onClose}>
      <div
        ref={dialogRef}
        id="faculty-profile-dialog"
        className="modal-panel relative flex w-full max-w-4xl max-h-[90dvh] flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faculty-profile-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-sky-100 bg-sky-50/60 p-4 sm:px-6">
          <p className="eyebrow">FACULTY PROFILE · IIT JAMMU</p>
          <button onClick={onClose} className="lightbox-control" aria-label="Close faculty profile" data-autofocus>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8">
            <aside className="flex flex-col items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-5 text-center sm:self-start">
              {member.photoUrl ? (
                <img src={member.photoUrl} alt={`Portrait of ${member.name}`} className="h-40 w-40 rounded-2xl border border-sky-100 bg-white object-cover shadow-sm" />
              ) : (
                <div className="flex h-40 w-40 items-center justify-center rounded-2xl border border-sky-100 bg-white text-3xl font-bold text-[#003366]">{member.avatarInitials}</div>
              )}
              <h2 id="faculty-profile-title" className="text-xl font-bold leading-snug text-[#003366]">{member.name}</h2>
              <p className="text-sm font-semibold text-sky-800">{member.facultyProfile.introduction}</p>
              <p className="flex items-center gap-2 text-xs text-slate-600"><BriefcaseBusiness className="h-4 w-4 shrink-0 text-sky-700" />{member.department}</p>
              {member.email && (
                <a href={`mailto:${member.email}`} className="inline-flex min-h-10 items-center gap-2 break-all rounded-lg px-2 text-sm font-medium text-sky-800 hover:bg-white">
                  <Mail className="h-4 w-4 shrink-0" />{member.email}
                </a>
              )}
              <p className="rounded-full border border-sky-100 bg-white px-3 py-1 text-xs text-slate-600">{member.term}</p>
            </aside>
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-[#003366]">Profile</h3>
              <div className="space-y-3">
                {member.facultyProfile.highlights.map(({ label, detail }) => (
                  <section key={label} className="rounded-xl border border-slate-200 bg-white p-4">
                    <h4 className="text-sm font-bold text-sky-800">{label}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{detail}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 justify-end border-t border-sky-100 bg-slate-50 p-4 sm:px-6">
          <button onClick={onClose} className="button-primary">Close profile</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

