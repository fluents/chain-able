if (should.optimizejs) {
  log.yellow('optimizejs').echo()
  const optimizeJs = require('optimize-js')

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
  plugins.push(optJs)
}
