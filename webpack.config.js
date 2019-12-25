const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(), // 官网的这个插件用法可能没更新，会报错不是构造函数，搜了下发现很多人碰到过这个问题
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: { // 有web-dev-server和下面publicPath web-dev-middlemare的配置，打包出来的就不会生成index.html
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/' // web-dev-middlemare处理webpack文件给到server或express的app使用，publicPath会在服务器脚本用到
  },
};
