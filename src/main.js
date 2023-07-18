import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import "tailwindcss/tailwind.css"

import Router from 'vue-router'

Vue.use(Router)

import vant from 'vant';
import 'vant/lib/index.css';

new Vue({
  store,
  router,
  vant,
  render: h => h(App),
}).$mount('#app')