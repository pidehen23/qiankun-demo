<template>
  <div id="app">
    <!-- 使用 element 菜单栏 -->
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <!-- 也可以引用其它子应用 -->
      <el-menu-item index="/vue">vue 应用</el-menu-item>
      <el-menu-item index="/react">react 应用</el-menu-item>
    </el-menu>
    <!-- 页面渲染 -->
    <router-view></router-view>
    <div id="vue-app"></div>
    <div id="react-app"></div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
