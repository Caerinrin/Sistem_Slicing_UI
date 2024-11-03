import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import BlogView from '@/views/BlogView.vue'
import AuthorView from '@/views/AuthorView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/blog-post',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
    },
  ],
})

export default router
