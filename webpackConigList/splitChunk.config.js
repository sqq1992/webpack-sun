const path = require('path')

// module.exports = {
//   mode: 'development',
//   devtool: false,
//   entry: {
//     entry1: './src/dempSplitChunk/entry-a.js',
//     entry2: './src/dempSplitChunk/entry-b.js',
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, '../dist'),
//     clean: true
//   },
//   optimization: {
//     splitChunks: {
//       minChunks: 2,
//       chunks: 'all',
//       minSize: 1
//     }
//   }
// }

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    entry3: './src/dempSplitChunk/entry-npm.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]

            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
}
