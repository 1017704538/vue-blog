import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './plugins/element.js'
import ELEMENT from 'element-ui'
Vue.use(ELEMENT)
import './plugins/vant.js'
// import vant from 'vant';
// Vue.use(vant)

import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/global.css'

import './assets/icon-font/iconfont.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


import http from './http'
Vue.prototype.$http = http



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
