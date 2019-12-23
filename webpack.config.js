const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(), // 官网的这个插件用法可能没更新，会报错不是构造函数，搜了下发现很多人碰到过这个问题
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};
