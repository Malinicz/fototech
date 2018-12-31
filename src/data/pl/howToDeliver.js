export default {
  segmentNavigation: [
    {
      initialLink: '/jak-dostarczyc',
      link: '/jak-dostarczyc/poczta',
      label: 'Pocztą',
      icon: 'mail',
      iconSize: 20,
    },
    {
      link: '/jak-dostarczyc/osobiscie',
      label: 'Osobiście',
      icon: 'manWalking',
      iconSize: 14,
    },
  ],
  postOfficeSteps: [
    {
      title: 'Wydrukuj i wypełnij formularz',
      description: [
        'Podaj nam szczegóły dotyczące Twojego sprzętu, wykrytej usterki oraz dane kontaktowe.',
      ],
      buttonLabel: 'formularz zgłoszeniowy',
    },
    {
      title: 'Zapakuj swój sprzęt',
      description: [
        'Zapakuj swój sprzęt tak, aby bezpiecznie do nas dotarł. Prosimy o nie dołączanie do przesyłki akcesoriów nie mających bezpośredniego związku ze zgłaszaną usterką - pasków na szyję i rękę, osłon przeciwsłonecznych, muszli ocznych, instrukcji, baterii AA itp.',
      ],
    },
    {
      title: 'Wybierz najbliszy salon',
    },
    {
      title: 'Wyślij paczkę',
      description: [
        'Nie zapomnij dołączyć formularza zgłoszeniowego! Wycenę wyślemy poprzez e-mail lub sms tak szybko, jak to możliwe.',
      ],
    },
  ],
  deliverIndividuallySteps: [
    {
      title: 'Wybierz salon',
    },
    {
      title: 'Odwiedź nas!',
      description: [
        'Przyjdź i pokaż nam, co się zepsuło. Jeśli planujesz przyjechać samochodem, przed salonem możesz spokojnie zaparkować swoje auto wzdłuż chodnika.',
      ],
    },
  ],
};
