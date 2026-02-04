// src/data/featuredImages.ts
import { cldImage } from '../utils/cloudinary';
import type { Photo } from '../types/photo';

export const featuredImages: Photo[] = [
  {
    src: cldImage('e7421ec4-de22-4e62-b5c1-0db5e0557c3d_rw_1920_opydqg'),
    width: 3,
    height: 2,
    alt: 'Johannes Eckerström from Avatar',
  },
  {
    src: cldImage('85e598e6-4220-4195-976c-fde92dc5f140_rw_1920_dwtunj'),
    width: 2,
    height: 3,
    alt: 'Anaria',
  },
  {
    src: cldImage('cb5e8ec1-0319-4d76-b8df-ae604a09820d_rw_3840_t9zuno'),
    width: 3,
    height: 2,
    alt: 'Richie Faulkner from Judas Priest',
  },
  {
    src: cldImage('a0f78ed3-644b-4c1e-aec2-4a3044e3a917_rw_1920_aa4fsf'),
    width: 2,
    height: 3,
    alt: 'Babychaos',
  },
  {
    src: cldImage('8fe2a9b3-4734-49b8-a95b-86d755b2ab85_rw_3840_wnrmau'),
    width: 3,
    height: 2,
    alt: 'Ginger Fish from Rob Zombie',
  },
  {
    src: cldImage('13bc2068-aef9-4514-9464-afd5ddf90136_rw_1920_temo46'),
    width: 2,
    height: 3,
    alt: 'Piggy D from Rob Zombie',
  },
  {
    src: cldImage('a2a88d67-81ac-4b75-be9f-d0d55d4b9059_rw_3840_jpcnbw'),
    width: 3,
    height: 2,
    alt: 'Waylon Reavis from Mushroomhead',
  },
  {
    src: cldImage('a9976f65-5597-4615-85ab-1f43d99c6232_rw_1920_zcsakv'),
    width: 2,
    height: 3,
    alt: "We're Wolves",
  },
  {
    src: cldImage('c6a17373-0d35-49a5-aea9-3a3f0db6ce0b_rw_1920_iukejy'),
    width: 3,
    height: 2,
    alt: 'Annicke Shireen with Heilung',
  },
  {
    src: cldImage('b61cd8dd-1157-4681-bc76-c065a2cf5275_rw_3840_u4dw1o'),
    width: 3,
    height: 2,
    alt: 'Kriz DK',
  },
  // add more featured images
];
