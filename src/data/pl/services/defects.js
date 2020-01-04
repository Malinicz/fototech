import { NIKON_LENSES, NIKON } from './nikon';
import { REPAIR, CLEANING } from './constants/serviceCategory';
import { LENS } from './constants/hardwareType';

export const defects = [
  {
    name: 'Czyszczenie soczewek zewnętrznych obiektywu',
    slug: 'czyszczenie-soczewek-zewnetrznych-obiektywu',
    description:
      'Czyszczenie zewnętrznych soczewek obiektywu, czyli tych do których jest dostęp bez demontażu obiektywu. Przy okazji czyszczenia matrycy w aparacie, czyszczenie zewnętrznych soczewek obiektywu wraz z ewentualnym filtrem jest bezpłatne.',
    price: '10',
    videoUrl: 'https://youtu.be/Uud1zaeNQcY',
    categories: [REPAIR, CLEANING],
    hardwareType: LENS,
    hardwareList: [
      {
        company: NIKON,
        models: [
          NIKON_LENSES.lens1,
          NIKON_LENSES.lens2,
          NIKON_LENSES.lens3,
          NIKON_LENSES.lens4,
          NIKON_LENSES.lens5,
          NIKON_LENSES.lens6,
          NIKON_LENSES.lens7,
          NIKON_LENSES.lens8,
        ],
      },
    ],
  },
  {
    name: 'Czyszczenie soczewek zewnętrznych obiektywu',
    slug: 'czyszczenie-soczewek-zewnetrznych-obiektywu',
    description:
      'Czyszczenie zewnętrznych soczewek obiektywu, czyli tych do których jest dostęp bez demontażu obiektywu. Przy okazji czyszczenia matrycy w aparacie, czyszczenie zewnętrznych soczewek obiektywu wraz z ewentualnym filtrem jest bezpłatne.',
    price: '10',
    videoUrl: 'https://youtu.be/Uud1zaeNQcY',
    categories: [REPAIR, CLEANING],
    hardwareType: LENS,
    hardwareList: [
      {
        company: 'Sony',
        models: [
          NIKON_LENSES.lens1,
          NIKON_LENSES.lens2,
          NIKON_LENSES.lens3,
          NIKON_LENSES.lens4,
          NIKON_LENSES.lens5,
          NIKON_LENSES.lens6,
          NIKON_LENSES.lens7,
          NIKON_LENSES.lens8,
        ],
      },
      {
        company: 'Nikon',
        models: [
          NIKON_LENSES.lens1,
          NIKON_LENSES.lens2,
          NIKON_LENSES.lens3,
          NIKON_LENSES.lens4,
          NIKON_LENSES.lens5,
          NIKON_LENSES.lens6,
          NIKON_LENSES.lens7,
          NIKON_LENSES.lens8,
        ],
      },
    ],
  },
];
