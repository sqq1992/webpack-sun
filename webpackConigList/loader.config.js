const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/loaderTest.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: path.resolve(__dirname, '../loader/dist/index') }]
      }
    ]
  }
}
