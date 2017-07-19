module.exports = {
  name: 'optimizejs',

  /**
   * @since 0.0.1
   * @tutorial https://github.com/nolanlawson/optimize-js
   * @param  {string} input
   * @return {string} optimized output
   */
  optimize(input) {
    const optimizeJs = require('optimize-js')
    return optimizeJs(input, {
      sourceMap: true,
    })
  },
}
