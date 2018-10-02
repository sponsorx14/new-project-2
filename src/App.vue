<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  @import './scss-snippets/mixins.scss';
  @import './scss-snippets/colors.scss';

  * {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section {
    min-height: 100vh;
  }

  .section--title {
    margin: 1rem 0;
    padding: 1rem 3rem;
    text-transform: uppercase;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
