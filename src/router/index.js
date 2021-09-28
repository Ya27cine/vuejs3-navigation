import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog'
import Show from '../views/blog/Show'
import PageNotFound from '../views/blog/pageNotFound'



import "bootswatch/dist/sandstone/bootstrap.min.css";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog/:id/:slug',
    name: 'post-show',
    component: Show,
    props: true
  },
  {
    path: '/posts',
    redirect: '/blog'
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
