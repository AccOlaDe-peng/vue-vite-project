import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Layout from "../components/Layout.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: HelloWorld },
    { path: "/about", component: Layout },
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    document.title = `${to.meta.title} | vue-manage-system`;
    // const role = localStorage.getItem("ms_username");
    // if (!role && to.path !== "/login") {
    //     next("/login");
    // }
    //用户权限
    // else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    //     // 如果没有权限，则进入403
    //     next("/403");
    // }
    // else {
    next();
    // }
});

export default router;
