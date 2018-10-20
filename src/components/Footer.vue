<template>
  <section class="footer">
    <div class="container">
      <div class="footer--phone">
        <img src="../assets/svg/smartphone-iphone-white.svg" alt="">
        <span v-for="(number, i) in getContactDetails.phone"
              :key="i"
              class="footer--phone__details">

          {{ number }}
        </span>
      </div>

      <div class="footer--email">
        <img src="../assets/svg/email-white.svg" alt="">
        <span v-for="(email, i) in getContactDetails.email"
              :key="i"
              class="footer--email__details">

          {{ email }}
        </span>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getContactDetails() {
      return this.$store.state.contactInformation;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/main.scss';

  .footer {
    background-color: $dark-grey-4;
    padding: 2.5rem 0;

    .container {
      display: flex;
      justify-content: space-around;
      @include font(1.4rem, 400, $white);
    }

    &--phone,
    &--email {
      display: flex;
      align-items: center;

      &__details {
        margin: 0 1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .footer {
      .container {
        flex-direction: column;
      }

      &--phone,
      &--email {
        margin: 1rem 0;
        justify-content: center;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .footer {
      &--phone {
        &__details {
          margin: 0.5rem;
        }
      }
    }
  }
</style>
