// src/data/featuredImages.ts
import { cldImage } from '../utils/cloudinary';
import type { Photo } from '../types/photo';

export const magazineImages: Photo[] = [
  {
    src: cldImage('1c4612ff-1622-4b68-881d-3a57eb23a550_rw_1200_xenw2u'),
    width: 2,
    height: 3,
    alt: 'Clutch feature in Kerrang!',
    caption: 'Clutch feature in Kerrang!',
  },
  {
    src: cldImage('ddd9d059-af24-4c85-8603-dcabb85310c9_rw_1920_dmhbsn'),
    width: 2,
    height: 3,
    alt: 'Clutch feature in Guitar World',
    caption: 'Clutch feature in Guitar World (February 2019)',
  },
  //   {
  //     src: cldImage('cb5e8ec1-0319-4d76-b8df-ae604a09820d_rw_3840_t9zuno'),
  //     width: 3,
  //     height: 2,
  //     alt: 'Richie Faulkner from Judas Priest',
  //     caption: 'Richie Faulkner from Judas Priest',
  //   },

  // add more featured images
];
