const log = require('fliplog')
const optimizeJs = require('optimize-js')

module.exports = () => {
  log.yellow('optimizejs').echo()

  const optJs = {
    name: 'optimizeJs',
    // eslint-disable-next-line
    transformBundle: function(source, format) {
      log.diff(source)
      let optimized
      try {
        optimized = optimizeJs(source, {
          sourceMap: false, // was false
          sourceType: 'module',
        })
        log.diff(optimized)
        log.diffs().echo()
      }
      catch (e) {
        log.quick(e)
      }
      return optimized
      return {code: optimized}
    },
  }

  return optJs
}
