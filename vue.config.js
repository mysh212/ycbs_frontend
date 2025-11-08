const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: 'src/index/main.js',
    old: 'src/old/main.js',
    about: 'src/about/main.js',
    event: 'src/event/main.js',
    register: 'src/register/main.js',
    progress: 'src/progress/main.js'
  }
})