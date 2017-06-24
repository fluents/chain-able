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

/**
 * @since 1.0.0
 * @type {Set}
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
   * @since 1.0.0
   * @alias call
   * @desc runs traverser, checks the tests, calls the onMatch
   *       @modifies this.cleaned
   * @param  {boolean} [shouldReturn=false] returns object
   * @return {any} this.obj/data cleaned
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

    this.set('traversed', result)
    return isTrue(shouldReturn) ? result : this
  }

  /**
   * @since 1.0.0
   * @see this.traverse
   * @return {Object | Array | any}
   */
  traversed() {
    return this.get('traversed')
  }
}
