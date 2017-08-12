module.exports = {
  /**
   * @since 0.0.1
   * @see https://github.com/nhnent/tui.jsdoc-template
   * @param {Array<string>} files
   * @return {AppCli} @chainable
   */
  jsdocs(files) {
    files = this.docFiles(files)

    const jsdoc = require('jsdoc-api')
    let jsdocOpts = this.getPkg().jsdoc || this.getPkg().jsdocs

    if (!jsdocOpts && exists(resolve(this.dir, './jsdoc.js'))) {
      jsdocOpts = require(resolve(this.dir, './jsdoc.js')) // eslint-disable-line
    }
    if (!jsdocOpts && exists(resolve(this.dir, './jsdoc.json'))) {
      jsdocOpts = require(resolve(this.dir, './jsdoc.json')) // eslint-disable-line
    }

    jsdocOpts.files = files
    log.data({jsdocOpts}).text('jsdoc opts').echo()
    jsdoc.explainSync(jsdocOpts)
    return this
  },
}
