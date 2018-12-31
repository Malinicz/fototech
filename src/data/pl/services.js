import navigation from './shared/navigation';

export default {
  navLinkActivityUrl: navigation.services.slug,
  segmentNavigation: [
    {
      initialLink: '/uslugi',
      link: '/uslugi/naprawa',
      label: 'Naprawa',
      icon: 'wrench',
      iconSize: 20,
    },
    {
      link: '/uslugi/czyszczenie',
      label: 'Czyszczenie',
      icon: 'drop',
      iconSize: 14,
    },
    {
      link: '/uslugi/kalibracja',
      label: 'Kalibracja',
      icon: 'target',
      iconSize: 14,
    },
  ],
};
