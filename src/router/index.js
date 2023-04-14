import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Stand from '../views/Stand.vue'
import Standd from '../views/Standd.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

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
    path: '/Standd/:id',
    name: 'Standd',
    component: Standd
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/add-product',
    name: 'Product',
    component: Product
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
