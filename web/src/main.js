import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vant.js'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/global.css'
import './assets/icon-font/iconfont.css'
import http from './http'
Vue.prototype.$http = http

import Live2d from './components/Live2d'
Vue.use(Live2d);

import Background from './components/Background'
Vue.use(Background)

import Card from './components/Card.vue'
Vue.component('m-card', Card)

import CommentItem from './components/CommentItem.vue'
Vue.component('commentitem', CommentItem)

import LatestItem from './components/LatestItem.vue'
Vue.component('m-item', LatestItem)

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
