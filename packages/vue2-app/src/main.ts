import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./router";
import store from "./store";
import "./public-path";
import { CombinedVueInstance } from "vue/types/vue";
import VueRouter from "vue-router";

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
let router: null | VueRouter = null;

function render(props: IProps = {}) {
  const { container } = props;

  router = new VueRouter({
    mode: "history",
    base: window.__POWERED_BY_QIANKUN__ ? "/vue2/" : process.env.BASE_URL,
    routes,
  });

  router.afterEach((to, from) => {
    console.log("from ", from);
    console.log("to ", to);
  });

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
  console.log("[vue] vue2 app bootstrap");
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
    router = null;
  }
}
