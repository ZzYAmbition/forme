const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "乌若托托曼泽柔";
        return args;
      })
  },
  pwa: {
    iconPaths: {
      favicon32: './public/img/favicon.ico',
      favicon16: './public/img/favicon.ico',
      appleTouchTcom: './public/img/favicon.ico',
      maskIcon: './public/img/favicon.ico',
      msTileImage: './public/img/favicon.ico'
    }
  }
})
