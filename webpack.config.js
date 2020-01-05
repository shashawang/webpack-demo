const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   polyfills: './src/polyfills.js',
  //   index: './src/index.js'
  // },
  output: {
    filename: 'bundle.js',
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/globals.js'), // 文档上的路径会报错
        use: 'exports-loader?file,parse=helpers.parse'
      },
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window' // 将CommonJS 环境下的 this(module.exports)用 imports-loader 覆写 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',
      join: ['lodash', 'join']
    })
  ]
};
