const ChainedMapBase = require('./ChainedMapBase')
const traverse = require('./deps/traverse')
const tester = require('./deps/to-test')
const isTrue = require('./deps/is/true')

// @TODO: should use matcher,
// @TODO: should inprove the callback data...
const matchFactory = (keys, vals) => (prop, val) => {
  for (let i = 0; i < keys.length; i++) {
    if (tester(keys[i], prop, val)) return true
  }
  for (let i = 0; i < vals.length; i++) {
    if (tester(vals[i], val, prop)) return true
  }
  return false
}

const TRAVERSED_KEY = 1

/**
 * @since 1.0.0
 * @type {Map}
 * @extends {ChainedMapBase}
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
   */
  constructor(parent) {
    super(parent)
    this.call = this.traverse.bind(this)

    /* prettier-ignore */
    this
      .set('keys', [])
      .set('vals', [])
      .set('onMatch', (arg, traverser) => traverser.remove())
      .extend(['obj', 'keys', 'vals', 'onNonMatch', 'onMatch', 'clone'])
  }

  /**
   * @desc runs traverser, checks the tests, calls the onMatch
   *       @modifies this.cleaned
   *
   * @alias call
   * @since 1.0.0
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
   */
  traverse(shouldReturn) {
    const {obj, keys, vals, onMatch, onNonMatch, clone} = this.entries()
    let result = clone ? traverse(obj).clone() : obj

    // diff between keys and val is order of arg in ^ tester
    const matcher = matchFactory(keys, vals)

    // bound to the traverser
    traverse(obj).forEach(function(x) {
      if (matcher(this.key, x)) {
        onMatch(x, this)
      }
      else if (onNonMatch) {
        onNonMatch(x, this)
      }
    })

    this.set(TRAVERSED_KEY, result)
    return isTrue(shouldReturn) ? result : this
  }

  /**
   * @since 1.0.0
   * @see this.traverse
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
   *   // => ['goose']
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
   *    // => {
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
  traversed() {
    return this.get(TRAVERSED_KEY)
  }
}
