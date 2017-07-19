const log = require('fliplog')

function commentsPlugin(options = {}) {
  return {
    name: 'comments',
    transform(code, id) {
      if (id.includes('index.js')) return null
      const parts = id.split('chain-able/')
      if (parts.length <= 1) return null


      const filename = parts.pop() || 'missing-filename'
      const filenameComment = '/* ___filename___: ' + filename + ' */\n'
      if (code.includes(filenameComment)) return null
      console.log({filename})

      return filenameComment + code
    },
  }
}

module.exports = options => commentsPlugin(options)
