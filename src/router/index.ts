import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const Layout = () => import("@@/Layout/index.vue");

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/pages/dashboard/index.vue"),
        meta: {
          title: "首页",
          icon: "el-icon-s-data",
          affix: true,
        },
      },
    ],
  },
];

export const dynamicRoutes: RouteRecordRaw[] = [];

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});
