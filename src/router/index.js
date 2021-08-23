import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
