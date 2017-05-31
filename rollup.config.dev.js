const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const buble = require('rollup-plugin-buble')
const log = require('fliplog')
const pkg = require('./package')

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
  buble({
    transforms: {
      // forOf: false,
      // dangerousForOf: false,
      // computedProperty: false,
    },
  }),
]

const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  entry: './dist/index.js',
  sourceMap: true, // 'inline',
  plugins,
  targets: [
    {
      dest: pkg['main:dev'],
      format: 'cjs',
    },
  ],
}

module.exports = config
