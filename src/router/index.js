import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:name",
    name: "Pokemon",
    component: Pokemon
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
