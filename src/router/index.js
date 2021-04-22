import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogPage from '../views/BlogPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
