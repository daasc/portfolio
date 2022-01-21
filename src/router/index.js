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
      },
      {
        path: '/stack',
        name: 'stack',
        component: () => import('../views/stacks.vue')
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/projects.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/contact.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;