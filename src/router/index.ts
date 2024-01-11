import { type RouteRecordRaw, createRouter } from "vue-router";
import { history } from "./helper";

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error-page/404.vue")
  }
];

const router = createRouter({
  history: history,
  routes: routes
});
export default router;
