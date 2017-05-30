const pkg = require('./package')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const buble = require('rollup-plugin-buble')
const babili = require('rollup-plugin-babili')
const clean = require('rollup-plugin-cleanup')
const replace = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const log = require('fliplog')

const plugins = [
  nodeResolve({
    jsnext: true,
    module: true,
    main: true,
    preferBuiltins: true,
  }),
  commonjs({
    include: '**/**',
  }),
  // buble({transforms: {dangerousForOf: true}}),
  buble({
    transforms: {
      forOf: false,
      dangerousForOf: false,
      computedProperty: false,
    },
  }),
]

// @TODO replace & production
const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  entry: './dist/index.js',
  sourceMap: true,
  plugins,
  targets: [
    {
      dest: pkg['main:dev'],
      format: 'cjs',
    },
  ],
}

module.exports = config
