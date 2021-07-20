import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '../views/digitalFlop/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
