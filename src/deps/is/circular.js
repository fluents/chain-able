const isObj = require('./obj')

/**
 * safari, ff, chrome/opera
 * @type {Array<string>}
 */
const errorKeywords = ['circular', 'cyclic']

/**
 * @desc check if a value is circular
 *
 * @memberOf is
 * @since 5.0.0-beta.4
 * @symb 🔘
 *
 * @param {Object | *} obj object to check if is circular
 * @return {boolean} isCircular / hasCircular
 *
 * @TODO find the circular property...
 * @NOTE is slow try catch json
 * @NOTE if (isFunction(obj)) { throw new Error('cannot determine if function is circular')}
 *
 * @example
 *
 *   const a = {};
 *   a.b = a;
 *   isCircular(a) //=> true
 *
 *   const a = {};
 *   a.b = {
 *     c: a
 *   }
 *   isCircular(a) //=> true
 *
 *   const a = {};
 *   a.b = {
 *     c: 4
 *   }
 *   isCircular(a) //=> false
 *
 *   const a = [];
 *   a.push(a);
 *   isCircular(a) //=> true
 *
 *   isCircular({}) //=> false
 *   isCircular('hi') //=> false
 *   isCircular(undefined) //=> false
 *
 */
module.exports = function isCircular(obj) {
  if (!isObj(obj)) return false

  try {
    JSON.stringify(obj)
  }
  catch (err) {
    let index = errorKeywords.length
    while (index--) {
      if (err.message.includes(errorKeywords[index])) {
        return true
      }
    }

    // @NOTE should not do this
    throw err
  }

  return false
}
