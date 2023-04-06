import alovaInstance from "@/service";
import type {
    IPermissionList,
    IRoleList,
    IUserDetail,
    IUserList,
} from "./types/mock";
export const getUserList = () => {
    return alovaInstance.Get("/mock/getUserList");
};
export const getRoleList = () => {
    return alovaInstance.Get("/mock/getRoleList");
};
export const getPermissionList = () => {
    return alovaInstance.Get("/mock/getPermissionList");
};
export const getUserDetail = (data: { id: any }) => {
    return alovaInstance.Get("/mock/getUserDetail", {
        params: data,
    });
};
