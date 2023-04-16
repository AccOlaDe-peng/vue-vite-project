import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from "vite-plugin-mock";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // 配置mock
        viteMockServe({
            mockPath: "/mock",
            localEnabled: true,
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    server: {
        port: 3300,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/main.scss";`,
            },
        },
    },
});
