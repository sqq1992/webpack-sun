const path = require('path')
const BlockPlugin = require('../plugin/BlockPlugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/dempPlugin/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  plugins: [new BlockPlugin()]
}
