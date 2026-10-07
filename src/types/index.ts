export type NavPage = 'home' | 'members' | 'events' | 'contact' | 'about-us' | 'gallery';

export type EventType = 'AGM' | 'Distinguished Lecture' | 'Expert Talk' | 'Workshop';

export interface StudentBodyMember {
  position: string;
  name: string;
}

export interface ChapterEvent {
  id: string;
  number: string; // e.g. "EVENT I", "EVENT II"
  title: string;
  activityName: string;
  date: string;
  isoDate: string; // for sorting
  year: number;
  time: string;
  duration?: string;
  venue?: string;
  mode?: 'In-Person' | 'Online' | 'Hybrid';
  attendance?: {
    ieee: number;
    nonIeee: number;
    total: number;
  };
  funding?: string;
  speaker?: string;
  collaboration?: string;
  about: string;
  category: EventType;
  imagePlaceholder?: {
    gradient: string;
    icon: string;
    tag: string;
  };
  imageUrl?: string;
  studentBody?: StudentBodyMember[];
  facultyAdvisor?: string;
  sourceNote?: string;
}

export interface ChapterMember {
  id: string;
  name: string;
  position: string;
  roleType: 'Faculty' | 'Core Student Leadership';
  avatarInitials: string;
  department?: string;
  term: string; // e.g. '2024 - Present' or 'Inaugural 2024 Executive Body'
  isCurrent: boolean;
  statusNote?: string;
  bio?: string;
  photoUrl?: string;
  email?: string;
  linkedinUrl?: string;
  portrait?: {
    // Face center in the original photo, independent of the circular frame size.
    focalPoint: { x: number; y: number };
    scale?: number;
  };
  profile?: {
    introduction: string;
    about?: string[];
    interests?: string[];
    highlights?: { label: string; detail: string }[];
    experience?: {
      role: string;
      organization: string;
      dates: string;
      description?: string;
    }[];
  };
}

export interface GalleryAlbum {
  id: string;
  title: string;
  date?: string;
  photos: GalleryItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  eventGroup: string;
  date?: string;
  eventId?: string;
  description: string;
  accentColor: string;
  chipSubtitle: string;
  imageUrl?: string;
  altText?: string;
}

export interface ChapterStat {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  subtitle: string;
  icon: string;
}
