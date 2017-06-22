const {resolve} = require('path')
const webpack = require('webpack')

// resolve paths for absolute paths
const dir = __dirname
const res = rel => resolve(dir, rel)
const {DefinePlugin} = webpack

module.exports = {
  target: 'web',
  entry: res('./src/index.js'),
  output: {
    path: res('./disted/webpack'),
    filename: '[name].js',
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}
