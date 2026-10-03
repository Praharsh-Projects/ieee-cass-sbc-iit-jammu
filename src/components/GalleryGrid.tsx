import React, { useState } from 'react';
import { Maximize2, Calendar, ArrowUpRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';

interface GalleryGridProps {
  items: GalleryItem[];
  onNavigateEvent?: (eventId: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onNavigateEvent }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const groups = ['All', ...Array.from(new Set(items.map((item) => item.eventGroup)))];
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
            <div className="relative aspect-[4/3] overflow-hidden border-b border-sky-100 bg-slate-100">
              {item.imageUrl && <img src={item.imageUrl} alt={item.altText ?? item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" />}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-4 pt-12">
                <span className="text-xs font-semibold text-white">{item.chipSubtitle}</span>
              </div>
              <span className="absolute right-3 top-3 rounded-md bg-white/90 p-2 text-sky-800 shadow-sm" aria-hidden="true"><Maximize2 className="h-4 w-4" /></span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-3.5 h-3.5 text-sky-700" /><span>{item.date}</span></p>
              <h3 className="mt-3 text-base font-semibold text-[#003366] leading-snug">{item.eventGroup}</h3>
              <div className="mt-auto pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => setActiveItem(item)}
                  aria-label={`View ${item.chipSubtitle} from ${item.eventGroup}`}
                  className="stretched-action inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-sky-700 group-hover:text-[#003366]"
                >View Photo<ArrowUpRight className="w-4 h-4" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <GalleryModal item={activeItem} items={filteredItems} onClose={() => setActiveItem(null)} onNavigateItem={setActiveItem} onNavigateEvent={onNavigateEvent} />
    </div>
  );
};
