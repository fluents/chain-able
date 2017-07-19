// conditionals
/* eslint complexity: "OFF" */

// const traverse = require('../traverse')
const get = require('../dot/get')
const isObjNotNull = require('../is/objNotNull')
const ENV_DEBUG = require('../env/debug')
const eqValue = require('./eqValue')

/* prettier-ignore */
/**
 * @name eq
 * @since 3.0.0
 * @version 5.0.0
 * @memberOf Traverse
 *
 * @param {Traverse} traverse traversejs
 * @param  {*} a compare to b
 * @param  {*} b compare to a
 * @param  {boolean} [loose] compare loosely
 * @param  {boolean} [scoped] doing a second pass, private
 * @return {boolean} isEqual
 *
 * @extends eqValue
 *
 * @example
 *
 *    eq(1, 1)            //=> true
 *    eq(1, '1')          //=> false
 *    eq(1, '1', true)    //=> true
 *    eq([1], [1])        //=> true
 *
 */
module.exports = traverse => function eq(a, b, loose, scoped) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('\n')
  }

  let equal = true
  let node = b

  // @TODO can be helpful? for left to right in 1 traverse for faster eq?
  // let _node = b

  const instance = traverse(a)
  const notEqual = () => {
    // throw new Error()
    equal = false
    instance.stop()
  }

  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eq?')
  }

  instance.forEach(function(key, y, traverser) {
    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('eq: iterating:')
    }

    // BREAKS ANY BUT OBJ
    // if (!isObjLoose(node)) {
    //   node = _node
    //   return notEqual()
    // }
    // else {
    //   _node = node
    // }

    if (isObjNotNull(node))  {
      // _node = node
      node = node[traverser.key]
    }

    // node = node ? node[traverser.key] : node

    // @TODO !!!!!!!!!!!!!!!!!!!! PERF HIT HERE --- NEEDS STACK INSTEAD !!!!!!!!!!!!!!!
    let x = node
    x = get(b, traverser.path.join('.'), b)

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({key, y, x, a, b})
    }

    const eqv = eqValue(x, y, loose)

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({eqv})
    }

    if (eqv === false) {
      // equal
      notEqual()
    }
    // }
  })

  if (equal === false && scoped === false) return eq(b, a, loose, true)
  else return equal
}
