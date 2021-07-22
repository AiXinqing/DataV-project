import Vue from 'vue'
import VueRouter from 'vue-router'
import Platform from '../views/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Platform',
    component: Platform
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/test/About.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/test/Home.vue')
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import('../views/digitalFlop/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.title != undefined) {
//     window.document.title = to.meta.title
//   }
//   // next()
//   const url = URL.SERVICE_CONTEXT_PATH + 'Api/Common/UsloginBLL/JudgeLogin'
//   axios.get(url).then((res) => {
//     if (res.data.ResponseCode == 'Success') {
//       next()
//     } else {
//       location.href = URL.SERVICE_CONTEXT_PATH + 'Manage/login'
//       next()
//     }
//   }).catch(function () {
//     location.href = URL.SERVICE_CONTEXT_PATH + 'Manage/login'
//     next()
//   })
// })

export default router
