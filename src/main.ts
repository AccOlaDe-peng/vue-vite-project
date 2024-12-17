import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import persistedState from "pinia-plugin-persistedstate";
import { router } from "@/router";

import "element-plus/theme-chalk/dark/css-vars.css";
import "./assets/styles/main.scss";

const app = createApp(App);
const pinia = createPinia();

pinia.use(persistedState);

app.use(pinia);
app.use(router);
app.mount("#app");
