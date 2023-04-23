import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Login from "../pages/user/login.vue";
import Layout from "../components/Layout.vue";

const routes: RouteRecordRaw[] = [
	{ path: "/", component: Layout },
	{ path: "/user/login", component: Login },
	// { path: "/about", component: HelloWorld },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {
//     console.log(to, from);
//     document.title = `${to.meta.title} | vue-manage-system`;
//     // const role = localStorage.getItem("ms_username");
//     // if (!role && to.path !== "/login") {
//     //     next("/login");
//     // }
//     //用户权限
//     // else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
//     //     // 如果没有权限，则进入403
//     //     next("/403");
//     // }
//     // else {
//     next();
//     // }
// });

export default router;
