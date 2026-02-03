import type { Photo } from '../types/photo';
import { cldImage } from '../utils/cloudinary';

// const base = 'concerts';

export const galleries = {
  heilung: {
    title: 'Heilung',
    description: 'Heilung performing at The Factory in Dallas, TX',
    photos: [
      {
        src: cldImage('_TPW5744-DxO_DeepPRIME_XD2s_rjhtzu', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('DSC05491-DxO_DeepPRIME_XD2s_qupant', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('DSC05551-DxO_DeepPRIME_XD2s_aca5zc', {
          width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW5805-DxO_DeepPRIME_XD2s_swr4ok', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW5804-DxO_DeepPRIME_3_hfttd3', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW5749-DxO_DeepPRIME_XD2s_oqhrkn', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW5797-DxO_DeepPRIME_3_smxqxp', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW5810-DxO_DeepPRIME_XD2s_oz6f7n', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW5781-DxO_DeepPRIME_XD2s_k0gu7m', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW5756-DxO_DeepPRIME_XD2s_tw9c2y', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
    ] satisfies Photo[],
  },

  jayweinberg: {
    title: 'Jay Weinberg',
    description:
      'Jay Weinberg performing with Suicidal Tendencies in Hershey, PA',
    photos: [
      {
        src: cldImage('_TPW1347_miqqed', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW1225_jsfctb', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW1341_vclaln', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW1352_clf4zl', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW1314_hqs46x', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
      {
        src: cldImage('_TPW1408-DxO_DeepPRIME_3_ovyg55', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 4,
        height: 5,
      },
      {
        src: cldImage('_TPW1359_nfvoj0', {
          //   width: 1600,
          quality: 'auto:best',
        }),
        width: 3,
        height: 2,
      },
    ] satisfies Photo[],
  },
};
