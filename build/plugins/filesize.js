const filesize = require('rollup-plugin-filesize')
const log = require('fliplog')

module.exports = () =>
  filesize({
    render(options, size, gzip, rollup) {
      const {text, datas} = log
        .bold(rollup.format + ' ')
        .fmtobj({size, gzip})
        .return()
      return text + datas
    },
  })
