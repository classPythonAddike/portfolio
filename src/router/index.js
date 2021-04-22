import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogPage from '../views/BlogPage.vue'
import WhyGo from '../views/BlogPosts/WhyGo.vue'

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
  {
    path: '/blog/whygo',
    name: 'WhyGo',
    component: WhyGo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
