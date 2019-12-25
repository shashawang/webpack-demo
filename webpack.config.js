const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development" // development模式打包出来的bundle.js不是一行，但也和指南上的不同；production模式打包出来的事一行
};
