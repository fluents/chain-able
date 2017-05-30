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
    this.call = this.traverse.bind(this)
  }

  /**
   * @since 1.0.1
   * @desc set the .traverse to build an object instead
   * @param  {boolean} [should=false]
   * @return {Traverser}
   */
  // build(should = false) {
  //   return this.set('build', should)
  // }
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

    // debug this
    const blackMatchit = (prop, val) => {
      if (keys) {
        for (var keyTest of keys) {
          // log
          //   .dim('testing keys')
          //   .data({test, prop, matched: test.test(prop)})
          //   .echo(debug)
          if (typeof keyTest === 'function') {
            if (!keyTest.test && keyTest(prop)) {
              return true
            }
          }
          else if (typeof keyTest === 'string') {
            const asRegex = keyTest.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            const testRegex = new RegExp(asRegex)
            if (testRegex.test(prop)) {
              return true
            }
          }
          else if (keyTest.test(prop, val)) {
            // log.green('matched!').echo(debug)
            return true
          }
        }
      }

      if (vals) {
        for (var valTest of vals) {
          // log
          //   .dim('testing vals')
          //   .data({test, val, matched: test.test(val)})
          //   .echo(debug)
          if (typeof valTest === 'function' && !valTest.test) {
            if (valTest(val, prop)) {
              return true
            }
          }
          else if (valTest.test(val)) {
            // log.green('matched!').echo(debug)
            return true
          }
        }
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
