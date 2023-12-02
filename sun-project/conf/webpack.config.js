const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, '../src/index.js'), login: path.resolve(__dirname, '../src/login.js') },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist')
    },
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyjsWebpackPlugin({ sourceMap: true })
    ],
    // 包的分割
    splitChunks: {
      minSize: 30 * 1024,
      chunks: 'all',
      name: 'common',
      cacheGroups: { // 单独打包的npm类库
        jquery: {
          name: 'jquery',
          test: /jquery/,
          chunks: 'all'
        },
        'lodash-es': {
          name: 'lodash-es',
          test: /lodash-es/,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, '../public/login.html'),
      chunks: ['login']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/img'),
          to: path.resolve(__dirname, '../dist/img')
        }
      ]
    }),

    // 剥离css
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
    })
  ]
}
