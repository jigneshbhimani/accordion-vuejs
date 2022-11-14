import Vue from "vue";
import VueRouter from "vue-router";
import Accordion from "@/components/Accordion.vue";
import Assignment from "@/components/Assignment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accordion",
    component: Accordion,
  },
  {
    path: "/assignment",
    name: "assignment",
    component: Assignment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
