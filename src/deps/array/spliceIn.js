const preAllocate = require('./preAllocate')

/**
 * @name spliceIn
 * @since 5.0.0 beta.6
 * @memberOf array
 *
 * @param {Array} array array to splice
 * @param {number} idx index to splice at
 * @param {*} val value to replace at index
 * @param {boolean} [canEdit=false] should mutate
 * @return {Array}
 *
 * {@link https://github.com/facebook/immutable-js/blob/master/src/Map.js#L930 immutable-js-splice-in}
 * @see {@link immutable-js-splice-in}
 * @see array/insertAtIndex
 *
 * @example
 *
 *    spliceIn(['zero', 'one'], 1, 'wan')
 *    //=> ['zero', 'wan']
 *
 *    spliceIn(['zero', 'one'], 0, 'wan')
 *    //=> ['wan', 'one']
 *
 *    spliceIn(['zero', 'one'], 0, 'wan', true)
 *    //=> ['wan', 'one']
 *
 */
module.exports = function spliceIn(array, idx, val, canEdit) {
  const newLen = array.length + 1

  if (canEdit && idx + 1 === newLen) {
    array[idx] = val
    return array
  }

  const newArray = preAllocate(newLen)
  let after = 0

  for (let ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val
      after = -1
    }
    else {
      newArray[ii] = array[ii + after]
    }
  }

  return newArray
}
