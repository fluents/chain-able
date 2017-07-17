/* eslint complexity: "OFF" */
const isObjNotNull = require('../is/objNotNull')
const isArray = require('../is/array')
const isTrue = require('../is/true')
const ObjectKeys = require('../util/keys')
const ObjectAssign = require('../util/assign')
const isUndefined = require('../is/undefined')
const isRegExp = require('../is/regexp')
const isDate = require('../is/date')
const isBoolean = require('../is/boolean')
const isString = require('../is/string')
const simpleKindOf = require('../util/simpleKindOf')
const includes = require('../conditional/includes')
const emptyTarget = require('./emptyTarget')

/**
 * @desc 1: not null object
 *       2: object toString is not a date or regex
 *
 * @category merge
 * @memberOf dopemerge
 *
 * @since 2.0.0
 * @param {*} x value to check
 * @return {boolean}
 *
 * @example
 *
 *    isMergeableObj({})
 *    //=> true
 *
 *    isMergeableObj(Object.create(null))
 *    // => true
 *
 *    isMergeableObj(new Date())
 *    //=> false
 *
 *    isMergeableObj(/eh/)
 *    //=> false
 *
 */
function isMergeableObj(x) {
  return isObjNotNull(x) && !isRegExp(x) && !isDate(x)
}

/**
 * Defaults to `false`.
 * If `clone` is `true` then both `x` and `y` are recursively cloned as part of the merge.
 *
 * @memberOf dopemerge
 * @since 2.0.0
 *
 * @param {*} value value to clone if needed
 * @param {DopeMergeOptions} optsArg dopemerge options, could contain .clone
 * @return {Object | Array | any} cloned or original value
 *
 * @see emptyTarget
 * @see isMergeableObj
 *
 * @example
 *
 * var obj = {eh: true}
 *
 * cloneIfNeeded(obj, {clone: true}) === obj
 * //=> false
 *
 * cloneIfNeeded(obj, {clone: false}) === obj
 * //=> true
 *
 */
function cloneIfNeeded(value, optsArg) {
  return isTrue(optsArg.clone) && isMergeableObj(value)
    ? deepmerge(emptyTarget(value), value, optsArg)
    : value
}

/* prettier-ignore */
/**
 * The merge will also merge arrays and array values by default.
 * However, there are nigh-infinite valid ways to merge arrays,
 * and you may want to supply your own.
 * You can do this by passing an `arrayMerge` function as an option.
 *
 * @memberOf dopemerge
 * @since 2.0.0
 *
 * @param {*} target array merged onto, could be emptyTarget if cloning
 * @param {*} source original source array
 * @param {*} optsArg dopemerge options
 * @return {Array | *} merged array
 *
 * @example
 *
 *    function concatMerge(destinationArray, sourceArray, options) {
 *      destinationArray
 *      //=> [1, 2, 3]
 *
 *      sourceArray
 *      //=> [3, 2, 1]
 *
 *      options
 *      //=> { arrayMerge: concatMerge }
 *
 *      return destinationArray.concat(sourceArray)
 *    }
 *    merge([1, 2, 3], [3, 2, 1], { arrayMerge: concatMerge })
 *    //=> [1, 2, 3, 3, 2, 1]
 *
 */
function defaultArrayMerge(target, source, optsArg) {
  var destination = target.slice()

  for (var i = 0; i < source.length; i++) {
    var v = source[i]
    if (isUndefined(destination[i])) {
      destination[i] = cloneIfNeeded(v, optsArg)
    }
    else if (isMergeableObj(v)) {
      destination[i] = deepmerge(target[i], v, optsArg)
    }
    // @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT
    // === -1
    // eslint-disable-next-line prefer-includes/prefer-includes
    else if (!~target.indexOf(v)) {
      destination.push(cloneIfNeeded(v, optsArg))
    }
  }
  return destination
}

function mergeObj(target, source, optsArg) {
  var destination = {}
  if (isMergeableObj(target)) {
    var targetKeys = ObjectKeys(target)
    for (var k = 0; k < targetKeys.length; k++) {
      destination[targetKeys[k]] = cloneIfNeeded(target[targetKeys[k]], optsArg)
    }
  }
  var sourceKeys = ObjectKeys(source)
  for (var s = 0; s < sourceKeys.length; s++) {
    var key = sourceKeys[s]
    if (!isMergeableObj(source[key]) || !target[key]) {
      destination[key] = cloneIfNeeded(source[key], optsArg)
    }
    else {
      destination[key] = deepmerge(target[key], source[key], optsArg)
    }
  }

  return destination
}

function deepmerge(target, source, optsArg) {
  if (isArray(source)) {
    const {arrayMerge} = optsArg
    return isArray(target)
      ? arrayMerge(target, source, optsArg)
      : cloneIfNeeded(source, optsArg)
  }

  // else
  return mergeObj(target, source, optsArg)
}

/* prettier-ignore */
/**
 *  Merge the enumerable attributes of two objects deeply.
 *  Merge two objects `x` and `y` deeply, returning a new merged object with the
 *  elements from both `x` and `y`.
 *  If an element at the same key is present for both `x` and `y`, the value from
 * `y` will appear in the result.
 *  Merging creates a new object, so that neither `x` or `y` are be modified.
 *  However, child objects on `x` or `y` are copied over -
 *  if you want to copy all values, you must pass `true` to the clone option.
 *
 *
 * @member dopemerge
 * @category merge
 *
 * @param {*} obj1 left
 * @param {*} obj2 right
 * @param {*} opts dopemerge options
 * @return {Object | Array | any} merged
 *
 * {@link https://github.com/KyleAMathews/deepmerge deepmerge}
 * @see {@link deepmerge}
 *
 * @types dopemerge
 * @tests deepmerge
 *
 * @example
 *
 *    var x = {
 *      foo: {bar: 3},
 *      array: [{
 *        does: 'work',
 *        too: [1, 2, 3],
 *      }],
 *    }
 *
 *    var y = {
 *      foo: {baz: 4},
 *      quux: 5,
 *      array: [
 *        {
 *          does: 'work',
 *          too: [4, 5, 6],
 *        },
 *        {
 *          really: 'yes',
 *        },
 *      ],
 *    }
 *
 *    var expected = {
 *      foo: {
 *        bar: 3,
 *        baz: 4,
 *      },
 *      array: [
 *        {
 *          does: 'work',
 *          too: [1, 2, 3, 4, 5, 6],
 *        },
 *        {
 *          really: 'yes',
 *        },
 *      ],
 *      quux: 5,
 *    }
 *
 *    merge(x, y)
 *    //=> expected
 *
 */
function dopemerge(obj1, obj2, opts) {
  // if they are identical, fastest === check
  if (obj1 === obj2) {
    return obj1
  }

  // setup options
  const options = ObjectAssign(
    {
      arrayMerge: defaultArrayMerge,
      stringToArray: true,
      boolToArray: false,
      ignoreTypes: ['null', 'undefined'],
      // debug: true,
    },
    opts || {}
  )
  const {ignoreTypes, stringToArray, boolToArray, clone} = options

  // @NOTE: much better size but oh well
  // const ignoreTypes = ['null', 'undefined']
  // const stringToArray = true
  // const boolToArray = false
  // const clone = true

  // check one then check the other
  if (isTrue(includes(ignoreTypes, simpleKindOf(obj1)))) {
    return obj2
  }
  else if (isTrue(includes(ignoreTypes, simpleKindOf(obj2)))) {
    return obj1
  }
  else if (isBoolean(obj1) && isBoolean(obj2)) {
    // @NOTE uglifier optimizes into a wicked ternary
    return boolToArray ? [obj1, obj2] : obj2
  }
  else if (isString(obj1) && isString(obj2)) {
    return stringToArray ? [obj1, obj2] : obj1 + obj2
  }
  else if (isArray(obj1) && isString(obj2)) {
    return (clone ? obj1.slice(0) : obj1).concat([obj2])
  }
  else if (isString(obj1) && isArray(obj2)) {
    return (clone ? obj2.slice(0) : obj2).concat([obj1])
  }
  else {
    return deepmerge(obj1, obj2, options)
  }
}

module.exports = dopemerge
