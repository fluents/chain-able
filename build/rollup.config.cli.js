const {resolve} = require('path')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')
const log = require('fliplog')
const pkg = require('../package')
const argv = require('./_args')

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
  log.blue('buble').echo()
  const buble = require('rollup-plugin-buble')
  const bubleOpts = {
    transforms: {
      // forOf: false,
      // dangerousForOf: false,
      // computedProperty: false,
    },
  }
  plugins.push(buble())
}

if (should.production) {
  log.bold('production').echo()
  plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.DEBUG': false,
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

// https://github.com/mishoo/UglifyJS2/pull/733/files !!!
if (should.uglify) {
  // https://github.com/mishoo/UglifyJS2#minify-options-structure
  // should mangle...
  plugins.push(
    uglify(
      {
        warnings: true,
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
          comparisons: true,
          conditionals: true,
          hoist_funs: true,
          if_return: true,
          join_vars: true,
          cascade: true,
          collapse_vars: true,

          // only 1 getters - length
          pure_getters: true,

          // @TODO:
          // pure_funcs: true, side_effects: false,
          keep_fargs: false,
          keep_fnames: false, // for now
          passes: 3,
        },

        mangle: {
          properties: false,
          //  {
          //    name_cache: resolve('./tmp/namecache.json'),
          //    unsafe: true,
          //    builtins: true,
          //  }
          toplevel: true,

          // ties to compression opt
          keep_fnames: false,
        },

        sourceMap: true,
        toplevel: true,
        ie8: false,
      },
      minify
    )
  )
}

plugins.push(
  filesize({
    render(options, size, gzip, rollup) {
      // log.quick(this, options, size, gzip, rollup.format)
      const {text, datas} = log
        .bold(rollup.format + ' ')
        .fmtobj({size, gzip})
        .return()
      return text + datas
    },
  })
)

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
  plugins,
  targets,
}

// for single target
// Object.assign(config, targetConfig, config)

// log.data(config).bold('config').echo()

module.exports = config
