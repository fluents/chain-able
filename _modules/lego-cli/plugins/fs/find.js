module.exports = {
  /**
   * @since 0.0.1
   * @desc finds docfiles using a glob
   * @param {Array<string>} pattern array of glob patterns
   * @return {Array<string>} file
   */
  docFiles(pattern = ['disted/**/*.js']) {
    const {log, globby, find} = this.deps()

    if (Array.isArray(pattern) === false) {
      // pattern = ['disted/**/*.js']
      pattern = [pattern]
    }
    log.blue('docs pattern').json({pattern, dir: this.dir}).echo(true)

    const files = globby.sync(pattern, {
      cwd: this.dir,
      absolute: true,
    })

    return files
  },

  /**
   * @since 0.0.1
   * @param {Array<string>} pattern array of glob patterns
   * @return {AppCli} @chainable
   */
  docs(pattern = ['disted/**/*.js']) {
    this.doxdox([pattern])
    // this.docFiles(pattern)
    return this
  },
}
