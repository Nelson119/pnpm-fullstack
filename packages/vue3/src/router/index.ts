import { useAuthStore } from '@/store/auth'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('@/views/Home') },
  {
    path: '/about',
    component: () => import('@/views/About'),
    meta: { requiresAuth: true } // 設定 meta 屬性標記需要登入
  },
  { path: '/login', component: () => import('@/views/Login') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全域前置守衛
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.token) {
    next('/login') // 未登入時導向登入頁面
  } else {
    next() // 繼續導航
  }
})

export default router
