const {resolve} = require('path')
const log = require('fliplog')
const pkg = require('../package')
const {argv} = require('./util')
const plugins = require('./plugins')

const cwd = process.cwd()
let {format, tsc, production} = argv

log.italic(format).echo()

// build config
let should = {
  babili: false,
  uglify: true,
  buble: true,
  sourceMap: true, // 'inline' | true
  optimizejs: false,
  production,
}
let entry = pkg.rollup.entry
let dest = pkg['main:' + format] || pkg[format]
const targetConfig = {}
const targets = [targetConfig]

// @TODO: build another that is uglified & 1 that is not for just comparing tsc
switch (format) {
  case 'tsc': {
    entry = pkg.rollup.tscEntry
    should.buble = false
    break
  }
  case 'dev': {
    // @NOTE: this has to be flipped if experimenting with tsc
    should.production = production = false
    should.uglify = false
    should.buble = false
    // entry = pkg
    // break
    break
  }
  case 'es6': {
    should.buble = false
  }
}

switch (format) {
  case 'es': {
    // dest = pkg.module
    break
  }
  case 'amd': {
    targetConfig.moduleId = pkg.rollup.moduleName
    break
  }
  case 'cjs': {
    // dest = pkg.main
    break
  }
  case 'tsc':
  case 'dev': {
    format = 'umd'
  }
  case 'iife': {
    targetConfig.moduleName = pkg.rollup.moduleName
    break
  }
  case 'umd': {
    targetConfig.moduleName = pkg.rollup.moduleName
    // targetConfig.sourceType = 'module'

    // sourceType: 'module', for optimizejs playing around
    // if (!['tsc', 'dev'].includes(format) && format == 'umd') {
    // }
  }
}

log.underline(dest).echo()

// use configured variables to export
should = Object.assign(should, {
  tsc,
  entry,
  dest,
  format,
})

targetConfig.dest = dest
targetConfig.format = format

const config = {
  // useStrict: false,
  // external: ['inspector-gadget'],
  //  + '../',
  entry: resolve(cwd, should.entry),
  cache: false,
  onwarn(warning) {
    log.red(warning).echo()
  },

  sourceMap: should.sourceMap,
  plugins: plugins(should),
  targets,
}

// for single target
// Object.assign(config, targetConfig, config)

// log.data(config).bold('config').echo()

// old targets
// targets: [
//   {
//     // sourceType: 'module', // for optimizejs playing around
//     dest: pkg.main,
//     format: 'cjs',
//   },
//   {
//     dest: pkg.module,
//     format: 'es',
//   },
//   {
//     moduleName: 'chainable',
//     dest: './disted/index.umd.js',
//     format: 'umd',
//   },
//   {
//     moduleName: 'chainable',
//     dest: './disted/index.iife.js',
//     format: 'iife',
//   },
//   {
//     dest: pkg.amd,
//     format: 'amd',
//     moduleId: 'chain-able',
//   },
// ],

module.exports = config
