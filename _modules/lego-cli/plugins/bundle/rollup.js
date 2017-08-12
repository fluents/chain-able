module.exports = {
  name: 'rollup',

  rollup(flags = '', ROLLUP_CONFIG_CLI) {
    if (Array.isArray(flags)) return flags.map(flag => this.rollup(flag))
    const config = ROLLUP_CONFIG_CLI
    const {script} = this.dep()

    return script('rollup', '-c ' + require.resolve(config) + ' ' + flags)
  },
  rollupNode(buildFile = './build', overrides = {}) {
    return require(buildFile)(overrides)
  },
}
