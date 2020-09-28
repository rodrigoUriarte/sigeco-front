import Vue from 'vue'
import VueRouter from 'vue-router'
import Comedores from '../views/comedor/Listar.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'dashboard'
  },

  {
    path: '/comedores',
    component: Comedores,
    name: 'comedores'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
