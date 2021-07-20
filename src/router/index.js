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

export default router
