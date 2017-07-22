module.exports = {
  name: 'flowdocs',
  /**
   * @since 0.0.1
   * https://github.com/Kegsay/flow-jsdoc
   * @desc jsdocs with flow support
   * @param {Array<string>} files
   * @return {AppCli} @chainable
   */
  flowdocs(files) {
    files = this.docFiles(files)

    const babel = require('babel-core')
    files.forEach(file => {
      const {code} = babel.transform('code', {
        plugins: ['jsdoc'],
      })
      const content = code

      log.cyan('writing docs').echo()
      log.white('content: ' + content).data(file).echo()
    })
    return this
  },
}
