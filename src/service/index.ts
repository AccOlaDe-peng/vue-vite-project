import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";

const alovaInstance = createAlova({
    //服务地址, 或者基础路径
    baseURL: "/",
    // ReactHook可以帮我们调用useState创建请求相关的，可以被Alova管理的状态，包括请求状态loading、响应数据data、请求错误对象error等
    statesHook: ReactHook,
    // 请求适配器，可以自定义请求适配器，也可以使用内置的GlobalFetch适配器，它使用fetch发起请求
    requestAdapter: GlobalFetch(),
    // 请求拦截 函数参数为一个method实例，包含如url、params、data、headers等请求数据
    beforeRequest(method) {
        // 假设我们需要添加token到请求头
        method.config.headers.token = "token";
    },

    // 响应拦截 使用数组的两个项，分别指定请求成功的拦截器和请求失败的拦截器
    responsed: {
        // 请求成功的拦截器
        // 当使用GlobalFetch请求适配器时，第一个参数接收Response对象
        // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
        onSuccess: async (response, method) => {
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            if (json.code !== 200) {
                // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
                throw new Error(json.message);
            }

            // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
            return json.data;
        },

        // 请求失败的拦截器
        // 请求错误时将会进入该拦截器。
        // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
        onError: (error, method) => {
            alert(error.message);
        },
    },
    // 请求超时时间，单位为毫秒，默认为0，表示永不超时
    timeout: 50000,
});

export default alovaInstance;
