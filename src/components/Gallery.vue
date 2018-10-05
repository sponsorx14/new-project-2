<template>
  <section class="gallery">
    <img src="../assets/svg/camera-2.svg" alt="">

    <h2 class="section--title">Galeria</h2>

    <div class="gallery--wrapper">

      <agile :arrows="true"
             :dots="false"
             :speed="1500"
             :next-arrow="right"
             :prev-arrow="left"
             :fade="false"
             :autoplay="true"
             :autoplay-speed="5000"
             :pause-on-hover="false">

        <div v-for="(image, i) in galleryLinks"
             :key="i"
             :style="{'background-image': 'url(' + require(`@/assets/img/${image}`) + ')'}"
             class="slide">
        </div>
      </agile>


    </div>
  </section>
</template>

<script>

export default {
  name: 'Gallery',
  data() {
    return {
      left: '<svg class="arrow-svg" x="0px" y="0px" viewBox="0 0 24 24" width="60px" height="60px"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
      right: '<svg class="arrow-svg" x="0px" y="0px" viewBox="0 0 24 24" width="60px" height="60px"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>',
    };
  },
  computed: {
    galleryLinks() {
      return this.$store.state.galleryLinks;
    },
  },
};
</script>

<style lang="scss">
  @import '../scss-snippets/mixins.scss';
  @import '../scss-snippets/colors.scss';

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8rem 0;
    background-color: #282828;
  }

  .gallery--wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    width: 90vw;
  }

  .gallery__image {
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
    @include font(2.6rem, 500, $white);
    border-bottom: 1px solid $white;
  }

  .slide {
    background: {
      position: center;
      size: cover;
    }
    border: 10px solid #3A3A3A;
    height: 60rem;
  }

  .agile {
    width: 100%;
    max-width: 100rem;
    position: relative;
    &__arrow {
      width: 10rem;
      top: 0;
      bottom: 0;
      position: absolute;
      border: none;
      cursor: pointer;
      background-color: transparent;
      transition: background-color .3s;

      &:hover {
        .arrow-svg {
          path {
            fill: $gold;
            transition: fill .3s;
          }
        }
      }
    }
    .arrow-svg {
      path {
        fill: $white;
        transition: fill .3s;
      }
    }
    &__arrow--prev {
      left: -10rem;
    }

    &__arrow--next {
      right: -10rem;
    }
  }

</style>
