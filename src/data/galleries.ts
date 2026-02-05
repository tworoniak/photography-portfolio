import type { Photo } from '../types/photo';
import { cldImage } from '../utils/cloudinary';

// const base = 'concerts';

export const galleries = {
  heilung: {
    title: 'Heilung',
    description: 'Heilung performing at Red Rocks Amphitheatre in Denver, CO',
    concertDate: 'April 23, 2024',
    photos: [
      {
        src: cldImage('_TPW5744-DxO_DeepPRIME_XD2s_rjhtzu', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Kai Uwe Faust with Heilung',
        caption: 'Kai Uwe Faust with Heilung',
      },
      {
        src: cldImage('DSC05491-DxO_DeepPRIME_XD2s_qupant', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Kai Uwe Faust with Heilung',
        caption: 'Kai Uwe Faust with Heilung',
      },
      {
        src: cldImage('DSC05551-DxO_DeepPRIME_XD2s_aca5zc', {
          width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Annicke Shireen with Heilung',
        caption: 'Annicke Shireen with Heilung',
      },
      {
        src: cldImage('_TPW5805-DxO_DeepPRIME_XD2s_swr4ok', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
      {
        src: cldImage('_TPW5804-DxO_DeepPRIME_3_hfttd3', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
      {
        src: cldImage('_TPW5749-DxO_DeepPRIME_XD2s_oqhrkn', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Kai Uwe Faust with Heilung',
        caption: 'Kai Uwe Faust with Heilung',
      },
      {
        src: cldImage('_TPW5797-DxO_DeepPRIME_3_smxqxp', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
      {
        src: cldImage('_TPW5810-DxO_DeepPRIME_XD2s_oz6f7n', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
      {
        src: cldImage('_TPW5781-DxO_DeepPRIME_XD2s_k0gu7m', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
      {
        src: cldImage('_TPW5756-DxO_DeepPRIME_XD2s_tw9c2y', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Maria Franz with Heilung',
        caption: 'Maria Franz with Heilung',
      },
    ] satisfies Photo[],
  },

  jayweinberg: {
    title: 'Jay Weinberg',
    description:
      'Jay Weinberg performing with Suicidal Tendencies in Hershey, PA',
    concertDate: 'September 20, 2025',
    photos: [
      {
        src: cldImage('_TPW1347_miqqed', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1225_jsfctb', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1341_vclaln', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1352_clf4zl', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1314_hqs46x', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1408-DxO_DeepPRIME_3_ovyg55', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
      {
        src: cldImage('_TPW1359_nfvoj0', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg with Suicidal Tendencies',
        caption: 'Jay Weinberg with Suicidal Tendencies',
      },
    ] satisfies Photo[],
  },
  jinjer: {
    title: 'Jinjer',
    description: 'Jinjer performing at the Uptown Theater in Kansas City, MO',
    concertDate: 'December 10, 2025',
    photos: [
      {
        src: cldImage('_TPW3019_e87ztq', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'alt',
        caption: 'caption',
      },
      {
        src: cldImage('_TPW3246_ubjspx', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW3192_hcrohr', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('TPW06790_bhxzj6', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW3033_udfo0s', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW3209_ukdibt', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
    ] satisfies Photo[],
  },
  suicidaltendencies: {
    title: 'Suicidal Tendencies',
    description: 'Suicidal Tendencies performing in Hershey, PA',
    concertDate: 'September 20, 2025',
    photos: [
      {
        src: cldImage('TPW05906_vezoal', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Ben Weinman and Dean Pleasants',
        caption: 'Ben Weinman and Dean Pleasants',
      },
      {
        src: cldImage('_TPW1347_miqqed', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('TPW05859_tyeuyg', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Mike Muir',
        caption: 'Mike Muir',
      },
      {
        src: cldImage('_TPW1288_ttje56', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 2,
        height: 3,
        alt: 'Ben Weinman',
        caption: 'Ben Weinman',
      },
      {
        src: cldImage('_TPW1418_fodozd', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Ben Weinman',
        caption: 'Ben Weinman',
      },
      {
        src: cldImage('_TPW1384_k5qtcq', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Mike Muir and Jay Weinberg',
        caption: 'Mike Muir and Jay Weinberg',
      },
      {
        src: cldImage('_TPW1341_vclaln', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('_TPW1390_qpgfhk', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Ben Weinman and Dean Pleasants',
        caption: 'Ben Weinman and Dean Pleasants',
      },
      {
        src: cldImage('_TPW1352_clf4zl', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('_TPW1314_hqs46x', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('_TPW1408-DxO_DeepPRIME_3_ovyg55', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('_TPW1225_jsfctb', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('_TPW1359_nfvoj0', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Jay Weinberg',
        caption: 'Jay Weinberg',
      },
      {
        src: cldImage('TPW05784_ebmx7x', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Ben Weinman',
        caption: 'Ben Weinman',
      },
      {
        src: cldImage('TPW05916_hixlvg', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Tye Trujillo',
        caption: 'Tye Trujillo',
      },
      {
        src: cldImage('TPW05737_aizzxa', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Tye Trujillo',
        caption: 'Tye Trujillo',
      },

      {
        src: cldImage('TPW05759_ui9dz2', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Mike Muir',
        caption: 'Mike Muir',
      },
      {
        src: cldImage('TPW05829_c0fybo', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
        alt: 'Ben Weinman',
        caption: 'Ben Weinman',
      },
    ] satisfies Photo[],
  },
};
