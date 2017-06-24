const isPureObj = require('./is/pureObj')
const isArray = require('./is/array')
const toS = require('./is/toS')
const isNull = require('./is/null')
const isTrue = require('./is/true')
const ObjectKeys = require('./util/keys')
const ObjectAssign = require('./util/assign')
const isUndefined = require('./is/undefined')

// const isRegExp = require('./is/regexp')
// const isDate = require('./is/date')

/**
 * @desc when Array -> 'array'
 *       when null -> 'null'
 *       else `typeof x`
 * @param  {any} x
 * @return {string} type
 */
/* prettier-ignore */
const ezType = x => {
  return isArray(x)
    ? 'array'
    : isNull(x)
      ? 'null'
      : typeof x
}

// @TODO convert forEach for faster loops
function isMergeableObj(val) {
  return (
    // not null object
    isPureObj(val) &&
    // object toString is not a date or regex
    !['[object RegExp]', '[object Date]'].includes(toS(val))
  )
}

function emptyTarget(val) {
  return isArray(val) ? [] : {}
}
function cloneIfNeeded(value, optsArg) {
  return isTrue(optsArg.clone) && isMergeableObj(value)
    ? deepmerge(emptyTarget(value), value, optsArg)
    : value
}

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
    else if (target.indexOf(v) === -1) {
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

// unused
// @TODO options for merging arr, and on any type combo
// const todoOpts = {
//   // when: { left(cb), right(cb) }
//   // whenLeft(cb): {}
//   objToArr: false, // not implemented
//   stringConcat: false, // not implemented
//   numberOperation: "+ * ^ toarr cb",
//   promises... wait until finished then call merge???
//   boolPrefer: 0, 1, true, false
// boolAsRight: true,
//
// }

function eqq(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1]
}

function eqCurry(types) {
  return eqq.bind(null, types)
}

function getDefaults() {
  return {
    arrayMerge: defaultArrayMerge,
    stringToArray: true,
    boolToArray: false,
    ignoreTypes: ['null', 'undefined'],
    // debug: true,
  }
}

// eslint-disable-next-line complexity
function dopemerge(obj1, obj2, opts) {
  // if they are identical, fastest === check
  if (obj1 === obj2) return obj1

  // setup options
  const options = ObjectAssign(getDefaults(), opts || {})
  const {ignoreTypes, stringToArray, boolToArray, clone} = options

  const types = [ezType(obj1), ezType(obj2)]

  // check one then check the other
  // @TODO might want to push undefined null nan into array but...
  if (isTrue(ignoreTypes.includes(types[0]))) return obj2
  if (isTrue(ignoreTypes.includes(types[1]))) return obj1

  const eq = eqCurry(types)

  // uglifier optimizes into a wicked ternary
  if (eq(['boolean', 'boolean'])) {
    return boolToArray ? [obj1, obj2] : obj2
  }
  else if (eq(['string', 'string'])) {
    return stringToArray ? [obj1, obj2] : obj1 + obj2
  }
  else if (eq(['array', 'string'])) {
    return (clone ? obj1.slice(0) : obj1).concat([obj2])
  }
  else if (eq(['string', 'array'])) {
    return (clone ? obj2.slice(0) : obj2).concat([obj1])
  }
  else {
    return deepmerge(obj1, obj2, options)
  }
}

module.exports = dopemerge
