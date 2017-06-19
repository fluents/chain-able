const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
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
]

const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  entry: './dist/index.js',
  cache: false,
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
