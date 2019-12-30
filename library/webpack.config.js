var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js', // 包名
    library: 'webpackNumbers', // 导出的全局变量
    libraryTarget: 'umd' // 暴露方式
  },
  externals: { // library体积显著减小
    lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};
