<template>
  <section class="tabs container">
    <header class="tabs--heading">
      <img src="../assets/svg/bank-notes-3.svg" alt="">

      <h2 class="section--title">Inwestycja</h2>
    </header>
    <main class="tabs--description">
      <h3 class="tabs--description--title">
        Osiedle Parkowe - gotowe domy na sprzedaż - IV kwartał 2018 r.
      </h3>

      <p class="tabs--description--text">
        Nasza inwestycja budowy domków zabudowy szeregowej zlokalizowana jest w
        mieście Syców, pow.oleśnickim, woj. dolnośląskim.
        Znakomite połączenie z Wrocławiem trasą S8 (ok. 40 minut jazdy,
        2 zjazdy do Sycowa – węzeł zachodni i wschodni) jest wielką zaletą
        lokalizacji inwestycji.
      </p>
    </main>
    <footer class="tabs--switch">

      <appTabEstate></appTabEstate>
      <appTabHouses></appTabHouses>
    </footer>
  </section>
</template>

<script>
  import TabEstate from './tabs/Tab-estate.vue';
  import TabHouses from './tabs/Tab-houses.vue';

  export default {
    name: 'Tabs',
    components: {
      appTabEstate: TabEstate,
      appTabHouses: TabHouses,
    },

  };
</script>

<style scoped lang="scss">
  @import '../scss-snippets/mixins.scss';
  @import '../scss-snippets/colors.scss';

  .tabs {
    background-color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    margin-bottom: 4rem;

    &--heading {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &--description {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;

      &--title {
        @include font(2rem, 700, $dark-grey-2);
      }
      &--text {
        @include font(1.5rem, 400, $dark-grey-2);
        line-height: 2.6rem;
        text-align: center;
      }
    }
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

  .active-tab {
    background-color: $gold;
    color: $white;
    transition: background-color .3s, color .3s;
  }

</style>
