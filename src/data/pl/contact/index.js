import navigation from '../shared/navigation';

export default {
  navLinkActivityUrl: navigation.contact.slug,
  title: 'Kontakt',
  subtitle: 'Wybierz salon, który cię interesuje.',
  segmentNavigation: {
    order: ['warszawa', 'krakow'],
    warszawa: {
      initialLink: '/kontakt',
      link: '/kontakt/warszawa',
      label: 'Warszawa',
    },
    krakow: {
      link: '/kontakt/krakow',
      label: 'Kraków',
    },
  },
  phoneHeading: 'Telefon',
  emailHeading: 'E-mail',
  addressHeading: 'Adres',
  formHeading: 'Napisz do nas!',
  formLabelMail: 'e-mail',
  formLabelName: 'imię',
  formLabelDescription: 'treść',
  formLabelButton: 'Wyślij',
  mapHeading: 'Znajdź nas na mapie',
  openingHoursHeading: 'Godziny otwarcia',
};
