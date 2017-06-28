const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('./uglify')
const optimizejs = require('./optimizejs')
const filesize = require('./filesize')
const replace = require('./replace')

// log.bold('production').echo()

module.exports = (version, options) => {
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
  const add = plugin => plugins.push(plugin)

  if (options.replace) add(replace(options))
  if (options.uglify) add(uglify())
  add(filesize())

  return plugins
}
