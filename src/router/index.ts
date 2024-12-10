import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@@/Layout/index.vue"),
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
      {
        path: "list",
        component: () => import("@/pages/list/index.vue"),
        name: "List",
        meta: {
          title: "列表",
          icon: "el-icon-s-data",
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
