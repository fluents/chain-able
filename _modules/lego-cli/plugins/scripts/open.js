module.exports = {
  // https://github.com/sindresorhus/open-editor
  openFile(files, editor = 'atom') {
    require('open-editor')(files)
  },
}
