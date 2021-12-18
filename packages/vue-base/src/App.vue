<template>
  <header class="header">
    <h2>Vue3 base + Vue Router4</h2>
    <nav class="menu-list">
      <li
        v-for="item in menuList"
        :key="item.key"
        class="menu-item"
        @click="onClick(item)"
      >
        {{ item.title }}
      </li>
    </nav>
  </header>
  <main class="main">
    <router-view></router-view>
    <!-- 子应用渲染区，用于挂载子应用节点 -->
    <div id="container"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

interface IItemInfo {
  key: string;
  title: string;
  path: string;
}

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      menuList: [
        {
          key: "/",
          title: "Home",
          path: "/",
        },
        {
          key: "/",
          title: "About",
          path: "/about",
        },
        {
          key: "vue2",
          title: "Vue2 子应用",
          path: "/vue2",
        },
        {
          key: "vue3",
          title: "Vue3 子应用",
          path: "/vue",
        },
        {
          key: "react",
          title: "React 子应用",
          path: "/react",
        },
      ],
    });
    const router = useRouter();

    const onClick = (item: IItemInfo) => {
      router.push(item.path);
    };
    return {
      ...toRefs(state),
      onClick,
    };
  },
});
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  width: 100%;
}
.menu-list {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #001529;
}
.menu-item {
  flex-grow: 1;
  color: #fff;
  cursor: pointer;
  list-style: none;
}
.menu-item:hover {
  font-weight: bold;
}

.main {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
</style>
