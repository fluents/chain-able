const {resolve} = require('path')
const webpack = require('webpack')

const {DefinePlugin} = webpack
const res = rel => resolve(__dirname, rel)

module.exports = {
  entry: res('./src/index.js'),
  output: {
    path: res('./disted/webpack'),
    filename: '[name].js',
  },
  plugins: [
    new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}
