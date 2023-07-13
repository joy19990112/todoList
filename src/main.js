import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import "tailwindcss/tailwind.css"

// import Router from 'vue-router'

// Vue.use(Router)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')