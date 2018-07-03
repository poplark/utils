const path = require('path');

module.exports = {
  // mode: 'production',
  // devtool: 'source-map',
  // mode: 'development',
  // devtool: 'cheap-module-source-map',
  entry: path.resolve('./src/index.js'),
  output: {
    // path: path.resolve('./lib'),
    filename: 'index.js',
    libraryTarget : "umd",
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            loader: require.resolve('babel-loader')
          }
        ]
      }
    ]
  },
}