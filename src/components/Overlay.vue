<template>
  <div class="overlay" v-if="showOverlay">
    <img src="../assets/svg/close.svg"
         class="overlay--close"
         @click="closeOverlay"
         alt="">

      <agile :arrows="true"
             :dots="false"
             :speed="1800"
             :next-arrow="right"
             :prev-arrow="left"
             :fade="false"
             :autoplay="false"
             :autoplay-speed="6000"
             :pause-on-hover="true">

        <div v-for="(image, i) in getImageUrl"
             :key="i"
             :style="{'background-image': 'url(' + require(`@/assets/img/${image}`) + ')'}"
             :class="{'construction-image': isImageConstruction}"
             class="slide">

        </div>
      </agile>
  </div>

</template>

<script>
export default {
  name: 'Overlay',
  data() {
    return {
      left: '<svg class="arrow-svg" x="0px" y="0px" viewBox="0 0 24 24" width="60px" height="60px"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
      right: '<svg class="arrow-svg" x="0px" y="0px" viewBox="0 0 24 24" width="60px" height="60px"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>',
    };
  },
  computed: {
    showOverlay() {
      return this.$store.state.showOverlay;
    },

    getImageUrl() {
      const selectedImage = this.$store.state.currentImg;
      const filteredImage = this.$store.state.allGalleryLinks.filter(item => item === selectedImage);
      const constructionImages = this.$store.state.allGalleryLinks.filter(e => e.includes('construction'));
      const allImages = this.$store.state.allGalleryLinks.filter(e => e !== selectedImage && !e.includes('construction'));

      if (selectedImage.includes('construction')) {
        return [filteredImage, ...constructionImages];
      }
      return [filteredImage, ...allImages];
    },

    isImageConstruction() {
      return this.$store.state.currentImg.includes('construction');
    },
  },

  methods: {
    closeOverlay() {
      this.$store.dispatch('closeOverlay');
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/colors';

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 3;
    right: 0;
    background-color: rgba(0, 0, 0, .95);

    &--close {
    cursor: pointer;
      padding: 1rem;
      z-index: 4;
      position: absolute;
      top: 7rem;
      left: 50%;
      transform: translateX(-25%)

    }
  }

  .agile {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90vw;
    transform: translate(-50%, -50%);
  }

  .slide {
    min-height: 65vh;
    width: auto;
    background: {
      position: center;
      size: cover;
    }
  }

  .construction-image {
    background: no-repeat center 0/contain;
    border: none;
  }

  @media only screen and (max-width: 768px) {
    .slide {
      min-height: 0;
    }
  }
</style>
