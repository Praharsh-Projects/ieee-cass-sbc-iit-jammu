import React, { useState, useMemo } from 'react';
import { Filter, Search } from 'lucide-react';
import { ChapterEvent } from '../types';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';

interface EventGridProps {
  events: ChapterEvent[];
}

export const EventGrid: React.FC<EventGridProps> = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEvent, setActiveModalEvent] = useState<ChapterEvent | null>(null);

  const categories = ['All', 'AGM', 'Distinguished Lecture', 'Expert Talk', 'Workshop'];
  const years = ['All', ...[...new Set(events.map(event => event.year))].sort((a, b) => b - a).map(String)];

  const filteredAndSortedEvents = useMemo(() => {
    let result = [...events];
    if (selectedCategory !== 'All') result = result.filter((e) => e.category === selectedCategory);
    if (selectedYear !== 'All') result = result.filter((e) => e.year.toString() === selectedYear);
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter((e) =>
        e.activityName.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.about.toLowerCase().includes(q) ||
        (e.speaker && e.speaker.toLowerCase().includes(q)) ||
        (e.venue && e.venue.toLowerCase().includes(q))
      );
    }
    return result;
  }, [events, selectedCategory, selectedYear, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-7">
      <div className="surface-card p-4 sm:p-6 space-y-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            aria-label="Search activities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search activities by title, speaker, or keywords (e.g. RISC-V, Bioelectronics, Nanotech)..."
            className="field-input pl-11 pr-20"
          />
          {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-2 text-xs font-medium text-sky-700 hover:bg-sky-50">Clear</button>}
        </div>
        <div className="flex flex-col gap-5 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by event type">
            <span className="hidden sm:inline-flex items-center gap-1.5 mr-2 text-xs font-semibold text-slate-500"><Filter className="w-3.5 h-3.5" />TYPE:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={'filter-chip ' + (selectedCategory === category ? 'filter-chip-active' : 'filter-chip-idle')}
              >{category}</button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by year">
              <span className="mr-2 text-xs font-semibold text-slate-500">YEAR:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={selectedYear === year}
                  className={'filter-chip font-sans ' + (selectedYear === year ? 'filter-chip-active' : 'filter-chip-idle')}
                >{year}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500" aria-live="polite">
        <span>Showing <strong className="text-[#003366]">{filteredAndSortedEvents.length}</strong> of {events.length} documented activities</span>
        {(selectedCategory !== 'All' || selectedYear !== 'All' || searchQuery) && <button onClick={resetFilters} className="text-sky-700 hover:underline font-semibold py-2">Reset all filters</button>}
      </div>
      {filteredAndSortedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedEvents.map((event) => <EventCard key={event.id} event={event} onViewDetails={setActiveModalEvent} />)}
        </div>
      ) : (
        <div className="surface-card py-14 px-6 text-center space-y-5">
          <p className="text-slate-600 text-sm">No events match your current filter criteria.</p>
          <button onClick={resetFilters} className="button-secondary">Clear Filters &amp; View All Activities</button>
        </div>
      )}
      <EventModal event={activeModalEvent} onClose={() => setActiveModalEvent(null)} />
    </div>
  );
};
