import { ChapterEvent, GalleryItem } from '../types';
import { COMPLETED_EVENTS } from './events';

const eventPhotos: Record<string, { accentColor: string; photos: { file: string; altText: string }[] }> = {
  'event-1': {
    accentColor: '#003366',
    photos: []
  },
  'event-2': {
    accentColor: '#009FE3',
    photos: [
      { file: 'event-2-01.jpg', altText: 'Certificate of appreciation for the invited lecture speaker.' },
      { file: 'event-2-02.jpg', altText: 'Poster for the cyber-secure biological systems lecture.' }
    ]
  },
  'event-3': {
    accentColor: '#0284C7',
    photos: [
      { file: 'event-3-01.jpg', altText: 'Participants gathered after a technical session.' },
      { file: 'event-3-02.jpg', altText: 'A speaker presenting during a technical session.' },
      { file: 'event-3-03.jpg', altText: 'IEEE CASS event announcement poster.' }
    ]
  },
  'event-4': {
    accentColor: '#003366',
    photos: [
      { file: 'event-4-01.jpg', altText: 'Idea to Impact workshop poster.' },
      { file: 'event-4-02.jpg', altText: 'Workshop participants taking part in a group activity.' },
      { file: 'event-4-03.jpg', altText: 'Workshop participants during a technical activity.' },
      { file: 'event-4-04.jpg', altText: 'Workshop participants gathered for a group photo.' }
    ]
  },
  'event-5': {
    accentColor: '#0284C7',
    photos: [
      { file: 'event-5-01.jpg', altText: 'Participants at an IEEE CASS workshop.' },
      { file: 'event-5-02.jpg', altText: 'Poster for an open-source VLSI design workshop.' },
      { file: 'event-5-03.jpg', altText: 'Audience attending a technical presentation.' }
    ]
  },
  'event-6': {
    accentColor: '#009FE3',
    photos: [
      { file: 'event-6-01.jpg', altText: 'Poster for the AI hardware expert talk.' },
      { file: 'event-6-02.jpg', altText: 'Participants gathered at the event venue.' },
      { file: 'event-6-03.jpg', altText: 'The invited speaker presenting to the audience.' },
      { file: 'event-6-04.jpg', altText: 'Audience following the expert talk.' },
      { file: 'event-6-05.jpg', altText: 'The invited speaker receiving a certificate.' }
    ]
  }
};

const makeGalleryItems = (event: ChapterEvent): GalleryItem[] => {
  const set = eventPhotos[event.id];
  if (!set) return [];

  return set.photos.map((photo, index) => ({
    id: `${event.id}-photo-${index + 1}`,
    title: event.title,
    eventGroup: `${event.number} · ${event.title}`,
    date: event.date,
    eventId: event.id,
    description: `Photo ${index + 1} of ${set.photos.length}`,
    accentColor: set.accentColor,
    chipSubtitle: `${event.number} · Photo ${index + 1} of ${set.photos.length}`,
    imageUrl: `/images/gallery/${photo.file}`,
    altText: photo.altText
  }));
};

const IMAGE_GALLERY_GROUP = 'Image Gallery';
const archivePhotos = [
  { file: 'image-gallery-01.jpg', altText: 'A speaker presenting a technical slide to the audience.' },
  { file: 'image-gallery-02.jpg', altText: 'A speaker presenting a technical diagram.' },
  { file: 'image-gallery-03.jpg', altText: 'A technical presentation about semiconductor trends.' },
  { file: 'image-gallery-04.jpg', altText: 'A speaker presenting a research topic.' }
];

const archiveItems: GalleryItem[] = archivePhotos.map((photo, index) => ({
  id: `image-gallery-photo-${index + 1}`,
  title: IMAGE_GALLERY_GROUP,
  eventGroup: IMAGE_GALLERY_GROUP,
  description: photo.altText,
  accentColor: '#003366',
  chipSubtitle: `IMAGE GALLERY · PHOTO ${index + 1} OF ${archivePhotos.length}`,
  imageUrl: `/images/gallery/${photo.file}`,
  altText: photo.altText
}));

export const GALLERY_ITEMS: GalleryItem[] = [
  ...COMPLETED_EVENTS.flatMap(makeGalleryItems),
  ...archiveItems
];
export const GALLERY_EVENT_GROUPS = [
  ...COMPLETED_EVENTS.map((event) => `${event.number} · ${event.title}`),
  IMAGE_GALLERY_GROUP
];
