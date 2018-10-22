<template>
  <main class="tabs--houses">
    <article class="tabs--houses--text">
      {{getTabHouseDescriptionText}}
    </article>

    <div class="tabs--houses--information">
      <div class="tabs--houses--information--wrapper">
        <span class="tabs--houses--information--title">Parter</span>

        <table class="tabs--houses--information--table">
          <tr v-for="(detail, i) in groundFloorInformation"
              :key="i">

            <td class="tabs--houses--information--table--data"> {{detail.name}}</td>
            <td class="tabs--houses--information--table--data"> {{detail.value}}</td>
          </tr>
        </table>
      </div>
      <div class="tabs--houses--information--wrapper">
        <span class="tabs--houses--information--title">Poddasze</span>

        <table class="tabs--houses--information--table">
          <tr v-for="(detail, i) in atticInformation"
              :key="i">

            <td class="tabs--houses--information--table--data"> {{detail.name}}</td>
            <td class="tabs--houses--information--table--data"> {{detail.value}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="tabs--houses--images">
      <img @click="showImage('construction-1.jpg')"
          src="../../assets/img/construction-1.jpg"
           alt=""
          class="tabs--houses--images__image">

      <img @click="showImage('construction-2.jpg')"
           src="../../assets/img/construction-2.jpg"
           alt=""
           class="tabs--houses--images__image">
    </div>
  </main>
</template>

<script>
import showImage from '../../show-image.mixin';

export default {
  name: 'Tab-houses',
  mixins: [showImage],

  computed: {
    groundFloorInformation() {
      return this.$store.state.groundFloorInformation;
    },

    atticInformation() {
      return this.$store.state.atticInformation;
    },

    getTabHouseDescriptionText() {
      return this.$store.state.tabs.housesDescriptionText;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../scss-snippets/main.scss';

  .tabs--houses {
    display: flex;
    flex-wrap: wrap;

    &--text {
      @include font(1.5rem, 400, $dark-grey-2);
      text-align: center;
      line-height: 2.6rem;
    }

    &--information {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 4rem;

      &--wrapper {
        margin: 2rem 5rem;
      }

      &--title {
        @include font(1.8rem, 500, $dark-grey-2);
        padding: 0 1rem;
      }

      &--table {
        padding: 2rem 0;

        &--data {
          padding: .5rem 1rem;
          @include font(1.6rem, 400, $dark-grey-2);
        }
      }
    }

    &--images {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      &__image {
        max-width: 35rem;
        padding: 1rem;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .tabs--houses {
      &--information {
        margin: 4rem 2rem;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .tabs--houses {
      &--information {
        margin: 4rem 0;

        &--wrapper {
          margin: 4rem 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 820px) {
    .tabs--houses {
      &--information {
        flex-direction: column;
        align-items: center;

        &--wrapper {
          margin: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .tabs--houses--text {
      text-align: left;
    }
  }

  @media only screen and (max-width: 650px) {
    .tabs--houses--images {
      flex-direction: column;

      &__image {
        max-width: 70vw;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .tabs--houses--information--wrapper {
      margin: 2rem 0;
    }
  }

</style>
