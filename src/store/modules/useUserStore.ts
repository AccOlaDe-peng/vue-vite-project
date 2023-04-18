import { defineStore } from "pinia";
// 获取路由实例
// import {
//     getPermissionList,
//     getRoleList,
//     getUserDetail,
//     getUserList,
// } from "@/api/mock";
import { menuToRoutes } from "@/utils/router";
import router from "@/router";

export default defineStore("user", {
    // state
    state: () => {
        return {
            userDetail: undefined,
            curId: 0,
        };
    },
    // getters
    getters: {
        // menuList: (state) => {
        //     return state.userDetail?.permissionList;
        // },
    },
    // actions
    actions: {
        // async getData() {
        //     this.userList = (await getUserList()).result;
        //     this.permissionList = (await getPermissionList()).result;
        //     this.roleList = (await getRoleList()).result;
        //     this.userDetail = (await getUserDetail({ id: this.curId })).result;
        //     // 动态添加路由
        //     if (this.menuList) {
        //         const routes = await menuToRoutes(this.menuList);
        //         for (const route of routes) {
        //             router.addRoute("main", route);
        //         }
        //     }
        // },
        // changeId(id: number) {
        //     this.curId = id;
        //     this.getData();
        // },
    },
});
