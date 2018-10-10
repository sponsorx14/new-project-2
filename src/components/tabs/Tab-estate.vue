<template>
  <main class="tabs--estate">
    <article class="tabs--estate--text">
      Budowa domków realizowana jest przy ul. Leśnej w bliskim sąsiedztwie ul. Kolejowej.
      Malownicze położenie działek podkreśla sąsiedztwo parku miejskiego, który zwany jest
      zielonymi płucami Sycowa, wraz
      z placem zabaw dla najmłodszych i siłownią. Za parkiem znajduje
      się kompleks rekreacyjno – sportowy w postaci orlika z boiskiem do piłki siatkowej
      jak i koszykówki. W przyszłości
      nieopodal powstanie nowoczesny budynek komendy miejskiej Policji w Sycowie.
    </article>

    <img src="../../assets/img/DV1005_III_0003PS-min.jpg"
         alt=""
         class="tabs--estate__image">
  </main>
</template>

<script>
export default {
  name: 'Tab-estate',
};
</script>

<style scoped lang="scss">
  @import '../../scss-snippets/mixins.scss';
  @import '../../scss-snippets/colors.scss';

  .tabs--estate {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--text {
      @include font(1.5rem, 400, $dark-grey-2);
      text-align: center;
      line-height: 2.6rem;
    }

    &__image {
      max-width: 70rem;
      opacity: .9;
      margin: 4rem 0;
      border: 1rem solid $light-white-2;
    }
  }

</style>
