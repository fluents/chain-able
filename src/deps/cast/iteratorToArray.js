/**
 * @since 5.0.0-beta.6
 * @memberOf cast
 *
 * @name iteratorToArray
 * @alias arrayFromIterator
 *
 * @param  {Iterator} iter iterator
 * @return {Array<*>} iterator values
 */
module.exports = function iteratorToArray(iter) {
  const list = []
  let next

  while (!(next = iter.next()).done) {
    list.push(next.value)
  }

  return list
}
