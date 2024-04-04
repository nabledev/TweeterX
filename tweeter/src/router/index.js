import { createRouter, createWebHistory } from 'vue-router'
import ConnexionView from '@/views/ConnexionView.vue'
import InscriptionView from '@/views/InscriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      mode: 'hash',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      mode: 'hash',
      component: ConnexionView
    },
    {
      path: '/inscription',
      name: 'inscription',
      mode: 'hash',
      component: InscriptionView
    },
    {
      path: '/',
      name: '',
      mode: 'hash',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router
