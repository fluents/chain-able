const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')
const fwf = require('funwithflags')
const dargs = require('dargs')
const log = require('fliplog')
const pkg = require('./package')

let should = {
  babili: false,
  uglify: true,
  buble: false,
  sourceMap: true, // 'inline' | true
  optimizejs: false,
  production: true,
}

// src: [rollup, typescript, buble, babel, browserify, copy/strip]
// setup argv
const argvOpts = {
  boolean: ['sourceMaps', 'tsc'],
  string: ['format'],
  default: {
    // 'amd', 'iife', 'dev', 'es'
    format: 'dev',
    tsc: true,
  },
}

// setup env
const env = Object.assign({}, process.env)
env._ = []
Object.keys(env).forEach(key => {
  if (/(^[A-_Z]+$)/.test(key)) delete env[key]
  if (/npm/.test(key)) delete env[key]
  if (key === 'Apple_PubSub_Socket_Render') delete env[key]
})

// env -> argv -> vars
const dargv = dargs(env, {allowCamelCase: true})
let argv = fwf(dargv, argvOpts)
let {format, tsc} = argv

// build config
let entry = './src/index.js'
if (format === 'tsc') entry = './index.tsc.bundle.js'
if (format === 'dev') should.uglify = false

let dest = pkg['main:' + format] || pkg[format]
if (format === 'tsc' || format === 'dev') {
  format = 'cjs'
  dest = pkg.main
}
if (format === 'es') {
  dest = pkg.module
}
if (format === 'umd') {
  dest = './disted/index.umd.js'
}

// use configured variables to export
should = Object.assign(should, {
  tsc,
  entry,
  dest,
  format,
})
const targetConfig = {
  // sourceType: 'module', for optimizejs playing around
  dest,
  format,
}
if (should.format === 'amd') {
  targetConfig.moduleId = 'chain-able'
}
if (should.format === 'umd') {
  targetConfig.moduleName = 'chainable'
}

const targets = [targetConfig]

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

if (should.buble) {
  const buble = require('rollup-plugin-buble')
  buble({
    transforms: {
      // forOf: false,
      // dangerousForOf: false,
      // computedProperty: false,
    },
  })
}

const {NODE_ENV} = process.env

if (should.production) {
  plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  )
}
// else {
//   plugins.push(
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('development'),
//     })
//   )
// }

if (should.uglify) {
  // https://github.com/mishoo/UglifyJS2#minify-options-structure
  // should mangle...
  plugins.push(
    uglify(
      {
        warnings: false,
        parse: {
          // parse options
          html5_comments: false,
          shebang: false,
        },
        compress: {
          // compress options
          dead_code: true,
          drop_debugger: true,
          booleans: true,
          unused: true,
        },

        sourceMap: true,
        toplevel: false,
        ie8: false,
      },
      minify
    )
  )
}

if (should.optimizejs) {
  const optimizeJs = require('optimize-js')
  const optJs = {
    name: 'optimizeJs',
    transformBundle(code) {
      return optimizeJs(code)
    },
  }
  plugins.push(optJs)
}

if (should.babili) {
  const babili = require('rollup-plugin-babili')
  const clean = require('rollup-plugin-cleanup')
  plugins.push(
    babili(
      {
        // minify: false,
        // mangle: {
        //   keepFnName: true,
        // },
        // deadcode: {
        //   keepFnName: true,
        // },
      }
    )
  )
  plugins.push(clean())
}

plugins.push(
  filesize({
    render(options, size, gzip) {
      const {text, datas} = log.bold('size: ').fmtobj({size, gzip}).return()
      return text + datas
    },
  })
)

const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  entry: should.entry,
  sourceMap: should.sourceMap,
  plugins,
  targets,
}

module.exports = config
