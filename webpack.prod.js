const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const setMPA = () => {
  const entry = {}
  const HtmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = match[1]
    entry[pageName] = entryFile
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCss: true,
          minifyJs: true,
          removeComments: false,
        }
      })
    )
  })
  return {
    entry,
    HtmlWebpackPlugins
  }
}
const {entry, HtmlWebpackPlugins} = setMPA()
console.log('entry, HtmlWebpackPlugins', entry, HtmlWebpackPlugins);
module.exports = {
  entry: entry,
  // entry: {
  //   search: './src/search.js'
  // },
  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     title: 'Production'
  //   })
  // ],
  output: {
    filename: '[name]_[chunkhash:8].js',
    // filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 version', '>1%', 'ios 7']
                })
              ]
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8
            }
          }
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif)$/,
        // use: 'file-loader'
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 102400,
        //     }
        //   }
        // ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   // template: path.join(__dirname, 'src/index.html'),
    //   filename: 'index.html',
    //   chunks: ['index'],
    //   inject: true,
    //   minify: {
    //     html5: true,
    //     collapseWhitespace: true,
    //     preserveLineBreaks: false,
    //     minifyCss: true,
    //     minifyJs: true,
    //     removeComments: false,
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src/search.html'),
    //   filename: 'search.html',
    //   chunks: ['search'],
    //   inject: true,
    //   minify: {
    //     html5: true,
    //     collapseWhitespace: true,
    //     preserveLineBreaks: false,
    //     minifyCss: true,
    //     minifyJs: true,
    //     removeComments: false,
    //   }
    // }),
  ].concat(HtmlWebpackPlugins)
};
