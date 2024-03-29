const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/sourceAnalysis/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  }
}
