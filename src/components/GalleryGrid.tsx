import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Calendar, ArrowUpRight, ArrowLeft, Images, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';
import { getGalleryAlbums } from '../data/gallery';
import { GalleryModal } from './GalleryModal';

interface GalleryGridProps {
  items: GalleryItem[];
  onNavigateEvent?: (eventId: string) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onNavigateEvent }) => {
  const albums = useMemo(() => getGalleryAlbums(items), [items]);
  const [albumId, setAlbumId] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const album = albums.find(entry => entry.id === albumId);
  const albumHeading = useRef<HTMLHeadingElement>(null);
  const albumButtons = useRef(new Map<string, HTMLButtonElement>());
  const previousAlbumId = useRef<string | null>(null);

  useEffect(() => {
    if (albumId) { previousAlbumId.current = albumId; albumHeading.current?.focus(); }
    else if (previousAlbumId.current) albumButtons.current.get(previousAlbumId.current)?.focus();
  }, [albumId]);

  useEffect(() => {
    if (!albumId || activeItem) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setAlbumId(null); }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [albumId, activeItem]);

  return (
    <div className="space-y-7">
      {album ? <>
        <div className="album-toolbar surface-card p-5 sm:p-7 space-y-5">
          <button type="button" onClick={() => setAlbumId(null)} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-800"><ArrowLeft className="h-4 w-4" />Back to albums</button>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0 max-w-3xl"><h2 ref={albumHeading} tabIndex={-1} className="subsection-heading rounded-sm">{album.title}</h2>{album.date && <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600"><Calendar className="h-4 w-4 text-sky-700" />{album.date}</p>}</div>
            <span className="metadata-badge text-sm"><Images className="mr-2 h-4 w-4" />{album.photos.length} photos</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.photos.map((photo, index) => <article key={photo.id} className="gallery-card surface-card interactive-card relative group overflow-hidden">
            <div className="aspect-[4/3] bg-slate-100 overflow-hidden"><img src={photo.imageUrl} alt={photo.altText ?? photo.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" /><span className="absolute right-3 top-3 rounded-lg bg-white/90 p-2 text-sky-800" aria-hidden="true"><Maximize2 className="h-4 w-4" /></span></div>
            <div className="p-5 space-y-3"><p className="text-sm leading-relaxed text-slate-600">{photo.altText ?? photo.description}</p><button type="button" onClick={() => setActiveItem(photo)} className="stretched-action inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-sky-800" aria-label={`Open photo ${index + 1} of ${album.photos.length}: ${photo.altText ?? photo.title}`} aria-haspopup="dialog">View photo<ArrowUpRight className="h-4 w-4" /></button></div>
          </article>)}
        </div>
      </> : <>
        <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="subsection-heading">Our albums</h2><p className="text-sm text-slate-500">{albums.length} albums · {albums.reduce((total, entry) => total + entry.photos.length, 0)} photos</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map(entry => <article key={entry.id} className="gallery-card album-card surface-card interactive-card relative group overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden"><img src={entry.photos[0].imageUrl} alt={entry.photos[0].altText ?? entry.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" aria-hidden="true" /><span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-[#003366]"><Images className="h-4 w-4" />{entry.photos.length} photos</span></div>
            <div className="p-6 flex flex-col flex-1">{entry.date && <p className="inline-flex items-center gap-2 text-xs font-medium text-teal-700"><Calendar className="h-3.5 w-3.5" />{entry.date}</p>}<h3 className="mt-3 text-lg font-bold text-[#003366] leading-snug">{entry.title}</h3><div className="mt-auto pt-5"><button type="button" ref={button => { if (button) albumButtons.current.set(entry.id, button); else albumButtons.current.delete(entry.id); }} onClick={() => setAlbumId(entry.id)} className="stretched-action inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-sky-800" aria-label={`Open album ${entry.title}, ${entry.photos.length} photos`}>Explore album<ArrowUpRight className="h-4 w-4" /></button></div></div>
          </article>)}
        </div>
      </>}
      <GalleryModal item={activeItem} items={album?.photos ?? []} onClose={() => setActiveItem(null)} onNavigateItem={setActiveItem} onNavigateEvent={onNavigateEvent} />
    </div>
  );
};
