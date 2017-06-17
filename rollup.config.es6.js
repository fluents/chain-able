const uglify = require('rollup-plugin-uglify')
const clean = require('rollup-plugin-cleanup')
const replace = require('rollup-plugin-replace')
const filesize = require('rollup-plugin-filesize')
const {minify} = require('uglify-es')
const log = require('fliplog')
const dev = require('./rollup.config.dev')
const pkg = require('./package')

const {NODE_ENV} = process.env

const plugins = dev.plugins.slice(0)
plugins.pop() // removeBuble

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
      dest: pkg['main:dev:es6'],
      format: 'cjs',
    },
  ],
}

module.exports = config
