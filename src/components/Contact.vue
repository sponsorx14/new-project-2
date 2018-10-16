<template>
  <section class="contact">
    <div class="container">
      <img src="../assets/svg/email-send-2.svg" alt="">

      <h2 class="section--title">Kontakt</h2>

      <div class="contact--wrapper">
        <article class="contact--details">
          <p class="contact--details__company-name">{{ getContactInformation.main.name }}</p>
          <p class="contact--details__company-address">{{ getContactInformation.main.address1 }}</p>
          <p class="contact--details__company-address">{{ getContactInformation.main.address2 }}</p>

          <div class="contact--icons--wrapper">
            <div class="contact--phone">
              <img class="contact--phone__icon"
                  src="../assets/svg/smartphone-iphone.svg"
                  alt="">

              <span class="contact--phone__title">Telefon</span>
              <a class="contact--phone__details">{{ getContactInformation.phone.first }}</a>
              <a class="contact--phone__details">{{ getContactInformation.phone.second }}</a>
              <a class="contact--phone__details">{{ getContactInformation.phone.third }}</a>
            </div>

            <div class="contact--email">
              <img class="contact--email__icon"
                   src="../assets/svg/email.svg"
                   alt="">

              <span class="contact--email__title">Email</span>
              <a :href="getContactInformation.email.first"
                 class="contact--email__details">

                {{ getContactInformation.email.first }}
              </a>
            </div>
          </div>

        </article>

        <!--action="https://getsimpleform.com/messages?form_api_token=c0c8b7b2ab5fb4cbb89a83a478c18aed"-->
        <form class="contact--form"
              method="post">

          <h3 class="contact--form__title">Formularz kontaktowy:</h3>

          <div class="input--wrapper">
            <div class="contact--form--icon--wrapper">
              <svg :class="[isInput1Focused ? 'contact--form__icon-focus' : 'contact--form__icon']" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Filled_Icons_1_"><g id="Filled_Icons"><g><path d="M8.875,7c1.308,0,2.861-0.776,3.322-1.661c0.084-0.162,0.251-0.265,0.434-0.269c0.226,0.014,0.353,0.093,0.444,0.252c0.853,1.494,1.755,1.967,3.206,1.687c0.032-0.007,0.543-0.134,1.113-0.275C16.894,3.754,14.666,1.5,12,1.5c-2.54,0-4.678,2.049-5.307,4.819C7.596,6.875,8.239,7,8.875,7z"/><path d="M6.527,7.372C6.344,10.156,7.497,12.279,9,13.441v2.206l-4.678,1.671C2.933,17.815,2,19.14,2,20.614V22.5C2,22.776,2.224,23,2.5,23h19c0.276,0,0.5-0.224,0.5-0.5v-1.886c0-1.475-0.934-2.8-2.323-3.296L15,15.648v-2.206c1.503-1.162,2.594-3.348,2.489-5.704c-0.839,0.294-1.655,0.348-1.948,0.348c-1.194,0-2.134-0.525-2.931-1.635C11.756,7.347,10.249,8,8.875,8C8.092,8,7.441,7.859,6.527,7.372z"/></g></g></g></svg>
            </div>

            <input @focus="isInput1Focused = true"
                   @blur="isInput1Focused = false"
                   class="contact--form__input"
                   type="text"
                   placeholder="Imię i Nazwisko"
                   name="name"/>

            <span class="focus-border">
              <i></i>
            </span>
          </div>

          <div class="input--wrapper">
            <div class="contact--form--icon--wrapper">
              <svg :class="[isInput2Focused ? 'contact--form__icon-focus' : 'contact--form__icon']" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="Filled_Icons_1_"><g id="Filled_Icons"><g><path d="M12.002,12.36l10.095-8.03C21.782,4.123,21.406,4,21.001,4h-18C2.614,4,2.255,4.115,1.948,4.307L12.002,12.36z"/><path d="M22.764,5.076l-10.468,8.315c-0.178,0.134-0.416,0.134-0.594-0.001L1.26,5.036C1.1,5.323,1.001,5.648,1,6v11c0.001,1.103,0.898,2,2.001,2h17.998c1.103,0,2-0.897,2.001-2V6C23,5.665,22.91,5.353,22.764,5.076z"/></g></g></g></svg>
            </div>
            <input @focus="isInput2Focused = true"
                   @blur="isInput2Focused = false"
                   class="contact--form__input"
                   type="text"
                   placeholder="Email"
                   name="email">

            <span class="focus-border">
              <i></i>
            </span>
          </div>

          <div class="input--wrapper">
            <input class="contact--form__input text-area"
                   type="text"
                   placeholder="Wiadomość"
                   name="message">

            <span class="focus-border">
              <i></i>
            </span>
          </div>

          <button class="main__button"
                  type="submit">

            Wyślij wiadomość
          </button>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isInput1Focused: false,
      isInput2Focused: false,
    };
  },
  computed: {
    getContactInformation() {
      return this.$store.state.contactInformation;
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../scss-snippets/main.scss';

  .contact {
    min-height: 80vh;
    padding: 8rem 0;
    background: url('../assets/img/leone-venter-559377-unsplash.jpg') 0/cover no-repeat;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &--wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 8rem 0;
    }

    &--details {
      width: 50%;
      padding: 0 1rem;
      margin-right: 3rem;

      &__company-name {
        @include font(2.4rem, 500, $dark-grey-2);
        margin-top: 0;
        margin-bottom: 3rem;
      }

      &__company-address {
        @include font(2.2rem, 500, $dark-grey-2);
        margin-bottom: 3rem;

      }

      &__owner-name {
        @include font(2.2rem, 500, $dark-grey-2);
        margin-bottom: 3rem;
      }
    }

    &--icons--wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 5rem;

    }

    &--phone,
    &--email {
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      &__title {
        @include font(1.8rem, 400, $dark-grey-2);
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 2;
        padding: .5rem;
      }

      &__details {
        @include font(1.7rem, 500, $dark-grey-2);
        flex-basis: 100%;
        margin: 1rem 0;

        &:nth-of-type(1) {
          margin-top: 2rem;
        }
      }
    }

    &--form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: $white;
      padding: 3rem;
      min-width: 50rem;
      box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.2);

      &__title {
        @include font(1.8rem, 500, $gold)
      }

      &--icon--wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid $light-white-2;
      }

      &__input {
        padding: 1.4rem 1.4rem 1.4rem 6.4rem;
        outline: none;
        border: 1px solid $light-white-2;
        background-color: $almost-white;
        line-height: 1.4;
        border-radius: .3rem;
        width: 100%;
        font-size: 1.4rem;

        &:focus::placeholder {
          color: $gold;
        }

        &::placeholder {
          color: $dark-grey-2;
        }
      }

      &__input ~ .focus-border:before,
      &__input ~ .focus-border:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $gold;
        transition: 0.3s;
      }
      &__input ~ .focus-border:after {
        top: auto;
        bottom: 0;
        left: auto;
        right: 0;
      }
      &__input ~ .focus-border i:before,
      &__input ~ .focus-border i:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 0;
        background-color: $gold;
        transition: 0.4s;
      }
      &__input ~ .focus-border i:after {
        left: auto;
        right: 0;
        top: auto;
        bottom: 0;
      }
      &__input:focus ~ .focus-border:before,
      &__input:focus ~ .focus-border:after {
        width: 100%;
        transition: 0.3s;
      }
      &__input:focus ~ .focus-border i:before,
      &__input:focus ~ .focus-border i:after {
        height: 100%;
        transition: 0.4s;
      }
    }
  }

  .input--wrapper {
    margin: 1rem 0;
    position: relative;
    width: 100%
  }

  .contact--form__icon {
    path {
      fill: $dark-grey-2;
    }

    &-focus {
      path {
        fill: $gold;
      }
    }
  }

  .text-area {
    padding: 1.4rem 1.4rem 10rem;
    &::placeholder {
      color: $dark-grey-2;
    }
  }

  .section--title {
    @include font(2.6rem, 500, $gold);
    border-bottom: 1px solid $gold;
  }

  @media only screen and (max-width: 1200px) {
    .contact--details {
      width: 40%;
    }
  }
  @media only screen and (max-width: 992px) {
    .contact--details {
      margin-right: 0;
    }
    .contact--icons--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .contact--email {
      margin-top: 3rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 860px) {
    .contact--details {
      text-align: center;
      width: 85%;
    }

    .contact--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .contact--email,
    .contact--phone {
      justify-content: center;
      text-align: center;
    }

    .contact--email {
      margin-bottom: 3rem;
    }

    .contact--form {
      margin-top: 2rem;
      width: 80%;
      min-width: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .contact--form {
      width: 100%;
    }
  }

</style>
