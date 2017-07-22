module.exports = {
  /**
   * @since 0.0.1
   * @desc regenerate interactively
   * @return {AppCLI} @chainable
   */
  skeleton() {
    const gen = require('../interactive/interactive')
    gen(this.dir)
    return this
  },

  /**
   * @since 0.0.1
   * @param {string} dir
   * @return {AppCLI} @chainable
   */
  // static init(dir) {
  //   return new AppCLI(dir)
  // }
}
