const arity = require('./arity')
const curry = require('./curry')

/**
 * Creates a function that is bound to a context.
 * @since 5.0.0-beta.5
 * @memberOf fp
 *
 * @param {Function} fn The function to bind to context
 * @param {Object} thisArg The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisArg`.
 *
 * @tests fp/bind
 *
 * @func
 * @fork v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @symb bind(f, o)(a, b) = f.call(o, a, b)
 *
 * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L765 underscore-bind}
 * {@link https://github.com/lodash/lodash/blob/master/bindKey.js lodash-bind-key}
 * {@link https://github.com/ramda/ramda/blob/master/src/partial.js ramda-partial}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind mozilla-Function.bind}
 * @see {@link mozilla-Function.bind}
 * @see {@link ramda-partial}
 * @see {@link lodash-bind-key}
 * @see {@link underscore-bind}
 *
 * @NOTE `bind` does not provide the additional argument-binding capabilities of
 *       [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @example
 *
 *      var log = bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 *
 */
module.exports = curry(2, function bind(fn, thisArg) {
  return arity(fn.length, function() {
    return fn.apply(thisArg, arguments)
  })
})
