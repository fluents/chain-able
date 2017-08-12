module.exports = {
  /* prettier-ignore */
  copy(root = false) {
    const script = this.deps().script

    // @TODO: dist & root (does it ever need to be in dist except for buble?)
    const scripts = script()
      .add()
      .bin('flow-remove-types')
      .raw('src/')
      .flag('pretty')
      .flag('quiet')
      .flag('all')
      .flag('out-dir')
      .arg('./dist')

    if (root) {
      scripts
        .add()
        .bin('flow-remove-types')
        .raw('src/'
        .flag('pretty')
        .flag('quiet')
        .flag('all')
        .flag('out-dir')
        .arg('./')
    }

    scripts.remember = {
      start() {},
      finish() {},
    }

    scripts.toString()
  }
}
