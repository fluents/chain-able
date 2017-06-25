const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const log = require('fliplog')
const pkg = require('../package')
const replace = require('rollup-plugin-replace')

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
plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    // 'INLINE_SLICE': ``,
  })
)

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
      format: 'umd',
      moduleName: 'chainable',
    },
  ],
}

module.exports = config
