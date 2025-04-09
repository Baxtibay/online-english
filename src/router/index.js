import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue')
    },
    {
      path: '/in-progress',
      name: 'in-progress',
      component: () => import('../pages/InProgressPage.vue')
    },
    {
      path: '/course/:id',
      name: 'course-page',
      component: () => import('../pages/CoursePage.vue')
    },
  ]
})

export default router
