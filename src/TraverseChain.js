const ChainedMapBase = require('./ChainedMapBase')
const traverse = require('./deps/traverse')
const isTrue = require('./deps/is/true')
const matchFactory = require('./deps/matcher/any-key-val')
const ENV_DEBUG = require('./deps/env/debug')

const TRAVERSED_KEY = 1
const EXTENSION_KEYS = ['obj', 'keys', 'vals', 'onNonMatch', 'onMatch', 'clone']

/**
 * @since 1.0.0
 * @type {Map}
 * @extends {ChainedMapBase}
 *
 * @memberOf Chainable
 * @memberOf Traverse
 * @see deps/traverse
 * @category traverse
 * @types TraverseChain
 * @tests TraverseChain
 * @symb 👣
 *
 * @prop {Object} obj
 * @prop {Array<Matcher>} [keys]
 * @prop {Array<Matcher>} [vals]
 * @prop {Function} [onMatch]
 * @prop {Function} [onNonMatch]
 * @prop {boolean} [clone]
 */
module.exports = class Traverser extends ChainedMapBase {
  /**
   * @inheritdoc
   * @modifies this.call
   *
   * @example
   *
   *    new Traverser({})
   *
   */
  constructor(parent) {
    super(parent)
    this.call = this.traverse.bind(this)

    /* prettier-ignore */
    this
      .extend(EXTENSION_KEYS)
      .keys([])
      .vals([])
      // key,
      .onMatch((arg, traverser) => {
        // no return needed
        traverser.remove()
      })
  }

  /**
   * @desc runs traverser, checks the tests, calls the onMatch
   *       @modifies this.cleaned
   *
   * @memberOf TraverseChain
   * @alias call
   * @since 1.0.0
   *
   * @param  {boolean} [shouldReturn=false] returns traversed object
   * @return {any} this.obj/data cleaned
   *
   * @example
   *
   *   const traversed = new Chain()
   *     .merge({flat: 0, one: {two: true}})
   *     .traverse(false)
   *     .vals([/true/])
   *     .onMatch((current, traverser) => {
   *       traverser.path.join('.')
   *       //=> 'one.two'
   *
   *       current
   *       //=> true
   *
   *       typeof traverser.update === typeof traverser.remove
   *       typeof traverser.update === 'function'
   *       //=> true
   *
   *       traverser.remove()
   *       //=> void
   *     })
   *     .onNonMatch(val => {
   *       // ignore
   *     })
   *     .call(true)
   *
   *   traversed
   *   //=> {flat: 0}
   *
   */
  traverse(shouldReturn) {
    const {obj, keys, vals, onMatch, onNonMatch, clone} = this.entries()
    let result = clone ? traverse(obj).clone() : obj

    // diff between keys and val is order of arg in ^ tester
    const matcher = matchFactory(keys, vals)

    /* istanbul ignore next: debug */
    if (ENV_DEBUG) {
      console.log('matcher for traverse...', keys, vals)
    }

    // bound to the traverser
    traverse(result).forEach(function(key, x, traverser) {
      if (traverser.isRoot) {
        // nothing
      }
      else if (matcher(key, x)) {
        /* istanbul ignore next: debug */
        if (ENV_DEBUG) {
          console.log('------- match ------- ', key, x)
        }

        onMatch(x, traverser)
      }
      else if (onNonMatch) {
        /* istanbul ignore next: debug */
        if (ENV_DEBUG) {
          console.log('------- NONmatch ------- ', key, x)
        }

        onNonMatch(x, traverser)
      }
    })

    this.set(TRAVERSED_KEY, result)
    return isTrue(shouldReturn) ? result : this
  }

  /**
   * @ignore
   * @version 5.0.0-beta.5 @depreciated
   * value traversed in traverse
   * @since 1.0.0
   * @see TraverseChain.traverse
   * @return {Object | Array | any} traversed
   *
   * @example
   *
   *   const traverser = new Traverser()
   *   traverser.obj(['duck', 'duck', 'goose'])
   *   traverser.vals(['g**se'])
   *   traverser.traverse()
   *
   *   traverser.traversed()
   *   //=> ['goose']
   *
   * @example
   *
   *    const eh = {
   *      me: true,
   *      nested: {
   *        really: {
   *          deep: {
   *            super: false,
   *            not: 'eh',
   *            canada: true,
   *            modules: [{parser: 'hi'}],
   *          },
   *          matchme: 'minime',
   *          notme: 'eh',
   *        },
   *      },
   *    }
   *
   *    const chain = new Chain()
   *    Object.assign(chain, eh)
   *
   *    const traverser = chain
   *      .merge(eh)
   *      .traverse(true)
   *      .keys([/super/, /parser/, /store/, /meta/])
   *      .vals([/minime/])
   *      .call(false)
   *
   *    traverser.traversed()
   *    //=> {
   *      className: 'DotProp',
   *      me: true,
   *      nested: {
   *        really: {
   *          deep: {
   *            not: 'eh',
   *            canada: true,
   *            modules: [{}],
   *          },
   *          notme: 'eh',
   *        },
   *      },
   *    }
   *
   */
  // traversed() {
  //   return this.get(TRAVERSED_KEY)
  // }
}
