import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../App')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
