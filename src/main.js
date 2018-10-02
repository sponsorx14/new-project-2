import Vue from 'vue';
import 'normalize.css';
import Srollspy from 'vue2-scrollspy';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

Vue.use(Srollspy);
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
