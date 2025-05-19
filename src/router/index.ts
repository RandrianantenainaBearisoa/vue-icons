// Composables
import { createRouter, createWebHistory } from 'vue-router';

// Constants
import { BASE_URL } from "@/static/constants/constants";

// Views
import publicRoutes from '@/router/public';
import privateRoutes from '@/router/private';
// import PageNotFound from '@/views/errors/404.vue';

const routes = [
  ...publicRoutes,
  ...privateRoutes,
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: PageNotFound,
  // },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router;
