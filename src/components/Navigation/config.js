export const HOME = '/';

export const SERVICES = '/uslugi';
export const SERVICES_REPAIRS = `${SERVICES}/naprawa`;
export const SERVICES_CLEANING = `${SERVICES}/czyszczenie`;
export const SERVICES_CALIBRATION = `${SERVICES}/kalibracja`;

export const HOW_TO_DELIVER = '/jak-dostarczyc';
export const HOW_TO_DELIVER_BY_MAIL = `${HOW_TO_DELIVER}/poczta`;
export const HOW_TO_DELIVER_BY_YOURSELF = `${HOW_TO_DELIVER}/osobiscie`;

export const SHOP = 'http://www.fototech-serwis.pl';

export const BLOG = '/blog';

export const CONTACT = '/kontakt';
export const CONTACT_KRAKOW = `${CONTACT}/krakow`;
export const CONTACT_WARSZAWA = `${CONTACT}/warszawa`;

export default [
  { id: 1, name: 'Strona główna', slug: HOME },
  {
    id: 2,
    name: 'Usługi',
    slug: SERVICES,
    sections: [
      { id: 21, name: 'Naprawa', slug: SERVICES_REPAIRS },
      { id: 22, name: 'Czyszczenie', slug: SERVICES_CLEANING },
      { id: 23, name: 'Kalibracja', slug: SERVICES_CALIBRATION },
    ],
  },
  {
    id: 3,
    name: 'Jak dostarczyć',
    slug: HOW_TO_DELIVER,
    sections: [
      { id: 31, name: 'Pocztą', slug: HOW_TO_DELIVER_BY_MAIL },
      { id: 32, name: 'Osobiście', slug: HOW_TO_DELIVER_BY_YOURSELF },
    ],
  },
  { id: 4, name: 'Sklep', url: SHOP },
  { id: 5, name: 'Blog', slug: BLOG },
  {
    id: 6,
    name: 'Kontakt',
    slug: CONTACT,
    sections: [
      { id: 61, name: 'Kraków', slug: CONTACT_KRAKOW },
      { id: 62, name: 'Warszawa', slug: CONTACT_WARSZAWA },
    ],
  },
];
