import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./public-path";

const app = createApp(App);

interface IProps {
  container?: HTMLElement;
}

function render(props: IProps) {
  const { container } = props;

  app.use(store);
  app.use(router);

  app.mount(container ? (container.querySelector("#app") as Element) : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("bootstrap");
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
  console.log("unmount");
  app.unmount();
}
