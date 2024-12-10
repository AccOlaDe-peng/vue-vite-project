import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vueInspector from "vite-plugin-vue-inspector";

// https://vite-plugin-dev-inspector.netlify.app/guide/getting-started.html#basic-usage

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vueInspector(),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@@": resolve(__dirname, "src/components"),
      },
    },
    server: {
      host: true,
      port: 3000,
      warmup: {
        // https://vite-plugin-ssr.com/guide/performance#pre-rendering
      },
    },
  };
});
