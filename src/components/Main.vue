<template>
  <section class="main">
    <main class="main--background-image">
      <div class="main--information">
        <p class="main--information__location">Wrocław / Syców</p>

        <h1 class="main--information__main-info">Nowe domy na sprzedaż</h1>

        <div class="main--information__buttons">
          <a v-scroll-to="{el: '.prices', easing: 'linear'}"
             class="main-buttons">

            Sprawdź
          </a>

          <a v-scroll-to="{el: '.contact', easing: 'linear'}"
             class="main-buttons">

            Kontakt
          </a>
        </div>
      </div>
    </main>
    <a class="asd"></a>
  </section>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      section: 0,
    };
  },
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/main.scss';

  .main {
    max-width: 100vw;
    height: 100vh;
    background: url('../assets/img/DV1005_III_0001PS.jpg') 0/cover no-repeat fixed;

    &--background-image {
      padding-top: 7rem;
      max-width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .70);
      display: flex;
      justify-content: center;
      align-content: center;
    }

    &--information {
      width: 100%;
      transform: translateY(-7rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__location {
        margin: 2rem;
        @include font(2rem, 500, $dark-grey);
        text-transform: uppercase;
      }

      &__main-info {
        margin: 2rem;
        @include font(4rem, 700, $dark-grey);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3;
      }

      &__buttons {
        margin: 2rem;
        .main-buttons {
          @include font(1.6rem, 500, $dark-grey);
          display: inline-block;
          cursor: pointer;
          text-transform: uppercase;
          padding: 2rem 6rem;
          margin: 0 1rem;
          background-color: transparent;
          border: 4px solid $dark-grey;
          transition: color .3s, border-color .3s;

          &:hover {
            color: $gold;
            border-color: $gold;
            transition: color .3s, border-color .3s;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .main--information__buttons{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .main-buttons {
        margin: 1rem 0;
      }
    }
  }

</style>
