import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import('../template/template.vue'),
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;