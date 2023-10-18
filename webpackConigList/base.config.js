const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    // main: './src/demoEntry/index.js',
    // foo: { import: './src/demoEntry/foo.js', dependOn: 'main' }

    main: { import: './src/demoEntry/index.js', runtime: 'common-runtime' },
    foo: { import: './src/demoEntry/foo.js', runtime: 'common-runtime' }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  profile: true
}
