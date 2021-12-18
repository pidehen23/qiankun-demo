import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import start from "./modules";

const app = createApp(App);

// qiankun
start({
  prefetch: false,
  sandbox: {
    // strictStyleIsolation: true // shadowDom样式隔离
    experimentalStyleIsolation: true,
  },
  singular: true,
});

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
