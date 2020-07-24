import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './assets/icon-font/iconfont.css'


import axios from 'axios'
import './plugins/element.js'
axios.defaults.baseURL = 'http://localhost:3000/admin/api'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
