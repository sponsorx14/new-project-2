import Vue from 'vue';
import 'normalize.css';
import Srollspy from 'vue2-scrollspy';
import VueResource from 'vue-resource';
import VueScrollTo from 'vue-scrollto';
import VueAgile from 'vue-agile';


import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Srollspy);
Vue.use(VueScrollTo);
Vue.use(VueAgile);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
