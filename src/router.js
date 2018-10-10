import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './views/HomePage.vue';
import GalleryView from './views/GalleryView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
  ],
});
