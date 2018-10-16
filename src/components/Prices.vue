<template>
  <section class="prices container">
    <img src="../assets/svg/house-price.svg" alt="">

    <h2 class="section--title">Cennik</h2>

    <div class="prices--product">
      <img class="prices--product__image" src="../assets/img/111.png" alt="">
      <p class="prices--product__price">Cena domu z ogródkiem:</p>
      <p class="prices--product__price--bold">od 295 000 zł</p>

      <p class="prices--product__details"><span class="bold">Powierzchnia łączna:</span> 104,14m&#178;</p>
      <p class="prices--product__details"><span class="bold">Ilość pokoi:</span> 3</p>

      <a v-scroll-to="{el: '.contact', easing: 'linear'}"
         class="main__button">

        Złóż ofertę
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Prices',
  };
</script>

<style scoped lang="scss">
  @import '../scss-snippets/main.scss';

  .prices {
    padding: 8rem 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--product {
      position: relative;
      margin: 6rem 0 2rem;
      padding: 5rem 1rem 11rem;
      width: 50vw;
      box-shadow: 0 0 20px 1px #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__image {
        border-radius: 50%;
        max-width: 150px;
      }

      &__price {
        margin: 3rem 0 1rem;
        @include font(1.8rem, 500, $dark-grey-2);

        &--bold {
          @include font(2.4rem, 700, $dark-grey-2);
        }
      }

      &__details {
        margin: 1rem 0;
        @include font(1.6rem, 400, $dark-grey-2);
      }
    }
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

  .main__button {
    width: calc(100% - 4rem);
    text-align: center;
    position: absolute;
    margin: 2rem;
    left: 0;
    bottom: 0;
  }

  .bold {
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px ) {
    .prices--product {
      width: 80%;
    }
  }

</style>
