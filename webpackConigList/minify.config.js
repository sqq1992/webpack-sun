const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: { foo: './src/demoMinify/foo.js', bar: './src/demoMinify/bar.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /foo\.js$/i,
        extractComments: 'all'
      }),
      new TerserPlugin({
        test: /bar\.js/,
        extractComments: false
      })
    ]
  }
}
