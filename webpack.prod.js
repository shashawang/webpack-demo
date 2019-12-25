const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
        sourceMap: true // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。 例子里好像加不加没啥区别
    }),
    new webpack.DefinePlugin({ // process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' 这样的条件语句，在 webpack 配置文件中，无法按照预期运行.定义后，/src 的本地代码都可以使用该变量
        'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
