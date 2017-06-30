const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('./uglify')
const optimizejs = require('./optimizejs')
const filesize = require('./filesize')
const replace = require('./replace')
const falafelPlugin = require('./ast')

module.exports = (version, options) => {
  if (options.env === 'development') {
    options.development = true
  }
  else if (options.env === 'production') {
    options.production = true
  }

  const plugins = []
  const add = plugin => plugins.push(plugin)

  if (options.falafel) add(falafelPlugin(options))
  if (options.replace) add(replace(options))

  add(
    nodeResolve({
      jsnext: true,
      module: true,
      main: true,
      preferBuiltins: true,
    })
  )
  add(
    commonjs({
      include: '**/**',
      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      // ignore: ['ENV_DEBUG', 'ENV_DEVELOPMENT'],
    })
  )

  if (options.uglify) add(uglify())
  add(filesize())

  return plugins
}
