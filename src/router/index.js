import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/index.vue";
import NotFound from "../pages/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
