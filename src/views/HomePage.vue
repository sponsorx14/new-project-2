<template>
  <div class="home">
    <appOverlay></appOverlay>
    <appHeader></appHeader>
    <div v-scroll-spy>
      <appMain></appMain>
      <appTabs></appTabs>
      <appMap></appMap>
      <appAttributes></appAttributes>
      <appGallery></appGallery>
      <appPrices></appPrices>
      <appContact></appContact>
      <appFooter></appFooter>
    </div>
  </div>
</template>

<script>
import Overlay from '../components/Overlay.vue';
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Tabs from '../components/Tabs.vue';
import Map from '../components/Map.vue';
import Attributes from '../components/Attributes.vue';
import Gallery from '../components/Gallery.vue';
import Prices from '../components/Prices.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    appOverlay: Overlay,
    appMain: Main,
    appHeader: Header,
    appTabs: Tabs,
    appMap: Map,
    appAttributes: Attributes,
    appGallery: Gallery,
    appPrices: Prices,
    appContact: Contact,
    appFooter: Footer,
  },
};
</script>

<style scoped>
  .home {
    position: relative;
  }
</style>

