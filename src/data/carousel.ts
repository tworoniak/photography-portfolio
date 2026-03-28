import { cldImage } from '../utils/cloudinary';

export type Slide = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export const carouselSlides: Slide[] = [
  {
    id: '1',
    src: cldImage('e7421ec4-de22-4e62-b5c1-0db5e0557c3d_rw_1920_opydqg'),
    alt: 'Johannes Eckerström from Avatar',
    caption: 'Johannes Eckerström from Avatar',
  },
  {
    id: '2',
    src: cldImage('85e598e6-4220-4195-976c-fde92dc5f140_rw_1920_dwtunj'),
    alt: 'Dan Spinney from Anaria',
    caption: 'Dan Spinney from Anaria',
  },
  {
    id: '3',
    src: cldImage('a0f78ed3-644b-4c1e-aec2-4a3044e3a917_rw_1920_aa4fsf'),
    alt: 'Babychaos',
    caption: 'Babychaos',
  },
  {
    id: '4',
    src: cldImage('13bc2068-aef9-4514-9464-afd5ddf90136_rw_1920_temo46'),
    alt: 'Piggy D from Rob Zombie',
    caption: 'Piggy D from Rob Zombie',
  },
  {
    id: '5',
    src: cldImage('a97459a3-9701-4427-adc1-960bb5a487f2_rw_1920_j3i7vm'),
    alt: 'Butcher Babies',
    caption: 'Butcher Babies',
  },
  {
    id: '6',
    src: cldImage('8fe2a9b3-4734-49b8-a95b-86d755b2ab85_rw_3840_wnrmau'),
    alt: 'Ginger Fish from Rob Zombie',
    caption: 'Ginger Fish from Rob Zombie',
  },
  {
    id: '7',
    src: cldImage('a9976f65-5597-4615-85ab-1f43d99c6232_rw_1920_zcsakv'),
    alt: "Anthony Diaferio from We're Wolves",
    caption: "Anthony Diaferio from We're Wolves",
  },
  {
    id: '8',
    src: cldImage('bf063654-72bc-4248-a4b1-7d2e3cada001_rw_1920_mohw3l'),
    alt: 'James Hetfield from Metallica',
    caption: 'James Hetfield — Metallica',
  },
  {
    id: '9',
    src: cldImage('b61cd8dd-1157-4681-bc76-c065a2cf5275_rw_3840_u4dw1o'),
    alt: 'Kriz D.K. from Genitorturers',
    caption: 'Kriz D.K. from Genitorturers',
  },
  {
    id: '10',
    src: cldImage('03d6bb04-aca8-4157-8e14-5a1ded28c2f5_rw_1920_s9ei4l'),
    alt: 'Heilung at Red Rocks',
    caption: 'Heilung',
  },
];
