// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// import fastclick from 'fastclick'   // 引入fastclick 解决300ms延迟的问题
// fastclick.attach(document.body)

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://192.168.1.104:8888' : 'http://10.0.0.122:8888')

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
    data: {
        // eventHub: new Vue()
    }
})