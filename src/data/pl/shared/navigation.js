export default {
  home: { id: 1, label: 'Strona główna', slug: '/' },
  services: {
    id: 2,
    label: 'Usługi',
    slug: '/uslugi',
    sections: {
      repair: { id: 21, label: 'Naprawa', slug: '/uslugi/naprawa' },
      cleaning: { id: 22, label: 'Czyszczenie', slug: '/uslugi/czyszczenie' },
      calibration: { id: 23, label: 'Kalibracja', slug: '/uslugi/kalibracja' },
    },
  },
  howToDeliver: {
    id: 3,
    label: 'Jak dostarczyć',
    slug: '/jak-dostarczyc',
    sections: {
      mail: { id: 31, label: 'Pocztą', slug: '/jak-dostarczyc/poczta' },
      individually: {
        id: 32,
        label: 'Osobiście',
        slug: '/jak-dostarczyc/osobiscie',
      },
    },
  },
  shop: { id: 4, label: 'Sklep', url: 'http://www.fototech-serwis.pl' },
  blog: { id: 5, label: 'Blog', slug: '/blog' },
  contact: {
    id: 6,
    label: 'Kontakt',
    slug: '/kontakt',
    sections: {
      cracow: { id: 61, label: 'Kraków', slug: '/kontakt/krakow' },
      warsaw: { id: 62, label: 'Warszawa', slug: '/kontakt/warszawa' },
    },
  },
};
