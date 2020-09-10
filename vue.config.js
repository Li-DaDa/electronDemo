module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        'appId': 'com.oilworld.oil',
        'productName': 'app',
        'nsis': {
          'oneClick': false,
          'allowToChangeInstallationDirectory': true,
          'runAfterFinish': true, // 安装完成立即启动
          'createDesktopShortcut': true, // 生成桌面快捷方式
        },
        'win': {
          'target': 'nsis',
          'legalTrademarks': 'http://www.baidu.com/',
          'artifactName': '${productName}_${version}.${ext}'
        },
        'mac': {
          'target': 'dmg',
        },
        'dmg': {
          'title': 'app',
          'contents': [
            {
              'x': 110,
              'y': 150
            },
            {
              'x': 240,
              'y': 150,
              'type': 'link',
              'path': '/Applications'
            }
          ],
          'window': {
            'x': 400,
            'y': 400
          }
        }
      }
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    port: 8085,
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {// 配置跨域处理
      '/api': {
        target: 'http://116.62.135.185:8081/',
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
