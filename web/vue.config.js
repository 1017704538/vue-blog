module.exports = {
  productionSourceMap: false,
  outputDir: __dirname + '/../server/web',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/'
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://test.yukikazesama.cn/',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 用cdn方式引入
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      'nprogress': 'NProgress',
      // 'vant': 'vant'
    })
  }
}

const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [

          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }

  },
}