import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./public-path";
import { CombinedVueInstance } from "vue/types/vue";

Vue.config.productionTip = false;

interface IProps {
  container?: HTMLElement;
}

let instance: null | CombinedVueInstance<
  Vue,
  object,
  object,
  object,
  Record<never, unknown>
> = null;

function render(props: IProps = {}) {
  const { container } = props;

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? (container.querySelector("#app") as Element) : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: IProps) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
  }
}
