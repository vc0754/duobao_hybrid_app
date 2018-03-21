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

// vue-cordova
// http://blog.csdn.net/qdrfcv/article/details/74978265

// vue-infinite-loading
// https://peachscript.github.io/vue-infinite-loading/#!/installation

// Cordova Start
// document.addEventListener('deviceready', function () {
//     new Vue({
//         el: '#app',
//         router,
//         // store,
//         template: '<App/>',
//         components: { App }
//     })
//     window.navigator.splashscreen.hide()
// }, false)

// <preference name="orientation" value="portrait" />
// 也可以通过 params 对象传递参数
// $http.get('/user', {
//     params: {
//         ID: 12345
//     }
// }).then(function (response) {
//     console.log(response)
// }).catch(function (error) {
//     console.log(error)
// })

// 执行多个并发请求
// function getUserAccount() {
//     return $http.get('/user/12345')
// }
// function getUserPermissions() {
//     return $http.get('/user/12345/permissions')
// }
// axios.all([
//     getUserAccount(),
//     getUserPermissions()
// ]).then(
//     $http.spread(function (acct, perms) {
//         // 两个请求现已完成
//     })
// )

// 发送一个 POST 请求
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// })
// this.$http({
//     method: 'post',
//     url: 'http://localhost/json/swiper.json',
//     data: {
//         name: 'xiaoming',
//         info: '12'
//     }
// })

// var app = {
//   // Application Constructor
//   initialize: function () {
//     document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
//   },

//   // deviceready Event Handler
//   //
//   // Bind any cordova events here. Common events are:
//   // 'pause', 'resume', etc.
//   onDeviceReady: function () {
//     this.receivedEvent('deviceready')
//   },

//   // Update DOM on a Received Event
//   receivedEvent: function (id) {
//     // var parentElement = document.getElementById(id)
//     // var listeningElement = parentElement.querySelector('.listening')
//     // var receivedElement = parentElement.querySelector('.received')

//     // listeningElement.setAttribute('style', 'display:none;')
//     // receivedElement.setAttribute('style', 'display:block;')

//     // console.log('Received Event: ' + id)

//     new Vue({
//       el: '#app',
//       router,
//       // store,
//       template: '<App/>',
//       components: { App }
//     })
//     window.navigator.splashscreen.hide()
//   }
// }
// app.initialize()