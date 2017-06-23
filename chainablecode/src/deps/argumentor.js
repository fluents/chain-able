'use strict'

module.exports = function() {
  const len = arguments.length
  const args = new Array(len)
  for (let i = 0; i < len; ++i)
    args[i] = arguments[i]
  return args
}

// module.exports = argumentor

// @EXAMPLE
// function eh() {
//   // const args = argumentor(1).apply(null, arguments)
//   const args = argumentor.apply(null, arguments).slice(1)
//   console.log(args)
// }
//
// eh(1, 10, 100)
