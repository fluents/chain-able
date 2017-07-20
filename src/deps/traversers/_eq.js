// conditionals
/* eslint complexity: "OFF" */

// const traverse = require('../traverse')
const get = require('../dot/get')
const isObjNotNull = require('../is/objNotNull')
const isNull = require('../is/null')
const isEmpty = require('../is/empty')
const ENV_DEBUG = require('../env/debug')
const eqValue = require('./eqValue')

/* prettier-ignore */
/**
 * @name eq
 * @since 3.0.0
 * @version 5.0.0
 * @memberOf Traverse
 *
 * @see https://github.com/facebook/immutable-js/blob/master/src/utils/deepEqual.js
 * @see https://github.com/substack/node-deep-equal
 * @see http://ramdajs.com/docs/#equals
 * @see https://lodash.com/docs/4.17.4#isEqual
 * @see https://github.com/angular/angular.js/blob/master/src/Angular.js
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
module.exports = traverse => function eq(a, b, loose, stackA = [], stackB = []) {
  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('\n')
  }

  let equal = true
  let node = b
  let nodes = [node]

  const instance = traverse(a)

  const notEqual = () => {
    equal = false
    instance.stop()
  }

  /* istanbul ignore next: dev */
  if (ENV_DEBUG) {
    console.log('eq?')
  }

  instance.forEach(function(key, y, traverser) {
    // @NOTE do base comparisons on values that are not actually iteratable
    // aka, .isRoot
    if (isNull(key)) {
      // always-valid state opionion vs always-invalid
      // so it only returns false when it is !== fosho
      if (eqValue(node, y, loose) === false) return notEqual()
      else return
    }

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log('eq: iterating:')
    }

    // could use it as a fallback if undefined && y !== undefined
    // const xyz = get(b, traverser.path.join('.'), b)

    let x = node

    // isNotLeafAndIsObj
    if (isObjNotNull(node) && !isEmpty(node)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('is leaf, is not empty node, going deeper')
      }

      // so x is our current one,
      // if node is not empty, use the key, push the value
      // and when it is empty, and it is not a leaf but has nodes, pop back up
      x = node[key]
      nodes.push(x)
    }

    // ENV_DEBUG
    // console.log({[key]: {x, xyz, y, nodes, path: traverser.path.join('.')}})

    // for next loop!!!
    if (!this.isLeaf && !isEmpty(nodes)) {
      /* istanbul ignore next: dev */
      if (ENV_DEBUG) {
        console.log('is not leaf, has nodes stack, pop')
      }
      node = nodes.pop()
    }

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
  })

  // cleanup
  nodes = undefined
  node = undefined

  return equal
}
