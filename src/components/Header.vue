<template>
  <nav :class="{'active-nav': windowPosition > 70}"
       v-if="!showOverlay"
       class="nav">

    <div class="container">
      <div class="nav--wrapper">
        <div class="logo">
          <a v-scroll-to="{el: '.main', easing: 'linear'}"
              class="logo--link"></a>
        </div>

        <div @click="toggleHamburger"
             :class="{'active-hamburger': activeHamburger}"
             class="hamburger">

          <span class="line"></span>
        </div>

        <ul :class="{'toggle-navigation': activeHamburger}"
            v-scroll-spy-active="{class: 'active-link'}"
            v-scroll-spy-link
            class="nav--list">

          <li v-for="(link, index) in navigationLinks"
              @click="hideNavigation"
              :key="index"
              class="nav--list__link">

            <a class="nav--list__anchor">

              {{ link.translation }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      windowPosition: 0,
      activeHamburger: false,
    };
  },
  methods: {
    setWindowPosition() {
      this.windowPosition = window.scrollY;
    },

    toggleHamburger() {
      this.activeHamburger = !this.activeHamburger;
    },

    hideNavigation() {
      this.activeHamburger = false;
    },
  },
  computed: {
    showOverlay() {
      return this.$store.state.showOverlay;
    },

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
  @import '../scss-snippets/main.scss';

  .nav {
    z-index: 9;
    background-color: transparent;
    width: 100%;
    height: 7rem;
    margin: 0 auto;
    position: fixed;
    transition: background-color .3s;

    &--wrapper {
      margin: 0;
      width: 100%;
      display: flex;
      height: 7rem;
      justify-content: space-between;
      align-items: center;

      .logo {
        margin-right: auto;
        border-color: transparent;
        position: relative;
        list-style: none;
        cursor: pointer;
        height: 100%;

        &--link {
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

    &--list {
      display: flex;
      width: auto;

      &__link {
        padding: 1rem;
        top: 0;
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-content: center;

        &:first-child {
          display: none;
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

  .hamburger {
    width: 6rem;
    height: 6rem;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    display: none;
  }
  .line {
    width: 3.5rem;
    height: .4rem;
    background-color: $dark-grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before {
      content: "";
      position: absolute;
      top: -.7rem;
      left: 50%;
      transform: translate(-50%, 0);
      width: 100%;
      height: 100%;
      background-color: $dark-grey;
      transition: all .5s ease-in-out;
    }

    &:after {
      content: "";
      position: absolute;
      top: .7rem;
      left: 50%;
      transform: translate(-50%, 0);
      width: 100%;
      height: 100%;
      background-color: $dark-grey;
      transition: all .5s ease-in-out;
    }
  }

  .hamburger.active-hamburger .line {
    background-color: transparent;
  }

  .hamburger.active-hamburger .line:before {
    top: 0;
    left: 0;
    transform: rotate(45deg);
  }

  .hamburger.active-hamburger .line:after {
    top: 0;
    left: 0;
    transform: rotate(-45deg);
  }

  .active-link {
    .nav--list__anchor {
      transition: border-color .3s;
      border-color: $gold;
    }
  }

  .active-nav {
    background-color: $white;
    box-shadow: 0 1px 10px 0 #ccc;
  }

  @media only screen and (max-width: 920px) {
    .hamburger {
      display: block;
      z-index: 2;

      &.active-hamburger {
        .line:before,
        .line:after {
          background-color: $grey;
        }
      }
    }

    .nav--list {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 7rem 0 0;
      width: 30rem;
      height: 100vh;
      background-color: $dark-grey-4;
      top: 0;
      right: -30rem;
      transition: right .5s ease-in-out;

      &__link {
        height: auto;
        padding: 2.5rem;
      }

      &__anchor {
        color: $grey;
      }
    }

    .toggle-navigation {
      right: 0;
      transition: right .5s ease-in-out;
    }

    .active-link {
      .nav--list__anchor {
        border-color: transparent;
      }
    }
  }

  @media only screen and(max-width: 450px) {
    .container {
      padding: 0;
    }

    .nav--list {
      width: 100%;
      right: -100%;
    }

    .toggle-navigation {
      right: 0;
    }
  }

</style>
