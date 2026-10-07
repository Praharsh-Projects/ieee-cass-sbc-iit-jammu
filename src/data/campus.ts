interface CampusSlide {
  image: string;
  alt: string;
  focalPoint: string;
  fit?: 'cover' | 'contain';
}

export const CAMPUS_SLIDES: CampusSlide[] = [
  { image: '/images/campus-slide-1.webp', alt: 'IIT Jammu campus buildings and entrance beneath a blue, cloud-filled sky.', focalPoint: '50% 65%' },
  { image: '/images/campus-slide-2.webp', alt: 'Aerial view of blue-roofed IIT Jammu buildings, solar panels, and surrounding greenery.', focalPoint: '50% 50%' },
  { image: '/images/campus-slide-3.webp', alt: 'IIT Jammu entrance with the institute name in Hindi and English and the institute emblem.', focalPoint: '50% 50%', fit: 'contain' },
  { image: '/images/campus-slide-4.webp', alt: 'IIT Jammu campus rooftops and tree-lined hills overlooking the city.', focalPoint: '50% 55%' },
  { image: '/images/campus-slide-5.webp', alt: 'Panoramic view of IIT Jammu buildings, sports ground, and green hills.', focalPoint: '50% 55%' },
];
