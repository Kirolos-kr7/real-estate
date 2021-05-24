import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Rent from "../views/Rent.vue";
import Sale from "../views/Sale.vue";
import PostNew from "../views/PostNew.vue";
import Ad from "../views/Ad.vue";
import e404 from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/rent",
    name: "Rent",
    component: Rent
  },
  {
    path: "/sale",
    name: "Sale",
    component: Sale
  },
  {
    path: "/postNew",
    name: "PostNew",
    component: PostNew
  },
  {
    path: "/ad",
    name: "Ad",
    component: Ad
  },
  {
    path: "/404",
    name: "404",
    component: e404
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
