const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:8089,
    compress: true, //启动devServer的Gzip压缩
  }
})
