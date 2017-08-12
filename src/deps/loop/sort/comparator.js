/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @since 5.0.0-beta.5
 * @memberOf sort
 *
 * @param {Function} predicate A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 *
 * @func
 * @fork v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 *
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = function comparator(predicate) {
  return function(a, b) {
    return predicate(a, b) ? -1 : predicate(b, a) ? 1 : 0
  }
}
