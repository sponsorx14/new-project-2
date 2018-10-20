<template>
  <main class="tabs--estate">
    <article class="tabs--estate--text">
      {{getEsateDescriptionText}}
    </article>

    <img src="../../assets/img/DV1005_III_0003PS-min.jpg"
         alt=""
         @click="showImage('DV1005_III_0003PS-min.jpg')"
         class="tabs--estate__image">
  </main>
</template>

<script>
import showImage from '../../show-image.mixin';

export default {
  name: 'Tab-estate',
  mixins: [showImage],

  computed: {
    getEsateDescriptionText() {
      return this.$store.state.tabs.estateDescriptionText;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../scss-snippets/main.scss';

  .tabs--estate {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;

    &--text {
      @include font(1.5rem, 400, $dark-grey-2);
      text-align: center;
      line-height: 2.6rem;
    }

    &__image {
      max-width: 70rem;
      width: 50vw;
      opacity: .9;
      margin: 4rem 0;
      cursor: pointer;
      border: 1rem solid $light-white-2;
    }
  }

  @media only screen and (max-width: 1200px) {
    .tabs--estate__image {
      width: 60vw;
    }
  }

  @media only screen and (max-width: 992px) {
    .tabs--estate__image {
      width: 80vw;
    }
  }

  @media only screen and (max-width: 768px) {
    .tabs--estate__image {
      width: 90vw;
    }

    .tabs--estate--text {
      text-align: left;
    }
  }
</style>
