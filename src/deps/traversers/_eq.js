// conditionals
/* eslint complexity: "OFF" */

// not iterating on empty root
/* eslint consistent-return: "OFF" */

// const traverse = require('../traverse')
// const get = require('../dot/get')
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
 * {@link http://dorey.github.io/JavaScript-Equality-Table/ js-equality-table}
 * {@link https://github.com/facebook/react/blob/master/src/__mocks__/deepDiffer.js react-deep-differ}
 * {@link https://github.com/substack/js-traverse/blob/master/test/lib/deep_equal.js traverse-deep-equal}
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L1183 underscore-equal}
 * {@link https://github.com/angular/angular.js/blob/master/src/Angular.js angular-is-equal}
 * {@link https://lodash.com/docs/4.17.4#isEqual lodash-is-equal}
 * {@link http://ramdajs.com/docs/#equals ramda-equals}
 * {@link https://github.com/substack/node-deep-equal node-deep-equal}
 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/deepEqual.js immutable-js-deep-equal}
 * @see {@link js-equality-table}
 * @see {@link immutable-js-deep-equal}
 * @see {@link node-deep-equal}
 * @see {@link ramda-equals}
 * @see {@link lodash-is-equal}
 * @see {@link angular-is-equal}
 * @see {@link underscore-equal}
 * @see {@link traverse-deep-equal}
 * @see {@link react-deep-differ}
 *
 * @param {Traverse} traverse traversejs (scoped, @FIXME @HACK)
 * @param  {*} a compare to b
 * @param  {*} b compare to a
 * @param  {boolean} [loose] compare loosely
 * @return {boolean} isEqual: a === b
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
module.exports = traverse => function eq(a, b, loose) {
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
    if (!traverser.isLeaf && !isEmpty(nodes)) {
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
