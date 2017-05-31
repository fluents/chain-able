let _debug = true

// @TODO convert forEach for faster loops
// import deepmerge from 'deepmerge'
function isMergeableObj(val) {
  var strType = Object.prototype.toString.call(val)

  return (
    // not null object
    val !== null &&
    typeof val === 'object' &&
    // object toString is not a date or regex
    strType !== '[object RegExp]' &&
    strType !== '[object Date]'
  )
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {}
}

function cloneIfNeeded(value, optsArg) {
  var clone = optsArg && optsArg.clone === true
  return clone && isMergeableObj(value)
    ? deepmerge(emptyTarget(value), value, optsArg)
    : value
}

function defaultArrayMerge(target, source, optsArg) {
  var destination = target.slice()
  source.forEach((e, i) => {
    if (typeof destination[i] === 'undefined') {
      destination[i] = cloneIfNeeded(e, optsArg)
    }
    else if (isMergeableObj(e)) {
      destination[i] = deepmerge(target[i], e, optsArg)
    }
    else if (target.indexOf(e) === -1) {
      destination.push(cloneIfNeeded(e, optsArg))
    }
  })
  return destination
}

function mergeObj(target, source, optsArg) {
  var destination = {}
  if (isMergeableObj(target)) {
    Object.keys(target).forEach(key => {
      destination[key] = cloneIfNeeded(target[key], optsArg)
    })
  }
  Object.keys(source).forEach(key => {
    if (!isMergeableObj(source[key]) || !target[key]) {
      destination[key] = cloneIfNeeded(source[key], optsArg)
    }
    else {
      destination[key] = deepmerge(target[key], source[key], optsArg)
    }
  })
  return destination
}

function deepmerge(target, source, optsArg) {
  var options = optsArg || {arrayMerge: defaultArrayMerge}
  var arrayMerge = options.arrayMerge || defaultArrayMerge

  if (Array.isArray(source)) {
    return Array.isArray(target)
      ? arrayMerge(target, source, optsArg)
      : cloneIfNeeded(source, optsArg)
  }
  else {
    return mergeObj(target, source, optsArg)
  }
}

// unused
// deepmerge.all = function deepmergeAll(array, optsArg) {
//   if (!Array.isArray(array) || array.length < 2) {
//     throw new Error(
//       'first argument should be an array with at least two elements'
//     )
//   }
//
//   // we are sure there are at least 2 values, so it is safe to have no initial value
//   return array.reduce((prev, next) => {
//     return deepmerge(prev, next, optsArg)
//   })
// }

// @TODO options for merging arr, and on any type combo
// const todoOpts = {
//   // when: { left(cb), right(cb) }
//   // whenLeft(cb): {}
//   objToArr: false, // not implemented
//   stringConcat: false, // not implemented
//   numberOperation: "+ * ^ toarr cb",
//   promises... wait until finished then call merge???
//   boolPrefer: 0, 1, true, false
// }

function eqq(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1]
}

function eqCurry(types) {
  return eqq.bind(null, types)
}

function getDefaults() {
  return {
    stringToArray: true,
    boolToArray: false,
    boolAsRight: true,
    ignoreTypes: ['null', 'undefined', 'NaN'],
    debug: true,
  }
}

// require('fliplog').fmtobj({types, options, obj1, obj2}).echo(false)
// require('fliplog')
//   .data({
//     boolbool: eq(['boolean', 'boolean']),
//     strstr: eq(['string', 'string']),
//     arrstr: eq(['array', 'string']),
//     strarr: eq(['string', 'array']),
//   })
//   .echo()

function getOpts(opts) {
  const defaults = getDefaults()
  const options = Object.assign(defaults, opts)
  return options
}

// eslint-disable-next-line complexity
function dopemerge(obj1, obj2, opts = {}) {
  // if they are identical, fastest === check
  if (obj1 === obj2) return obj1

  // setup options
  const {ignoreTypes, stringToArray, boolToArray} = getOpts(opts)

  // setup vars
  let type1 = typeof obj1
  let type2 = typeof obj2
  if (Array.isArray(obj1)) type1 = 'array'
  if (Array.isArray(obj2)) type2 = 'array'
  const types = [type1, type2]

  // check one then check the other
  // @TODO might want to push undefined null nan into array but...
  if (ignoreTypes.includes(type1) === true) return obj2
  if (ignoreTypes.includes(type2) === true) return obj1

  const eq = eqCurry(types)

  // check types to prefer
  switch (true) {
    case eq(['boolean', 'boolean']): {
      return boolToArray ? [obj1, obj2] : obj2
    }
    case eq(['string', 'string']): {
      return stringToArray ? [obj1, obj2] : obj1 + obj2
    }
    case eq(['array', 'string']): {
      return obj1.concat([obj2])
    }
    case eq(['string', 'array']): {
      return obj2.concat([obj1])
    }
    default: {
      return deepmerge(obj1, obj2)
    }
  }
}

module.exports = dopemerge
