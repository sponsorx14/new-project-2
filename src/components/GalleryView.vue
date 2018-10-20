<template>
  <div class="gallery-view container">
    <img v-for="(image, i) in allGalleryLinks"
         :key="i"
         @click="showImage(image)"
         :src="require(`@/assets/img/${image}`)"
         alt=""
         class="gallery-view__image">
  </div>

</template>

<script>
import showImage from '../show-image.mixin';

export default {
  name: 'GalleryView',
  mixins: [showImage],
  computed: {
    allGalleryLinks() {
      return this.$store.state.allGalleryLinks.filter(e => !e.includes('construction'));
    },
  },
};
</script>

<style scoped lang="scss">
  .gallery-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0;

    &__image {
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
  }
</style>
