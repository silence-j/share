const path = require('path');
const getLessVariables = require('./src/utils/get-less-variables');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'base-color': '#409EFF',
        // },
        modifyVars: getLessVariables('./src/assets/less/variable.less'),
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        api: path.resolve(__dirname, 'static/api'),
      },
    },
    devServer: {
      port: '8081',
    },
  },
};
