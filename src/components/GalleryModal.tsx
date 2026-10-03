import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Cpu, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types';
import { useDialogFocus } from './useDialogFocus';

interface GalleryModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigateItem: (item: GalleryItem) => void;
  onNavigateEvent?: (eventId: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, items, onClose, onNavigateItem, onNavigateEvent }) => {
  const dialogRef = useDialogFocus(Boolean(item), onClose);
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const index = items.findIndex((entry) => entry.id === item.id);
      if (event.key === 'ArrowRight' && index < items.length - 1) {
        event.preventDefault();
        onNavigateItem(items[index + 1]);
      } else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        onNavigateItem(items[index - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onNavigateItem]);

  if (!item) return null;
  const currentIndex = items.findIndex((entry) => entry.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-panel relative w-full max-w-3xl overflow-hidden flex flex-col max-h-[90dvh]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-item-title"
      >
        <div className="flex items-center justify-between gap-3 p-4 bg-sky-50/60 border-b border-sky-100 shrink-0">
          <div className="min-w-0 space-y-1">
            <p className="eyebrow">GALLERY ARCHIVE</p>
            <p className="text-xs text-slate-500" aria-live="polite">{currentIndex + 1} of {items.length}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => hasPrev && onNavigateItem(items[currentIndex - 1])} disabled={!hasPrev} className="lightbox-control" title="Previous Item (Left Arrow)" aria-label="Previous image"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={() => hasNext && onNavigateItem(items[currentIndex + 1])} disabled={!hasNext} className="lightbox-control" title="Next Item (Right Arrow)" aria-label="Next image"><ChevronRight className="w-5 h-5" /></button>
            <button onClick={onClose} className="lightbox-control ml-1" title="Close (Esc)" aria-label="Close lightbox" data-autofocus><X className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="overflow-y-auto">
          <div className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 flex flex-col items-center justify-center px-5 py-8 sm:p-10">
            <div className="absolute inset-0 pcb-grid opacity-30" aria-hidden="true" />
            <div className="relative z-10 text-center max-w-xl">
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-sky-700"><Cpu className="w-8 h-8" /></div>
              <p className="eyebrow text-[11px]">IEEE CASS SBC IIT JAMMU • {item.eventGroup}</p>
              <h2 id="gallery-item-title" className="mt-4 text-xl sm:text-2xl font-bold text-[#003366] leading-snug">{item.title}</h2>
              <p className="inline-flex items-center gap-2 mt-5 text-sm text-slate-500"><Calendar className="w-4 h-4 text-sky-700" />{item.date}</p>
              <p className="mt-3 text-xs text-slate-500">{item.chipSubtitle}</p>
            </div>
          </div>
          <div className="p-5 sm:p-7 border-t border-slate-100 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="metadata-badge text-xs">{item.eventGroup}</span>
              {item.eventId && onNavigateEvent && (
                <button onClick={() => { onClose(); onNavigateEvent(item.eventId!); }} className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-sky-700">
                  View Full Activity Report<ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between gap-2 text-xs text-slate-500">
              <span>Use Left/Right keyboard arrows to navigate</span>
              <span>Indian Institute of Technology Jammu</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
