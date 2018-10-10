<template>
  <div class="gallery-view container">
    <img v-for="(image, i) in allGalleryLinks"
         :key="i"
         :src="require(`@/assets/img/${image}`)"
         alt=""
         class="gallery-view__image">
  </div>

</template>

<script>
export default {
  name: 'GalleryView',
  computed: {
    allGalleryLinks() {
      return this.$store.state.allGalleryLinks;
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
