import axios from "axios";
import { ElMessage } from "element-plus";
// import { message as AntdMessage } from "antd";
// import { REQUEST_ERROR_MESSAGE } from "../utils/constant/api";
// import { getTokenAUTH } from "../utils/util/auth";

//初始化
const instance = axios.create({
    baseURL: "",
    timeout: 5000,
});

//请求拦截
instance.interceptors.request.use(
    (config) => {
        // 自动携带token
        const token = "getTokenAUTH()";
        // const token = getTokenAUTH();
        if (token && typeof window !== "undefined") {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//响应拦截
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            return Promise.reject(response);
        }
    },
    (error) => {
        httpErrorStatusHandle(error); // 处理错误状态码
        return Promise.reject(error);
    }
);
/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error: any) {
    //处理被取消的请求
    let message = "";
    if (error && error.response) {
        message =
            // REQUEST_ERROR_MESSAGE?.[error?.response?.status] ??
            "异常问题，请联系管理员！";
    }
    if (error.message.includes("timeout")) message = "网络请求超时！";
    if (error.message.includes("Network"))
        message = window.navigator.onLine ? "服务端异常！" : "您断网了！";

    ElMessage.error(message);
}

export default instance;
