import React, { useState } from 'react';
import { Calendar, BellRing, CheckCircle2 } from 'lucide-react';
import { EventGrid } from '../components/EventGrid';
import { SectionHeader } from '../components/SectionHeader';
import { COMPLETED_EVENTS } from '../data/events';

export const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('past');

  return (
    <div className="page-shell space-y-10 sm:space-y-12">
      <SectionHeader
        level="h1"
        badge="CHAPTER PORTFOLIO"
        title="Events"
        subtitle="Explore technical talks, workshops and activities conducted by IEEE CASS SBC IIT Jammu."
      />
      <div className="flex justify-center">
        <div className="surface-card p-1.5 flex items-stretch gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('past')}
            aria-pressed={activeTab === 'past'}
            className={'filter-chip flex-1 gap-2 px-4 sm:px-6 min-h-[48px] ' + (activeTab === 'past' ? 'filter-chip-active' : 'filter-chip-idle')}
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>PAST EVENTS ({COMPLETED_EVENTS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            aria-pressed={activeTab === 'upcoming'}
            className={'filter-chip flex-1 gap-2 px-4 sm:px-6 min-h-[48px] ' + (activeTab === 'upcoming' ? 'filter-chip-active' : 'filter-chip-idle')}
          >
            <BellRing className="w-4 h-4 shrink-0" />
            <span>UPCOMING EVENTS</span>
          </button>
        </div>
      </div>
      {activeTab === 'upcoming' ? (
        <div className="surface-card max-w-xl mx-auto py-14 px-6 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-xl bg-sky-50 flex items-center justify-center text-sky-700"><Calendar className="w-6 h-6" /></div>
          <h2 className="text-xl font-semibold text-[#003366]">No upcoming events at the moment.</h2>
          <p className="text-sm text-slate-500">Please check back soon for updates.</p>
          <p className="pt-4 border-t border-slate-100 text-xs text-slate-500">Official announcements will be published here upon schedule confirmation.</p>
        </div>
      ) : <EventGrid events={COMPLETED_EVENTS} />}
    </div>
  );
};
