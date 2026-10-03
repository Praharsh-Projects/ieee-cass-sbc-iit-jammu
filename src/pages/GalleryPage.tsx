import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { SectionHeader } from '../components/SectionHeader';
import { GALLERY_ITEMS } from '../data/gallery';

export const GalleryPage: React.FC = () => (
  <div className="page-shell space-y-10 sm:space-y-12">
    <SectionHeader
      level="h1"
      badge="ACTIVITY ARCHIVE"
      title="Gallery"
      subtitle="Photos and event materials from IEEE CASS activities at IIT Jammu."
    />
    <GalleryGrid items={GALLERY_ITEMS} />
  </div>
);
