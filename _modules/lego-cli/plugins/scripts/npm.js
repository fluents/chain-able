module.exports = {
  /**
   * @since 0.0.1
   * @param {any} names npm scripts to run
   * @return {CLI} @chainable
   */
  npm(names = null) {
    const scripts = this.scriptChain().debug(false)

    toarr(names).forEach(name => scripts.add().npm(name))
    scripts.run()

    return this
  },
}
