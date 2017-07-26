// https://github.com/jashkenas/underscore/blob/master/underscore.js#L410
// https://github.com/lodash/lodash/blob/4.7.0-npm-packages/lodash.sortby/index.js#L2079
const isArrayLike = require('../../is/array')
const isUndefined = require('../../is/undefined')
const ObjectKeys = require('../../util/keys')

// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only argCount argument.

// var builtinIteratee = function(value, context) {
//   return cb(value, context, Infinity)
// }
// var iteratee = builtinIteratee

// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `identity`,
// an arbitrary callback, a property matcher, or a property accessor.
// var cb = function(value, context, argCount) {
//   if (iteratee !== builtinIteratee) return iteratee(value, context)
//   // if (value == null) return _.identity
//   // if (_.isFunction(value)) return optimizeCb(value, context, argCount)
//   // if (_.isObject(value) && !_.isArray(value)) return _.matcher(value)
//   // return _.property(value)
// }

// _.map = _.collect
// Return the results of applying the iteratee to each element.
const map = function(obj, iteratee, context) {
  // iteratee = cb(iteratee, context)

  const keys = !isArrayLike(obj) && ObjectKeys(obj)
  const length = (keys || obj).length
  const results = Array(length)

  for (var index = 0; index < length; index++) {
    var currentKey = keys ? keys[index] : index
    results[index] = iteratee(obj[currentKey], currentKey, obj)
  }
  return results
}

const sortBy = function(obj, iteratee, context) {
  var index = 0

  const mapper = function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee(value, key, list),
    }
  }
  const sorter = function(left, right) {
    var a = left.criteria
    var b = right.criteria
    if (a !== b) {
      if (a > b || isUndefined(a)) return 1
      if (a < b || isUndefined(b)) return -1
    }
    return left.index - right.index
  }

  // iteratee = cb(iteratee, context)
  // _.pluck(returned, 'value')
  return map(obj, mapper).sort(sorter)
}
