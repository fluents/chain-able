const preAllocate = require('../array/preAllocate')
const hasOwnProperty = require('./hasOwnProperty')

/**
 * @name keysIn
 * @version 1.0.0 uncommented, used preAllocate
 * @version 0.0.1 just comment
 * @since 5.0.0
 *
 * @param  {Object|Array} obj object to call `for in` on
 * @return {Array} keys from obj
 *
 * {@link https://github.com/ramda/ramda/blob/master/src/keysIn.js ramda-keys-in}
 * @see {@link ramda-keys-in}
 * @see array/preAllocate
 * @see util/hasOwnProperty
 *
 * @example
 *
 *    keysIn([1, 2])           //=> [0, 1]
 *    keysIn({one: 1, two: 2}) //=> ['one', 'two']
 *
 */
module.exports = function keysIn(obj) {
  const result = preAllocate(obj)
  let index = 0

  // eslint-disable-next-line
  // for (const key in obj) hasOwnProperty(obj, key) && (result[index++] = key)

  for (const key in obj) {
    if (hasOwnProperty(obj, key)) {
      result[index++] = key
    }
  }

  return result
}
