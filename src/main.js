import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './views';

import MainLayout from './layouts/MainLayout';

Vue.config.productionTip = false

Vue.component('MainLayout', MainLayout);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
