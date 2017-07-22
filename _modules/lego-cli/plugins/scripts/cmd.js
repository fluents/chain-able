module.exports = {
  /**
   * @since 0.0.1
   * @param  {ChainedMap | *} parent
   */
  constructor(parent) {
    super(parent)

    this.scriptChain = () => new Script()
  },
}
