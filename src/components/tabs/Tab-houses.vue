<template>
  <main class="tabs--houses">
    <article class="tabs--houses--text">
      Powierzchnia użytkowa wynosi 111 m&#178; , która gwarantuje komfort oraz wygodę.
      Wnętrze zostało bardzo starannie rozplanowane – na parterze znajduje się salon z
      aneksem kuchennym i częścią jadalnianą, z którego można wyjść na taras oraz niewielka
      toaleta. Poddasze podzielono między dwa pokoje dla dzieci, dużą łazienkę oraz wygodną
      sypialnię dla rodziców. W bryłę każdego segmentu wpisano jednostanowiskowy garaż. Elewacja o
      jasnej kolorystyce ma nowoczesny charakter. Każdy segment posiada własny taras oraz działkę,
      które będą doskonałym miejscem odpoczynku.
    </article>

    <div class="tabs--houses--information">
      <div class="tabs--houses--information--wrapper">
        <span class="tabs--houses--information--title">Parter</span>

        <table class="tabs--houses--information--table">
          <tr v-for="(detail, i) in groundFloorInformation"
              :key="i">

            <td class="tabs--houses--information--table--data"> {{detail.name}} </td>
            <td class="tabs--houses--information--table--data"> {{detail.value}} </td>
          </tr>
        </table>
      </div>
      <div class="tabs--houses--information--wrapper">
        <span class="tabs--houses--information--title">Poddasze</span>

        <table class="tabs--houses--information--table">
          <tr v-for="(detail, i) in atticInformation"
              :key="i">

            <td class="tabs--houses--information--table--data"> {{detail.name}} </td>
            <td class="tabs--houses--information--table--data"> {{detail.value}} </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="tabs--houses--images">
      <img src="../../assets/img/lms026_r1.jpg" alt="" class="tabs--houses--images__image">

      <img src="../../assets/img/lms026_r2.jpg" alt="" class="tabs--houses--images__image">
    </div>
  </main>
</template>

<script>
export default {
  name: 'Tab-houses',
  computed: {
    groundFloorInformation() {
      return this.$store.state.groundFloorInformation;
    },

    atticInformation() {
      return this.$store.state.atticInformation;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../scss-snippets/mixins.scss';
  @import '../../scss-snippets/colors.scss';

  .tabs--houses {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;

    &--text {
      @include font(1.5rem, 400, $dark-grey-2);
      text-align: center;
      line-height: 2.6rem;
    }

    &--information {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 4rem;

      &--wrapper {
        margin: 2rem 5rem;
      }

      &--title {
        @include font(1.8rem, 500, $dark-grey-2);
        padding: 0 1rem;
      }

      &--table {
        padding: 2rem 0;

        &--data {
          padding: .5rem 1rem;
          @include font(1.6rem, 400, $dark-grey-2);
        }
      }
    }

    &--images{
      display: flex;
      justify-content: center;
      align-items: center;

      &__image{
        max-width: 50%;
        padding: 1rem;
        cursor: pointer;
      }
    }

  }

</style>
