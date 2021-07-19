import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
// import Charts from '@jiaminghi/charts'
import Components from './components/index'
import 'lib-flexible'
// main.js中
// import './utils/flexible'

Vue.config.productionTip = false
Vue.use(dataV)
// Vue.use(Charts)
Vue.use(Components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
