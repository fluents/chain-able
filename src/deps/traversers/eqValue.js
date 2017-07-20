// conditionals
/* eslint complexity: "OFF" */

const isObjNotNull = require('../is/objNotNull')
const isNullOrUndefined = require('../is/nullOrUndefined')
const isFunction = require('../is/function')
const isRegExp = require('../is/regexp')
const isError = require('../is/error')
const isTrue = require('../is/true')
const isDate = require('../is/date')
const isArray = require('../is/array')
const isObj = require('../is/obj')
const toS = require('../is/toS')
const hasOwnProperty = require('../util/hasOwnProperty')
const ObjectKeys = require('../util/keys')
const ObjectOrArrayKeys = require('../util/keysObjOrArray')
const ENV_DEBUG = require('../env/debug')

// const ENV_DEBUG = true

const isNotRealOrNotEqToString = (x, y) =>
  !x || !y || x.toString() !== y.toString()

/* prettier-ignore */
/**
 * @desc checks value equality, used by eq which compares all types
 * @since 4.1.0
 * @memberOf Traverse
 * @protected
 *
 * @TODO !!!!!! USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR ==, COMPARATOR, VALUEOF, walk proto (check ownProps...)...
 *
 * @param  {*} x compare to y
 * @param  {*} y compare to x
 * @param  {boolean | number} [loose=false] use == checks when typof !=
 * @return {boolean}
 *
 * @example
 *
 *    eqValue(1, 1)         //=> true
 *    eqValue('1', 1)       //=> false
 *    eqValue('1', 1, true) //=> true
 *    eqValue({}, {})       //=> true
 *
 */
module.exports = function eqValue(x, y, loose) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eqValue', {x, y, loose})
  }

  // if (x === y) {
  //   if (ENV_DEBUG) {
  //     console.log('===', {x, y})
  //   }
  //   // noop
  // }
  // else

  if (isNullOrUndefined(x) || isNullOrUndefined(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('null or undef !=', {x, y})
    }

    if (x !== y) {
      return false
    }
  }
  else if (typeof x !== typeof y) {
    // eslint-disable-next-line
    if (isTrue(loose) && x == y) {
      // ignore
    }
    else {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('typeof !=', {x, y})
      }

      return false
    }
  }
  // @TODO put this up first?
  else if (toS(x) !== toS(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('diff str types', {x: toS(x), y: toS(y)})
    }

    return false
  }
  else if (isObjNotNull(x)) {
    // use .equals if the method exists
    if (hasOwnProperty(x, 'equals')) {
      return x.equals(y)
    }

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isObjNotNull', {x})
    }

    // if (isArray(x)) {
    //   if (x.length !== y.length) {
    //     return false
    //   }
    // }

    // @NOTE .toString will be covered for functions and regexes in objStrict
    if (isRegExp(x) || isRegExp(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('regexp', {x, y})
      }

      if (isNotRealOrNotEqToString(x, y)) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('regexp !=', {x, y})
        }

        return false
      }
    }
    else if (isDate(x) || isDate(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('dates', {x, y})
      }

      if (!isDate(x) || !isDate(y) || x.getTime() !== y.getTime()) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= dates', {x, y})
        }

        return false
      }
    }
    else if (isError(x) || isError(y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('isError', {x, y})
      }

      if (!isError(x) || !isError(y) || x.stack !== y.stack) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= errors', {x, y})
        }

        return false
      }
    }

    // @NOTE this is covered by toString != toString
    // else if (isArray(x) && !isArray(y)) {
    //   /* istanbul ignore next: dev */
    //   if (ENV_DEBUG) {
    //     console.log('isArray(x) || isArray(y)!')
    //   }
    //
    //   return false
    // }
    // else if (!isArray(x) && isArray(y)) {
    //   /* istanbul ignore next: dev */
    //   if (ENV_DEBUG) {
    //     console.log('!isArray(x) && isArray(y):')
    //   }
    //
    //   return false
    // }

    // @TODO considering, we already know it is not null & undefined
    // if (isPrimitive(x) || isPrimitive(y)) {
    //  return x.valueOf() === y.valueOf()
    // }

    else {
      // @TODO ObjectOrArrayKeys, but have to have else where they are both array
      //
      // @NOTE it will traverse through values if they are == here
      const xKeys = ObjectKeys(x)
      const yKeys = ObjectKeys(y).length

      // diff length
      if (xKeys.length !== yKeys) {
        /* istanbul ignore next: dev */
        if (ENV_DEBUG) {
          console.log('!= obj key length', {xKeys, yKeys})
        }

        return false
      }

      for (let k = 0; k < xKeys.length; k++) {
        if (!hasOwnProperty(y, xKeys[k])) {
          /* istanbul ignore next: dev */
          if (ENV_DEBUG) {
            console.log('!= obj property', {y, val: xKeys[k]})
          }

          return false
        }
      }
    }
  }
  else if (toS(x) === toS(y) && x !== y) {
    // isString(x) || isBoolean(x) || isNumber(x) || isIterator(x)
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('same str types - diff values', {s: toS(x), x, y})
    }

    return false
  }
  // // @TODO put this up first?
  // else if (toS(x) !== toS(y)) {
  //   /* istanbul ignore next: dev */
  //   if (ENV_DEBUG) {
  //     console.log('diff str types', {x: toS(x), y: toS(y)})
  //   }
  //
  //   return false
  // }

  // go deeper
  else if (isFunction(x) || isFunction(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isFunction(x) && isFunction(y):')
      console.log(x.toString())
      console.log(y.toString())
    }

    if (isNotRealOrNotEqToString(x, y)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('x.toString() !== y.toString()', x.toString() !== y.toString())
      }
      return false
    }
    else {
      return true
    }
  }
  // @TODO why?
  else if (isObj(x) && isObj(y)) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('isObj(x) && isObj(y):')
    }

    return false
  }
  // else {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eqeqeq:', {[toS(x) + 'X']: x, [toS(y) + 'Y']: y})
  }
  return true
  // }
}
