import { ObjectType, RegistrableApp } from "qiankun";

const apps: RegistrableApp<ObjectType>[] = [
  {
    // 子应用名称
    name: "vue-app",
    // 子应用入口;默认会加载这个 html
    // 并解析里里面的 js 然后动态的执行（子应用必须支持跨域）
    entry: "//localhost:3001",
    // 将子应用挂载到 #vue 元素上
    container: "#vue",
    // 激活规则：访问 /vue 时将子应用挂载到 #vue 上
    activeRule: "/vue",
  },
  {
    name: "react-app",
    entry: "//localhost:3000",
    container: "#react",
    activeRule: "/react",
  },
];

export default apps;
