import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showOverlay: false,
    currentImg: '3DV1005salon-min.jpg',
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
        name: '1.1 Wiatrołap:',
        value: '2,52 m2',
      },
      {
        name: '1.2 WC:',
        value: '2,58 m2',
      },
      {
        name: '1.3 Komunikacja:',
        value: '3,32 m2 (5,59 m2)',
      },
      {
        name: '1.4 Salon z kuchnią:',
        value: '25,96 m2',
      },
      {
        name: '1.5 Garaż:',
        value: '15,90 m2',
      },
      {
        name: '1.6 Podest:',
        value: '3,29 m2',
      },
      {
        name: '1.7 Taras:',
        value: '11,50 m2',
      },
    ],
    atticInformation: [
      {
        name: 'Powierzchnia łączna:',
        value: '53,87 m2',
      },
      {
        name: '1.1 Schody:',
        value: '3,90 m2',
      },
      {
        name: '1.2 Komunikacja:',
        value: '3,61 m2',
      },
      {
        name: '1.3 Pokój nr 1:',
        value: '19,21 m2 (20,05 m2)',
      },
      {
        name: '1.4 Łazienka:',
        value: '5,63 m2',
      },
      {
        name: '1.5 Pokój nr 2:',
        value: '10,78 m2',
      },
      {
        name: '1.6 Pokój nr 3:',
        value: '10,74 m2',
      },
      {
        name: '1.7 Balkon:',
        value: '3,58 m2',
      },
    ],
    allGalleryLinks: [
      'construction-1.jpg',
      'construction-2.jpg',
      'DSC_0183-min.jpg',
      'DSC_0184-min.jpg',
      'DSC_0185-min.jpg',
      'DSC_0186-min.jpg',
      'DSC_0187-min.jpg',
      'DSC_0189-min.jpg',
      'DSC_0190-min.jpg',
      'DSC_0191-min.jpg',
      'DSC_0192-min.jpg',
      'DSC_0198-min.jpg',
      'DSC_0200-min.jpg',
      'DSC_0201-min.jpg',
      'DSC_0202-min.jpg',
      'DSC_0203-min.jpg',
      'DSC_0204-min.jpg',
      'DSC_0205-min.jpg',
      'DSC_0253-min.jpg',
      'DSC_0255-min.jpg',
      'DSC_0256-min.jpg',
      '3DV1005salon-min.jpg',
      'DV1005_III_0000PS.jpg',
      'DV1005_III_0002PS-min.jpg',
      'DV1005_III_0003PS-min.jpg',
    ],
    randomGalleryLinks: [
      'DSC_0184-min.jpg',
      'DV1005_III_0000PS.jpg',
      'DSC_0201-min.jpg',
      'DV1005_III_0002PS-min.jpg',
      'DSC_0202-min.jpg',
      'DV1005_III_0003PS-min.jpg',
      'DSC_0204-min.jpg',
      '3DV1005salon-min.jpg',
    ],
    attributesList: [
      {
        name: 'Położenie',
        text: 'Osiedle Parkowe zlokalizowane jest w sąsiedztwie Parku Miejskiego, Rynku w Sycowie oraz Urzędu Miasta Gminy Syców.',
        logo: 'compass-3.svg',
      },
      {
        name: 'Komunikacja',
        text: 'Osiedle Parkowe znajduje się blisko trasy s8, co daje szybkie oraz bespośrednie połączenie z Wrocławiem.',
        logo: 'direction-sign.svg',
      },
      {
        name: 'Edukacja',
        text: 'W okolicy znajduje się Publiczne Przedszkole nr 3 w odległośći 500 m oraz szkoła Podstawowa nr 3 w odległośći 800m.',
        logo: 'book-open-2.svg',
      },
      {
        name: 'Opieka',
        text: 'W odległości 500 metrów znajduje się Samodzielny Publiczny Zakład Opieki Zrowotnej "Przychodnia" im. Dr. Jamimowicza.',
        logo: 'heart.svg',
      },
      {
        name: 'Zakupy',
        text: 'W odległości 300m znajdują się market NETTO oraz market Biedronka.',
        logo: 'basket-1.svg',
      },
      {
        name: 'Zabytki i punkty sakralne',
        text: 'W okolicy znajduje się zabytkowy Kościół Ewangelicki w odległości 600 m, oraz Kościół Rzymskokatolicki pw. Św. Apostoła Piotra i Pawła w odległości 870 m.',
        logo: 'church.svg',
      },
    ],
    contactInformation: {
      main: {
        name: 'KOMPLEX Sp. Z o.o.',
        address1: 'Ul. Drzewieckiego 3',
        address2: '46 – 100 Namysłów',
      },
      phone: {
        first: '+48 533 207 972',
        second: '+48 507 058 448',
        third: '77 41 03 243',
      },
      email: {
        first: 'osiedleparkowe@o2.pl',
      },
    },
    tabs: {
      descriptionText: 'Nasza inwestycja budowy domków zabudowy szeregowej zlokalizowana jest w mieście Syców, pow.oleśnickim, woj. dolnośląskim. Znakomite połączenie z Wrocławiem trasą S8 (ok. 40 minut jazdy, 2 zjazdy do Sycowa – węzeł zachodni i wschodni) jest wielką zaletą lokalizacji inwestycji.',

      estateDescriptionText: 'Budowa domków realizowana jest przy ul. Leśnej w bliskim sąsiedztwie ul. Kolejowej. Malownicze położenie działek podkreśla sąsiedztwo parku miejskiego, który zwany jest zielonymi płucami Sycowa, wraz z placem zabaw dla najmłodszych i siłownią. Za parkiem znajduje się kompleks rekreacyjno – sportowy w postaci orlika z boiskiem do piłki siatkowej jak i koszykówki. W przyszłości nieopodal powstanie nowoczesny budynek komendy miejskiej Policji w Sycowie.',

      housesDescriptionText: 'Powierzchnia użytkowa wynosi 104,15 m2 , która gwarantuje komfort oraz wygodę. Wnętrze zostało bardzo starannie rozplanowane – na parterze znajduje się salon z aneksem kuchennym i częścią jadalnianą, z którego można wyjść na taras oraz niewielka toaleta. Poddasze podzielono między dwa pokoje dla dzieci, dużą łazienkę oraz wygodną sypialnię dla rodziców. W bryłę każdego segmentu wpisano jednostanowiskowy garaż. Elewacja o jasnej kolorystyce ma nowoczesny charakter. Każdy segment posiada własny taras oraz działkę, które będą doskonałym miejscem odpoczynku.',
    },

  },
  mutations: {
    setImageUrl(state, payload) {
      state.currentImg = payload.img;
      state.showOverlay = payload.showOverlay;
      document.querySelectorAll('body')[0].style.overflow = 'hidden';
    },

    closeOverlay(state) {
      state.showOverlay = false;
      document.querySelectorAll('body')[0].style.overflow = 'auto';
    },
  },
  actions: {
    setImageUrl({ commit }, payload) {
      commit('setImageUrl', payload);
    },

    closeOverlay({ commit }) {
      commit('closeOverlay');
    },
  },
});
