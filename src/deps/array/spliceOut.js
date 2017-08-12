const preAllocate = require('./preAllocate')

/**
 * @name spliceIn
 * @since 5.0.0 beta.6
 * @memberOf array
 *
 * @param {Array} array array to splice
 * @param {number} idx index to splice at
 * @param {boolean} [canEdit=false] should mutate
 * @return {Array}
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Map.js#L930 immutable-js-splice-in}
 * @see {@link immutable-js-splice-in}
 *
 * @example
 *
 *    spliceIn(['zero', 'one'], 1)
 *    //=> ['zero']
 *
 *    spliceIn(['zero', 'one'], 0)
 *    //=> ['one']
 *
 *    spliceIn(['zero', 'one'], 0, true)
 *    //=> ['one']
 *
 */
module.exports = function spliceOut(array, idx, canEdit) {
  const newLen = array.length - 1

  // @TODO why no `shift` ?
  if (canEdit && idx === newLen) {
    array.pop()
    return array
  }

  const newArray = preAllocate(newLen)

  let after = 0
  for (let ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1
    }
    newArray[ii] = array[ii + after]
  }

  return newArray
}
