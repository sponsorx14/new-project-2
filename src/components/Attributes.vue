<template>
  <section class="attributes section">
    <div class="container">
      <header class="attributes--heading">
        <img src="../assets/svg/clipboard-check.svg" alt="">

        <h2 class="section--title">Zalety</h2>
      </header>

      <p class="section--description">Osiedle Parkowe to:</p>

      <main class="attributes--wrapper">
        <div v-for="(item, i) in attributesList"
             :key="i"
             class="attributes--single-attribute">

          <img :src="require(`@/assets/svg/${item.logo}`)"
               class="attributes--single-attribute__logo"
               alt="">

          <h3 class="attributes--single-attribute__name"> {{ item.name }} </h3>

          <p class="attributes--single-attribute__text"> {{ item.text}} </p>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Attributes',
    computed: {
      attributesList() {
        return this.$store.state.attributesList;
      }
    }
  };
</script>

<style scoped lang="scss">
  @import '../scss-snippets/mixins.scss';
  @import '../scss-snippets/colors.scss';

  .attributes {
    padding: 5rem 0;

    &--heading {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &--wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    &--single-attribute {
      min-height: 20rem;
      border-radius: .5rem;
      padding: 2.5rem;
      margin: 2rem;
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: .5s box-shadow;

      &__logo {

      }

      &__name {
        @include font(1.8rem, 500, $dark-grey-2);
      }

      &__text {
        @include font(1.5rem, 400, $dark-grey-2);
        text-align: center;
        line-height: 2.6rem;
        margin-top: 0;

      }

      &:hover {
        box-shadow: 0 0 20px 1px #ccc;
        transition: .5s box-shadow;
      }
    }


  }


  .section--description {
    margin: 4rem 0;
    text-align: center;
    @include font(2rem, 700, $dark-grey-2)
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

</style>
