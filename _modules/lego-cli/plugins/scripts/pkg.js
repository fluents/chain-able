module.exports = {
  /**
   * @since 0.0.1
   * @desc requires pkgjson using this.dir
   * @return {AppCLI} @chainable
   */
  setup() {
    const pkgPath = resolve(this.dir, './package.json')

    log.green('pkg: ').data({pkgPath, dir: this.dir}).echo(this.get('debug'))

    // eslint-disable-next-line
    this.pkgjson = require(pkgPath)

    return this
  },

  /**
   * @protected
   * @since 0.0.1
   * @see this.setup
   * @desc regenerate interactively
   * @return {AppCLI} @chainable
   */
  getPkg() {
    if (!this.pkgjson) this.setup()

    // defaults
    if (!this.pkgjson) this.pkgjson.folders = {}

    return this.pkgjson
  },
}
