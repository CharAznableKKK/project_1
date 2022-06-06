import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/page',
    name: 'page',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/children/musicPage.vue')

  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/children/historyPage.vue')
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: () => import('../views/children/analysisPage.vue')
  },
  {
    path: "/",
    redirect: "/page"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
