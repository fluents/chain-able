const ChainedMap = require('./ChainedMap')
const traverse = require('./deps/traverse')

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
    this.set('keys', []).set('vals', [])
    this.call = this.traverse.bind(this)
  }

  whitelist(whitelist = true) {
    return this.set('whitelist', whitelist)
  }

  /**
   * @since 1.0.0
   * @alias data
   * @param  {Object | null} [obj=null]
   * @param  {boolean} [isBuilder=null] whether it is a function returning sub traversers
   * @return {Cleaner} @chainable
   */
  obj(obj = null, isBuilder = false) {
    if (!obj) return this
    return this.set('obj', obj) // .set('isBuilder', isBuilder)
  }

  /**
   * @since 1.0.0
   * @desc matches for value
   *       @modifies this.vals
   * @param  {Array<Regexp | Function>} tests
   * @return {Traverser} @chainable
   */
  keys(tests) {
    return this.set('keys', tests)
  }

  /**
   * @since 1.0.0
   * @desc matches for value
   *       @modifies this.vals
   * @param  {Array<Regexp | Function>} tests
   * @return {Traverser} @chainable
   */
  vals(tests) {
    return this.set('vals', tests)
  }

  /**
   * @since 1.0.0
   * @desc callback for each match
   *       @modifies this.onMatch
   * @param  {Function} [cb=null] defaults to .remove
   * @return {Matcher} @chainable
   */
  onMatch(cb = null) {
    if (cb === null) {
      return this.set('onMatch', (arg, traverser) => {
        traverser.remove()
      })
    }

    return this.set('onMatch', cb)
  }

  /**
   * @since 1.0.0
   * @desc callback for each match
   *       @modifies this.onMatch
   * @param  {Function} [cb=null] defaults to .remove
   * @return {Matcher} @chainable
   */
  onNonMatch(cb = null) {
    return this.set('onNonMatch', cb)
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
    if (this.has('onMatch') === false) this.onMatch()
    const debug = this.get('debug')
    const {
      obj,
      keys,
      vals,
      onMatch,
      onNonMatch,
      whitelist,
      // build,
    } = this.entries()

    // let result = build === true ? new Map() : obj
    let result = obj

    // console.log('starting match...')
    // log.bold('key val matchers').fmtobj({keys, vals}).echo(debug)

    const tester = (key, arg1, arg2) => {
      const type = typeof key
      // log
      //   .dim('testing keys')
      //   .data({test, arg1, matched: test.test(arg1)})
      //   .echo(debug)
      if (type === 'string') {
        const test = new RegExp(key.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'))
        return !!test.test(arg1)
      }
      if (type === 'function' && !key.test) return !!key(arg1)
      return !!key.test(arg1, arg2)
    }

    // diff between keys and val is order of arg in ^ tester
    const blackMatchit = (prop, val) => {
      for (let i = 0; i < keys.length; i++) {
        if (tester(keys[i], prop, val)) return true
      }
      for (let i = 0; i < vals.length; i++) {
        if (tester(vals[i], val, prop)) return true
      }

      // log.red('did not match').fmtobj({prop, val}).echo(debug)
      return false
    }

    // inverse the value if it is whitelist
    const matcher = whitelist === true ?
      (prop, val) => !blackMatchit(prop, val) :
      blackMatchit

    // bound to the traverser
    traverse(obj).forEach(function(x) {
      // log.data({ x, match }).bold(this.key).echo()
      const match = matcher(this.key, x)
      if (match) {
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
