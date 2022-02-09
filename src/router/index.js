import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aspect",
    name: "Aspect",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Aspect.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("../views/Button.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../views/Calendar.vue"),
  },
  {
    path: "/form timepicker",
    name: "Form Timepicker",
    component: () => import("../views/Form Timepicker.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
