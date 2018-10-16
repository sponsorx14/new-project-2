<template>
  <section class="map">
    <div class="container map--wrapper">
      <img src="../assets/svg/house-location-pin.svg" alt="">

      <h2 class="section--title">Lokalizacja</h2>

      <iframe class="map__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.514119480739!2d17.71363031608082!3d51.30166497960187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDE4JzA2LjAiTiAxN8KwNDInNTcuMCJF!5e0!3m2!1spl!2spl!4v1538411667117"
          width="85%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/main.scss';

  .map {
    padding: 5rem 0;
    background-color: $dark-grey-4;

    &--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4rem auto;
    }

    &__iframe {
      margin-top: 4rem;
    }
  }

  .section--title {
    @include font(2.6rem, 500, $white);
    border-bottom: 1px solid $white;
  }

</style>
