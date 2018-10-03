import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationLinks: [
      {
        name: 'main',
        translation: '',
      },
      {
        name: 'tabs',
        translation: 'Inwestycja',
      },
      {
        name: 'map',
        translation: 'Lokalizacja',
      },
      {
        name: 'attributes',
        translation: 'Zalety',
      },
      {
        name: 'gallery',
        translation: 'Galeria',
      },
      {
        name: 'prices',
        translation: 'Cennik',
      },
      {
        name: 'contact',
        translation: 'Kontakt',
      },
    ],
    groundFloorInformation: [
      {
        name: 'Powierzchnia łączna:',
        value: '50,28 m2',
      },
      {
        name: 'Wiatrołap:',
        value: '2,52 m2',
      },
      {
        name: 'WC:',
        value: '2,58 m2',
      },
      {
        name: 'Komunikacja:',
        value: '3,32 m2 (5,59 m2)',
      },
      {
        name: 'Salon z kuchnią:',
        value: '25,96 m2',
      },
      {
        name: 'Garaż:',
        value: '15,90 m2',
      },
      {
        name: 'Podest:',
        value: '3,29 m2',
      },
      {
        name: 'Taras:',
        value: '11,50 m2',
      },
    ],
    atticInformation: [
      {
        name: 'Powierzchnia łączna:',
        value: '53,87 m2',
      },
      {
        name: 'Schody:',
        value: '3,90 m2',
      },
      {
        name: 'Komunikacja:',
        value: '3,61 m2',
      },
      {
        name: 'Łazienka:',
        value: '5,63 m2',
      },
      {
        name: 'Pokój nr 1:',
        value: '19,21 m2 (20,05 m2)',
      },
      {
        name: 'Pokój nr 2:',
        value: '10,78 m2',
      },
      {
        name: 'Pokój nr 3:',
        value: '10,74 m2',
      },
      {
        name: 'Balkon:',
        value: '3,58 m2',
      },
    ],
    galleryLinks: [
      'DSC_0184.jpg',
      'DSC_0185.jpg',
      'DSC_0184.jpg',
      'DSC_0185.jpg',
      'DSC_0186.jpg',
      'DSC_0187.jpg',
      'DSC_0189.jpg',
      'DSC_0190.jpg',
      'DSC_0191.jpg',
      'DSC_0192.jpg',
      'DSC_0193.jpg',
    ],
    attributesList: [
      {
        name: 'Położenie',
        text: 'Osiedle Parkowe zlokalizowane jest w sąsiedztwie Parku Miejskiego, Rynku w Sycowie oraz Urzędu Miasta Gminy Syców.',
        logo: 'compass-3.svg',
      },
      {
        name: 'Komunikacja',
        text: 'Brak informacji',
        logo: 'direction-sign.svg',
      },
      {
        name: 'Edukacja',
        text: 'W okolicy znajduje się Publiczne Przedszkole nr 3 w odległośći 500 m oraz szkoła Podstawowa nr 3 w odległośći 800m.',
        logo: 'book-open-2.svg',
      },
      {
        name: 'Opieka',
        text: 'W odległości 500 metrów znajduje się Samodzielny Publiczny Zakład Opieki Zrowotnej "Przychodnia" im. Dr. Jamimowicza',
        logo: 'heart.svg',
      },
      {
        name: 'Zakupy',
        text: 'W odległości 300m znajdują się market NETTO oraz market Biedronka',
        logo: 'basket-1.svg',
      },
      {
        name: 'Kościoły',
        text: 'W okolicy znajduje się zabytkowy Kościół Ewangelicki w odległości 600 m, oraz Kościół Rzymskokatolicki pw. Św. Apostoła Piotra i Pawła w odległości 870 m',
        logo: 'church.svg',
      },
    ]

  },
  mutations: {

  },
  actions: {

  },
});