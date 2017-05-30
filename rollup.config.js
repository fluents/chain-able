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
const dev = require('./rollup.config.dev')

const plugins = dev.plugins
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
  sourceMap: true, //'inline',
  plugins,
  targets: [
    {
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
