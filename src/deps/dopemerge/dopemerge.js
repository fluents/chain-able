const isObjStrict = require('../is/objStrict')
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

// 1: not null object
// 2: object toString is not a date or regex
function isMergeableObj(val) {
  return isObjStrict(val) && !isRegExp(val) && !isDate(val)
}
function emptyTarget(val) {
  return isArray(val) ? [] : {}
}
function cloneIfNeeded(value, optsArg) {
  return isTrue(optsArg.clone) && isMergeableObj(value)
    ? deepmerge(emptyTarget(value), value, optsArg)
    : value
}

/* prettier-ignore */
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
// eslint-disable-next-line complexity
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

  // @NOTE uglifier optimizes into a wicked ternary
  else if (isBoolean(obj1) && isBoolean(obj2)) {
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
