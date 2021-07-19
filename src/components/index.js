import echarts from './echarts/'

export default {
  install: (Vue) => {
    // Vue.prototype.$notify = Notification;    //IE兼容
    Vue.component('echarts', echarts)
  }
}
