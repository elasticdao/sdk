const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
  mode: 'production',
  entry: {
    'index': ['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: 'SDK',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
      }
    })],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
      }]
    }]
  },
});
