module.exports = {
  /**
   * @tutorial http://jsdox.org/
   * @param {Array<string>} files
   * @return {AppCli} @chainable
   */
  jsdox(files) {
    const jsdox = require('jsdox')

    files.forEach(file => {
      // , templateDir, cb, fileCb
      jsdox.generateForDir(file, this.getPkg().folders.docs || 'docgen')
    })

    return this
  },
}
