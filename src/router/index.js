import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: () => {
        window.location.replace(`${import.meta.env.BASE_URL}portfolio.pdf`)
        return false
      }
    }
  ]
})

export default router
