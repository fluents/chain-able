const log = require('fliplog')
const pkg = require('../package')
const plugins = require('./plugins')

const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  entry: './dist/index.js',
  cache: false,
  sourceMap: true, // 'inline',
  plugins: plugins({development: true}),
  targets: [
    {
      dest: pkg['main:dev'],
      format: 'umd',
      moduleName: 'chainable',
    },
  ],
}

module.exports = config
