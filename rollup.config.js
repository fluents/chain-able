const uglify = require('rollup-plugin-uglify')
const babili = require('rollup-plugin-babili')
const clean = require('rollup-plugin-cleanup')
const replace = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const optimizeJs = require('optimize-js')
const {minify} = require('uglify-es')
const log = require('fliplog')
const dev = require('./rollup.config.dev')
const pkg = require('./package')

const {NODE_ENV} = process.env

const optJs = {
  name: 'optimizeJs',
  transformBundle(code) {
    return optimizeJs(code)
  },
}

const plugins = dev.plugins

plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  })
)

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

      sourceMap: false,
      toplevel: false,
      ie8: false,
    },
    minify
  )
)

// plugins.push(optJs)

// plugins.push(
//   babili(
//     {
//       // minify: false,
//       // mangle: {
//       //   keepFnName: true,
//       // },
//       // deadcode: {
//       //   keepFnName: true,
//       // },
//     }
//   )
// )
// plugins.push(clean())

plugins.push(
  filesize({
    render(options, size, gzip) {
      const {text, datas} = log.bold('size: ').fmtobj({size, gzip}).return()
      return text + datas
    },
  })
)

const config = {
  entry: './dist/index.js',
  sourceMap: false, // 'inline',
  plugins,
  targets: [
    {
      // sourceType: 'module', for optimizejs playing around
      dest: pkg.main,
      format: 'cjs',
    },
    {
      dest: pkg.module,
      format: 'es',
    },
    {
      dest: pkg.amd,
      format: 'amd',
      moduleId: 'chain-able',
    },
  ],
}

module.exports = config
