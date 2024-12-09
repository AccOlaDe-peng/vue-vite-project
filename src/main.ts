import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import { router } from "@/router";

import "element-plus/theme-chalk/dark/css-vars.css";
import "./assets/styles/main.css";
import "./assets/styles/dark/css-vars.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
