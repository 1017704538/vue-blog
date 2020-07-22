import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 全局样式
import './assets/css/global.css'


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import moment from 'moment' //导入文件
Vue.prototype.$moment = moment;


import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/admin/api'
Vue.prototype.$http = axios


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
