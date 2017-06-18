const ChainedMap = require('./ChainedMap')
const traverse = require('./deps/traverse')
const tester = require('./deps/to-test')

/**
 * @since 1.0.0
 * @type {Set}
 */
module.exports = class Traverser extends ChainedMap {
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
      .extend(['obj', 'keys', 'vals', 'onNonMatch', 'onMatch'])
  }

  /**
   * @since 1.0.0
   * @alias data
   * @param  {Object | null} [obj=null]
   * @return {Cleaner} @chainable
   */
  // obj(obj = null) {
  //   if (!obj) return this
  //   return this.set('obj', obj)
  // }

  /**
   * @since 1.0.0
   * @desc matches for value
   *       @modifies this.vals
   * @param  {Array<Regexp | Function>} tests
   * @return {Traverser} @chainable
   */
  // keys(tests) {
  //   return this.set('keys', tests)
  // }

  /**
   * @since 1.0.0
   * @desc matches for value
   *       @modifies this.vals
   * @param  {Array<Regexp | Function>} tests
   * @return {Traverser} @chainable
   */
  // vals(tests) {
  //   return this.set('vals', tests)
  // }

  /**
   * @since 1.0.0
   * @desc callback for each match
   *       @modifies this.onMatch
   * @param  {Function} [cb=null] defaults to .remove
   * @return {Matcher} @chainable
   */
  // onMatch(cb) {
  //   return this.set(
  //     'onMatch',
  //     cb ||
  //       ()
  //   )
  // }

  /**
   * @since 1.0.0
   * @desc callback for each match
   *       @modifies this.onMatch
   * @param  {Function} [cb=null] defaults to .remove
   * @return {Matcher} @chainable
   */
  // onNonMatch(cb = null) {
  //   return this.set('onNonMatch', cb)
  // }

  /**
   * @since 1.0.0
   * @alias call
   * @desc runs traverser, checks the tests, calls the onMatch
   *       @modifies this.cleaned
   * @param  {boolean} [shouldReturn=false] returns object
   * @return {any} this.obj/data cleaned
   */
  traverse(shouldReturn) {
    const {obj, keys, vals, onMatch, onNonMatch} = this.entries()
    let result = obj

    // console.log('starting match...')
    // log.bold('key val matchers').fmtobj({keys, vals}).echo(debug)

    // diff between keys and val is order of arg in ^ tester
    const matcher = (prop, val) => {
      for (let i = 0; i < keys.length; i++) {
        if (tester(keys[i], prop, val)) return true
      }
      for (let i = 0; i < vals.length; i++) {
        if (tester(vals[i], val, prop)) return true
      }

      // log.red('did not match').fmtobj({prop, val}).echo(debug)
      return false
    }

    // bound to the traverser
    traverse(obj).forEach(function(x) {
      // log.data({ x, match }).bold(this.key).echo()
      // const match = matcher(this.key, x)
      if (matcher(this.key, x)) {
        // log.data({ x }).bold(this.key).echo()
        onMatch(x, this)
      }
      else if (onNonMatch) {
        onNonMatch(x, this)
        // log.data({ x }).red(this.key).echo()
      }
      // else {
      //   log.yellow('no match for me').data({key: this.key, path: this.path}).echo()
      // }
    })

    this.set('traversed', result)
    return shouldReturn === true ? result : this
  }

  /**
   * @see this.traverse
   * @return {Object | Array | any}
   */
  traversed() {
    return this.get('traversed')
  }
}
