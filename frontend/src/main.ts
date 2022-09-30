import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import i18n from "./i18n";
import "element-plus/dist/index.css";
import "./assets/main.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount("#app");
