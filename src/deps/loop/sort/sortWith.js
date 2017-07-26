const curry = require('../../fp/curry')
const slice = require('../../native/arraySlice')

/**
 * Sorts a list according to a list of comparators.
 *
 * @since 5.0.0-beta.5
 * @memberOf sort
 *
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 *
 * @func
 * @fork v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 *
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = curry(2, function sortWith(fns, list) {
  return slice.call(list, 0).sort(function(a, b) {
    var result = 0
    var i = 0
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b)
      i += 1
    }
    return result
  })
})
