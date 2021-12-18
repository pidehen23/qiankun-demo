const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3002,
    proxy: {},
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // jsonpFunction: `webpackJsonp_${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
