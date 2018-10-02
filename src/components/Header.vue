<template>
  <nav :class="{'active-nav': windowPosition > 70}"
       class="nav">
    <div class="container">
      <ul v-scroll-spy-active="{class: 'active-link'}"
          v-scroll-spy-link
          class="nav--list">

        <li v-for="(link, index) in navigationLinks"
            :key="index"
            class="nav--list__link">

          <a class="nav--list__anchor">

            {{ link.translation }}
          </a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      windowPosition: 0,
    };
  },
  methods: {
    setWindowPosition() {
      this.windowPosition = window.scrollY;
    },
  },
  computed: {
    navigationLinks() {
      return this.$store.state.navigationLinks;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.setWindowPosition);
  },
  destroyed() {
    window.removeEventListener('scroll', this.setWindowPosition);
  },
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/mixins.scss';
  @import '../scss-snippets/colors.scss';

  .nav {
    z-index: 9;
    background-color: transparent;
    width: 100%;
    height: 7rem;
    margin: 0 auto;
    position: fixed;
    transition: background-color .3s;

    &--list {
      margin: 0;
      width: 100%;
      display: flex;
      height: 7rem;
      justify-content: space-between;

      &__link {
        padding: 1rem;
        top: 0;
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-content: center;

        &:first-child {
          margin-right: auto;
          border-color: transparent;
          position: relative;
          .nav--list__anchor {
            position: absolute;
            border: none;
            height: 100%;
            top: 0;
            left: 0;
            width: auto;
            padding: 3rem 13rem;
            background: url('../assets/img/logo3.png') 0/cover no-repeat transparent;
            object-fit: contain;
          }
        }
      }
    }
  }

  .nav--list__anchor {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: .5rem;
    text-decoration: none;
    letter-spacing: .1rem;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    @include font(1.3rem, 700, $dark-grey);
    transition: border-color .3s, color .3s;

    &:hover {
      color: $gold;
      transition: color .3s;
    }
  }

  .active-link {
    .nav--list__anchor {
      transition: border-color .3s;
      border-color: $gold;
    }
  }

  .active-nav {
    background-color: $white;
    box-shadow: 0 1px 30px 0 rgba(0,0,0,0.75);
  }

</style>
