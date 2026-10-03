import React from 'react';
import { Calendar, MapPin, ArrowRight, Globe, Cpu, Users, Layers, Terminal, Sparkles, Activity } from 'lucide-react';
import { ChapterEvent } from '../types';

interface EventCardProps {
  event: ChapterEvent;
  onViewDetails: (event: ChapterEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const renderPlaceholderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-7 h-7 text-sky-600" />;
      case 'activity':
        return <Activity className="w-7 h-7 text-sky-600" />;
      case 'cpu':
        return <Cpu className="w-7 h-7 text-sky-600" />;
      case 'layers':
        return <Layers className="w-7 h-7 text-sky-600" />;
      case 'terminal':
        return <Terminal className="w-7 h-7 text-sky-600" />;
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-sky-600" />;
      default:
        return <Cpu className="w-7 h-7 text-sky-600" />;
    }
  };

  const shortDescription = event.about.length > 130
    ? `${event.about.slice(0, 130).trim()}...`
    : event.about;

  return (
    <div className="surface-card interactive-card group relative h-full flex flex-col overflow-hidden">
      
      {/* Top Banner / Graphic Placeholder in Soft Sky Blue */}
      <div className="relative h-40 bg-gradient-to-br from-sky-50 via-blue-50/60 to-white p-4 flex flex-col justify-between overflow-hidden border-b border-sky-100">
        
        {/* Subtle background circuit trace */}
        <div className="absolute inset-0 pcb-dot-grid opacity-30 group-hover:opacity-50 transition-opacity" />
        
        {/* Badges on Top */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-sans text-xs font-bold px-2 py-0.5 rounded bg-white text-sky-700 border border-sky-200 shadow-xs">
            {event.number}
          </span>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
            {event.category}
          </span>
        </div>

        {/* Center Technical Graphic / Node */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white border border-sky-200 group-hover:scale-105 group-hover:border-sky-400 transition-all shadow-sm">
            {renderPlaceholderIcon(event.imagePlaceholder?.icon)}
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wide block font-semibold">
              {event.imagePlaceholder?.tag || 'IEEE CASS Session'}
            </span>
            <span className="text-[11px] text-sky-700 font-sans font-bold">
              Total Attendees: {event.attendance.total}
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent group-hover:via-sky-500 transition-all" />
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 mb-2 font-sans">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              {event.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              {event.mode === 'Online' ? (
                <>
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-blue-700 font-medium">Online</span>
                </>
              ) : (
                <>
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>IIT Jammu</span>
                </>
              )}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="text-lg font-semibold text-[#003366] group-hover:text-sky-700 transition-colors line-clamp-3 leading-snug">
            {event.activityName}
          </h3>

          {/* Short description */}
          <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Card Action Footer */}
        <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
          <span className="text-[11px] font-sans text-slate-500 font-medium">
            {event.time}
          </span>

          <button
            onClick={() => onViewDetails(event)}
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-sky-700 hover:text-[#003366] group/btn transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
