import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'
import { store } from './store/store.js'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
