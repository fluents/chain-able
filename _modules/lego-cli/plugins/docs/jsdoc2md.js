module.exports = {
  /**
   * @since 0.0.1
   * @param {Array<string>} pattern array of glob patterns
   * @return {AppCli} @chainable
   */
  jsdoc2md(pattern = ['disted/**/*.js']) {
    const {log} = this.deps()
    const jsdoc2md = require('jsdoc-to-markdown')

    const docs = jsdoc2md.renderSync({files: pattern})
    log.quick(docs)

    return this
  },
}
