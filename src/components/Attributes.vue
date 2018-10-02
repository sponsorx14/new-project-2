<template>
  <section class="attributes section">
    <div class="container">
      <header class="attributes--heading">
        <img src="../assets/svg/trophy-3.svg" alt="">

        <h2 class="section--title">Zalety</h2>
      </header>

      <p>Osiedle Parkowe to:</p>

      <main class="attributes--wrapper">
        <div class="attrubites--element">
          <img src="" alt="">
          <h3></h3>
          <p></p>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Attributes',
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
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

</style>
