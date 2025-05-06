import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/hello',
    component: () => import('@/views/Hello.vue'),
    meta: {
      title: 'Hello',
    },
  },
  {
    path: '/hello-vue-use',
    component: () => import('@/views/HelloVueUse.vue'),
    meta: {
      title: 'Hello',
    },
  },
  {
    path: '/demo',
    component: () => import('@/views/HelloVueUse.vue'),
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/vue',
    component: () => import('@/views/Vue.vue'),
    meta: {
      title: 'Vue',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
