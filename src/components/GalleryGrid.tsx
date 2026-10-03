import React, { useState } from 'react';
import { Maximize2, Calendar, Cpu, ArrowUpRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface GalleryGridProps {
  items: GalleryItem[];
  onNavigateEvent?: (eventId: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onNavigateEvent }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const groups = [
    'All',
    'AI Hardware: Architectures and Design',
    'Next-gen VLSI Ed-tech',
    'Idea to Impact',
    'Reconfigurable Nanotechnologies',
    'Cyber-Secure Biological Systems',
    'Other chapter activities'
  ];
  const filteredItems = selectedGroup === 'All' ? items : items.filter((item) => item.eventGroup === selectedGroup);

  return (
    <div className="space-y-8">
      <div className="surface-card p-3 sm:p-4 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto" role="group" aria-label="Filter gallery by activity">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            aria-pressed={selectedGroup === group}
            className={'filter-chip max-w-full ' + (selectedGroup === group ? 'filter-chip-active' : 'filter-chip-idle')}
          >{group}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <article key={item.id} className="gallery-card surface-card interactive-card group relative overflow-hidden flex flex-col h-full">
            <div className="relative h-44 bg-gradient-to-br from-sky-50 to-white p-5 flex flex-col justify-between overflow-hidden border-b border-sky-100">
              <div className="absolute inset-0 pcb-dot-grid opacity-30" aria-hidden="true" />
              <span className="relative z-10 text-xs font-medium text-sky-800 leading-relaxed">{item.chipSubtitle}</span>
              <div className="relative z-10 flex items-center gap-3">
                <span className="p-3 rounded-xl bg-white border border-sky-100 text-sky-700"><Cpu className="w-6 h-6" /></span>
                <Maximize2 className="w-4 h-4 ml-auto text-sky-700" aria-hidden="true" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-3.5 h-3.5 text-sky-700" /><span>{item.date}</span></p>
              <h3 className="mt-3 text-base font-semibold text-[#003366] leading-snug">{item.title}</h3>
              <p className="mt-3 mb-5 text-sm text-slate-600 leading-relaxed line-clamp-3">{item.description}</p>
              <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs text-slate-500">{item.eventGroup}</p>
                <button
                  onClick={() => setActiveItem(item)}
                  aria-label={'Enlarge artwork: ' + item.title}
                  className="stretched-action inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-sky-700 group-hover:text-[#003366]"
                >Enlarge Artwork<ArrowUpRight className="w-4 h-4" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <GalleryModal item={activeItem} items={filteredItems} onClose={() => setActiveItem(null)} onNavigateItem={setActiveItem} onNavigateEvent={onNavigateEvent} />
    </div>
  );
};
