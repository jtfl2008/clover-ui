const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(resolve('packages'))
      .end()
      .use('bable')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  configureWebpack: {
    resolve:{
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        'assets': resolve('examples/assets'),
        'views': resolve('examples/views')
      }
    },
    output: {
      libraryExport: 'default'
    }
  }
}
