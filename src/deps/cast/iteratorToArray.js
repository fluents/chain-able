const preAllocate = require('../array/preAllocate')

/**
 * @desc convert an iterator into an array using
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name iteratorToArray
 * @alias arrayFromIterator
 *
 * @param  {Iterator} iter iterator
 * @return {Array<*>} iterator values
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators mozilla-iterators-and-generators}
 * @see {@link mozilla-iterators-and-generators}
 * @see symbols/iterator
 * @see array/preAllocate
 *
 * @example
 *
 *    const map = new Map(Object.entries({eh: true}))
 *
 *    iteratorToArray(map.keys())
 *    //=> ['eh']
 *
 *    iteratorToArray(new Set([0, 1]).keys())
 *    //=> [0, 1]
 *
 */
module.exports = function iteratorToArray(iter) {
  const list = preAllocate(iter)
  let next
  let index = 0

  while (!(next = iter.next()).done && index++) {
    list[index] = next.value
  }

  return list
}
