const funcToString = require('../native/functionToString')
const hasOwnProperty = require('../native/hasOwnProperty')

module.exports = RegExp(
  '^' +
    funcToString
      // Take an example native function source for comparison
      .call(hasOwnProperty)
      // Strip regex characters so we can use it for regex
      .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
      // Remove hasOwnProperty from the template to make it generic
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?'
      ) +
    '$'
)
