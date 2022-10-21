import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Stand from '../views/Stand.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Stand/:id',
    name: 'Stand',
    component: Stand
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(stand, homepage, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    return {
      left: 0, top: 0
    }
  }
})

export default router
