// Object.getOwnPropertyNames(window).filter(name => /[A-Z]/.test(name.charAt(0))
// Object
//   .getOwnPropertyNames(window)
//   .filter(name => (/[A-Z]/).test(name.charAt(0)))
//   .map(name => {
//     return name + ': ' + Object.prototype.toString.call(window[name])
//   })
//   .filter((value, index, arr) => arr.indexOf(value) === index)

const freeze = require('../util/freeze')

// https://github.com/jonschlinkert/kind-of/blob/master/index.js
const OBJECT_TO_STRING_TAGS = [
  /* 0 */ '[object Undefined]',
  /* 1 */ '[object Null]',
  /* 2 */ '[object Map]',
  /* 2 */ '[object WeakMap]',
  /* 2 */ '[object Map Iterator]',
  /* 2 */ '[object Set]',
  /* 2 */ '[object WeakSet]',
  /* 2 */ '[object Set Iterator]',
  /* 3 */ '[object Arguments]',
  /* 4 */ '[object Boolean]',
  /* 4 */ '[object Number]',
  /* 5 */ '[object String]',
  /* 5 */ '[object Date]',
  /* 5 */ '[object Error]',
  /* 5 */ '[object Function]',
  /* 5 */ '[object Object]',
  /* 5 */ '[object Promise]',

  // less common
  /* 5 */ '[object Symbol]',
  /* 5 */ '[object Array]',
  /* 5 */ '[object AsyncFunction]',
  /* 5 */ '[object GeneratorFunction]',

  // typed arrays
  /* 5 */ '[object Int8Array]',
  /* 5 */ '[object Uint8Array]',
  /* 5 */ '[object Uint8ClampedArray]',
  /* 5 */ '[object Int16Array]',
  /* 5 */ '[object Uint16Array]',
  /* 5 */ '[object Int32Array]',
  /* 5 */ '[object Uint32Array]',
  /* 5 */ '[object Float32Array]',
  /* 5 */ '[object Float64Array]',

  // much less common
  /* 5 */ '[object ArrayBuffer]',
  /* 5 */ '[object DataView]',
  /* 5 */ '[object Buffer]',

  // '[object Reflect]',
  // '[object Proxy]',
  // '[object WebSocket]',
  // '[object WebAssembly]',
  // '[object JSON]',
  // '[object JSON]',
  // '[object Math]',
]

freeze(OBJECT_TO_STRING_TAGS)
