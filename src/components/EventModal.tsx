import React from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Clock, MapPin, Users, Award, UserCheck, Shield, Globe } from 'lucide-react';
import { ChapterEvent } from '../types';
import { useDialogFocus } from './useDialogFocus';

interface EventModalProps {
  event: ChapterEvent | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const dialogRef = useDialogFocus(Boolean(event), onClose);

  if (!event) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-900/55 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="modal-panel relative w-full max-w-2xl overflow-hidden max-h-[90dvh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-event-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative p-5 sm:p-7 pr-16 sm:pr-20 bg-sky-50/60 border-b border-sky-100 shrink-0">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-sky-200 hover:bg-sky-50 text-slate-500 hover:text-slate-900 transition-colors"
            data-autofocus
            aria-label="Close event details modal"
          >
            <X className="w-5 h-5 text-sky-700" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-sans text-xs font-bold px-2.5 py-1 rounded bg-sky-100 text-sky-800 border border-sky-300 tracking-wider">
              {event.number}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
              {event.category}
            </span>
            {event.mode && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-semibold border border-blue-200 flex items-center gap-1">
                {event.mode === 'Online' ? <Globe className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                {event.mode}
              </span>
            )}
          </div>

          <h2
            id="modal-event-title"
            className="text-xl sm:text-2xl font-extrabold text-[#003366] leading-snug"
          >
            {event.activityName}
          </h2>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Key Event Metadata Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-sans text-slate-500 font-bold">DATE</span>
                <span className="text-slate-900 font-semibold">{event.date}</span>
                {event.duration && (
                  <span className="text-xs text-slate-500 ml-1.5 font-normal">({event.duration})</span>
                )}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-sans text-slate-500 font-bold">TIME</span>
                <span className="text-slate-900 font-semibold">{event.time}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 flex items-start gap-3 sm:col-span-2">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-sans text-slate-500 font-bold">VENUE / PLATFORM</span>
                <span className="text-slate-900 font-semibold">
                  {event.venue ?? (event.mode === 'Online' ? 'Online Virtual Platform' : 'IIT Jammu')}
                </span>
              </div>
            </div>
          </div>

          {/* Speakers & Collaboration */}
          {event.speaker && (
            <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-200">
              <span className="block text-xs font-sans text-sky-800 uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-sky-600" />
                Speaker / Resource Person
              </span>
              <p className="text-slate-900 font-semibold text-sm leading-relaxed">
                {event.speaker}
              </p>
              {event.collaboration && (
                <div className="mt-2 pt-2 border-t border-sky-200 text-xs text-slate-600 flex items-center gap-2">
                  <span className="text-sky-700 font-bold font-sans">Collaboration:</span>
                  <span className="font-semibold text-[#003366]">{event.collaboration}</span>
                </div>
              )}
            </div>
          )}

          {/* Funding Info if present */}
          {event.funding && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <Award className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="text-slate-500 font-medium">Funding:</span>
              <span className="text-slate-900 font-semibold">{event.funding}</span>
            </div>
          )}

          {/* Attendance Stats Breakdown */}
          <div className="p-4 rounded-xl bg-white border border-sky-200 shadow-xs">
            <span className="block text-xs font-sans text-slate-600 uppercase tracking-wider mb-2.5 font-bold flex items-center gap-1.5">
              <Users className="w-4 h-4 text-sky-600" />
              Attendance Participation
            </span>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200">
                <span className="block text-xs text-slate-500 font-medium">IEEE Members</span>
                <span className="text-xl font-bold text-sky-700 font-sans">{event.attendance.ieee}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200">
                <span className="block text-xs text-slate-500 font-medium">Non-IEEE</span>
                <span className="text-xl font-bold text-slate-700 font-sans">{event.attendance.nonIeee}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#003366] border border-[#002244] text-white">
                <span className="block text-xs text-sky-200 font-medium">Total</span>
                <span className="text-xl font-bold text-white font-sans">{event.attendance.total}</span>
              </div>
            </div>
          </div>

          {/* Complete About Description (Exact Source Preserved) */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-slate-600 mb-2 font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              About Activity
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed text-sm whitespace-pre-line font-normal">
              {event.about}
            </div>
          </div>

          {/* Student Body Elections Section if Event I */}
          {event.studentBody && event.studentBody.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm uppercase tracking-wider text-sky-800 font-semibold">
                Elected Student Body &amp; Governance
              </h3>
              {event.facultyAdvisor && (
                <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-xs flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Faculty Advisor:</span>
                  <span className="font-bold text-[#003366]">{event.facultyAdvisor}</span>
                </div>
              )}
              <div className="divide-y divide-slate-100 border border-sky-200 rounded-xl overflow-hidden bg-white shadow-xs">
                {event.studentBody.map((member, i) => (
                  <div key={i} className="px-4 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-sans">{i + 1}. {member.position}</span>
                    <span className="font-bold text-slate-800">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source Note if any */}
          {event.sourceNote && (
            <p className="text-xs text-slate-500 italic bg-sky-50/50 p-2.5 rounded-lg border border-sky-100">
              * Note: {event.sourceNote}
            </p>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-sky-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#003366] hover:bg-[#002244] text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
