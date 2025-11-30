import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/useMouse',
    component: () => import('../page/vueUse.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router