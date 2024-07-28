import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import NotFound from "../components/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
