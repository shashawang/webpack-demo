const path = require('path');
// const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    // new BundleAnalyzerPlugin()
    // new webpack.optimize.CommonsChunkPlugin({ // webpack4之后被SplitChunksPlugin替换
    //   name: 'common' 
    // })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'initial',
  //         minChunks: 2,
  //       }
  //     }
  //   }
  // },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
