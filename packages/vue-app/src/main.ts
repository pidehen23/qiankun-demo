import { App as IApp, createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./router";
import store from "./store";
import "./public-path";
import {
  createRouter,
  createWebHistory,
  Router,
  RouterHistory,
} from "vue-router";

interface IProps {
  container?: HTMLElement;
}

let router: null | Router = null;
let instance: null | IApp<Element> = null;
let history: null | RouterHistory = null;

function render(props: IProps) {
  const { container } = props;

  instance = createApp(App);
  history = createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/vue/" : process.env.BASE_URL
  );

  router = createRouter({
    history,
    routes,
  });

  router.afterEach((to, from) => {
    console.log("from ", from);
    console.log("to ", to);
  });

  instance.use(store);
  instance.use(router);

  instance.mount(
    container ? (container.querySelector("#app") as Element) : "#app"
  );
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  // debugger;
  render({});
}

/**
 * bootstrap： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("vue3 app bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: IProps) {
  console.log("mount", props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("vu3 app unmount");
  if (instance) {
    instance.unmount();
    if (instance._container) {
      instance._container.innerHTML = "";
    }
    instance = null;
  }
  history?.destroy();
  router = null;
}
