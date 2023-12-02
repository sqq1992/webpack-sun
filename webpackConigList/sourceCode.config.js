const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/demoSourceCode/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
