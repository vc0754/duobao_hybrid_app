import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// import fastclick from 'fastclick'   // 引入fastclick 解决300ms延迟的问题
// fastclick.attach(document.body)

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'http://localhost:4000')

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
