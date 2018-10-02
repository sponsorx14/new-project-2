<template>
  <section class="gallery section">
    <img src="../assets/svg/camera-2.svg" alt="">

    <h2 class="section--title">Galeria</h2>

    <div class="gallery--wrapper">
      <img v-for="(image, i) in galleryLinks"
           :key="i"
           :src="require(`@/assets/img/${image}`)"
           :alt="image.url"
           class="gallery__image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  computed: {
    galleryLinks() {
      return this.$store.state.galleryLinks;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/mixins.scss';
  @import '../scss-snippets/colors.scss';

  .gallery {
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 0;
  }
  .gallery--wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 4rem 1rem 0;
  }
  .gallery__image {
    max-width: 33.3%;
    padding: 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: transform .3s;

    &:hover {
      transform: scale(1.02);
      transition: transform .3s;
    }
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

</style>
