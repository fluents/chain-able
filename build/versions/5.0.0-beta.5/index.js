(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ChainAble = factory());
}(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/* ___filename___: dist/deps/util/assign.js */
	/**
	 * @memberOf util
	 *
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign mozilla-object-assign}
	 * {@link https://esdiscuss.org/topic/object-assign-with-several-source-objects esdiscuss-object-assign}
	 * {@link https://github.com/facebook/react/blob/4b2eac3de7e1dbf5c2dd742fd9989974a83972cb/scripts/babel/transform-object-assign-require.js react-object-assign}
	 * {@link https://github.com/lodash/lodash/blob/master/.internal/assignValue.js lodash-assign}
	 * {@link https://github.com/ramda/ramda/blob/master/src/internal/_objectAssign.js ramda-assign}
	 * @see {@link react-object-assign}
	 * @see {@link ramda-assign}
	 * @see {@link lodash-assign}
	 * @see {@link esdiscuss-object-assign}
	 * @see {@link mozilla-object-assign}
	 *
	 * @type {Function}
	 */
	var assign = Object.assign;

	// @TODO polyfil

	// --- check
	// function shouldUseNative() {
	//   try {
	//     if (!Object.assign) {
	//       return false
	//     }
	//
	//     // Detect buggy property enumeration order in older V8 versions.
	//
	//     // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	//     var test1 = new String('abc') // eslint-disable-line no-new-wrappers
	//     test1[5] = 'de'
	//     if (Object.getOwnPropertyNames(test1)[0] === '5') {
	//       return false
	//     }
	//
	//     // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	//     var test2 = {}
	//     for (var i = 0; i < 10; i++) {
	//       test2['_' + String.fromCharCode(i)] = i
	//     }
	//     var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
	//       return test2[n]
	//     })
	//     if (order2.join('') !== '0123456789') {
	//       return false
	//     }
	//
	//     // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	//     var test3 = {}
	//     'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
	//       test3[letter] = letter
	//     })
	//     if (
	//       Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst'
	//     ) {
	//       return false
	//     }
	//
	//     return true
	//   }
	//   catch (err) {
	//     // We don't expect any of the above to throw, but better to be safe.
	//     return false
	//   }
	// }

	// --- handle
	// function ObjectAssign(target, source) {
	//   var from
	//   var to = toObject(target)
	//   var symbols
	//
	//   for (var s = 1; s < arguments.length; s++) {
	//     from = Object(arguments[s])
	//
	//     for (var key in from) {
	//       if (hasOwnProperty.call(from, key)) {
	//         to[key] = from[key]
	//       }
	//     }
	//
	//     if (getOwnPropertySymbols) {
	//       symbols = getOwnPropertySymbols(from)
	//       for (var i = 0; i < symbols.length; i++) {
	//         if (propIsEnumerable.call(from, symbols[i])) {
	//           to[symbols[i]] = from[symbols[i]]
	//         }
	//       }
	//     }
	//   }
	//
	//   return to
	// }

	/* ___filename___: dist/deps/is/undefined.js */
	/**
	 * @desc Checks if `value` is `undefined`.
	 * @category Lang
	 *
	 * @param  {*} x value
	 * @return {boolean} isUndefined
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf is
	 * @func isUndefined
	 *
	 * @see is/nullOrUndefined
	 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L57
	 *
	 * @example
	 *
	 *  isUndefined(undefined)
	 *  //=> true
	 *  isUndefined(void 0)
	 *  //=> true
	 *
	 *  isUndefined(null)
	 *  //=> false
	 *  isUndefined(NaN)
	 *  //=> false
	 *  isUndefined({})
	 *  //=> false
	 *  isUndefined('')
	 *  //=> false
	 *  isUndefined(1)
	 *  //=> false
	 *  isUndefined(false)
	 *  //=> false
	 *
	 */
	var _undefined = function (x) { return x === undefined; };

	/* ___filename___: dist/deps/symbols/iterator.js */
	var iterator = Symbol.iterator;

	// typeof Symbol !== 'undefined'
	//   ? Symbol.iterator
	//   : '@@iterator'

	/* ___filename___: dist/deps/symbols/instance.js */
	var instance = Symbol.hasInstance;

	/* ___filename___: dist/deps/symbols/primitive.js */
	var primitive = Symbol.toPrimitive;

	/* ___filename___: dist/deps/is/null.js */
	/**
	 * @param  {*} x value
	 * @return {boolean} isNull
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isNull
	 *
	 * @example
	 *
	 *  isNull(null)
	 *  //=> true
	 *
	 *  isNull(undefined)
	 *  //=> false
	 *  isNull(void 0)
	 *  //=> false
	 *  isNull({})
	 *  //=> false
	 *  isNull('')
	 *  //=> false
	 *  isNull(1)
	 *  //=> false
	 *
	 */
	var _null = function (x) { return x === null; };

	/* ___filename___: dist/deps/is/null.js */

	/* ___filename___: dist/deps/is/undefined.js */

	/* ___filename___: dist/deps/is/nullOrUndefined.js */



	/**
	 * @desc Checks if `value` is `null` or `undefined`.
	 * @alias isNil
	 * @category Lang
	 *
	 * @param  {*} x value
	 * @return {boolean} isNullOrUndefined
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf is
	 * @func isNullOrUndefined
	 *
	 * @see is/null
	 * @see is/undefined
	 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23
	 *
	 * @example
	 *
	 *  isNullOrUndefined(null)
	 *  //=> true
	 *  isNullOrUndefined(undefined)
	 *  //=> true
	 *  isNullOrUndefined(void 0)
	 *  //=> true
	 *
	 *  isNullOrUndefined(NaN)
	 *  //=> false
	 *  isNullOrUndefined({})
	 *  //=> false
	 *  isNullOrUndefined('')
	 *  //=> false
	 *  isNullOrUndefined(1)
	 *  //=> false
	 *  isNullOrUndefined(false)
	 *  //=> false
	 *
	 */
	var nullOrUndefined = function isNullOrUndef(x) {
	  return _undefined(x) || _null(x)
	};

	/* ___filename___: dist/deps/is/nullOrUndefined.js */

	/* ___filename___: dist/deps/is/prototypeOf.js */


	var isPrototypeOf = Object.prototype.isPrototypeOf;

	/**
	 * check if arg 1 is prototype of arg 2
	 *
	 * @TODO curry2
	 * @memberOf is
	 * @name isPrototypeOf
	 * @since 3.0.0
	 *
	 * @param  {Object | *} haystack check needle against
	 * @param  {Object | *} needle is prototype of haystack
	 * @return {boolean} needle isPrototypeOf haystack
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf mozilla-obj-isprototypeof}
	 * @see {@link mozilla-obj-isprototypeof}
	 *
	 * @example
	 *
	 *    class Eh extends Function {}
	 *    class Canada extends Eh {}
	 *    isPrototypeOf(Eh, Function) //=> true
	 *    isPrototypeOf(Canada, Function) //=> true
	 *    isPrototypeOf(Eh, Date) //=> false
	 *
	 *    isPrototypeOf({}, Object) //=> true
	 *    isPrototypeOf({}, Array) //=> false
	 *
	 */
	var prototypeOf = function (haystack, needle) { return !nullOrUndefined(haystack) && isPrototypeOf.call(haystack, needle); };

	/* ___filename___: dist/deps/fp/isPlaceholder.js */
	var isPlaceholder = function _isPlaceholder(x) {
	  return x === '_'
	};

	/* ___filename___: dist/deps/fp/arity.js */
	/* eslint complexity: "OFF" */
	/* eslint consistent-return: "OFF" */
	/* eslint max-len: "OFF" */
	/* eslint no-unused-vars: "OFF" */

	/* istanbul ignore next: metadata, one is covered, all are covered */
	/* prettier-ignore */
	/**
	 * @desc just for `.length` of a function?
	 * @memberOf fp
	 *
	 * @since 5.0.0
	 * @param {number}   n number of arguments
	 * @param {Function} fn function to wrap
	 * @return {Function} function with params
	 *
	 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arity mozilla-func-arity}
	 * @see {@link mozilla-func-arity}
	 *
	 * @TODO keeping this means change uglify...
	 *
	 * @example
	 *
	 *  const wan = one => console.log(one)
	 *  arity(1, wan)
	 *  => function(one => wan(one))
	 *
	 */
	var arity = function _arity(n, fn) {
	  if (n === 0 || n > 5) { return function() { return fn.apply(this, arguments) } }
	  else if (n === 1) { return function($0) { return fn.apply(this, arguments) } }
	  else if (n === 2) { return function($0, $1) { return fn.apply(this, arguments) } }
	  else if (n === 3) { return function($0, $1, $2) { return fn.apply(this, arguments) } }
	  else if (n === 4) { return function($0, $1, $2, $3) { return fn.apply(this, arguments) } }
	  else if (n === 5) { return function($0, $1, $2, $3, $4) { return fn.apply(this, arguments) } }

	  // @NOTE ignoring
	  // else if (n === 6) return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
	  // else if (n === 7) return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments) }
	  // else if (n === 8) return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments) }
	  // else if (n === 9) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments) }
	  // else if (n === 10) return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments) }
	};

	/* ___filename___: dist/deps/fp/isPlaceholder.js */

	/* ___filename___: dist/deps/fp/arity.js */

	/* ___filename___: dist/deps/fp/curry.js */




	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf fp
	 * @since 5.0.0-beta.1
	 * @ramda v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 *
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 *
	 * {@link https://github.com/ramda/ramda/blob/master/src/uncurryN.js ramda-uncurry}
	 * {@link https://github.com/ramda/ramda/blob/master/src/curryN.js ramda-curry}
	 * {@link https://github.com/lodash/lodash/blob/master/curry.js lodash-curry}
	 * @see {@link ramda-curry}
	 * @see {@link lodash-curry}
	 * @see {@link ramda-uncurry}
	 *
	 * @types fp
	 * @tests fp/curry
	 *
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 *
	 */
	function _curryN(length, received, fn) {
	  return function() {
	    var arguments$1 = arguments;

	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;

	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result = (void 0);

	      if (
	        combinedIdx < received.length &&
	        (!isPlaceholder(received[combinedIdx]) || argsIdx >= arguments$1.length)
	      ) {
	        result = received[combinedIdx];
	      }
	      else {
	        result = arguments$1[argsIdx++];
	        // argsIdx += 1
	      }
	      combined[combinedIdx++] = result;
	      if (!isPlaceholder(result)) {
	        left -= 1;
	      }
	      // combinedIdx += 1
	    }
	    return left <= 0
	      ? fn.apply(this, combined)
	      : arity(left, _curryN(length, combined, fn))
	  }
	}

	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf fp
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 *
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 *
	 * @see ramda
	 *
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 *
	 */
	var curry = function curryN(length, fn) {
	  return arity(length, _curryN(length, [], fn))
	};

	/* ___filename___: dist/deps/is/in.js */
	/**
	 * @desc prop is in Object(obj)
	 * @since 5.0.0
	 * @memberOf is
	 *
	 * @func
	 * @type {Function}
	 * @name isIn
	 *
	 * @param  {Object} obj object to check property of
	 * @param  {Primitive} prop property in obj
	 * @return {boolean} property
	 *
	 * @example
	 *
	 *  isIn({eh: true}, 'eh') //=> true
	 *  isIn({eh: true}, 'oh') //=> false
	 *
	 */
	var _in = function (obj, prop) { return prop in Object(obj); };

	/* ___filename___: dist/deps/is/in.js */

	/* ___filename___: dist/deps/is/hasIn.js */



	/**
	 * @desc isIn, but first checks it is not null
	 * @since 5.0.0
	 * @memberOf is
	 *
	 * @param  {Object} obj object to check
	 * @param  {any} prop property to check in object
	 * @return {boolean}
	 *
	 * @extends isNull
	 * @extends isIn
	 *
	 * @example
	 *
	 *  hasIn({}, 'eh') //=> false
	 *  hasIn(null, 'eh') //=> false
	 *  hasIn({eh: true}, 'eh') //=> true
	 *
	 */
	var hasIn = function hasIn(obj, prop) {
	  return !_null(obj) && _in(obj, prop)
	};

	/* ___filename___: dist/deps/fp/curry.js */

	/* ___filename___: dist/deps/is/hasIn.js */

	/* ___filename___: dist/deps/fp/invoke.js */
	/* eslint consistent-return: "OFF" */




	/**
	 * Creates a function that invokes the method at `path` of a given object.
	 * Any additional arguments are provided to the invoked method.
	 *
	 * @ignore
	 * @private
	 * @name method
	 * @NOTE basically this is `invoke` but not curried
	 *
	 * @since 5.0.0-beta.4
	 * @lodash 3.7.0
	 * @category Util
	 *
	 * @param {Array|string} path The path of the method to invoke.
	 * @param {Array} [args] The arguments to invoke the method with.
	 * @returns {Function} Returns the new invoker function.
	 *
	 * @see https://github.com/lodash/lodash/blob/master/method.js
	 *
	 * @example
	 *
	 * const objects = [
	 *   { 'a': { 'b': () => 2 } },
	 *   { 'a': { 'b': () => 1 } }
	 * ]
	 *
	 * map(objects, method('a.b'))
	 * // => [2, 1]
	 *
	 * map(objects, method(['a', 'b']))
	 * // => [2, 1]
	 */

	/**
	 * @desc call a method when it exists
	 * @since 5.0.0-beta.4
	 * @memberOf fp
	 * @symb 📞
	 *
	 * @param {*} x object
	 * @param {*} key property with method
	 * @param {*} args arguments
	 * @return {*}
	 *
	 * @TODO add `path` calling, fallback to noop
	 * @see is/hasIn
	 *
	 * {@link http://underscorejs.org/docs/underscore.html#section-33 underscore-invoke}
	 * {@link https://github.com/lodash/lodash/blob/master/invoke.js lodash-invoke}
	 * @see {@link lodash-invoke}
	 * @see {@link underscore-invoke}
	 *
	 * @example
	 *
	 *    var obj = {eh: console.log}
	 *    invoke(obj, 'eh', 'eh!')
	 *    //=> console.log('eh!')
	 *
	 *    var getTag = invoke(Object.prototype.toString, 'call')
	 *    getTag([])
	 *    //=> '[object Array]'
	 *
	 */
	function _invoke(x, key, args) {
	  if (hasIn(x, key)) { return x[key](args) }
	  // return void 0
	}

	var invoke = curry(3, _invoke);

	/* ___filename___: dist/deps/native/objectToString.js */
	var objectToString = Object.prototype.toString;

	/* ___filename___: dist/deps/fp/invoke.js */

	/* ___filename___: dist/deps/native/objectToString.js */

	/* ___filename___: dist/deps/is/toS.js */



	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @memberOf is
	 * @since 3.0.0
	 * @alias getTag
	 *
	 * @param {*} obj The value to `Object.prototype.toString.call(obj)`.
	 * @return {string} Returns the `toStringTag`.
	 *
	 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
	 * @see https://github.com/jonschlinkert/kind-of
	 * @see https://github.com/substack/js-traverse/blob/master/index.js#L285
	 * @see http://luxiyalu.com/object-prototype-tostring-call/
	 *
	 * @TODO obj[Symbol.toStringTag]
	 * @TODO run deopt check on this invoking see how many invocations... are needed to inline
	 *
	 * @example
	 *
	 *    toS({})
	 *    //=> '[object Object]'
	 *
	 *    toS(function() {})
	 *    //=> '[Object Function]'
	 *
	 *    getTag([])
	 *    //=> '[object Array]'
	 *
	 */
	// module.exports = obj => objectToString.call(obj)
	var toS = invoke(objectToString, 'call');

	/* ___filename___: dist/deps/is/toS.js */

	/* ___filename___: dist/deps/is/map.js */


	/**
	 * @desc Checks if `value` is classified as a `Map` object.
	 * @param  {*} x value
	 * @return {boolean} isMap
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isMap
	 * @see https://github.com/jonschlinkert/kind-of
	 *
	 * @example
	 *
	 *  isMap(new Map())
	 *  //=> true
	 *  isMap(new Map.entries())
	 *  //=> false
	 *  isMap(new Set())
	 *  //=> false
	 *  isMap({})
	 *  //=> false
	 *  isMap('')
	 *  //=> false
	 *  isMap(1)
	 *  //=> false
	 *  isMap(new WeakMap)
	 *  // => false
	 *
	 * @example
	 *
	 *  const e = {}
	 *  eh[Symbol.toStringTag] = '[object Map]'
	 *  isMap(eh)
	 *
	 * @example
	 *
	 *  class Eh extends Map()
	 *  isMap(new Eh())
	 *  //=> true
	 *
	 */
	var map = function isMap(x) {
	  // return x instanceof Map ||
	  return toS(x) === '[object Map]'
	};

	/* ___filename___: dist/deps/is/set.js */


	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} x The value to check.
	 * @return {boolean} Returns `true` if `value` is a set, else `false`.
	 *
	 *  @example
	 *
	 * isSet(new Set)
	 * // => true
	 *
	 * isSet(new WeakSet)
	 * // => false
	 *
	 */
	var set = function isSet(x) {
	  return x instanceof Set || toS(x) === '[object Set]'
	  // return toS(x) === '[object Set]'
	};
	// x instanceof Set ||

	/* ___filename___: dist/deps/is/function.js */
	/**
	 * Checks if `value` is classified as a `Function` object.
	 * @category Lang
	 * @memberOf is
	 * @since 3.0.0
	 *
	 * @param  {*} x The value to check.
	 * @return {boolean} x isFunction
	 *
	 * @func isFunction
	 *
	 * @NOTE || x instanceof Function
	 *
	 * @polyfill safari=9
	 *   The use of `Object#toString` avoids issues with the `typeof` operator
	 *   in Safari 9 which returns 'object' for typed arrays and other constructors.
	 *   there is no polyfill for this
	 *   https://github.com/krambuhl/custom-event-polyfill/issues/2
	 *   browser usage is < 0.3%, very edge case
	 *
	 * {@link http://underscorejs.org/docs/underscore.html#section-141 underscore-is-function}
	 * @see {@link underscore-is-function}
	 *
	 * @example
	 *
	 *  isFunction(function() {})
	 *  //=> true
	 *  isFunction(() => {})
	 *  //=> true
	 *  isFunction(new Function())
	 *  //=> true
	 *
	 *  isFunction(1)
	 *  //=> false
	 *  isFunction('')
	 *  //=> false
	 *  isFunction(/abc/)
	 *  // => false
	 *
	 */
	var _function = function isFunction(x) {
	  return typeof x === 'function'
	};

	/* ___filename___: dist/deps/is/stringPrimitive.js */


	/**
	 * Checks if `value` is classified as a `String` **primitive**.
	 *
	 * @since 3.0.0
	 * @category Lang
	 * @memberOf is
	 * @param {*} x The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
	 * @see https://github.com/lodash/lodash/blob/master/isString.js
	 * @see is/string
	 *
	 * @example
	 *
	 * isString('abc')
	 * // => true
	 *
	 * isString(new String('abc'))
	 * // => false
	 *
	 * isString(1)
	 * // => false
	 */
	var stringPrimitive = function (x) { return typeof x === 'string'; };

	/* ___filename___: dist/deps/is/stringPrimitive.js */

	/* ___filename___: dist/deps/is/string.js */



	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @since 3.0.0
	 * @category Lang
	 *
	 * @memberOf is
	 * @extends isStringPrimitive
	 * @variation also allows String objects
	 *
	 * @param {*} x The value to check.
	 * @return {boolean} Returns `true` if `value` is a string, else `false`.
	 *
	 * @see https://github.com/lodash/lodash/blob/master/isString.js
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
	 * @see isStringPrimitive
	 *
	 * @example
	 *
	 * isString('abc')
	 * // => true
	 *
	 * isString(new String('abc'))
	 * // => true
	 *
	 * isString(1)
	 * // => false
	 */
	var string = function (x) { return stringPrimitive(x) || toS(x) === '[object String]'; };

	/* ___filename___: dist/deps/is/false.js */
	/**
	 * @param  {*} x value
	 * @return {boolean} isFalse
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf is
	 * @func isFalse
	 *
	 * @example
	 *
	 *  isFalse(false)
	 *  //=> true
	 *  isFalse(true)
	 *  //=> false
	 *  isFalse(0)
	 *  //=> false
	 *  isFalse('')
	 *  //=> false
	 *
	 */
	var _false = function isFalse(x) {
	  return x === false
	};

	/* ___filename___: dist/deps/util/noop.js */
	/**
	 * @name noop
	 *
	 * @func
	 * @since 5.0.0
	 * @return {void}
	 *
	 * {@link https://github.com/sindresorhus/noop3 noop3}
	 * @see {@link noop3}
	 *
	 * @example
	 *
	 *    noop
	 *
	 * @example
	 *
	 *    noop()
	 *
	 */
	var noop = function noop() { /* noop */ };

	/* ___filename___: dist/deps/util/keys.js */
	var keys = Object.keys;
	// function keys(obj) {
	//   var res = []
	//   for (var key in obj)
	//     { res.push(key) }
	//   return res

	/* ___filename___: dist/deps/util/assign.js */

	/* ___filename___: dist/deps/define.js */


	/**
	 * @desc default to configurable and enumerable, unless configured otherwise
	 * @since 4.0.0
	 *
	 * @param  {Object} obj object to define on
	 * @param  {Primitive} name property name to define
	 * @param  {Object} descriptor object descriptor
	 * @return {void}
	 *
	 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
	 *
	 * @example
	 *
	 *    var desc = Object.getOwnPropertyDescriptor(obj, 'eh', {get: () => console.log('eh')})
	 *
	 */
	var define = function(obj, name, descriptor) {
	  Object.defineProperty(
	    obj,
	    name,
	    assign(
	      {
	        configurable: true,
	        enumerable: true,
	      },
	      descriptor
	    )
	  );
	};

	/* ___filename___: dist/deps/meta/ignored.js */
	var ignored = function (key) { return key === 'parent' || key === 'store' || key === 'meta' || key === 'className'; };

	// key === 'decorated' ||
	// key === 'transformers' ||
	// key === 'inspect' ||

	/* ___filename___: dist/deps/env/dev.js */
	/* istanbul ignore next: wip build */
	var dev = process.env.NODE_ENV !== 'production';

	/* ___filename___: dist/deps/symbols/iterator.js */

	/* ___filename___: dist/deps/symbols/instance.js */

	/* ___filename___: dist/deps/symbols/primitive.js */

	/* ___filename___: dist/deps/is/prototypeOf.js */

	/* ___filename___: dist/deps/is/map.js */

	/* ___filename___: dist/deps/is/set.js */

	/* ___filename___: dist/deps/is/function.js */

	/* ___filename___: dist/deps/is/string.js */

	/* ___filename___: dist/deps/is/false.js */

	/* ___filename___: dist/deps/util/noop.js */

	/* ___filename___: dist/deps/util/keys.js */

	/* ___filename___: dist/deps/define.js */

	/* ___filename___: dist/deps/meta/ignored.js */

	/* ___filename___: dist/deps/env/dev.js */

	/* ___filename___: dist/Chainable.js */
















	// @TODO change from `||` to if else
	var shouldClear = function (key, property) { return !ignored(key) &&
	  (map(property) || set(property) || (property && property.store)); };

	var ComposeChainable = function (Target) {
	  /* istanbul ignore next: dev */
	  if (dev) {
	    if (!Target || !Target.prototype) {
	      console.log({Target: Target});
	      throw new TypeError('did not have a super class / target base')
	    }
	  }

	  /**
	   * @desc Trait class that can inherit any class passed into compose, extended by ChainedMap & ChainedSet
	   *
	   * @member Chainable
	   * @class Chainable
	   * @category Chainable
	   * @type {Chainable}
	   *
	   * @prop {Chainable | any} parent
	   * @prop {string} className
	   *
	   * {@link https://github.com/iluwatar/java-design-patterns/tree/master/chain chain-pattern}
	   * @see {@link chain-pattern}
	   *
	   * @see ChainedMap
	   * @see ChainedSet
	   *
	   * @tests Chainable
	   * @types Chainable
	   *
	   */
	  var Chainable = (function (Target) {
	    function Chainable(parent) {
	      Target.call(this);
	      if (parent) { this.parent = parent; }
	      this.className = this.constructor.name;
	    }

	    if ( Target ) Chainable.__proto__ = Target;
	    Chainable.prototype = Object.create( Target && Target.prototype );
	    Chainable.prototype.constructor = Chainable;

	    /**
	     * @desc Iterator for looping values in the store
	     *
	     * @memberOf Chainable
	     * @since 0.5.0
	     *
	     * @type {generator}
	     * @return {Object} {value: undefined | any, done: true | false}
	     *
	     * @NOTE assigned to a variable so buble ignores it
	     *
	     *
	     * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
	     * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
	     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
	     * @see this.store
	     * @tests iteration
	     *
	     * @example
	     *
	     *    const chain = new Chain().set('eh', 1)
	     *    for (var [key, val] of chain) console.log({[key]: val})
	     *    //=> {eh: 1}
	     *
	     * @example
	     *
	     *    *[Symbol.iterator](): void { for (const item of this.store) yield item }
	     *
	     * @example
	     *
	     *    const {ChainedSet} = require('chain-able')
	     *    const set = new ChainedSet()
	     *    set.add('eh')
	     *
	     *    for (const arr of set) {
	     *      const [key, val] = arr
	     *
	     *      key
	     *      //=> 0
	     *
	     *      val
	     *      //=> 'eh'
	     *
	     *      arr.length
	     *      //=> 2
	     *    }
	     *
	     */
	    Chainable.prototype[iterator] = function () {
	      var values = this.values();
	      var size = this.store.size;
	      var entries = this.entries ? this.entries() : 0;
	      var keys$$1 = entries === 0 ? new Array(size) : keys(entries);

	      return {
	        i: 0,
	        next: function next() {
	          var i = this.i;
	          var key = i;
	          var val = values[i];
	          if (entries) { key = keys$$1[i]; }

	          // done - no more values, or iteration reached size
	          if ((_undefined(key) && _undefined(val)) || size <= i) {
	            return {value: undefined, done: true}
	          }

	          this.i++;

	          // return
	          return {value: [key, val], done: false}
	        },
	      }
	    };

	    /**
	     * @desc for ending nested chains
	     * @since 0.4.0
	     * @memberOf Chainable
	     *
	     * @return {Chainable | any}
	     *
	     * @see Chainable.parent
	     * @see FactoryChain
	     *
	     * @example
	     *
	     *    const parent = 'eh'
	     *    const child = newChain(parent)
	     *    child.end()
	     *    //=> 'eh'
	     *
	     */
	    Chainable.prototype.end = function end () {
	      return this.parent
	    };

	    /**
	     * @desc when the condition is true,
	     *       trueBrancher is called,
	     *       else, falseBrancher is called
	     *
	     * @memberOf Chainable
	     * @since 4.0.0 <- added string-as-has(condition)
	     * @since 2.0.0
	     *
	     * @param  {boolean | string} condition when string, checks this.get
	     * @param  {Function} [trueBrancher=Function] called when true
	     * @param  {Function} [falseBrancher=Function] called when false
	     * @return {Chainable} @chainable
	     *
	     * @example
	     *
	     *
	     *  const prod = process.env.NODE_ENV === 'production'
	     *  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
	     *
	     *
	     */
	    Chainable.prototype.when = function when (condition, trueBrancher, falseBrancher) {
	      if (condition) {
	        if (_function(trueBrancher)) {
	          if (string(condition)) {
	            if (this.get(condition)) {
	              trueBrancher(this);
	            }
	          }
	          else {
	            trueBrancher(this);
	          }
	        }
	      }
	      else if (_function(falseBrancher)) {
	        falseBrancher(this);
	      }

	      return this
	    };

	    /**
	     * @desc clears the map,
	     *       goes through this properties,
	     *       calls .clear if they are instanceof Chainable or Map
	     *
	     * @memberOf Chainable
	     * @since 4.0.0 (moved only to Chainable, added option to clear this keys)
	     * @since 0.4.0 (in ChainedMap)
	     * @since 0.3.0 (in Chainable)
	     *
	     * @param {boolean | undefined} [clearPropertiesThatAreChainLike=true] checks properties on the object, if they are `chain-like`, clears them as well
	     * @return {Chainable} @chainable
	     *
	     * @see https://github.com/fliphub/flipchain/issues/2
	     * @see ChainedSet
	     * @see ChainedMap
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear map-clear}
	     * @see {@link map-clear}
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *    chain.set('eh', 1)
	     *    chain.entries()
	     *    //=> {eh: 1}
	     *    chain.clear()
	     *    chain.entries()
	     *    //=> {}
	     *
	     */
	    Chainable.prototype.clear = function clear (clearPropertiesThatAreChainLike) {
	      var this$1 = this;

	      this.store.clear();

	      if (_false(clearPropertiesThatAreChainLike)) { return this }

	      var keys$$1 = keys(this);
	      for (var k = 0; k < keys$$1.length; k++) {
	        var key = keys$$1[k];
	        var property = this$1[key];
	        if (shouldClear(key, property)) { this$1[key].clear(); }
	      }

	      return this
	    };

	    /**
	     * @desc calls .delete on this.store.map
	     * @since 0.3.0
	     * @memberOf Chainable
	     *
	     * @param {Primitive} key on a Map: key referencing the value. on a Set: the index
	     * @return {Chainable}
	     *
	     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
	     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
	     * @see ChainedSet
	     * @see ChainedMap
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *    chain.set('eh', 1)
	     *    chain.get('eh')
	     *    // => 1
	     *    chain.delete('eh', 1)
	     *    chain.get('eh')
	     *    // => undefined
	     *
	     */
	    Chainable.prototype.delete = function delete$1 (key) {
	      this.store.delete(key);
	      return this
	    };

	    /**
	     * @desc checks whether the store has a value for a given key
	     * @memberOf Chainable
	     * @since 0.3.0
	     *
	     * @param {any} keyOrValue key when Map, value when Set
	     * @return {boolean}
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has map-has}
	     * @see {@link map-has}
	     *
	     * @example
	     *
	     *   const chain = new Chain()
	     *   chain.set('eh', 1).has('eh')
	     *   //=> true
	     *   chain.has('canada')
	     *   //=> false
	     *
	     */
	    Chainable.prototype.has = function has (keyOrValue) {
	      return this.store.has(keyOrValue)
	    };

	    /**
	     * @desc spreads the entries from ChainedMap.store.values
	     *       allocates a new array, adds the values from the iterator
	     *
	     * @memberOf Chainable
	     * @since 0.4.0
	     *
	     * @return {Array<any>} toArr(this.store.values())
	     *
	     * @NOTE look at Chainable.constructor to ensure not to use `new Array...`
	     * @NOTE moved from ChainedMap and ChainedSet to Chainable @2.0.2
	     * @NOTE this was [...] & Array.from(this.store.values())
	     *
	     * {@link https://kangax.github.io/compat-table/es6/#test-Array_static_methods compat-array-static-methods}
	     * {@link https://stackoverflow.com/questions/20069828/how-to-convert-set-to-array set-to-array}
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values mozilla-map-values}
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values mozilla-set-values}
	     *
	     * @see {@link mozilla-map-values}
	     * @see {@link mozilla-set-values}
	     * @see {@link compat-array-static-methods}
	     * @see {@link set-to-array}
	     *
	     *
	     * @example
	     *
	     *  const chain = new Chain()
	     *  chain.set('eh', 1)
	     *  chain.values()
	     *  //=> [1]
	     *
	     */
	    Chainable.prototype.values = function values () {
	      var allocated = new Array(this.store.size);
	      var i = 0;
	      this.store.forEach(function (v) { return (allocated[i++] = v); });
	      return allocated
	    };

	    /**
	     * @desc symbol method for toString, toJSON, toNumber
	     * @memberOf Chainable
	     * @since 1.0.2
	     * @version 2
	     *
	     * @param {string} hint enum[default, string, number]
	     * @return {Primitive}
	     *
	     * {@link http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags well-known-symbols-es6}
	     * @see {@link well-known-symbols-es6}
	     *
	     * @example
	     *
	     *  const chain = new Chain()
	     *  chain.toNumber = () => 1
	     *  +chain;
	     *  //=> 1
	     *  chain + 1
	     *  //=>
	     *
	     * @example
	     *
	     *  const chain = new Chain()
	     *  chain.toString = () => 'eh'
	     *  chain + ''
	     *  //=> 'eh'
	     *
	     */
	    Chainable.prototype[primitive] = function (hint) {
	      /* prettier-ignore */
	      /**
	       * hint === 'number'
	       * `s`tring is 115
	       * `n`umber is 110
	       * 110 & 4 = 1
	       * 115 & 4 = 0
	       *
	       * if (hint === 'string' && this.toJSON) return this.toJSON()
	       * else if (hint === 'number' && this.toNumber) return this.toNumber()
	       */
	      if (hint === 'number' && this.toNumber) { return this.toNumber() }

	      // hint === 'string'
	      if (this.toJSON) { return this.toJSON() }

	      // hint === 'default'
	      return this.toString()
	    };

	    return Chainable;
	  }(Target));

	  var ChainPrototype = Chainable.prototype;

	  /**
	   * @memberOf Chainable
	   * @name length
	   * @method length
	   * @readonly
	   * @since 0.5.0
	   * @see ChainedMap.store
	   * @return {number}
	   * @example for (var i = 0; i < chain.length; i++)
	   */
	  define(ChainPrototype, 'length', {
	    enumerable: false,
	    get: function get() {
	      return this.store.size
	    },
	  });
	  define(ChainPrototype, instance, {
	    enumerable: false,
	    value: function (instance$$1) { return instance$$1 && (prototypeOf(ChainPrototype, instance$$1) || instance$$1.store); },
	  });

	  return Chainable
	};

	// class {}
	var c = ComposeChainable(noop);

	/**
	 * @since 3.0.0
	 * @func
	 * @example
	 *
	 *  class Target {}
	 *  const TargetChain = Chainable.compose(Target)
	 *  const chain = new TargetChain()
	 *  chain instanceof Target
	 *  //=> true
	 *
	 */
	c.compose = ComposeChainable;

	var Chainable = c;

	/* ___filename___: dist/deps/is/objTypeof.js */
	/**
	 * @param  {*} x value
	 * @return {boolean} isObjLoose
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isObjLoose
	 * @see is/obj
	 * @see is/objWithKeys
	 * @see is/objStrict
	 * @see is/null
	 *
	 * @example
	 *
	 *  isObjLoose(new Object())
	 *  //=> true
	 *  isObjLoose({})
	 *  //=> true
	 *  isObjLoose(Object.create(null))
	 *  //=> true
	 *  isObjLoose(null)
	 *  //=> true
	 *
	 *  isObjLoose(new Set())
	 *  //=> false
	 *  isObjLoose(function() {})
	 *  //=> false
	 *  isObjLoose('')
	 *  //=> false
	 *  isObjLoose(1)
	 *  //=> false
	 *
	 */
	var objTypeof = function (x) { return typeof x === 'object'; };

	/* ___filename___: dist/deps/is/objTypeof.js */

	/* ___filename___: dist/deps/is/objNotNull.js */



	/**
	 * @param  {*} x value
	 * @return {boolean} isObjNotNull
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isObjNotNull
	 * @alias isObjectLike
	 *
	 * {@link https://github.com/lodash/lodash/blob/master/isObjectLike.js lodash-is-object-like}
	 * {@link https://github.com/sindresorhus/is-obj/blob/master/index.js is-obj}
	 * @see is/obj
	 * @see is/objWithKeys
	 * @see is/objTypeof
	 * @see is/null
	 * @see {@link is-obj}
	 * @see {@link lodash-is-object-like}
	 *
	 * @TODO !Array.isArray
	 *
	 * @extends isObjTypeof
	 * @variation null will not count as an object
	 *
	 * @example
	 *
	 *  isObjNotNull(new Object())
	 *  //=> true
	 *  isObjNotNull({})
	 *  //=> true
	 *  isObjNotNull(Object.create(null))
	 *  //=> true
	 *  isObjNotNull(null)
	 *  //=> false
	 *
	 *  isObjNotNull(new Set())
	 *  //=> false
	 *  isObjNotNull(function() {})
	 *  //=> false
	 *  isObjNotNull('')
	 *  //=> false
	 *  isObjNotNull(1)
	 *  //=> false
	 *
	 */
	var objNotNull = function (x) { return !nullOrUndefined(x) && objTypeof(x); };

	/* ___filename___: dist/deps/is/array.js */
	/**
	 * @name isArray
	 * @func
	 * @memberOf is
	 *
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray mozilla-isarray}
	 * {@link https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js immutables-is-array-like}
	 * @todo is-arraylike https://github.com/facebook/immutable-js/blob/master/src/utils/isArrayLike.js
	 *
	 * @param {*} arg
	 * @return {boolean} isArray(arg)
	 *
	 * @see {@link mozilla-isarray}
	 * @type {Function}
	 * @since 3.0.0
	 */
	var array = Array.isArray;

	// function isArray(xs) {
	//   return Object.prototype.toString.call(xs) === '[object Array]'
	// }

	/* ___filename___: dist/deps/is/true.js */
	/**
	 * @param  {*} x value
	 * @return {boolean} isTrue
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf is
	 * @func isTrue
	 *
	 * @example
	 *
	 *  isTrue(true)
	 *  //=> true
	 *  isTrue(false)
	 *  //=> false
	 *  isTrue(1)
	 *  //=> false
	 *  isTrue('')
	 *  //=> false
	 *
	 */
	var _true = function (x) { return x === true; };

	/* ___filename___: dist/deps/is/regexp.js */


	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} x The value to check.
	 * @return {boolean} Returns `true` if `value` is a regexp, else `false`.
	 * @see https://github.com/lodash/lodash/blob/master/isRegExp.js
	 *
	 * @example
	 *
	 * isRegExp(/abc/)
	 * // => true
	 *
	 * isRegExp('/abc/')
	 * // => false
	 *
	 */
	var regexp = function (x) { return toS(x) === '[object RegExp]'; };
	// obj instanceof RegExp ||

	/* ___filename___: dist/deps/is/date.js */


	/**
	 * @param  {*} x value
	 * @return {boolean} isDate
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isDate
	 * @extends toS
	 *
	 * @example
	 *
	 *  isDate(new Date())
	 *  //=> true
	 *  isDate(Date.now())
	 *  //=> false
	 *  isDate(1)
	 *  //=> false
	 *  isDate('')
	 *  //=> false
	 *
	 * @example
	 *
	 *  const e = {}
	 *  eh[Symbol.toStringTag] = '[Object Date]'
	 *  isDate(eh)
	 *  //=> true
	 *
	 * @example
	 *
	 *  class Eh extends Date()
	 *  isDate(new Eh())
	 *  //=> true
	 */
	var date = function isDate(x) {
	  return toS(x) === '[object Date]'
	  // x instanceof Date ||
	};

	/* ___filename___: dist/deps/is/true.js */

	/* ___filename___: dist/deps/is/booleanPrimitive.js */



	/**
	 * @desc Checks if `value` is classified as a boolean primitive NOT object.
	 * @category Lang
	 * @since 5.0.0-beta.4
	 *
	 * @param  {*} x value
	 * @return {boolean} isBooleanPrimitive
	 *
	 * @extends isTrue
	 * @extends isFalse
	 * @see is/toS
	 * @memberOf is
	 * @func isBooleanPrimitive
	 *
	 * @NOTE could also have typeof x === 'boolean' || (/true|false/).test(x)
	 *
	 * @example
	 *
	 *  isBooleanPrimitive(false)
	 *  //=> true
	 *  isBooleanPrimitive(new Boolean(1))
	 *  //=> false
	 *
	 *  isBooleanPrimitive(1)
	 *  //=> false
	 *  isBooleanPrimitive('')
	 *  //=> false
	 *
	 */
	var booleanPrimitive = function isBooleanPrimitive(x) {
	  return _true(x) || _false(x)
	};

	/* ___filename___: dist/deps/is/booleanPrimitive.js */

	/* ___filename___: dist/deps/is/boolean.js */



	/**
	 * @desc Checks if `value` is classified as a boolean primitive OR object.
	 * @since 3.0.0
	 * @category Lang
	 * @memberOf is
	 *
	 * @param  {*} x value
	 * @return {boolean} isBoolean
	 *
	 * @extends isTrue
	 * @extends isFalse
	 * @extends isBooleanPrimitive
	 *
	 * @see is/toS
	 * @func isBoolean
	 *
	 * @example
	 *
	 *  isBoolean(false)
	 *  //=> true
	 *  isBoolean(new Boolean(1))
	 *  //=> true
	 *  isBoolean(1)
	 *  //=> false
	 *  isBoolean('')
	 *  //=> false
	 *
	 */
	var boolean_1 = function isBoolean(x) {
	  return booleanPrimitive(x) || toS(x) === '[object Boolean]'
	};

	/* ___filename___: dist/deps/is/array.js */

	/* ___filename___: dist/deps/util/simpleKindOf.js */



	/* prettier-ignore */
	/**
	 * @desc when Array -> 'array'
	 *       when null -> 'null'
	 *       else `typeof x`
	 *
	 * @since 4.0.0
	 * @param  {any} x value for type
	 * @return {string} type
	 *
	 * split at space, replace brackets and space, lowercase
	 * @TODO `type.split(' ').pop().replace(/\s\[\]/g, '').toLowerCase()`
	 *
	 * @example
	 *
	 *   simpleKindOf([]) //=> 'array'
	 *   simpleKindOf(null) //=> 'null'
	 *   simpleKindOf({}) //=> 'object'
	 *
	 */
	var simpleKindOf = function (x) {
	  return array(x)
	    ? 'array'
	    : _null(x)
	      ? 'null'
	      : typeof x
	};

	/* ___filename___: dist/deps/conditional/includes/includes.js */


	/**
	 * @memberOf includes
	 * @name includes
	 * @func
	 *
	 * @param  {Array | string} haystack haystack includes needle
	 * @param  {string | *} needle needle in haystack
	 * @return {boolean} needle in haystack
	 *
	 * @TODO `~haystack.indexOf(needle)`
	 *
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT mozilla-bitwise-not}
	 * @see {@link mozilla-bitwise-not}
	 * @see conditional/includes/flipped
	 *
	 * @example
	 *
	 *    includes('eh', 'e')      //=> true
	 *    includes('eh', 'nope')   //=> false
	 *    includes(['eh'], 'eh')   //=> true
	 *    includes(['eh'], 'nope') //=> false
	 *
	 */
	var includes = function (haystack, needle) { return haystack.includes(needle); };

	var includes_1 = curry(2, includes);

	/* ___filename___: dist/deps/conditional/includes/includes.js */

	var index$4 = includes_1;

	/* ___filename___: dist/deps/dopemerge/emptyTarget.js */


	/**
	 * @desc make a new empty Array or Object for cloning
	 * @memberOf dopemerge
	 * @name emptyTarget
	 * @since 2.0.0
	 * @func
	 *
	 * @param {*} val array or object to return an empty one of
	 * @return {Object | Array} depending on the data type of val
	 *
	 * @example
	 *
	 *    emptyTarget({eh: true})
	 *    //=> {}
	 *
	 *    emptyTarget([1])
	 *    //=> []
	 *
	 */
	var emptyTarget = function emptyTarget(val) {
	  return array(val) ? [] : {}
	};

	/* ___filename___: dist/deps/is/objNotNull.js */

	/* ___filename___: dist/deps/is/regexp.js */

	/* ___filename___: dist/deps/is/date.js */

	/* ___filename___: dist/deps/is/boolean.js */

	/* ___filename___: dist/deps/util/simpleKindOf.js */

	/* ___filename___: dist/deps/dopemerge/emptyTarget.js */

	/* ___filename___: dist/deps/dopemerge/dopemerge.js */
	/* eslint complexity: "OFF" */














	/**
	 * @desc 1: not null object
	 *       2: object toString is not a date or regex
	 *
	 * @category merge
	 * @memberOf dopemerge
	 *
	 * @since 2.0.0
	 * @param {*} x value to check
	 * @return {boolean}
	 *
	 * @example
	 *
	 *    isMergeableObj({})
	 *    //=> true
	 *
	 *    isMergeableObj(Object.create(null))
	 *    // => true
	 *
	 *    isMergeableObj(new Date())
	 *    //=> false
	 *
	 *    isMergeableObj(/eh/)
	 *    //=> false
	 *
	 */
	function isMergeableObj(x) {
	  return objNotNull(x) && !regexp(x) && !date(x)
	}

	/**
	 * Defaults to `false`.
	 * If `clone` is `true` then both `x` and `y` are recursively cloned as part of the merge.
	 *
	 * @memberOf dopemerge
	 * @since 2.0.0
	 *
	 * @param {*} value value to clone if needed
	 * @param {DopeMergeOptions} optsArg dopemerge options, could contain .clone
	 * @return {Object | Array | any} cloned or original value
	 *
	 * @see emptyTarget
	 * @see isMergeableObj
	 *
	 * @example
	 *
	 * var obj = {eh: true}
	 *
	 * cloneIfNeeded(obj, {clone: true}) === obj
	 * //=> false
	 *
	 * cloneIfNeeded(obj, {clone: false}) === obj
	 * //=> true
	 *
	 */
	function cloneIfNeeded(value, optsArg) {
	  return _true(optsArg.clone) && isMergeableObj(value)
	    ? deepmerge(emptyTarget(value), value, optsArg)
	    : value
	}

	/* prettier-ignore */
	/**
	 * The merge will also merge arrays and array values by default.
	 * However, there are nigh-infinite valid ways to merge arrays,
	 * and you may want to supply your own.
	 * You can do this by passing an `arrayMerge` function as an option.
	 *
	 * @memberOf dopemerge
	 * @since 2.0.0
	 *
	 * @param {*} target array merged onto, could be emptyTarget if cloning
	 * @param {*} source original source array
	 * @param {*} optsArg dopemerge options
	 * @return {Array | *} merged array
	 *
	 * @example
	 *
	 *    function concatMerge(destinationArray, sourceArray, options) {
	 *      destinationArray
	 *      //=> [1, 2, 3]
	 *
	 *      sourceArray
	 *      //=> [3, 2, 1]
	 *
	 *      options
	 *      //=> { arrayMerge: concatMerge }
	 *
	 *      return destinationArray.concat(sourceArray)
	 *    }
	 *    merge([1, 2, 3], [3, 2, 1], { arrayMerge: concatMerge })
	 *    //=> [1, 2, 3, 3, 2, 1]
	 *
	 */
	function defaultArrayMerge(target, source, optsArg) {
	  var destination = target.slice();

	  for (var i = 0; i < source.length; i++) {
	    var v = source[i];
	    if (_undefined(destination[i])) {
	      destination[i] = cloneIfNeeded(v, optsArg);
	    }
	    else if (isMergeableObj(v)) {
	      destination[i] = deepmerge(target[i], v, optsArg);
	    }
	    // @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT
	    // === -1
	    // eslint-disable-next-line prefer-includes/prefer-includes
	    else if (!~target.indexOf(v)) {
	      destination.push(cloneIfNeeded(v, optsArg));
	    }
	  }
	  return destination
	}

	function mergeObj(target, source, optsArg) {
	  var destination = {};
	  if (isMergeableObj(target)) {
	    var targetKeys = keys(target);
	    for (var k = 0; k < targetKeys.length; k++) {
	      destination[targetKeys[k]] = cloneIfNeeded(target[targetKeys[k]], optsArg);
	    }
	  }
	  var sourceKeys = keys(source);
	  for (var s = 0; s < sourceKeys.length; s++) {
	    var key = sourceKeys[s];
	    if (!isMergeableObj(source[key]) || !target[key]) {
	      destination[key] = cloneIfNeeded(source[key], optsArg);
	    }
	    else {
	      destination[key] = deepmerge(target[key], source[key], optsArg);
	    }
	  }

	  return destination
	}

	function deepmerge(target, source, optsArg) {
	  if (array(source)) {
	    var arrayMerge = optsArg.arrayMerge;
	    return array(target)
	      ? arrayMerge(target, source, optsArg)
	      : cloneIfNeeded(source, optsArg)
	  }

	  // else
	  return mergeObj(target, source, optsArg)
	}

	/* prettier-ignore */
	/**
	 *  Merge the enumerable attributes of two objects deeply.
	 *  Merge two objects `x` and `y` deeply, returning a new merged object with the
	 *  elements from both `x` and `y`.
	 *  If an element at the same key is present for both `x` and `y`, the value from
	 * `y` will appear in the result.
	 *  Merging creates a new object, so that neither `x` or `y` are be modified.
	 *  However, child objects on `x` or `y` are copied over -
	 *  if you want to copy all values, you must pass `true` to the clone option.
	 *
	 *
	 * @member dopemerge
	 * @category merge
	 *
	 * @param {*} obj1 left
	 * @param {*} obj2 right
	 * @param {*} opts dopemerge options
	 * @return {Object | Array | any} merged
	 *
	 * {@link https://github.com/lodash/lodash/blob/master/merge.js lodash-merge}
	 * {@link https://github.com/KyleAMathews/deepmerge deepmerge}
	 * @see {@link deepmerge}
	 *
	 * @types dopemerge
	 * @tests deepmerge
	 *
	 * @example
	 *
	 *    var x = {
	 *      foo: {bar: 3},
	 *      array: [{
	 *        does: 'work',
	 *        too: [1, 2, 3],
	 *      }],
	 *    }
	 *
	 *    var y = {
	 *      foo: {baz: 4},
	 *      quux: 5,
	 *      array: [
	 *        {
	 *          does: 'work',
	 *          too: [4, 5, 6],
	 *        },
	 *        {
	 *          really: 'yes',
	 *        },
	 *      ],
	 *    }
	 *
	 *    var expected = {
	 *      foo: {
	 *        bar: 3,
	 *        baz: 4,
	 *      },
	 *      array: [
	 *        {
	 *          does: 'work',
	 *          too: [1, 2, 3, 4, 5, 6],
	 *        },
	 *        {
	 *          really: 'yes',
	 *        },
	 *      ],
	 *      quux: 5,
	 *    }
	 *
	 *    merge(x, y)
	 *    //=> expected
	 *
	 */
	function dopemerge(obj1, obj2, opts) {
	  // if they are identical, fastest === check
	  if (obj1 === obj2) {
	    return obj1
	  }

	  // setup options
	  var options = assign(
	    {
	      arrayMerge: defaultArrayMerge,
	      stringToArray: true,
	      boolToArray: false,
	      ignoreTypes: ['null', 'undefined'],
	      // debug: true,
	    },
	    opts || {}
	  );
	  var ignoreTypes = options.ignoreTypes;
	  var stringToArray = options.stringToArray;
	  var boolToArray = options.boolToArray;
	  var clone = options.clone;

	  // @NOTE: much better size but oh well
	  // const ignoreTypes = ['null', 'undefined']
	  // const stringToArray = true
	  // const boolToArray = false
	  // const clone = true

	  // check one then check the other
	  if (_true(index$4(ignoreTypes, simpleKindOf(obj1)))) {
	    return obj2
	  }
	  else if (_true(index$4(ignoreTypes, simpleKindOf(obj2)))) {
	    return obj1
	  }
	  else if (boolean_1(obj1) && boolean_1(obj2)) {
	    // @NOTE uglifier optimizes into a wicked ternary
	    return boolToArray ? [obj1, obj2] : obj2
	  }
	  else if (string(obj1) && string(obj2)) {
	    return stringToArray ? [obj1, obj2] : obj1 + obj2
	  }
	  else if (array(obj1) && string(obj2)) {
	    return (clone ? obj1.slice(0) : obj1).concat([obj2])
	  }
	  else if (string(obj1) && array(obj2)) {
	    return (clone ? obj2.slice(0) : obj2).concat([obj1])
	  }
	  else {
	    return deepmerge(obj1, obj2, options)
	  }
	}

	var dopemerge_1 = dopemerge;

	/* ___filename___: dist/deps/dopemerge/dopemerge.js */

	var index$2 = dopemerge_1;

	/* ___filename___: dist/deps/util/from.js */
	/**
	 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
	 * @see https://github.com/lodash/lodash/blob/master/.internal/setToArray.js
	 * ^ could use if needed
	 */
	var from = Array.from;

	/* ___filename___: dist/deps/util/from.js */

	/* ___filename___: dist/deps/reduce/reduce.js */


	/**
	 * @desc Map -> Object
	 * @since 4.0.0
	 *
	 * @param  {Map} map map to reduce, calls entries, turns into an array, then object
	 * @return {Object} reduced object
	 *
	 * @see ArrayFrom
	 *
	 * @example
	 *
	 *    var emptyMap = new Map()
	 *    reduce(emptyMap)
	 *    // => {}
	 *
	 * @example
	 *
	 *    var map = new Map()
	 *    map.set('eh', 1)
	 *    reduce(map)
	 *    // => {eh: 1}
	 *
	 */
	var reduce = function (map) {
	  var reduced = {};

	  // only need to do this if we actually have values in our Map
	  if (map.size !== 0) {
	    reduced = from(map.entries()).reduce(function (acc, ref) {
	      var key = ref[0];
	      var value = ref[1];

	      acc[key] = value;
	      return acc
	    }, reduced);
	  }

	  return reduced
	};

	/* ___filename___: dist/deps/reduce/reduce.js */

	var index$6 = reduce;

	/* ___filename___: dist/deps/is/obj.js */




	/**
	 * @func isObj
	 *
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @since 3.0.0
	 * @category Lang
	 *
	 * @param {*} value The value to check.
	 * @return {boolean} Returns `true` if `value` is an object, else `false`.
	 *
	 * @memberOf is
	 * @see http://stackoverflow.com/questions/34111902/why-do-lodashs-isobject-isplainobject-behave-differently-than-typeof-x
	 * @see https://github.com/lodash/lodash/blob/master/isObject.js
	 * @NOTE Object.prototype.toString.call(val) === '[object Object]'
	 *
	 * @example
	 *
	 * isObject({})
	 * // => true
	 *
	 * isObject([1, 2, 3])
	 * // => true
	 *
	 * isObject(Function)
	 * // => true
	 *
	 * isObject(null)
	 * // => false
	 *
	 */
	var obj = function (x) { return !_null(x) && (objTypeof(x) || _function(x)); };

	/* ___filename___: dist/deps/is/obj.js */

	/* ___filename___: dist/deps/reduce/entries.js */






	/**
	 * @desc recursively reduce maps and objects that include reducable data
	 * @since 4.0.0
	 *
	 * @sig reduced => object => isMap(object) -> reduced; merge(object, reduced)
	 *
	 * @param {Object | any} reduced merged object and reduced
	 * @return {Function} Function(values: Object)
	 *
	 * @see https://www.airpair.com/javascript/javascript-array-reduce
	 * @see ChainedMap
	 * @NOTE could curry, but this is super hot function
	 *
	 * @example
	 *
	 *   const map = new Map()
	 *   map.set('eh', true)
	 *   const nested = new Map()
	 *   nested.set('reduced', true)
	 *
	 *   const chain = {
	 *     entries() {
	 *       return {
	 *         nested: reduce(nested),
	 *         key: true,
	 *       }
	 *     },
	 *   }
	 *   const reduced = reduce(map)
	 *   reduceEntries(reduced)({chain})
	 *   // => {
	 *     eh: true,
	 *     chain: {
	 *       nested: {
	 *         reduced: true,
	 *         key: true,
	 *       },
	 *     },
	 *   }
	 *
	 * @example
	 *
	 *   const reducedIgnored = {
	 *     canada: {
	 *       store: chain,
	 *     },
	 *   }
	 *   const ignored = reduceEntries(reduced)(reducedIgnored)
	 *   //=> {
	 *     eh: true,
	 *     chain: {
	 *       nested: {
	 *         reduced: true,
	 *       },
	 *       key: true,
	 *     },
	 *   }
	 *
	 */
	var entries = function (reduced) { return function (obj$$1) {
	  var keys$$2 = keys(obj$$1);

	  for (var k = 0; k < keys$$2.length; k++) {
	    var key = keys$$2[k];

	    if (ignored(key)) {
	      continue
	    }

	    var value = obj$$1[key];
	    // @NOTE could use hasInMatching here
	    if (obj(value) && _function(value.entries)) {
	      assign(reduced, {[key]: value.entries(true) || {}});
	    }
	  }

	  return reduced
	}; };

	/* ___filename___: dist/deps/is/iterator.js */


	/**
	 * @param  {*} x value
	 * @return {boolean} isIterator
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isIterator
	 * @see https://github.com/jonschlinkert/kind-of/pull/12
	 *
	 * @example
	 *
	 *  isIterator(new Set().values())
	 *  //=> true
	 *  isIterator(new Map.entries())
	 *  //=> true
	 *  isIterator(new Map())
	 *  //=> false
	 *  isIterator('')
	 *  //=> false
	 *  isIterator(1)
	 *  //=> false
	 *
	 * @example
	 *
	 *  const e = {}
	 *  eh[Symbol.toStringTag] = '[Map Iterator]'
	 *  isIterator(eh)
	 *  //=> true
	 *  eh[Symbol.toStringTag] = '[Set Iterator]'
	 *  isIterator(eh)
	 *  //=> true
	 *
	 * @example
	 *
	 *  class Eh extends Set()
	 *  isIterator(new Eh().values())
	 *  //=> true
	 *
	 */
	// eslint-disable-next-line
	var iterator$2 = function (x) { return ~toS(x).indexOf('Iterator'); };

	/* ___filename___: dist/deps/is/iterator.js */

	/* ___filename___: dist/deps/to-arr.js */







	/**
	 * @desc anything into an array
	 * @sig * => Array
	 * @since 0.0.1
	 *
	 * @param  {any} ar turn this into an array
	 * @return {Array} anything into an array
	 *
	 * @tests deps/to-arr
	 * @types deps
	 *
	 * @example
	 *
	 *   toarr([])
	 *   // => []
	 *
	 *   toarr('')
	 *   // => ['']
	 *
	 *   toarr('1,2')
	 *   // => ['1', '2']
	 *
	 *   toarr('1,2')
	 *   // => ['1', '2']
	 *
	 *   const map = new Map()
	 *   map.set('eh', true)
	 *   const arr = toarr(map.entries())
	 *   // => ['eh', true]
	 *
	 *   const set = new Set()
	 *   set.add('eh')
	 *   set.add(true)
	 *   const arr = toarr(map.entries())
	 *   // => ['eh', true]
	 *
	 *   toarr('').concat(toarr(false)).concat(toarr(null))
	 *   // => ['', false, null]
	 *
	 */
	var toArr = function(ar) {
	  // @NOTE: !'' === true
	  if (stringPrimitive(ar)) { return ar.includes(',') ? ar.split(',') : [ar] }
	  else if (!ar) { return [ar] }
	  else if (array(ar)) { return ar }
	  else if (set(ar) || map(ar) || ar.values) {
	    /**
	     * @desc when using `new Set().values`... no forEach o.o
	     *       .values is also on `Object`...
	     */
	    return from(ar.values(ar))
	  }
	  else if (iterator$2(ar)) { return from(ar) }
	  else { return [ar] }
	};

	/* ___filename___: dist/deps/to-arr.js */

	/* ___filename___: dist/deps/array/concat.js */


	/**
	 * @desc concat two values, coerce to arrays
	 * @since 4.0.0
	 * @memberOf array
	 *
	 * @param  {Array | *} one toArr1
	 * @param  {Array | *} two toArr2
	 * @return {Array} [one, two]
	 *
	 * @see deps/to-arr
	 * @func
	 * @name concat
	 *
	 * @example
	 *
	 *   concat([1], [2])          //=> [1, 2]
	 *   concat([1], 2)            //=> [1, 2]
	 *   concat(1, 2)              //=> [1, 2]
	 *   concat(new Set([1]), 2)   //=> [1, 2]
	 *
	 *   // kind of weird...
	 *   concat(null, 2)           //=> [2]
	 *   concat(undefined, 2)      //=> [2]
	 *   concat(1, null)           //=> [1, null]
	 *
	 */
	var concat = function (one, two) { return toArr(one || []).concat(toArr(two)); };

	/* ___filename___: dist/deps/fp/always.js */
	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @alias always
	 * @alias constant
	 * @func
	 * @memberOf fp
	 * @since v5.0.0
	 * @category Function
	 * @sig a -> (* -> a)
	 *
	 * @param {*} value The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 *
	 * {@link http://underscorejs.org/#constant underscore-constant}
	 * {@link https://github.com/lodash/lodash/issues/1010 lodash-constant}
	 * {@link https://github.com/ramda/ramda/issues/1038 ramda-constant-docs-issue}
	 * {@link https://github.com/ramda/ramda/blob/master/src/always.js ramda-always}
	 * @see {@link ramda-constant-docs-issue}
	 * @see {@link ramda-always}
	 * @see {@link lodash-constant}
	 * @see {@link underscore-constant}
	 *
	 * @types fp
	 * @tests fp/always
	 *
	 * @example
	 *
	 *      var t = always('Tee');
	 *      t(); //=> 'Tee'
	 *
	 */

	/* ___filename___: dist/deps/meta/transformers.js */
	/* istanbul ignore next: wip build */
	var transformers = process.env.NODE_ENV === 'production'
	  ? 'transformers'
	  : 'transformers';

	/* ___filename___: dist/deps/meta/observers.js */
	/* istanbul ignore next: wip build */
	var observers = process.env.NODE_ENV === 'production'
	  ? 'observers'
	  : 'observers';

	/* ___filename___: dist/deps/meta/shorthands.js */
	/* istanbul ignore next: wip build */
	var shorthands = process.env.NODE_ENV === 'production'
	  ? 'shorthands'
	  : 'shorthands';

	/* ___filename___: dist/deps/meta/decorated.js */
	/* istanbul ignore next: wip build */
	var decorated = process.env.NODE_ENV === 'production'
	  ? 'decorated'
	  : 'decorated';

	/* ___filename___: dist/deps/array/concat.js */

	/* ___filename___: dist/deps/fp/always.js */

	/* ___filename___: dist/deps/meta/transformers.js */

	/* ___filename___: dist/deps/meta/observers.js */

	/* ___filename___: dist/deps/meta/shorthands.js */

	/* ___filename___: dist/deps/meta/decorated.js */

	/* ___filename___: dist/deps/meta/meta.js */
	// without it, the arguments & caller are uglier when drbugging













	// will expand this later
	var isInKeyMapAsSet = function (x) { return x === observers; };
	var emptyArray = []; // always([])

	// @NOTE: using `[]` deopts o.o
	// eslint-disable-next-line
	// this.shorthands = new Array()

	/**
	 * @since  4.0.0
	 * @param  {Chain} _this
	 * @return {Chain}
	 */
	function getMeta(_this) {
	  // if we already have it, keep it
	  if (_this.meta) { return _this.meta }

	  // the store
	  // shorthands: key -> method
	  var store = {};

	  // --- uglifiable functions

	  /** @desc initialize the store maps when we need them */
	  /* prettier-ignore */
	  var ensureInitialized = function (name, value) {
	    if (!_undefined(store[name])) { return }

	    // if (
	    //   name === TRANSFORMERS_KEY ||
	    //   name === SHORTHANDS_KEY ||
	    //   name === DECORATED_KEY
	    // ) {
	    //   store[name] = new Map()
	    // }
	    // else
	    if (isInKeyMapAsSet(name)) {
	      store[name] = new Set();
	    }
	    else {
	      store[name] = new Map();
	    }
	  };

	  /**
	   * @since  4.0.0
	   * @param  {Primitive} key
	   * @param  {Primitive | undefined} [prop=undefined]
	   * @return {boolean}
	   */
	  var has = function (key, prop) {
	    if (_undefined(prop)) { return !!store[key].size }
	    else { return store[key].has(prop) }
	  };
	  /**
	   * @since  4.0.0
	   * @param  {Primitive} key
	   * @param  {Primitive | undefined} [prop=undefined]
	   * @return {any}
	   */
	  var get = function (key, prop) { return (has(key, prop) ? store[key].get(prop) : emptyArray); };

	  /**
	   * @since  4.0.0
	   * @param  {Primitive} key
	   * @param  {Primitive | undefined} [prop=undefined]
	   * @param  {Primitive | undefined} [value=undefined]
	   * @return {void}
	   */
	  var set$$2 = function (key, prop, value) {
	    var storage = store[key];
	    // when it's a set, we have no `prop`, we just have .add
	    // so `prop = value` && `value = undefined`
	    if (set(storage)) {
	      storage.add(prop);
	    }
	    else {
	      // if (!has(key, prop)) return
	      var existing = storage.get(prop);
	      var val = concat(existing, value);
	      storage.set(prop, val);
	    }
	  };

	  /**
	   * @since 4.0.0
	   *
	   * @desc a single easily minifiable function,
	   *       dynamically setting & getting depending on arguments
	   *       to avoid nested property accessing
	   *       only instantiating when values are **addded**
	   *
	   * @param {Primitive} key
	   * @param {Primitive | undefined} [prop=undefined]
	   * @param {undefined | any} [value=undefined] (when no value, it's a getter)
	   * @return {Array | Chain} depending on args
	   */
	  function meta(key, prop, value) {
	    if (process.env.NODE_ENV === 'DEBUG') {
	      console.log('USING META', {key: key, prop: prop, value: value});
	    }

	    /* prettier-ignore */
	    if (_undefined(value)) {
	      // when we want to just access the property, return an array
	      // @example `.meta('transformers')`
	      if (_undefined(prop)) {
	        if (_undefined(store[key])) { return emptyArray }
	        else { return store[key].size === 0 ? emptyArray : from(store[key].values()) }
	      }
	      // we have `key, prop`
	      //
	      // 1: should `prop` be a value, (isSet?)
	      else if (isInKeyMapAsSet(key)) {
	        ensureInitialized(key);
	        set$$2(key, prop);
	      }
	      // 2: prop is a key, we want to return the [..] for that specific property
	      // @example `.meta('transformers', 'eh')`
	      else if (_undefined(store[key])) { return emptyArray }
	      else { return toArr(get(key, prop)) }
	    }
	    // we have `key, prop, value`
	    else {
	      ensureInitialized(key);
	      // we have a value, let's add it
	      set$$2(key, prop, value);
	    }
	    return _this
	  }

	  // for debugging
	  meta.store = store;
	  // meta.debug = false

	  return meta
	}

	var meta = getMeta;

	/* ___filename___: dist/deps/meta/meta.js */

	var index$8 = meta;

	/* ___filename___: dist/Chainable.js */

	/* ___filename___: dist/deps/reduce/entries.js */

	/* ___filename___: dist/ChainedMapBase.js */










	/**
	 * this is to avoid circular requires
	 * because MergeChain & MethodChain extend this
	 * yet .method & .merge use those chains
	 * ...also, it serves as a non-references creator for extending new instances
	 *    of Chainable, where it splits into (Map | Set) -> composed prototype decorators
	 *
	 *
	 * @file
	 * @since 4.0.0-alpha.1
	 * @inheritdoc
	 * @class ChainedMapBase
	 * @member ChainedMapBase
	 * @category Chainable
	 * @extends {Chainable}
	 * @type {Chainable}
	 *
	 * @types ChainedMapBase
	 * @tests ChainedMap
	 *
	 * @prop {Meta} meta meta fn
	 * @prop {Map} store main store
	 *
	 * {@link https://tc39.github.io/ecma262/#sec-map-objects emca-map}
	 * {@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}
	 * @see {@link pony-map}
	 * @see {@link mozilla-map}
	 * @see {@link emca-map}
	 *
	 * @see ChainedMap
	 * @see Chainable
	 * @see MergeChain
	 * @see MethodChain
	 * @see ChainedMap
	 *
	 */

	var ComposeChainedMapBase = function (Target) {
	  return (function (Target) {
	    function ChainedMapBase(parent) {
	      Target.call(this, parent);

	      this.store = new Map();
	      this.meta = index$8(this);
	    }

	    if ( Target ) ChainedMapBase.__proto__ = Target;
	    ChainedMapBase.prototype = Object.create( Target && Target.prototype );
	    ChainedMapBase.prototype.constructor = ChainedMapBase;

	    /**
	     * @desc   tap a value with a function
	     *         @modifies this.store.get(name)
	     * @memberOf ChainedMapBase
	     * @version 0.7.0
	     * @since 4.0.0-alpha.1 <- moved from transform & shorthands
	     *
	     * @param  {string | any} name key to `.get`
	     * @param  {Function} fn function to tap with
	     * @return {Chain} @chainable
	     *
	     * {@link https://github.com/sindresorhus/awesome-tap awesome-tap}
	     * {@link https://github.com/midknight41/map-factory map-factory}
	     * {@link https://github.com/webpack/tapable tapable}
	     * @see {@link tapable}
	     *
	     * @see ChainedMapBase.set
	     * @see ChainedMapBase.get
	     *
	     * @example
	     *
	     *    chain
	     *      .set('moose', {eh: true})
	     *      .tap('moose', moose => {moose.eh = false; return moose})
	     *      .get('moose')
	     *
	     *    // => {eh: false}
	     *
	     * @example
	     *
	     *   const entries = new Chain()
	     *     .set('str', 'emptyish')
	     *     .tap('str', str => str + '+')
	     *     .set('arr', [1])
	     *     .tap('arr', arr => arr.concat([2]))
	     *     .entries()
	     *
	     *   //=> {str: 'emptyish+', arr: [1, 2]}
	     *
	     */
	    ChainedMapBase.prototype.tap = function tap (name, fn) {
	      return this.set(name, fn(this.get(name), index$2))
	    };

	    /**
	     * @desc checks each property of the object
	     *       calls the chains accordingly
	     *
	     * @memberOf ChainedMapBase
	     * @since 0.5.0
	     *
	     * @param {Object} obj object with functions to hydrate from
	     * @return {Chainable} @chainable
	     *
	     * @TODO could also add parsing stringified
	     *
	     * @example
	     *
	     *     const from = new Chain().from({eh: true})
	     *     const eh = new Chain().set('eh', true)
	     *     eq(from, eh)
	     *     // => true
	     *
	     */
	    ChainedMapBase.prototype.from = function from (obj) {
	      var this$1 = this;

	      var keys$$1 = keys(obj);

	      for (var k = 0; k < keys$$1.length; k++) {
	        var key = keys$$1[k];
	        var value = obj[key];
	        var fn = this$1[key];

	        if (fn && fn.merge) {
	          fn.merge(value);
	        }
	        else if (_function(fn)) {
	          fn.call(this$1, value);
	        }
	        else {
	          this$1.set(key, value);
	        }
	      }

	      return this
	    };

	    /**
	     * @desc shorthand methods, from strings to functions that call .set
	     * @since 0.4.0
	     * @memberOf ChainedMapBase
	     *
	     * @param  {Array<string>} methods decorates/extends an object with new shorthand functions to get/set
	     * @return {ChainedMapBase} @chainable
	     *
	     * @example
	     *
	     *    const chain1 = new Chain()
	     *    chain1.extend(['eh'])
	     *
	     *    const chain2 = new Chain()
	     *    chain2.eh = val => this.set('eh', val)
	     *
	     *    eq(chain2.eh, chain1.eh)
	     *    //=> true
	     *
	     */
	    ChainedMapBase.prototype.extend = function extend (methods) {
	      var this$1 = this;

	      methods.forEach(function (method) {
	        this$1.meta(shorthands, method);
	        this$1[method] = function (value) { return this$1.set(method, value); };
	      });
	      return this
	    };

	    /**
	     * @desc spreads the entries from ChainedMapBase.store (Map)
	     *       return store.entries, plus all chain properties if they exist
	     *
	     * @memberOf ChainedMapBase
	     * @version 4.0.0 <- improved reducing
	     * @since 0.4.0
	     *
	     * @param  {boolean} [chains=false] if true, returns all properties that are chains
	     * @return {Object} reduced object containing all properties from the store, and when `chains` is true, all instance properties, and recursive chains
	     *
	     * //
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries mozilla-map-entries}
	     * @see {@link mozilla-map-entries}
	     *
	     * @example
	     *
	     *    map.set('a', 'alpha').set('b', 'beta').entries()
	     *    //=> {a: 'alpha', b: 'beta'}
	     *
	     */
	    ChainedMapBase.prototype.entries = function entries$$1 (chains) {
	      var reduced = index$6(this.store);
	      if (_undefined(chains)) { return reduced }

	      var reducer = entries(reduced);
	      reducer(this);
	      reducer(reduced);
	      return reduced
	    };

	    /**
	     * @desc get value for key path in the Map store
	     *       ❗ `debug` is a special key and is *not* included into .store
	     *          it goes onto .meta
	     *
	     * @memberOf ChainedMapBase
	     * @version 4.0.0 <- moved debug here
	     * @since 0.4.0
	     *
	     * @param  {Primitive} key Primitive data key used as map property to reference the value
	     * @return {any} value in .store at key
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get mozilla-map-get}
	     * @see {@link mozilla-map-get}
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *    chain.set('eh', true)
	     *    chain.get('eh')
	     *    //=> true
	     *
	     *    chain.get('nope')
	     *    //=> undefined
	     *
	     */
	    ChainedMapBase.prototype.get = function get (key) {
	      if (key === 'debug') { return this.meta.debug }
	      return this.store.get(key)
	    };

	    /**
	     * @desc sets the value using the key on store
	     *       adds or updates an element with a specified key and value
	     *
	     * @memberOf ChainedMapBase
	     * @since 0.4.0
	     *
	     * @param {Primitive} key Primitive to reference the value
	     * @param {any} value any data to store
	     * @return {ChainedMapBase} @chainable
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set mozilla-map-set}
	     *
	     * @see {@link mozilla-map-set}
	     * @see ChainedMapBase.store
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *    chain.set('eh', true)
	     *    chain.get('eh')
	     *    //=> true
	     *
	     */
	    ChainedMapBase.prototype.set = function set (key, value) {
	      this.store.set(key, value);
	      return this
	    };

	    return ChainedMapBase;
	  }(Target))
	};

	/**
	 * @desc ChainedMapBase composer
	 * @alias ComposeMap
	 * @type {Composer}
	 * @method compose
	 * @memberOf ChainedMapBase
	 *
	 * @param {Class | Object | Composable} [Target=Chainable] class to extend
	 * @return {Class} ChainedMapBase
	 *
	 * @example
	 *
	 *    const heh = class {}
	 *    const composed = ChainedMapBase.compose(heh)
	 *    const hehchain = new Composed()
	 *    hehchain instanceof heh
	 *    //=> true
	 *
	 */
	var cmc = ComposeChainedMapBase(Chainable);
	cmc.compose = ComposeChainedMapBase;

	var ChainedMapBase = cmc;

	/* ___filename___: dist/deps/env/debug.js */
	var debug = process.env.NODE_ENV === 'debug'; // || process.env.DEBUG = true

	/* ___filename___: dist/deps/util/lengthFromZero.js */
	/**
	 * when length > 1, use length-1
	 * otherwise, when length == 1, use 0
	 * default, use length
	 *
	 * @memberOf util
	 * @since 5.0.0-beta.2
	 * @name lengthFromZero
	 *
	 * @TODO lense to use an object, or transform it to one with .length?
	 *  const len = prop('length')
	 *  // when isObj, use len, otherwise, value
	 *  const coerceLength = lense([isObj, len])
	 *
	 * @param {Array | Object | number} obj with length
	 * @return {number} obj length from 0
	 *
	 * @see util/length
	 * @see util/lengthMinusOne
	 *
	 * @example
	 *
	 *  lengthFromZero([1])        //=> 1
	 *  lengthFromZero([])         //=> 0
	 *  lengthFromZero([1, 2, 3])  //=> 2
	 *
	 */
	var lengthFromZero = function (obj) { return (obj.length > 1 ? obj.length - 1 : obj.length === 1 ? 1 : 0); };

	/* ___filename___: dist/deps/util/lengthFromZero.js */

	/* ___filename___: dist/deps/util/keysObjOrArray.js */





	/**
	 * Creates an array of the own enumerable property names of `object`.
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @since 0.1.0
	 * @category Object
	 * @name keysObjOrArray
	 *
	 * @param {Object} obj The object to query.
	 * @return {Array} Returns the array of property names.
	 *
	 * @see deps/util/lengthFromZero
	 * @see deps/util/props
	 * @see values, valuesIn
	 *
	 * {@link https://github.com/lodash/lodash/blob/master/keys.js lodash-keys}
	 * {@link https://github.com/lodash/lodash/blob/master/.internal/getAllKeys.js lodash-get-all-keys}
	 * @see {@link lodash-keys}
	 * @see {@link lodash-get-all-keys}
	 *
	 * @TODO https://github.com/lodash/lodash/blob/master/.internal/arrayLikeKeys.js
	 *
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1
	 *   this.b = 2
	 * }
	 *
	 * Foo.prototype.c = 3
	 *
	 * keys(new Foo)
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * keys('hi')
	 * // => ['0', '1']
	 *
	 */
	var keysObjOrArray = function keys$$2(obj$$2) {
	  return array(obj$$2)
	    ? new Array(lengthFromZero(obj$$2))
	    : obj(obj$$2) ? keys(obj$$2) : []

	  // for (var key in obj) gathered.push(key)
	  // return gathered
	};

	/* ___filename___: dist/deps/util/keysObjOrArray.js */

	/* ___filename___: dist/deps/is/empty.js */





	/* prettier-ignore */
	/**
	 * Returns `true` if the given value is its type's empty value;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf is
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> Boolean
	 *
	 * @param {*} x value to check if empty
	 * @return {boolean}
	 *
	 * @see empty
	 * @see https://github.com/ramda/ramda/issues/1228
	 *
	 * @example
	 *
	 *      isEmpty([1, 2, 3]);   //=> false
	 *      isEmpty([]);          //=> true
	 *      isEmpty('');          //=> true
	 *      isEmpty(null);        //=> false
	 *      isEmpty({});          //=> true
	 *      isEmpty({length: 0}); //=> false
	 *
	 */
	var empty = function isEmpty(x) {
	  if (x === '') { return true }
	  else if (nullOrUndefined(x)) { return false }
	  else if (obj(x) || array(x)) { return keysObjOrArray(x).length === 0 }
	  else { return false }

	  // else return (
	  //   // null|undefined = empty
	  //   // isNullOrUndefined(x) ||
	  //   // '' = empty
	  //   // [] | {} = empty
	  //   keys(x).length === 0
	  // )
	};

	/* ___filename___: dist/deps/is/error.js */


	/**
	 * @param  {*} x value
	 * @return {boolean} isError
	 *
	 * @since 4.0.0
	 * @memberOf is
	 * @func isError
	 *
	 * @example
	 *
	 *  isError(new Error())
	 *  //=> true
	 *  isError(new Error().stack)
	 *  //=> false
	 *  isError(1)
	 *  //=> false
	 *  isError('')
	 *  //=> false
	 *
	 * @example
	 *
	 *  const e = {}
	 *  eh[Symbol.toStringTag] = '[Object Error]'
	 *  isError(eh)
	 *  //=> true
	 *
	 * @example
	 *
	 *  class Eh extends Error()
	 *  isError(new Eh())
	 *  //=> true
	 *
	 */
	var error$1 = function isError(x) {
	  // console.log('isError', toS(x), x)
	  return toS(x) === '[object Error]'
	  // x instanceof Error ||
	};

	/* ___filename___: dist/deps/is/symbol.js */


	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @memberOf is
	 *
	 * @param {*} value The value to check.
	 * @return {boolean} Returns `true` if `value` is a symbol, else `false`.
	 *
	 * @example
	 *
	 * isSymbol(Symbol.iterator)
	 * // => true
	 *
	 * isSymbol('abc')
	 * // => false
	 *
	 */
	var symbol = function (x) { return toS(x) === '[object Symbol]'; };

	/* ___filename___: dist/deps/conditional/or.js */


	/**
	 * @desc first fn || second fn, curried
	 * @name or
	 * @memberOf conditional
	 * @since  4.0.1
	 * @func
	 *
	 * @param  {Function} left first fn
	 * @param  {Function} right second fn
	 * @param  {*} x value to pass into left & right, curried
	 * @return {boolean} one of the functions return truthy
	 *
	 * @example
	 *    const {isTrue, isFalse} = require('chain-able')
	 *
	 *    const either = or(isFalse, isTrue)
	 *
	 *    either([true])
	 *    //=> true
	 *
	 *    either([new Boolean(true)])
	 *    //=> false
	 *
	 *    either([1])
	 *    //=> false
	 *
	 *    // because curried
	 *    or(isTrue, isFalse, true) //=> true
	 *
	 */
	var or = curry(3, function (left, right, x) { return left(x) || right(x); });

	/* ___filename___: dist/deps/is/async.js */


	/**
	 * @category Lang
	 *
	 * @param  {*} x value
	 * @return {boolean} isAsync
	 * @since 4.0.0-beta.2
	 *
	 * @memberOf is
	 * @func isAsync
	 * @see is/toS
	 *
	 * @example
	 *
	 *  isAsync(async function() {})
	 *  //=> true
	 *  isAsync(new Promise(r => r()))
	 *  //=> false
	 *  isAsync({})
	 *  //=> false
	 *  isAsync(function() {})
	 */
	var async = function isAsync(x) {
	  return toS(x) === '[object AsyncFunction]'
	};

	/* ___filename___: dist/deps/is/promise.js */


	/**
	 * @desc is a Promise
	 * @param  {*} x value
	 * @return {boolean} x isPromise
	 *
	 * @since 4.0.0-beta.2
	 * @memberOf is
	 * @func isPromise
	 *
	 * @see https://github.com/jonschlinkert/kind-of/blob/master/index.js#L66
	 * @see https://github.com/sindresorhus/promise-fun
	 *
	 * @example
	 *
	 *  isPromise(new Promise(r => r))
	 *  //=> true
	 *  isPromise(async function() {})
	 *  //=> false // on some environments, true
	 *
	 *  isPromise({})
	 *  //=> false
	 *  isPromise(Object.create(null))
	 *  //=> false
	 *  isPromise(null)
	 *  //=> false
	 *  isPromise(new Set())
	 *  //=> false
	 *  isPromise(function() {})
	 *  //=> false
	 *  isPromise('')
	 *  //=> false
	 *  isPromise(1)
	 *  //=> false
	 *
	 */
	var promise = function (x) { return toS(x) === '[object Promise]'; };

	/* ___filename___: dist/deps/conditional/or.js */

	/* ___filename___: dist/deps/is/async.js */

	/* ___filename___: dist/deps/is/promise.js */

	/* ___filename___: dist/deps/is/asyncish.js */




	/**
	 * @desc async function or promise
	 * @since 4.0.0-beta.2
	 * @memberOf is
	 *
	 * @param  {*} x value
	 * @return {boolean} x isAsyncish
	 *
	 * @category Lang
	 * @func
	 * @name isAsyncish
	 * @extends isAsyncish
	 * @extends isPromise
	 * @variation isAsyncish OR isPromise
	 *
	 * @example
	 *
	 *  isAsyncish(async function() {})   //=> true
	 *  isAsyncish(new Promise(r => r())) //=> true
	 *
	 *  isAsyncish({})                    //=> false
	 *  isAsyncish(function() {})         //=> false
	 *
	 */
	var asyncish = or(async, promise);

	/* ___filename___: dist/deps/is/numberPrimitive.js */
	/**
	 * @param  {*} x value
	 * @return {boolean} isNumberPrimitive
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isNumberPrimitive
	 * @see is/real
	 *
	 * @example
	 *
	 *  isNumberPrimitive(1)
	 *  //=> true
	 *  isNumberPrimitive(Number(1))
	 *  //=> true
	 *  isNumberPrimitive(NaN)
	 *  //=> true
	 *  isNumberPrimitive(new Number(1))
	 *  //=> false
	 *
	 *  isNumberPrimitive(null)
	 *  //=> false
	 *  isNumberPrimitive(undefined)
	 *  //=> false
	 *  isNumberPrimitive(void 0)
	 *  //=> false
	 *  isNumberPrimitive({})
	 *  //=> false
	 *  isNumberPrimitive('')
	 *  //=> false
	 *  isNumberPrimitive(false)
	 *  //=> false
	 *
	 */
	var numberPrimitive = function (x) { return typeof x === 'number'; };

	/* ___filename___: dist/deps/is/numberPrimitive.js */

	/* ___filename___: dist/deps/is/primitive.js */





	/**
	 * Checks if `value` is classified as a **primitive**
	 * `(number|string|boolean|null|undefined)`
	 *
	 * @version 5.0.0 added booleanPrimitive, is in own file
	 * @since 4.0.0 was in another file
	 * @category Lang
	 * @memberOf is
	 * @param {*} x The value to check.
	 * @returns {boolean} x is number|string|boolean|null|undefined
	 *
	 * @see http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html
	 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
	 * @see http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
	 *
	 * @example
	 *
	 * isPrimitive('abc')            // => true
	 * isPrimitive(1)                // => true
	 * isPrimitive('')               // => true
	 * isPrimitive(null)             // => true
	 * isPrimitive(undefined)        // => true
	 * isPrimitive(void 0)           // => true
	 *
	 * isPrimitive(new String('abc')) // => false
	 * isPrimitive([])                // => false
	 * isPrimitive(() => {})          // => false
	 * isPrimitive({})                // => false
	 *
	 */
	var primitive$2 = function isPrimitive(node) {
	  return (
	    nullOrUndefined(node) ||
	    stringPrimitive(node) ||
	    numberPrimitive(node) ||
	    booleanPrimitive(node)
	  )
	};

	/* ___filename___: dist/deps/is/error.js */

	/* ___filename___: dist/deps/is/symbol.js */

	/* ___filename___: dist/deps/is/asyncish.js */

	/* ___filename___: dist/deps/is/primitive.js */

	/* ___filename___: dist/deps/is/iteratable.js */









	/**
	 * @desc is able to be iterated on
	 *
	 * @param  {*}  x node is iteratable
	 * @return {boolean} x isIteratable
	 *
	 * @extends isObj
	 * @extends isArray
	 * @extends isPrimitive
	 * @extends isRegExp
	 * @extends isDate
	 * @extends isSymbol
	 * @extends isAsync
	 * @extends isError
	 *
	 * @example
	 *
	 *  isIteratable([])                     //=> true
	 *  isIteratable({})                     //=> true
	 *  isIteratable(new Date())             //=> false
	 *  isIteratable(Symbol('eh'))           //=> false
	 *  isIteratable(new Promise(r => r()))  //=> false
	 *  isIteratable(new Error('eh'))        //=> false
	 *
	 */
	var iteratable = function isIteratable(x) {
	  // ez ones
	  if (objNotNull(x) || array(x)) { return true }

	  var notIteratable =
	    primitive$2(x) ||
	    regexp(x) ||
	    date(x) ||
	    symbol(x) ||
	    asyncish(x) ||
	    // isNative(x) ||
	    error$1(x);

	  // not-not is iteratable
	  return !notIteratable

	  // if (notIteratable) return false
	  // else return true
	  // if (isNullOrUndefined(node)) {
	  // }
	  // else if (isString(node)) {
	  // }
	  // else if (isNumber(node)) {
	  // }
	  // else if (isBoolean(node)) {
	  // }
	  // else if (isRegExp(node)) {
	  // }
	  // else if (isDate(node)) {
	  // }
	  // else if (isSymbol(node) || isAsyncish(node)) {
	  // }
	  // else if (isNative(node)) {
	  // }
	  // else {
	  //   return true
	  // }
	  // return false
	};

	// function isSpecial(x) {
	//   // isPromise(x) ||
	//   return isSymbol(x) || isError(x) ||
	//   //  || isGenerator(x)
	// }

	/* ___filename___: dist/deps/fp/prop.js */


	/**
	 * Returns a function that when supplied an object returns the indicated
	 * property of that object, if it exists.
	 *
	 * @func
	 * @memberOf fp
	 * @since v5.0.0
	 * @category Object
	 * @sig s -> {s: a} -> a | Undefined
	 *
	 * @param {String} p The property name
	 * @param {Object} obj The object to query
	 * @return {*} The value at `obj.p`.
	 *
	 * @types fp
	 * @tests fp/prop
	 * 
	 * @example
	 *
	 *      R.prop('x', {x: 100}); //=> 100
	 *      R.prop('x', {}); //=> undefined
	 *
	 */
	var prop = curry(2, function (p, obj) { return obj[p]; });

	/* ___filename___: dist/deps/fp/prop.js */

	/* ___filename___: dist/deps/util/length.js */


	// reduces size by hundreds of bytes gzipped...
	var length = prop('length');

	/* ___filename___: dist/deps/util/length.js */

	/* ___filename___: dist/deps/util/lengthMinusOne.js */


	// lengthMinusOne
	var lengthMinusOne = function (x) { return length(x) - 1; };

	/* ___filename___: dist/deps/util/lengthMinusOne.js */

	/* ___filename___: dist/deps/dot/segments.js */




	var cache;

	/**
	 * @name dotPropSegments
	 * @since 4.0.0
	 * @memberOf dot
	 *
	 * @param  {string | Array<string>} path dot-prop-path
	 * @return {Array<string>} array path
	 *
	 * @example
	 *
	 *    dotPropSegments('eh.oh') //=> ['eh', 'oh']
	 *    dotPropSegments(['eh', 'oh']) //=> ['eh', 'oh']
	 *    dotPropSegments('ehoh') //=> ['ehoh']
	 *
	 */
	var segments = function (path) {
	  if (!cache) { cache = new Map(); }
	  if (cache.has(path)) { return cache.get(path) }
	  if (array(path)) { return path }

	  var pathArr = path.split('.');
	  var parts = [];

	  for (var i = 0; i < pathArr.length; i++) {
	    var p = pathArr[i];

	    /**
	     * @example 1
	     *          '\.eh' -1 === '\\'      (true)
	     *                +1 !== undefined (true, eh)
	     *
	     * @example 2
	     *          '.eh'  -1 === '\\'      (false, undefined)
	     *                 +1 !== undefined (true, eh)
	     *
	     * @example 3
	     *          '\.'  -1 === '\\'      (true)
	     *                +1 !== undefined (false, eh)
	     */
	    while (p[lengthMinusOne(p)] === '\\' && !_undefined(pathArr[i + 1])) {
	      p = p.slice(0, -1) + '.' + pathArr[++i];
	    }

	    parts.push(p);
	  }

	  cache.set(path, parts);
	  return parts
	};

	/* ___filename___: dist/deps/dot/dottable.js */




	// const isDot = require('./is/dot')
	// const isDottable = (obj, path) => isObj(obj) && isDot(path)
	var dottable = function (obj$$2, path) { return (obj(obj$$2) && string(path)) || array(path); };

	/* ___filename___: dist/deps/dot/segments.js */

	/* ___filename___: dist/deps/dot/dottable.js */

	/* ___filename___: dist/deps/dot/set.js */





	var set$2 = function dotset(obj$$2, path, value) {
	  if (!dottable(obj$$2, path)) {
	    return
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    var p = pathArr[i];

	    if (!obj(obj$$2[p])) {
	      obj$$2[p] = {};
	    }

	    // isLast
	    if (i === lengthMinusOne(pathArr)) {
	      obj$$2[p] = value;
	    }

	    obj$$2 = obj$$2[p];
	  }
	};

	/* ___filename___: dist/deps/fp/construct.js */
	/* eslint max-len: "OFF" */
	/* eslint consistent-return: "OFF" */



	// const nAry = require('./arity')

	/**
	 * Wraps a constructor function inside a curried function that can be called
	 * with the same arguments and returns the same type. The arity of the function
	 * returned is specified to allow using variadic constructor functions.
	 *
	 * @func
	 * @memberOf fp
	 * @symb 👷
	 * @since 5.0.0-beta.4
	 * @fork v0.4.0
	 * @category Function
	 * @sig Number -> (* -> {*}) -> (* -> {*})
	 *
	 * @param {number} n The arity of the constructor function. (aka, number of args)
	 * @param {Function} Klass The constructor function to wrap. (class to do `new Klass` on)
	 * @return {Function} A wrapped, curried constructor function.
	 *
	 * @extends R.construct
	 * @extends R.constructN
	 * @variation with a single *notNumber* arg, it acts as construct, rather than constructN
	 *
	 * {@link https://github.com/ramda/ramda/blob/master/src/constructN.js ramda-construct}
	 * @see {@link ramda-construct}
	 * @see isNumberPrimitive
	 *
	 * @example
	 *
	 *      // Variadic Constructor function
	 *      function Salad() {
	 *        this.ingredients = arguments;
	 *      }
	 *
	 *      Salad.prototype.recipe = function() {
	 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
	 *        return R.join('\n', instructions);
	 *      };
	 *
	 *      var ThreeLayerSalad = R.constructN(3, Salad);
	 *
	 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
	 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
	 *
	 *      console.log(salad.recipe());
	 *      // Add a dollop of Mayonnaise
	 *      // Add a dollop of Potato Chips
	 *      // Add a dollop of Ketchup
	 *
	 */
	function constructN(n, Klass) {
	  if (!numberPrimitive(n)) {
	    return constructN(n.length, n)
	  }
	  else if (n === 0) {
	    return function () { return new Klass(); }
	  }
	  else {
	    /*, $5, $6, $7, $8, $9 */
	    // curry(nAry(n,
	    return curry(n, function($0, $1, $2, $3, $4) {
	      var len = arguments.length;
	      if (len === 1 || len > 5) { return new Klass($0, $1, $2) }
	      else if (len === 2) { return new Klass($0, $1) }
	      else if (len === 3) { return new Klass($0, $1, $2) }
	      else if (len === 4) { return new Klass($0, $1, $2, $3) }
	      else if (len === 5) { return new Klass($0, $1, $2, $3, $4) }
	      // else if (len=== 6) return new Klass($0, $1, $2, $3, $4, $5)
	      // else if (len=== 7) return new Klass($0, $1, $2, $3, $4, $5, $6)
	      // else if (len=== 8) return new Klass($0, $1, $2, $3, $4, $5, $6, $7)
	      // else if (len=== 9) return new Klass($0, $1, $2, $3, $4, $5, $6, $7, $8)
	      // else if (len === 10) return new Klass($0, $1, $2, $3, $4, $5, $6, $7, $8, $9)
	    })
	    // ))
	  }
	}

	// module.exports = curry(2, constructN)
	var construct = constructN;

	/* ___filename___: dist/deps/fp/construct.js */

	/* ___filename___: dist/deps/construct/regexp.js */


	var regexp$2 = construct(1, RegExp);

	/* ___filename___: dist/deps/construct/regexp.js */

	/* ___filename___: dist/deps/env/debug.js */

	/* ___filename___: dist/deps/traversers/copy.js */








	/* prettier-ignore */
	/**
	 * @desc copy any primitive value, part of clone
	 * @version 5.0.0
	 * @since 3.0.0
	 * @name copy
	 * @see clone
	 * @memberOf Traverse
	 *
	 * @param  {*} src value to copy
	 * @return {*} copied
	 *
	 * @example
	 *
	 *    copy(/eh/gmi) //=> new RegExp('eh', 'gmi')
	 *    copy(new Error('eh')) // => new Error with copied stack + msg
	 *    copy([1]) // => [1]
	 *    copy({}) // => {}
	 *
	 */
	var copy = function copy(src) {
	  if (objNotNull(src)) {
	    var dst;

	    // if (isPrimitive(src)) {
	    // if (isNullOrUndefined(src)) {
	    //   dst = src
	    // }

	    // @TODO @IMPORTANT @FIXME @!IMPORTANT - COVER THIS OR NOT?
	    // for string value number boolean objects...
	    // if (isString(src)) {
	    //   dst = src + ''
	    // }
	    // else if (isNumber(src)) {
	    //   dst = src + 0
	    // }
	    // else if (isBoolean(src)) {
	    //   dst = !!src
	    // }
	    // else

	    // lists... <- needs to have dot-prop support on Map/Set
	    // if (isMap(src)) {
	    //   dst = new Map()
	    //   const obj = reduce(src)
	    //   // src.clear()
	    //   ObjectKeys(obj).forEach(key => dst.set(key, obj[key]))
	    //   return dst
	    // }
	    // else if (isSet(src)) {
	    //   dst = new Set()
	    //   // could clone here too
	    //   const obj = toarr(src)
	    //   // src.clear()
	    //   obj.forEach(value => dst.add(value))
	    //   return dst
	    // }

	    // ------
	    if (array(src)) {
	      dst = [];
	    }
	    // @TODO also would just be isPrimitive
	    // was new date(src.getTime())
	    // || isBoolean(src) || isNumber(src) || isString(src)
	    else if (date(src)) {
	      dst = new src.constructor(src.valueOf());
	    }
	    else if (regexp(src)) {
	      // dst = new RegExp(src)
	      dst = regexp$2(src.src, src.toString().match(/[^/]*$/)[0]);
	      // dst = new RegExp(src.src, src.toString().match(/[^/]*$/)[0])
	      dst.lastIndex = src.lastIndex;
	    }
	    // @TODO this should just be handled by the next condition...
	    // else if (isError(src)) {
	    //   dst = new Error(src.message)
	    //   dst.stack = src.stack
	    // }
	    else {
	      dst = Object.create(Object.getPrototypeOf(src));
	    }

	    // @TODO: copy descriptor
	    // eslint-disable-next-line
	    for (var prop in src) {
	      dst[prop] = src;
	      // const desc = Object.getOwnPropertyDescriptor(src, prop)
	      // Object.defineProperty(dst, prop, desc)
	    }
	    return dst
	  }
	  else {
	    if (debug) {
	      console.log('is not obj', src);
	    }
	    return src
	  }
	};

	/* ___filename___: dist/deps/native/hasOwnProperty.js */
	var hasOwnProperty_1$2 = Object.prototype.hasOwnProperty;

	/* ___filename___: dist/deps/native/hasOwnProperty.js */

	/* ___filename___: dist/deps/util/hasOwnProperty.js */




	var hasOwnPropertyNotNill = function (haystack, needle) { return !nullOrUndefined(haystack) && hasOwnProperty_1$2.call(haystack, needle); };

	var hasOwnProperty_1 = curry(2, hasOwnPropertyNotNill);
	// function(obj, key) {
	//   return key in obj
	// }

	/* ___filename___: dist/deps/util/hasOwnProperty.js */

	/* ___filename___: dist/deps/traversers/eqValue.js */
	// conditionals
	/* eslint complexity: "OFF" */
	// debugging
	/* eslint max-depth: "OFF" */
















	// const ENV_DEBUG = true

	var isNotRealOrNotEqToString = function (x, y) { return !x || !y || x.toString() !== y.toString(); };

	/* prettier-ignore */
	/**
	 * @desc checks value equality, used by eq which compares all types
	 * @since 4.1.0
	 * @memberOf Traverse
	 * @protected
	 *
	 * @TODO !!!!!! USE ENUM FLAGS ON LOOSE TO ALLOW MORE CONFIG FOR ==, COMPARATOR, VALUEOF, walk proto (check ownProps...)...
	 *
	 * @param  {*} x compare to y
	 * @param  {*} y compare to x
	 * @param  {boolean | number} [loose=false] use == checks when typof !=
	 * @return {boolean}
	 *
	 * @example
	 *
	 *    eqValue(1, 1)         //=> true
	 *    eqValue('1', 1)       //=> false
	 *    eqValue('1', 1, true) //=> true
	 *    eqValue({}, {})       //=> true
	 *
	 */
	var eqValue = function eqValue(x, y, loose) {
	  /* istanbul ignore next: dev */
	  if (debug) {
	    console.log('eqValue', {x: x, y: y, loose: loose});
	  }

	  // if (x === y) {
	  //   if (ENV_DEBUG) {
	  //     console.log('===', {x, y})
	  //   }
	  //   // noop
	  // }
	  // else

	  if (nullOrUndefined(x) || nullOrUndefined(y)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('null or undef !=', {x: x, y: y});
	    }

	    if (x !== y) {
	      return false
	    }
	  }
	  else if (typeof x !== typeof y) {
	    // eslint-disable-next-line
	    if (_true(loose) && x == y) {
	      // ignore
	    }
	    else {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('typeof !=', {x: x, y: y});
	      }

	      return false
	    }
	  }
	  // @TODO put this up first?
	  else if (toS(x) !== toS(y)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('diff str types', {x: toS(x), y: toS(y)});
	    }

	    return false
	  }
	  else if (objNotNull(x)) {
	    // use .equals if the method exists
	    if (hasOwnProperty_1(x, 'equals')) {
	      return x.equals(y)
	    }

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('isObjNotNull', {x: x});
	    }

	    // if (isArray(x)) {
	    //   if (x.length !== y.length) {
	    //     return false
	    //   }
	    // }

	    // @NOTE .toString will be covered for functions and regexes in objStrict
	    if (regexp(x) || regexp(y)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('regexp', {x: x, y: y});
	      }

	      if (isNotRealOrNotEqToString(x, y)) {
	        /* istanbul ignore next: dev */
	        if (debug) {
	          console.log('regexp !=', {x: x, y: y});
	        }

	        return false
	      }
	    }
	    else if (date(x) || date(y)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('dates', {x: x, y: y});
	      }

	      if (!date(x) || !date(y) || x.getTime() !== y.getTime()) {
	        /* istanbul ignore next: dev */
	        if (debug) {
	          console.log('!= dates', {x: x, y: y});
	        }

	        return false
	      }
	    }
	    else if (error$1(x) || error$1(y)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('isError', {x: x, y: y});
	      }

	      if (!error$1(x) || !error$1(y) || x.stack !== y.stack) {
	        /* istanbul ignore next: dev */
	        if (debug) {
	          console.log('!= errors', {x: x, y: y});
	        }

	        return false
	      }
	    }

	    // @NOTE this is covered by toString != toString
	    // else if (isArray(x) && !isArray(y)) {
	    //   /* istanbul ignore next: dev */
	    //   if (ENV_DEBUG) {
	    //     console.log('isArray(x) || isArray(y)!')
	    //   }
	    //
	    //   return false
	    // }
	    // else if (!isArray(x) && isArray(y)) {
	    //   /* istanbul ignore next: dev */
	    //   if (ENV_DEBUG) {
	    //     console.log('!isArray(x) && isArray(y):')
	    //   }
	    //
	    //   return false
	    // }

	    // @TODO considering, we already know it is not null & undefined
	    // if (isPrimitive(x) || isPrimitive(y)) {
	    //  return x.valueOf() === y.valueOf()
	    // }

	    else {
	      // @TODO ObjectOrArrayKeys, but have to have else where they are both array
	      //
	      // @NOTE it will traverse through values if they are == here
	      var xKeys = keys(x);
	      var yKeys = keys(y).length;

	      // diff length
	      if (xKeys.length !== yKeys) {
	        /* istanbul ignore next: dev */
	        if (debug) {
	          console.log('!= obj key length', {xKeys: xKeys, yKeys: yKeys});
	        }

	        return false
	      }

	      for (var k = 0; k < xKeys.length; k++) {
	        if (!hasOwnProperty_1(y, xKeys[k])) {
	          /* istanbul ignore next: dev */
	          if (debug) {
	            console.log('!= obj property', {y: y, val: xKeys[k]});
	          }

	          return false
	        }
	      }
	    }
	  }
	  else if (toS(x) === toS(y) && x !== y) {
	    // isString(x) || isBoolean(x) || isNumber(x) || isIterator(x)
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('same str types - diff values', {s: toS(x), x: x, y: y});
	    }

	    return false
	  }
	  // // @TODO put this up first?
	  // else if (toS(x) !== toS(y)) {
	  //   /* istanbul ignore next: dev */
	  //   if (ENV_DEBUG) {
	  //     console.log('diff str types', {x: toS(x), y: toS(y)})
	  //   }
	  //
	  //   return false
	  // }

	  // go deeper
	  else if (_function(x) || _function(y)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('isFunction(x) && isFunction(y):');
	      console.log(x.toString());
	      console.log(y.toString());
	    }

	    if (isNotRealOrNotEqToString(x, y)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('x.toString() !== y.toString()', x.toString() !== y.toString());
	      }
	      return false
	    }
	    else {
	      return true
	    }
	  }
	  // @TODO why?
	  else if (obj(x) && obj(y)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('isObj(x) && isObj(y):');
	    }

	    return false
	  }
	  // else {
	  /* istanbul ignore next: dev */
	  if (debug) {
	    console.log('eqeqeq:', {[toS(x) + 'X']: x, [toS(y) + 'Y']: y});
	  }
	  return true
	  // }
	};

	/* ___filename___: dist/deps/is/empty.js */

	/* ___filename___: dist/deps/traversers/eqValue.js */

	/* ___filename___: dist/deps/traversers/_eq.js */
	// conditionals
	/* eslint complexity: "OFF" */

	// not iterating on empty root
	/* eslint consistent-return: "OFF" */

	// const traverse = require('../traverse')
	// const get = require('../dot/get')






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
	var _eq = function (traverse) { return function eq(a, b, loose) {
	  /* istanbul ignore next: dev */
	  if (debug) {
	    console.log('\n');
	  }

	  var equal = true;
	  var node = b;
	  var nodes = [node];

	  var instance = traverse(a);

	  var notEqual = function () {
	    equal = false;
	    instance.stop();
	  };

	  /* istanbul ignore next: dev */
	  if (debug) {
	    console.log('eq?');
	  }

	  instance.forEach(function(key, y, traverser) {
	    // @NOTE do base comparisons on values that are not actually iteratable
	    // aka, .isRoot
	    if (_null(key)) {
	      // always-valid state opionion vs always-invalid
	      // so it only returns false when it is !== fosho
	      if (eqValue(node, y, loose) === false) { return notEqual() }
	      else { return }
	    }

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('eq: iterating:');
	    }

	    // could use it as a fallback if undefined && y !== undefined
	    // const xyz = get(b, traverser.path.join('.'), b)

	    var x = node;

	    // isNotLeafAndIsObj
	    if (objNotNull(node) && !empty(node)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('is leaf, is not empty node, going deeper');
	      }

	      // so x is our current one,
	      // if node is not empty, use the key, push the value
	      // and when it is empty, and it is not a leaf but has nodes, pop back up
	      x = node[key];
	      nodes.push(x);
	    }

	    // ENV_DEBUG
	    // console.log({[key]: {x, xyz, y, nodes, path: traverser.path.join('.')}})

	    // for next loop!!!
	    if (!traverser.isLeaf && !empty(nodes)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('is not leaf, has nodes stack, pop');
	      }
	      node = nodes.pop();
	    }

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log({key: key, y: y, x: x, a: a, b: b});
	    }

	    var eqv = eqValue(x, y, loose);

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log({eqv: eqv});
	    }

	    if (eqv === false) {
	      // equal
	      notEqual();
	    }
	  });

	  // cleanup
	  nodes = undefined;
	  node = undefined;

	  return equal
	}; };

	/* ___filename___: dist/deps/cache/standardReleaser.js */
	/* eslint consistent-this: ["error", "Klass"] */



	/**
	 * @desc call destructor on a pooled instance, put it back in the pool
	 * @since 5.0.0
	 * @memberOf pooler
	 *
	 * @param  {Object} instance call destructor
	 * @return {void}
	 *
	 * @example
	 *
	 *    class Eh {}
	 *    addPoolingTo(Eh)
	 *    const eh = Eh.getPooled()
	 *    eh.release()
	 *
	 */
	var standardReleaser = function standardReleaser(instance) {
	  var Klass = this;

	  if (debug) {
	    if (instance instanceof Klass) {
	      throw new Error(
	        "Trying to release an instance\n        into a pool of a different type."
	      )
	    }
	  }

	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	/* ___filename___: dist/deps/cache/oneArgumentPooler.js */
	/* eslint consistent-this: ["error", "Klass"] */



	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 *
	 * @since 5.0.0
	 * @memberOf pooler
	 *
	 * @param  {Object} copyFieldsFrom obj with instance pool
	 * @return {Object} instance of Klass
	 *
	 * @example
	 *
	 *    class Eh {}
	 *    addPoolingTo(Eh)
	 *    const eh = Eh.getPooled() //=> oneArgumentPooler(Eh)
	 *    eh.release()
	 *
	 */
	var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance
	  }
	  else {
	    return new Klass(copyFieldsFrom)
	  }
	};

	/* ___filename___: dist/deps/cache/standardReleaser.js */

	/* ___filename___: dist/deps/cache/oneArgumentPooler.js */

	/* ___filename___: dist/deps/cache/pooler.js */
	/* eslint consistent-this: ["error", "Klass"] */






	/**
	 * @symb 🎱
	 * @member pooler
	 * @type {Object}
	 *
	 * {@link https://github.com/facebook/react/blob/master/src/renderers/shared/utils/PooledClass.js react-pooler}
	 * @see {@link react-pooler}
	 *
	 * @tests deps/pooler
	 * @types deps.cache.pooler
	 */
	var DEFAULT_POOLER = oneArgumentPooler;
	var DEFAULT_POOL_SIZE = 10;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @since 5.0.0
	 * @memberOf pooler
	 *
	 * @param {Function | Object} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 * @return {Object} enhanced constructor, decorated with pooler
	 *
	 * @example
	 *
	 *    class Eh {}
	 *    addPoolingTo(Eh) // can optionally pass in pooler as second arg
	 *    //=> Eh.instancePool = []
	 *    //=> Eh.getPooled = pooler || singleArgumentPooler
	 *    //=> Eh.poolSize = 10
	 *    //=> Eh.release = standardReleaser
	 *
	 */
	function addPoolingTo(CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;

	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) { NewKlass.poolSize = DEFAULT_POOL_SIZE; }
	  NewKlass.release = standardReleaser;

	  return NewKlass
	}

	var pooler = addPoolingTo;

	/* ___filename___: dist/deps/is/iteratable.js */

	/* ___filename___: dist/deps/dot/set.js */

	/* ___filename___: dist/deps/traversers/copy.js */

	/* ___filename___: dist/deps/traversers/_eq.js */

	/* ___filename___: dist/deps/cache/pooler.js */

	/* ___filename___: dist/deps/traverse.js */
	// conditionals
	/* eslint complexity: "OFF" */

	// inlined rollup
	/* eslint import/max-dependencies: "OFF" */

	// one file
	/* eslint max-lines: "OFF" */

	// debug conditionals
	/* eslint max-depth: "OFF" */



















	// const props = require('./util/props')

	// const ENV_DEBUG = require('./env/debug')
	// const ENV_DEBUG = true
	// const TRUTH = true
	var ENV_DEBUG = false;

	/**
	 * {@link https://github.com/wmira/object-traverse/blob/master/index.js object-traverse}
	 * {@link https://www.npmjs.com/browse/keyword/traverse traverse-js}
	 * {@link https://www.npmjs.com/package/tree-walk tree-walk}
	 * {@link https://www.npmjs.com/package/1tree 1tree}
	 * {@link https://www.npmjs.com/package/pathway pathway}
	 * {@link https://www.npmjs.com/package/@mojule/tree tree}
	 * {@link http://web.archive.org/web/20160930054101/http://substack.net/tree_traversal tree-traversal-article}
	 * {@link https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330 js-trie-medium}
	 * --------------------
	 *
	 * if needed, clone
	 *
	 * first things to check are number/string/boolean/null/undefined
	 *
	 * then check non-iteratables
	 * symbol, promise,
	 *
	 * then check conversions
	 * - map, set
	 *
	 * then check empties
	 * - obj
	 * - fn
	 *
	 * -------
	 *
	 * numbers f-or first/last
	 * and as a sort of hash like
	 * 1 + 2 + 4 = ISLEAF & ISROOT ?
	 *
	 * Array
	 *
	 * Object Function Date Error Map Set
	 *
	 * String
	 * Number NaN Infinity
	 * Boolean
	 *
	 *
	 * null undefined
	 *
	 * Promise Symbol
	 *
	 * ----
	 *
	 * @emits before
	 * @emits pre
	 * @emits post
	 * @emits after
	 */

	/**
	 * @desc Traverse class, pooled
	 * @modifies this.node
	 * @modifies this.parent
	 * @modifies this.root
	 * @since 5.0.0
	 *
	 * @member Traverse
	 * @class
	 * @constructor
	 * @alias IterAteOr
	 * @extends pooler
	 *
	 * @param {Traversable} iteratee value to iterate, clone, copy, check for eq
	 * @param {Object | undefined} [config] wip config for things such as events or configs
	 *
	 * @see {@link tree-traversal-article}
	 * @see traverse
	 * @TODO make this a trie OR a linked-list
	 *
	 * @tests traverse
	 * @types traverse
	 *
	 * @example
	 *
	 *    new Traverse([1])
	 *    new Traverse([], {})
	 *
	 */
	function Traverse(iteratee, config) {
	  // always cleared when done anyway
	  if (_undefined(this.parents)) { this.parents = new Set(); }

	  this.node = iteratee;
	  this.parent = iteratee;
	  this.root = iteratee;
	  this.reset();

	  // to pass in the events (as commented below) without messing up scope?
	  // if (config.on) this.on = config.on
	  return this
	}

	/**
	 * @desc reset the properties when finished pooling or instantiating
	 * @since 5.0.0
	 * @method
	 *
	 * @memberOf Traverse
	 * @modifies Traverse.path
	 * @modifies Traverse.key
	 * @modifies Traverse.isAlive
	 * @modifies Traverse.isCircular
	 * @modifies Traverse.isLeaf
	 * @modifies Traverse.isRoot
	 * @modifies Traverse.depth
	 * @return {void}
	 *
	 * @example
	 *    traverse([]).reset()
	 */
	Traverse.prototype.reset = function() {
	  this.path = [];
	  this.key = undefined;
	  this.isAlive = true;
	  this.isCircular = false;
	  this.isLeaf = false;
	  this.isRoot = true;

	  // iterates +1 so start at 0
	  this.depth = -1;
	};

	/**
	 * @desc find parent,
	 *       is there a parent
	 *       above the current depth
	 *       with the same value,
	 *       making it circular?
	 *
	 * @memberOf Traverse
	 * @since 5.0.0
	 * @private
	 * @method
	 *
	 * @param  {number} depth current depth, to find parent >=
	 * @param  {parent} value parent value to find
	 * @return {boolean} hasParent
	 *
	 * @example
	 *
	 *    var obj = {eh: ['eh']}
	 *    traverse(obj).addParent(0, obj)
	 *
	 */
	Traverse.prototype.hasParent = function(depth, value) {
	  // or array
	  return obj(value) ? this.parents.has(value) : false
	};

	/**
	 * @desc add parent, to prevent circular iterations
	 * @memberOf Traverse
	 * @since 5.0.0
	 * @private
	 * @method
	 *
	 * @param  {number} depth current depth, to add parent to >=
	 * @param  {parent} value parent value to add
	 * @return {void}
	 *
	 * @example
	 *
	 *    var obj = {eh: ['eh']}
	 *    traverse(obj).addParent(0, obj)
	 *
	 */
	Traverse.prototype.addParent = function(depth, value) {
	  // && this.hasParent(value) === false
	  if (obj(value)) { this.parents.add(value); }
	};

	/**
	 * @desc remove all parents, reset the map
	 *
	 * @memberOf Traverse
	 * @since 5.0.0
	 * @private
	 * @method
	 *
	 * @return {void}
	 *
	 * @example
	 *
	 *    var obj = {eh: ['eh']}
	 *    traverse(obj).forEach((key, value, t) => {
	 *       t.parents
	 *       //=> Set([obj])
	 *       t.clear()
	 *       t.parents
	 *       //=> Set[]
	 *    })
	 *
	 */
	Traverse.prototype.clear = function() {
	  // if (!isUndefined(this.parents))
	  this.parents.clear();
	};

	/**
	 * @memberOf Traverse
	 * @since 5.0.0
	 * @private
	 * @method
	 *
	 * @param  {number} depth current depth, to find parents >=
	 * @param  {parent} value parent value to remove
	 * @return {void}
	 *
	 * @example
	 *
	 *    var obj = {eh: ['eh']}
	 *    traverse(obj).removeParent(0, obj)
	 *
	 */
	Traverse.prototype.removeParent = function(depth, value) {
	  this.parents.delete(value);
	};

	/**
	 * @desc this is the main usage of Traverse
	 * @memberOf Traverse
	 * @since 3.0.0
	 * @version 5.0.0
	 * @method
	 *
	 * @param  {Function} cb callback for each iteration
	 * @return {*} mapped result or original value, depends how it is used
	 *
	 * @example
	 *
	 *    traverse([1, 2, 3]).forEach((key, value) => console.log({[key]: value}))
	 *    //=> {'0': 1}
	 *    //=> {'1': 2}
	 *    //=> {'2': 3}
	 *
	 */
	Traverse.prototype.forEach = function iterateForEach(cb) {
	  /* istanbul ignore next: dev */
	  if (ENV_DEBUG) {
	    console.log('\n forEach \n');
	  }

	  var result = this.iterate(cb);

	  // TODO: HERE, WHEN THIS IS ADDED, CAN BREAK SOME TESTS? SCOPED PARENTS MAP?
	  Traverse.release(this);

	  return result
	};

	/**
	 * @desc stop the iteration
	 * @modifies this.isAlive = false
	 * @memberOf Traverse
	 * @method
	 *
	 * @return {void}
	 *
	 * @example
	 *
	 *   traverse({eh: true, arr: []}).forEach((key, val, t) => {
	 *      if (isArray(val)) this.stop()
	 *   })
	 *
	 */
	Traverse.prototype.stop = function stop() {
	  this.isAlive = false;
	  // this.release()
	};

	/**
	 * @TODO skip 1 branch
	 * @version 5.0.0
	 * @since 3.0.0
	 * @memberOf Traverse
	 * @method
	 *
	 * @return {void}
	 *
	 * @example
	 *
	 *    traverse([1, 2, 3, [4]]).forEach((key, val, t) => {
	 *      if (isArray(val)) t.skip()
	 *    })
	 *
	 */
	Traverse.prototype.skip = function skip() {
	  this.skipBranch = true;
	};

	/* prettier-ignore */
	/**
	 * @desc checks whether a node is iteratable
	 *       @modifies Traverse.isIteratable
	 *       @modifies Traverse.isLeaf
	 *       @modifies Traverse.isCircular
	 *
	 * @memberOf Traverse
	 * @protected
	 * @method
	 *
	 * @param  {*} node value to check
	 * @return {void}
	 *
	 * @TODO move into the wrapper? if perf allows?
	 *
	 * @example
	 *
	 *    .checkIteratable({eh: true})
	 *    //=> this.isLeaf = false
	 *    //=> this.isCircular = false
	 *    //=> this.isIteratable = true
	 *
	 *    .checkIteratable({} || [])
	 *    //=> this.isLeaf = true
	 *    //=> this.isCircular = false
	 *    //=> this.isIteratable = false
	 *
	 *    var circular = {}
	 *    circular.circular = circular
	 *    .checkIteratable(circular)
	 *    //=> this.isLeaf = false
	 *    //=> this.isCircular = true
	 *    //=> this.isIteratable = true
	 *
	 */
	Traverse.prototype.checkIteratable = function check(node) {
	  this.isIteratable = iteratable(node);
	  // just put these as an array?
	  if (_true(this.isIteratable)) {
	    // native = leaf if not root
	    this.isLeaf = false;
	    var path = this.path.join('.');

	    if (this.hasParent(path, node)) {
	      /* istanbul ignore next: dev */
	      if (ENV_DEBUG) {
	        console.log('circular___________', {node: node, path: this.path});
	      }
	      this.isCircular = true;
	    }
	    else {
	      this.addParent(path, node);
	      this.isCircular = false;
	    }

	    /* istanbul ignore next: dev */
	    if (ENV_DEBUG) {
	      // console.log('IS_CIRCULAR_JSON', isCircular(node), this.isCircular, node)
	    }
	  }
	  else {
	    this.isLeaf = true;
	    this.isCircular = false;
	  }
	};

	/* prettier-ignore */
	/**
	 * Remove the current element from the output.
	 * If the node is in an Array it will be spliced off.
	 * Otherwise it will be deleted from its parent.
	 *
	 * @memberOf Traverse
	 * @version 5.0.0
	 * @since 2.0.0
	 * @method
	 *
	 * @param {undefined | Object} [arg] optional obj to use, defaults to this.node
	 * @return {void}
	 *
	 * @example
	 *
	 *    traverse([0]).forEach((key, val, it) => it.remove())
	 *    //=> []
	 *
	 *    traverse({eh: true}).forEach((key, val, it) => it.remove())
	 *    //=> {}
	 *
	 *    traverse({eh: true, str: 'stringy'}).forEach((key, val, it) => {
	 *      if (!isString(val)) it.remove()
	 *    })
	 *    //=> {str: 'stringy'}
	 *
	 */
	Traverse.prototype.remove = function removes(arg) {
	  // ignore undefined & non-object/arrays
	  if (_undefined(this.key)) { return }
	  var obj$$2 = arg || this.node;
	  if (!obj(obj$$2)) { return }

	  /* istanbul ignore next: dev */
	  if (ENV_DEBUG) {
	    console.log('remove');
	    console.log({parent: this.parent, key: this.key, obj: obj$$2});
	  }

	  this.removeParent(obj$$2);
	  this.skip();

	  delete obj$$2[this.key];
	  delete this.parent[this.key];

	  /* istanbul ignore next: dev */
	  if (ENV_DEBUG) {
	    console.log('traverse:remove:', this.key, {obj: obj$$2, iteratee: this.node});
	  }
	};

	/**
	 * @desc update the value for the current key
	 * @version 5.0.0
	 * @since 2.0.0
	 * @memberOf Traverse
	 *
	 * @param  {*} value this.node[this.key] = value
	 * @return {void}
	 *
	 * @example
	 *
	 *    traverse({eh: true})
	 *    .forEach((key, val, traverser) => {
	 *       if (this.isRoot) return
	 *       traverser.update(false)
	 *    })
	 *    //=> {eh: false}
	 *
	 */
	Traverse.prototype.update = function update(value) {
	  set$2(this.root, this.path, value);
	};

	/**
	 * @desc mark the iteration as done, clear the map
	 * @NOTE this recycles the instance in the pooler to re-use allocated objects
	 * @memberOf Traverse
	 * @private
	 * @since 5.0.0
	 *
	 * @return {void}
	 *
	 * @see Traverse.iterate
	 *
	 * @example
	 *
	 *  traverse([]).destructor()
	 *
	 */
	Traverse.prototype.destructor = function destructor() {
	  this.node = undefined;
	  this.parent = undefined;
	  this.reset();

	  this.clear();
	};

	/* prettier-ignore */
	/**
	 * @TODO handler for Set & Map so they can be skipped or traversed, for example when cloning...
	 * @TODO add hook to add custom checking if isIteratable
	 * @TODO deal with .isRoot if needed
	 * @TODO examples with clone and stop
	 *
	 * @memberOf Traverse
	 * @protected
	 * @sig on(key: null | Primitive, val: any, instance: Traverse): any
	 *
	 * @param  {Function} on callback fn for each iteration
	 * @return {*} this.node
	 *
	 * @example
	 *
	 *    iterate([])
	 *    //=> []
	 *    //=> on(null, [])
	 *
	 * @example
	 *
	 *    iterate([1])
	 *    //=> [1]
	 *    //=> on(null, [1])
	 *    //=> on('1', 1)
	 *
	 * @example
	 *
	 *    //primitive - same for any number, string, symbol, null, undefined
	 *    iterate(Symbol('eh'))
	 *    //=> Symbol('eh')
	 *    //=> on(Symbol('eh'))
	 *
	 * @example
	 *
	 *    var deeper = {eh: 'canada', arr: [{moose: true}, 0]}
	 *    iterate(deeper)
	 *    //=> deeper // returns
	 *    //=> on(null, deeper, this) // root
	 *
	 *    //=> on('eh', 'canada', this) // 1st branch
	 *
	 *    //=> on('arr', [{moose: true}, 0], this)
	 *    //=> on('arr.0', [{moose: true}], this)
	 *    //=> on('arr.0.moose', true, this)
	 *    //=> on('arr.1', [0], this)
	 *
	 *
	 */
	Traverse.prototype.iterate = function iterate(on) {
	  var this$1 = this;

	  /* istanbul ignore next : dev */
	  if (ENV_DEBUG) {
	    // require('fliplog')
	    // .bold(this.path.join('.'))
	    // .data(parents.keys())
	    // .echo()
	    console.log('\n...iterate...\n');
	  }

	  if (this.isAlive === false) {
	    /* istanbul ignore next : dev */
	    if (ENV_DEBUG) {
	      console.log('DEAD');
	    }

	    return Traverse.release(this)
	  }

	  var node = this.node;

	  // convert to iteratable
	  if (map(node)) {
	    node = index$6(node);
	  }
	  else if (set(node)) {
	    node = toArr(node);
	  }

	  // @TODO: maybe only right before sub-loop
	  this.addParent(this.depth, node);

	  var nodeIsArray = array(node);
	  var nodeIsObj = nodeIsArray || obj(node);

	  // ---

	  // @event
	  if (!_undefined(this.onBefore)) {
	    // eslint-disable-next-line no-useless-call
	    this.onBefore(this);
	  }

	  /* istanbul ignore next : dev */
	  if (ENV_DEBUG) {
	    // const str = require('pretty-format')({nodeIsObj, nodeIsArray, node})
	    // require('fliplog').verbose(1).data({nodeIsObj, nodeIsArray, node}).echo()
	    // console.log(node, parents)
	    // console.log(str)
	    console.log({nodeIsObj: nodeIsObj, nodeIsArray: nodeIsArray, node: node});
	  }

	  /**
	   * call as root, helpful when we
	   * - iterate something with no keys
	   * - iterate a non-iteratable (symbol, error, native, promise, etc)
	   */
	  if (_true(this.isRoot)) {
	    on.call(this, null, node, this);
	    this.isRoot = false;
	  }

	  var isObjOrArray = nodeIsArray || nodeIsObj;

	  // if (isObjOrArray) {
	  //   // @event
	  //   if (!isUndefined(this.onBefore)) {
	  //     // eslint-disable-next-line no-useless-call
	  //     this.onBefore(this)
	  //   }
	  // }

	  // --------------------
	  // IF OBJWITHOUTKEYS, IF ARRAY WITHOUT LENGTH...
	  if (isObjOrArray && empty(node)) {
	    on.call(this, this.key, node, this);
	    this.node = node;
	  }

	  // --------------------

	  else if (isObjOrArray) {
	    this.depth = this.path.length;

	    // @TODO SAFETY WITH `props(node)` <- fixes Error
	    var keys$$2 = nodeIsArray ? node : keys(node);

	    /* istanbul ignore next : dev */
	    if (ENV_DEBUG) {
	      console.log({keys: keys$$2});
	      // require('fliplog').verbose(1).data(this).echo()
	    }

	    // @event
	    // if (!isUndefined(this.onBefore)) this.onBefore()

	    // @NOTE: safety here
	    // this.checkIteratable(node)

	    // const last = keys[keys.length - 1]

	    // @loop
	    for (var key = 0; key < keys$$2.length; key++) {
	      // if (ENV_DEBUG)
	      // console.log('iterating:', {key})

	      // --- safety ---
	      if (this$1.isAlive === false) {
	        /* istanbul ignore next : dev */
	        if (ENV_DEBUG) {
	          console.log('DEAD');
	        }

	        return Traverse.release(this$1)
	      }

	      // @NOTE: look above add prev add parent
	      // addParent(this.depth, node)


	      // ----- setup our data ----

	      // to make it deletable
	      if (node !== this$1.node) { this$1.parent = node; }

	      this$1.key = nodeIsArray ? key : keys$$2[key];
	      // this.isLast = key === last

	      /* istanbul ignore next: dev */
	      if (ENV_DEBUG) {
	        console.log('alive', this$1.key);
	      }

	      // @event
	      if (!_undefined(this$1.onPre)) {
	        // eslint-disable-next-line no-useless-call
	        this$1.onPre(this$1);
	      }


	      var value = node[this$1.key];

	      this$1.checkIteratable(value);
	      // addParent(value)
	      var pathBeforeNesting = this$1.path.slice(0);

	      // @NOTE: can go forward-backwards if this is after the nested iterating
	      this$1.path.push(this$1.key);
	      this$1.depth = this$1.path.length;

	      // ----- continue events, loop deeper when needed ----

	      // @NOTE since we check isAlive at the beginning of each loop
	      // could use .skip alongisde .stop
	      // @TODO @IMPORTANT @HACK @FIXME right here it should also handle the .stop
	      on.call(this$1, this$1.key, value, this$1);
	      if (_true(this$1.skipBranch)) {
	        this$1.skipBranch = false;
	        continue
	      }

	      /* istanbul ignore next: dev */
	      if (ENV_DEBUG) {
	        // require('fliplog').data(parents).echo()
	        // require('fliplog').data(this).echo()
	      }

	      // handle data
	      if (_true(this$1.isCircular)) {
	        /* istanbul ignore next: dev */
	        if (ENV_DEBUG) {
	          console.log('(((circular)))', this$1.key);
	        }

	        // on.call(this, this.key, value, this)
	        // this.path.pop()
	        this$1.path = pathBeforeNesting;

	        // this.isCircular = false
	        // break
	        continue
	        // return
	      }


	      // &&
	      if (_true(this$1.isIteratable)) {
	        /* istanbul ignore next: dev */
	        if (ENV_DEBUG) {
	          console.log('(((iteratable)))', this$1.key);
	        }

	        this$1.node = value;
	        this$1.iterate(on);
	        this$1.path = pathBeforeNesting;
	      }

	      /* istanbul ignore next: dev */
	      if (ENV_DEBUG) {
	        if (this$1.isIteratable === false) {
	          console.log('not iteratable', this$1.key);
	        }

	        console.log('----------------- post ----------', node);
	      }

	      // @event
	      if (!_undefined(this$1.onPost)) {
	        // eslint-disable-next-line no-useless-call
	        this$1.onPost(this$1);
	      }

	      // cleanup, backup 1 level
	      this$1.path.pop();

	      this$1.removeParent(node);
	    }

	    // this.path.pop()
	    this.depth = this.path.length;
	  }
	  else {
	    // this.isLast = false
	    on.call(this, this.depth, node, this);
	  }

	  // @NOTE: careful
	  // removeParent(node)

	  // @NOTE: just for .after ?
	  this.node = node;

	  // @event
	  if (!_undefined(this.onAfter)) {
	    // eslint-disable-next-line no-useless-call
	    this.onAfter(this);
	  }

	  this.path.pop();

	  return this.node
	};

	// is smaller, but probably slower
	// function onEvent(property) {
	//   return function(fn) {
	//     this[property] = function
	//   }
	// }

	// when it's some sort of itertable object, loop it further
	// @TODO: need to handle these better without totally messing with bad scope
	Traverse.prototype.pre = function(fn) {
	  this.onPre = fn;
	};
	Traverse.prototype.post = function(fn) {
	  this.onPost = fn;
	};
	Traverse.prototype.before = function(fn) {
	  this.onBefore = fn;
	};
	Traverse.prototype.after = function(fn) {
	  this.onAfter = fn;
	};

	// -----------------------

	/**
	 * @TODO merge with dopemerge?
	 * @TODO needs tests converted back for this (observe tests do cover somewhat)
	 *
	 * @param  {*} arg defaults to this.node
	 * @return {*} cloned
	 *
	 * @example
	 *
	 *   var obj = {}
	 *   var cloned = traverse().clone(obj)
	 *   obj.eh = true
	 *   eq(obj, cloned)
	 *   //=> false
	 *
	 */
	Traverse.prototype.clone = clone;

	/**
	 * @todo ugh, how to clone better with *recursive* objects?
	 * @param  {any} src wip
	 * @return {any} wip
	 */
	Traverse.prototype.copy = copy;

	/**
	 * @desc clone any value
	 * @version 5.0.0
	 * @since 4.0.0
	 * @memberOf Traverse
	 * @extends copy
	 * @extends Traverse
	 *
	 * @param  {*} arg argument to clone
	 * @return {*} cloned value
	 *
	 * @see dopemerge
	 *
	 * @example
	 *
	 *    var obj = {eh: true}
	 *    clone(obj) === obj //=> false
	 *
	 *    var obj = {eh: true}
	 *    var obj2 = clone(obj)
	 *    obj.eh = false
	 *    console.log(obj2.eh) //=> true
	 *
	 */
	function clone(arg) {
	  var obj$$2 = _undefined(arg) ? this.node : arg;
	  if (primitive$2(obj$$2)) { return obj$$2 }
	  var cloned = emptyTarget(obj$$2);
	  var current = cloned;

	  traverse(obj$$2).forEach(function (key, value, traverser) {
	    // t.isRoot
	    if (_null(key)) { return }

	    var copied = copy(value);
	    if (traverser.isCircular && array(value)) { copied = value.slice(0); }
	    set$2(current, traverser.path, copied);
	  });

	  return cloned
	}

	// @TODO could just have traverse = Traverse.getPooled ?
	pooler(Traverse);
	function traverse(value) {
	  return Traverse.getPooled(value)
	}

	traverse.eq = _eq(traverse);
	traverse.clone = clone;
	traverse.copy = copy;
	var traverse_1 = traverse;

	var index$10 = new Map();

	/* ___filename___: dist/deps/traverse.js */

	/* ___filename___: dist/deps/dot/paths.js */






	var run = 0;

	/* prettier-ignore */
	/**
	 * @desc   gathers dot.prop from any value, with a prefixed/base key
	 * @since  4.0.0
	 *
	 * @param  {Primitive}  key prefixing key for the paths, root path/key
	 * @param  {Traversable}  value traversable value to extract paths from
	 * @param  {boolean | undefined} [longest] optionally filter to keep only longest/deepest paths
	 * @return {Array<string>} paths[]
	 *
	 * @see    deps/traverse
	 * @TODO   should build a trie if doing this
	 * @NOTE   had `onlyLongest` & `asString` but can just .join(',') to match
	 *
	 * @example
	 *
	 *  dotPropPaths('', {oh: {eh: true}})
	 *  //=> ['oh.eh']
	 *
	 *  dotPropPaths('moose', {oh: {eh: true}})
	 *  //=> ['moose.oh.eh']
	 *
	 */
	var paths = function(key, value, longest) {
	  // if (cache.has(value)) return cache.get(value)

	  var paths = [];

	  /* istanbul ignore next: debug */
	  if (debug) {
	    console.log({value: value});
	  }

	  // gather all paths in the object
	  // filter to ensure only the longest paths are kept
	  //
	  // .map the paths to `dot-prop`,
	  // `matcher` takes in an array so it will work for all
	  traverse_1(value).forEach(function(x) {
	    // const currentPath = this.paths
	    var currentPath = this.path;

	    /* istanbul ignore next: debug */
	    if (debug) {
	      console.log('paths', run++, this.path);
	    }

	    // ignore
	    if (!currentPath) { return }
	    else if (!currentPath.length) { return }

	    // dot-prop the array of paths
	    // if we have a key, prefix it
	    paths.push(
	      (key ? key + '.' : '') +
	      (currentPath.join ? currentPath.join('.') : currentPath)
	    );
	  });

	  if (_true(longest)) {
	    // concat a string of all paths so we can unique each branch
	    // @example `canada.arr.0` vs `canada.arr`
	    paths = paths.filter(function (path) { return !paths.some(function (otherPath) { return otherPath !== path && index$4(otherPath, path); }
	    ); });
	  }

	  // cache.set(value, paths)

	  return paths
	};

	/* ___filename___: dist/deps/native/propertyIsEnumerable.js */
	var propertyIsEnumerable_1 = Object.prototype.propertyIsEnumerable;

	/* ___filename___: dist/deps/native/propertyIsEnumerable.js */

	/* ___filename___: dist/deps/is/enumerable.js */



	/**
	 * @desc object at property is enumerable
	 * @memberOf is
	 * @since 3.0.0
	 *
	 * @param {Object | *} obj
	 * @param {string | *} prop
	 * @return {boolean} obj[prop] is enumerable
	 *
	 * @func
	 * @name isEnumerable
	 * @type {Function}
	 *
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable mozilla-propertyisenumerable}
	 * @see {@link mozilla-propertyisenumerable}
	 *
	 * @TODO use fp/call
	 *
	 * @example
	 *
	 *   const obj = {eh: true}
	 *   isEnumerable(obj, 'eh')
	 *   //=> true
	 *
	 *   const objPropEnumerable = isEnumerable(obj)
	 *   objPropEnumerable('eh')
	 *   //=> true
	 *
	 *   Object.defineProperty(obj, 'length', {
	 *      enumerable: false,
	 *      value: () => Object.keys(obj).length,
	 *   })
	 *   isEnumerable(obj, 'length')
	 *   //=> false
	 *
	 */
	var enumerable = curry(2, function (obj, prop) { return propertyIsEnumerable_1.call(obj, prop); });

	/* ___filename___: dist/deps/is/enumerable.js */

	/* ___filename___: dist/deps/dot/get.js */







	/**
	 * @name dot.get
	 * @memberOf dot
	 * @func
	 * @since 3.0.0
	 * @extends dot/getPathSegments
	 *
	 * @param  {Object} obj the object to retrieve the nested property from.
	 * @param  {Dottable | string | Array} path dot-prop-path to use
	 * @param  {*} fallback use when there is no value at specified path
	 * @return {*} value at path or fallback
	 *
	 * @example
	 *
	 *    dot.get({a: {b: 2}}, 'a.b'); //=> 2
	 *    dot.get({a: {b: 2}}, ['a', 'b']); //=> 2
	 *    dot.get({c: {b: 2}}, ['a', 'b']); //=> undefined
	 *
	 */
	var get = function(obj, path, fallback) {
	  if (!dottable(obj, path)) {
	    return _undefined(fallback) ? obj : fallback
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    if (!enumerable(obj, pathArr[i])) {
	      return fallback
	    }

	    obj = obj[pathArr[i]];

	    if (nullOrUndefined(obj)) {
	      /*
	       * `obj` is either `undefined` or `null` so we want to stop the loop, and
	       * if this is not the last bit of the path, and
	       * if it did't return `undefined`
	       * it would return `null` if `obj` is `null`
	       * but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied fallback, not `null`
	       */
	      if (i !== lengthMinusOne(pathArr)) {
	        return fallback
	      }

	      break
	    }
	  }

	  return obj
	};

	/* ___filename___: dist/deps/is/number.js */



	/**
	 * @param  {*} x value
	 * @return {boolean} isNumber
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isNumber
	 * @see is/real
	 * @extends numberPrimitive
	 * @variation also returns true for new Number object
	 *
	 * @see http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
	 * @alternate !isNaN(parseFloat(n)) && isFinite(n)
	 *
	 * @example
	 *
	 *  isNumber(1)
	 *  //=> true
	 *  isNumber(new Number(1))
	 *  //=> true
	 *  isNumber(Number(1))
	 *  //=> true
	 *  isNumber(NaN)
	 *  //=> true
	 *
	 *  isNumber(null)
	 *  //=> false
	 *  isNumber(undefined)
	 *  //=> false
	 *  isNumber(void 0)
	 *  //=> false
	 *  isNumber({})
	 *  //=> false
	 *  isNumber('')
	 *  //=> false
	 *  isNumber(false)
	 *  //=> false
	 *
	 * @NOTE was not needed except for abstract ==
	 *   const isObj = require('./obj')
	 *   const isSymbol = require('./symbol')
	 *   (isObj(x) || isSymbol(x)
	 *     ? false
	 *     : (/^0x[0-9a-f]+$/i).test(x) ||
	 *         (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x))
	 *
	 */
	var number = function (x) { return numberPrimitive(x) || toS(x) === '[object Number]'; };

	/* ___filename___: dist/deps/is/number.js */

	/* ___filename___: dist/deps/is/stringOrNumber.js */




	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @since 3.0.0
	 * @category Lang
	 * @memberOf is
	 * @param {*} x The value to check.
	 * @return {boolean} Returns `true` if `value` is a string, else `false`.
	 *
	 * @see https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts#L23
	 * @see https://github.com/lodash/lodash/blob/master/isString.js
	 *
	 * @example
	 *
	 * isString('abc')
	 * // => true
	 *
	 * isString(1)
	 * // => false
	 */
	var stringOrNumber = or(string, number);

	/* ___filename___: dist/deps/is/real.js */


	/**
	 * @param  {*} x value
	 * @return {boolean} isReal
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isReal
	 * @see is/null
	 * @see is/undefined
	 *
	 * @see http://2ality.com/2013/04/quirk-implicit-conversion.html
	 * @see https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN
	 *
	 * @NOTE eslint-disable-next-line no-self-compare
	 *       && x !== x
	 *
	 * @extends isNullOrUndefined
	 * @variation *not* isNullOrUndefined && false for NaN
	 *
	 * @example
	 *
	 *  isReal(null)
	 *  //=> false
	 *  isReal(void 0)
	 *  //=> false
	 *  const nan = Number(undefined)
	 *  isReal(nan)
	 *  //=> false
	 *
	 *  isReal({eh: true})
	 *  //=> true
	 *  isReal({})
	 *  //=> true
	 *  isReal(Object)
	 *  //=> true
	 *  isReal([])
	 *  //=> true
	 *  isReal(new Set())
	 *  //=> true
	 *  isReal(function() {})
	 *  //=> true
	 *  isReal('')
	 *  //=> true
	 *  isReal(1)
	 *  //=> true
	 *
	 */
	var real = function (x) { return !nullOrUndefined(x) && !Number.isNaN(x); };

	/* ___filename___: dist/deps/is/stringOrNumber.js */

	/* ___filename___: dist/deps/is/real.js */

	/* ___filename___: dist/deps/is/notNested.js */






	/**
	 * @since 5.0.0
	 * @param  {*} x value to check
	 * @return {boolean} x isNotNested
	 *
	 * @example
	 *
	 *  isNotNested('')                //=> true
	 *  isNotNested(true)              //=> true
	 *  isNotNested(new RegExp())      //=> true
	 *  isNotNested(new Error('eh'))   //=> false
	 *  isNotNested(null)              //=> false
	 *
	 */
	var notNested = function isNotNested(x) {
	  return (
	    stringOrNumber(x) ||
	    boolean_1(x) ||
	    !real(x) ||
	    error$1(x) ||
	    regexp(x)
	  )
	};

	/* ___filename___: dist/deps/is/objPure.js */





	/**
	 * @name isObjPure
	 * @memberOf is
	 * @alias isObjNotArrayOrFunction
	 * @since 3.0.0
	 *
	 *
	 * @param  {*} x value to check
	 * @return {boolean} is obj & !null & !undefined & !array & !function
	 *
	 * @extends isArray
	 * @extends isObjTypeof
	 * @extends isNullOrUndefined
	 * @extends isFunction
	 *
	 * @example
	 *
	 *    isObjPure(function() {})
	 *    //=> false
	 *    isObjPure(null)
	 *    //=> false
	 *    isObjPure([])
	 *    //=> false
	 *
	 *    isObjPure({})
	 *    //=> true
	 *
	 */
	var objPure = function (x) { return !nullOrUndefined(x) && !array(x) && !_function(x) && objTypeof(x); };

	/* ___filename___: dist/deps/is/objWithKeys.js */



	/**
	 * @TODO @NOTE need to be more careful, needs to check for vanilla objects, not native ones since e.g. Error has no keys
	 *
	 * @param  {*} x value
	 * @return {boolean} isObjWithKeys
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isObjWithKeys
	 * @see is/obj
	 * @see is/objWithKeys
	 * @see is/objStrict
	 * @see is/null
	 *
	 * @extends isObj
	 * @variation Object.keys(obj).length !== 0
	 *
	 * @example
	 *
	 *  isObjWithKeys({eh: true})
	 *  //=> true
	 *  isObjWithKeys({})
	 *  //=> false
	 *  isObjWithKeys(new Object())
	 *  //=> false
	 *  isObjWithKeys(Object.create(null))
	 *  //=> false
	 *  isObjWithKeys(null)
	 *  //=> false
	 *  isObjWithKeys(new Set())
	 *  //=> false
	 *  isObjWithKeys(function() {})
	 *  //=> false
	 *  isObjWithKeys('')
	 *  //=> false
	 *  isObjWithKeys(1)
	 *  //=> false
	 *
	 */
	var objWithKeys = function (val) { return obj(val) && keys(val).length !== 0; };

	/* ___filename___: dist/deps/is/matcher.js */




	/**
	 * @func isMatcher
	 * @memberOf is
	 * @since 3.0.0
	 *
	 * @param  {*} x value to check
	 * @return {boolean} isFunction || isRegExp
	 *
	 * @see is/regexp
	 * @see is/function
	 * @see conditionals/or
	 *
	 * @example
	 *
	 *    isMatcher(/(.*)/)
	 *    //=> true
	 *
	 *    isMatcher(x => true)
	 *    //=> true
	 *
	 *    isMatcher(1)
	 *    //=> false
	 *    isMatcher('.*')
	 *    //=> false
	 *
	 */
	var matcher = or(_function, regexp); // x => isFunction(x) || isRegExp(x)
	// x instanceof RegExp

	/* ___filename___: dist/deps/is/objPure.js */

	/* ___filename___: dist/deps/is/objWithKeys.js */

	/* ___filename___: dist/deps/is/matcher.js */

	// dont need these yet


	// const isClass = require('./class')
	// const isEnumerable = require('./enumerable')
	// const isMapish = require('./mapish')

	/**
	 * @member is
	 * @types is
	 * @tests is/*
	 *
	 * @see https://github.com/lodash/lodash/issues/3237
	 * @type {Object}
	 */
	var index$12 = {
	  isObjWithKeys: objWithKeys,
	  isObj: obj,
	  // isObject: isObj,
	  isObjPure: objPure,
	  isObjNotNull: objNotNull,
	  isFunction: _function,
	  isReal: real,
	  toS: toS,
	  isDate: date,
	  isRegExp: regexp,
	  isError: error$1,
	  isBoolean: boolean_1,
	  isNumber: number,
	  isString: string,
	  isMap: map,
	  isSet: set,
	  isSymbol: symbol,
	  isPrototypeOf: prototypeOf,
	  isArray: array,
	  // new
	  isIterator: iterator$2,
	  isUndefined: _undefined,
	  isNull: _null,
	  isNill: nullOrUndefined,
	  isTrue: _true,
	  isMatcher: matcher,
	};

	/* ___filename___: dist/deps/string/camelCase.js */
	/* prettier-ignore */
	/**
	 * @desc camelCase
	 * @since 0.2.0
	 * @symb 🐫
	 *
	 * @param  {string} str string to turn into camelCase
	 * @return {string} camelCased string
	 *
	 * @tutorial https://github.com/substack/camelize/blob/master/test/camel.js
	 * @tutorial https://github.com/andrewplummer/Sugar/blob/9c018a257a38714b81f7df033b74d236dbf1e861/lib/string.js
	 * @tutorial http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
	 * @tutorial https://github.com/sindresorhus/camelcase
	 * @see https://stackoverflow.com/questions/1533131/what-useful-bitwise-operator-code-tricks-should-a-developer-know-about
	 * @TODO s.charAt(0).toLowerCase() + string.slice(1)
	 *
	 * @types deps
	 * @tests deps/camelCase
	 *
	 * @example
	 *
	 *  camelCase('snake_case')
	 *  //=> 'snakeCase'
	 *
	 */
	var camelCase = function (str) { return str
	    // spaces with underscore
	    .replace(/\s+/g, '_')
	    // < underscores & dashes until whitespace or end
	    // > .toUpperCase x & '_'
	    .replace(/[_.-](\w|$)/g, function (m, x) { return x.toUpperCase(); }); };

	/* ___filename___: dist/deps/conditional/not.js */


	/**
	 * return a negated function
	 * A function wrapping a call to the given function in a `!` operation.
	 * It will:
	 * - return `true` when the underlying function would return a false-y value,
	 * - and `false` when it would return a truth-y one.
	 *
	 * @name not
	 * @memberOf conditional
	 * @since  4.0.1
	 * @func
	 *
	 * @param  {Function} fn any function
	 * @param  {*} x value to pass to function
	 * @return {Function} !Function(x)
	 *
	 * @example
	 *
	 *    const falsed = not(x => true)
	 *    const trued = not(x => false)
	 *
	 *    trued()
	 *    //=> true
	 *
	 *    falsed()
	 *    //=> false
	 *
	 */
	var not = function (fn, x) { return !fn(x); };
	var not_1 = curry(2, not);

	// curry(2,
	// function not(predicate) {
	//   return function() {
	//     return !predicate.apply(this, arguments)
	//   }
	// }

	/* ___filename___: dist/deps/conditional/and.js */


	/**
	 * @desc first fn & second fn
	 * @name and
	 * @alias both
	 * @memberOf conditional
	 * @since  4.0.1
	 * @func
	 *
	 * @param  {Function} left first fn
	 * @param  {Function} right second fn
	 * @return {boolean} both functions return truthy
	 *
	 * @example
	 *
	 *    const both = and(x => typeof x === 'boolean', x => x === true)
	 *
	 *    both([true])
	 *    //=> true
	 *
	 *    both([false])
	 *    //=> false
	 *
	 *    both([1])
	 *    //=> false
	 *
	 */
	var and = function (left, right) { return function (x) { return left(x) && right(x); }; };
	var and_1 = curry(2, and);

	/* ___filename___: dist/deps/conditional/all.js */


	/**
	 * map all values in an array to see if all match
	 * Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.
	 *
	 * @memberOf conditional
	 * @since 4.0.1
	 *
	 * @TODO `not(some)` ?
	 *
	 * @param  {Function} predicate match the value
	 * @param  {Array} array to match against predicate
	 * @return {boolean} all match predicate
	 *
	 * {@link https://github.com/ramda/ramda/blob/master/src/all.js ramda-all}
	 * @see {@link ramda-all}
	 * @see fp/curry
	 *
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 *
	 * @example
	 *
	 *    const allBoolean = all(x => typeof x === 'boolean'q)
	 *
	 *    allBoolean([true])
	 *    //=> true
	 *
	 *    allBoolean([1])
	 *    //=> false
	 *
	 */
	var all = curry(2, function (predicate, arr) {
	  for (var i in arr) {
	    if (!predicate(arr[i])) { return false }
	  }
	  return true
	});

	var all_1 = all;

	/* ___filename___: dist/deps/conditional/and.js */

	/* ___filename___: dist/deps/conditional/all.js */

	/* ___filename___: dist/deps/is/arrayOf.js */




	/**
	 * @desc every item in an array matches predicate
	 * @since 4.0.0 was in validatorBuilder
	 * @version 5.0.0
	 *
	 * @memberOf is
	 * @param  {Function} predicate test to pass on every item in an array
	 * @return {boolean} all match predicate
	 *
	 * @example
	 *
	 *  isArrayOf(isTrue)([true, true]) //=> true
	 *  isArrayOf(isEmpty)(['']) //=> true
	 *
	 *  isArrayOf(isBoolean)([true, false, 1, 2, 0]) //=> false
	 *  isArrayOf(isString)(['string', Number]) //=> false
	 *
	 */
	var arrayOf = function isArrayOf(predicate) {
	  return and_1(array, all_1(predicate))
	};

	/* ___filename___: dist/deps/conditional/not.js */

	/* ___filename___: dist/deps/is/notRealOrIsEmpty.js */





	/**
	 * @SIZE: another 10bytes for these fns
	 * @name isNotRealOrIsEmpty
	 *
	 * @see is/isReal
	 * @see is/isEmpty
	 * @see conditional/and
	 * @see conditional/not
	 *
	 * @type {Function}
	 */
	var notRealOrIsEmpty = and_1(not_1(real), empty);

	/* ___filename___: dist/deps/fp/replace.js */


	/**
	 * Replace a substring or regex match in a string with a replacement.
	 *
	 * @func
	 * @memberOf fp
	 * @since v5.0.0
	 * @category String
	 * @sig RegExp|String -> String -> String -> String
	 *
	 * @param {RegExp|String} pattern A regular expression or a substring to match.
	 * @param {String} replacement The string to replace the matches with.
	 * @param {String} str The String to do the search and replacement in.
	 * @return {String} The result.
	 *
	 * @types fp
	 * @tests fp/replace
	 *
	 * {@link https://github.com/ramda/ramda/blob/master/src/replace.js ramda-replace}
	 * {@link https://github.com/lodash/lodash/blob/master/replace.js lodash-replace}
	 * @see {@link ramda-replace}
	 * @see {@link lodash-replace}
	 *
	 * @example
	 *
	 *      replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *      replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *
	 *      // Use the "g" (global) flag to replace all occurrences:
	 *      replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	 *
	 */
	var replace = curry(3, function replace(pattern, replacement, str) {
	  return str.replace(pattern, replacement)
	});

	/* ___filename___: dist/ChainedMapBase.js */

	/* ___filename___: dist/deps/string/camelCase.js */

	/* ___filename___: dist/deps/is/arrayOf.js */

	/* ___filename___: dist/deps/is/notRealOrIsEmpty.js */

	/* ___filename___: dist/deps/fp/replace.js */

	/* ___filename___: dist/deps/validators/validatorBuilder.js */
	/**
	 * @since 4.0.0 <- moved out of the store, into scoped
	 * @since 1.0.0
	 * @desc library of validators to use by name
	 *       @modifies this.validators
	 * @param  {Object} validators
	 */













	var validators = new ChainedMapBase();

	// eslint-disable-next-line
	var stripArithmeticSymbols = replace(/[?\[\]!\|]/g, '');
	var escapedKey = function (x) { return camelCase('is-' + x); };
	var enummy = function (enums) { return function (x) { return enums === x || enums.includes(x); }; };

	// @TODO: .remap!!!
	// @TODO: can use these to return noops with error logging on development
	var get$2 = function (key) { return validators.get(key) || validators.get(escapedKey(key)) || enummy(key); };
	var has = function (key) { return validators.has(key) || validators.get(escapedKey(key)); };
	var set$4 = function (key, value) { return validators.set(key, value); };
	var doesNotHave = not_1(has);

	/**
	 * @desc add custom types for validation
	 * @category types
	 * @category schema
	 * @types schema
	 *
	 * @since 4.0.0 <- used with schema, used in method chain
	 * @since 3.0.0 <- took out
	 * @since 1.0.0
	 *
	 * @param  {Object} types custom Types
	 *
	 * @see deps/validators/validatorFactory
	 *
	 * @example
	 *
	 *   addTypes({yaya: x => typeof x === 'string'})
	 *
	 *   const chain = new Chain().methods('eh').type('yaya').build()
	 *
	 *   chain.eh('good')
	 *   //=> chain
	 *
	 *   chain.eh(!!'throws')
	 *   //=> TypeError(false != {yaya: x => typeof x === 'string'})
	 *
	 * @example
	 *
	 *   const custom = {}
	 *   custom.enums = enums => x => enums.includes(x)
	 *   custom['*'] = x => true
	 *   addTypes(custom)
	 *   //-> void
	 *
	 *   new Chain().methods('eh').type('*').build().eh
	 *   //=> validateType(custom['*'])
	 *
	 */
	var addTypes = function (types) { return validators.from(index$2(validators.entries(), types)); };

	addTypes(index$12);

	var includesAndOr = function (x) { return x.includes('|') || x.includes('&'); };

	/**
	 * @memberOf schema
	 * @category types
	 *
	 * @param  {string} fullKey a key with `|` and/or '&'
	 * @return {Function} validator
	 *
	 * @example
	 *
	 *    const isStringOrNumber = typeListFactory('string|number')
	 *
	 *    isStringOrNumber(1)
	 *    //=> true
	 *    isStringOrNumber('one')
	 *    //=> true
	 *    isStringOrNumber(Object)
	 *    //=> false
	 *
	 */
	function typeListFactory(fullKey) {
	  // already have it
	  if (has(fullKey)) {
	    return get$2(fullKey)
	  }

	  // get all types
	  var orTypes = fullKey.split('|');
	  var andTypes = fullKey.split('&');

	  // ensure we have all validators - sets up conditionals
	  for (var v = 0; v < orTypes.length; v++) {
	    builder(orTypes[v]);
	  }

	  // go through all valid options, if any are true, good to go
	  set$4(fullKey, function (x) {
	    for (var v = 0; v < orTypes.length; v++) {
	      if (get$2(orTypes[v])(x)) {
	        return true
	      }
	    }
	    return false
	  });

	  return get$2(fullKey)
	}

	// @TODO how to iterate properly with the bitwise fn + AND
	//       add another param? ignore overly complex |& things? just allow 1?
	//       just show how to use these shorthand fn builders

	/**
	 * @desc transform arithmetic strings into types
	 * @since 4.0.0-alpha.1
	 * @category types
	 *
	 * @param  {Matchable} fullKey arithmetic type key
	 * @return {Matchable} function to match with, with .inspect for easy debugging
	 *
	 * @types schema
	 * @test typed
	 * @test schema
	 * @see is
	 * @todo coercing values to certain types: arithmeticTypeFactory('<value>')
	 *
	 * @example
	 *
	 *   arithmeticTypeFactory('?string')
	 *   //=> x => !isReal(x) || isString(x)
	 *
	 * @example
	 *
	 *   arithmeticTypeFactory('?string|string[]')
	 *   //=> x => isString(x) || isArrayOf(isString)(x)
	 *
	 * @example
	 *
	 *   arithmeticTypeFactory('!string')
	 *   //=> x => not(isString)(x)
	 *
	 * @example
	 *
	 *   types.addTypes({star: x => true})
	 *   arithmeticTypeFactory('object|function|star')
	 *   //=> x => isObj(x) || isFunction(x) || isStar(x)
	 *
	 * @example
	 *
	 *   arithmeticTypeFactory('===')
	 *   //=> x => (['===']).includes(x)
	 */
	function arithmeticTypeFactory(fullKey) {
	  var key = stripArithmeticSymbols(fullKey);
	  var fn = get$2(key);
	  var optionalType = "?" + key;
	  var typeOrArrayOrType = key + "[]";
	  var notType = "!" + key;

	  var isValidOrNotRealOrEmptyStr = or(fn, notRealOrIsEmpty);
	  var isValidOrArrayOfValid = or(fn, arrayOf(fn));
	  if (doesNotHave(optionalType)) {
	    set$4(optionalType, isValidOrNotRealOrEmptyStr);
	  }
	  if (doesNotHave(typeOrArrayOrType)) {
	    set$4(typeOrArrayOrType, isValidOrArrayOfValid);
	  }
	  if (doesNotHave(notType)) {
	    set$4(notType, not_1(fn));
	  }

	  return get$2(fullKey)
	}

	// ----
	// ; function split
	// ----

	// v- annoying on comments with ifs
	/* prettier-ignore */
	/**
	 * @desc @pattern @builder -> builds using multiple factories depending on conditons
	 *       or abstractFactory whatever
	 *       opinionated: if it's a function, it's a validator...
	 *
	 * @category types
	 * @since 4.0.0
	 * @param  {string | Function | Primitive} fullKey arithmetic key to the validator
	 * @return {Function} validator
	 *
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters
	 * @NOTE if/else is for uglifying ternaries, even though else if is not needed
	 * @NOTE if key is number, iterating the array
	 *
	 * @example
	 *
	 *    // functionType
	 *    const isString = x => typeof x === 'string'
	 *    builder(isString)
	 *    // => isString
	 *
	 * @example
	 *
	 *    // stringType (built in, or custom-keyed validator, or eqeqeq)
	 *    builder('string')
	 *    // => isString
	 *
	 *    const enummy = builder('enum')
	 *    // => x => ['enum'].includes(x)
	 *
	 * @example
	 *
	 *    // arithmeticType
	 *    builder('string|string[]')
	 *    // => isString || isArrayOf(isString)
	 *
	 */
	function builder(fullKey) {
	  if (_function(fullKey)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('functionType', {fullKey: fullKey});
	    }
	    return fullKey
	  }
	  else if (string(fullKey) && includesAndOr(fullKey)) {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('andOrType', {fullKey: fullKey});
	    }
	    return typeListFactory(fullKey)
	  }
	  else {
	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('arithmeticType', {fullKey: fullKey}, arithmeticTypeFactory(fullKey));
	    }
	    return arithmeticTypeFactory(fullKey)
	  }
	}

	builder.has = has;
	builder.get = get$2;
	builder.set = set$4;
	builder.addTypes = addTypes; // was merge
	builder.map = validators;
	var validatorBuilder = builder;

	/* ___filename___: dist/deps/dot/paths.js */

	/* ___filename___: dist/deps/dot/get.js */

	/* ___filename___: dist/deps/is/notNested.js */

	/* ___filename___: dist/deps/validators/validatorBuilder.js */

	/* ___filename___: dist/deps/validators/schemaBuilder.js */






	var validateType = function (type, value, nestedSchema) {
	  var validator = nestedSchema || validatorBuilder(type);
	  return validator(value)
	};

	/**
	 * @desc pass the property & schema in, get a nestable typeValidator out
	 * @since 4.0.0-alpha.1
	 * @category types
	 * @category schema
	 *
	 * @param {Primitive} property property name of the currently nested schema
	 * @param {Schema | Type} nestedSchema a nested schema with Type validators, or a Type validator
	 * @return {Function} typeValidator
	 *
	 * @example
	 *
	 * // property name here is `dates`, then `created`, then `at`
	 * nestedSchema = {
	 *   dates: {
	 *      created: {
	 *         at: 'date'
	 *      }
	 *   }
	 * }
	 *
	 * input = {
	 *    dates: {
	 *      created: {
	 *        at: new Date()
	 *      }
	 *    }
	 * }
	 *
	 * input = new Date()
	 * input = {
	 *    dates: {
	 *      mismatch: true
	 *    }
	 * }
	 *
	 */
	var schemaFactory = function (property, nestedSchema) {
	  /**
	   * @desc build a recursive schema for all around runtime type safety
	   * @category types
	   * @category schema
	   * @memberOf schema
	   * @symb 🛂
	   * @since 4.0.0-beta.1
	   *
	   * @param  {any} input the input to validate
	   * @return {boolean} valid
	   *
	   * @see is
	   *
	   * @example
	   *
	   *   const typeValidator = schemaFactory('eh', x => typeof x === 'string')
	   *
	   *   var isValid = typeValidator('stringy')
	   *   //=> true
	   *
	   *   var isValid = typeValidator(Number)
	   *   //=> false
	   *
	   * @example
	   *
	   *   const isNumber = x => typeof x === 'number'
	   *   const typeValidator = schemaFactory('eh', {canada: 'number'})
	   *
	   *   var isValid = typeValidator({canada: 1})
	   *   //=> true
	   *
	   *   var isValid = typeValidator({})
	   *   //=> false
	   *
	   *   var isValid = typeValidator({canada: false})
	   *   //=> false
	   *
	   *   var isValid = typeValidator(1)
	   *   //=> false
	   *
	   */
	  function typeValidator(input) {
	    if (notNested(input)) {
	      // @@DEBUGGER
	      return validateType(property, input, nestedSchema)
	    }
	    var longestPaths = paths(false, input, true);

	    // @@DEBUGGER

	    for (var l = 0; l < longestPaths.length; l++) {
	      var fullPath = longestPaths[l] || property;
	      var type = get(nestedSchema, fullPath);
	      var value = get(input, fullPath.split('.'));

	      // @@DEBUGGER

	      if (!validateType(type, value)) {
	        // @@DEBUGGER
	        return false
	      }

	      // @@DEBUGGER
	    }
	    return true
	  }

	  /* istanbul ignore next: devs */
	  if (dev) {
	    typeValidator.inspect = function () { return ({property: property, nestedSchema: nestedSchema}); };
	    typeValidator.toString = function () { return JSON.stringify(typeValidator.inspect(), null, 2); };
	  }
	  return typeValidator
	};
	var schemaBuilder = schemaFactory;

	/* ___filename___: dist/deps/validators/schemaBuilder.js */

	/* ___filename___: dist/plugins/schema.js */
	/* eslint complexity: "OFF" */

	// util





	var isFunction$1 = _undefined;
	// logic



	var SCHEMA_KEY = 'schema';

	var isObjOrArray = function (x) { return (obj(x) && !isFunction$1(x)) || array(x); };

	// const meta = require('../deps/meta')
	// const or = require('../deps/conditional/or')
	// const and = require('../deps/conditional/and')
	// const not = require('../deps/conditional/not')
	// const condition = Condition(Condition.is(isFunction).and().not(isObj)).or(isArray)
	// const isObjNotFn = and(not(isFunction), isObj)
	// const isObjOrArray = or(isObjNotFn, isArray)

	/**
	 * @desc handles:
	 *       1. recursively building nestable schemas,
	 *       2. creating MethodChains for all types
	 *       3. carrying over the inheritable properties
	 *       4. @modifies @injects @decorates .add(customValidators)
	 *       @pattern decorator...builder...plugin...
	 *
	 * @param  {Schema} obj
	 * @return {MethodFactory} @chainable
	 */
	var schema = function schema(obj$$2) {
	  var this$1 = this;

	  var parent = this.parent;
	  var ref = this.entries();
	  var onValid = ref.onValid;
	  var onInvalid = ref.onInvalid;
	  var define = ref.define;
	  var getSet = ref.getSet;
	  var keys$$2 = keys(obj$$2);

	  for (var k = 0; k < keys$$2.length; k++) {
	    var key = keys$$2[k];
	    var value = obj$$2[key];

	    // parent.method ? parent.method(key) :
	    var builder = this$1.newThis().name(key); // MethodChain

	    // @TODO: PLUCK METHOD FOR USING VALID KEYS
	    // @TODO:
	    // const entryKeys = ObjectKeys(entries)
	    // const entries = this.entries()
	    // for (let e = 0; e < entryKeys.length; e++) {
	    //   const entryKey = entryKeys[e]
	    //   const entry = entries[entryKey]
	    //   builder[entryKey](entry)
	    // }
	    if (onInvalid) { builder.onInvalid(onInvalid); }
	    if (onValid) { builder.onValid(onValid); }
	    if (define) { builder.define(); }
	    if (getSet) { builder.getSet(); }

	    var type = value;
	    if (isObjOrArray(value)) {
	      // @@DEBUGGER

	      // could just assign to type
	      var traversableValidator = schemaBuilder(key, value);

	      if (dev) {
	        traversableValidator.schema = value;
	      }

	      type = traversableValidator;
	    }

	    // @HACK @FIXME @TODO: this should not happen,
	    // just when using babel and decorating not calling constructor...
	    // likely needs to `return this` on each?
	    // parent.store = parent.store || new Map()
	    // parent.meta = meta(parent)
	    if (parent.meta) {
	      parent.meta(SCHEMA_KEY, key, value);
	    }

	    builder.type(type).build();
	  }

	  return parent
	};

	/* ___filename___: dist/deps/encase/withSpecification.js */


	/**
	 * @desc a special encased wrapper with no try catch but same api
	 * @name withSpecification
	 * @func
	 * @memberOf encase
	 * @since 4.0.0
	 *
	 * @param  {Function} specification match
	 * @param  {Function} call cb to determine valid or invalid
	 * @param  {Function} onInvalid cb when invalid
	 * @param  {Function} onInvalid cb when valid
	 * @return {Function} a lot of functions...
	 *
	 * @see fp/curry
	 *
	 * @example
	 *  const onInvalid = console.error
	 *  const onValid = console.debug
	 *  const onCall = console.log
	 *  const encased = withSpecification(x => true)(onCall)(onValid, onInvalid)
	 *
	 *  encased(1, 2, 3) //=> onCall (did not throw)
	 */
	var withSpecification = curry(4, function (specification, call, onInvalid, onValid) { return function (a, b, c) {
	  var result = call(a, b, c);
	  if (specification(result)) { return onInvalid(result) }
	  else { return onValid(result) }
	}; });

	/* ___filename___: dist/deps/validators/error.js */




	/* istanbul ignore next: dev */
	var thrower = function (error) { return function () {
	  if (dev) {
	    console.log(error);
	  }

	  throw error
	}; };

	/**
	 * @desc enhance an Error, enable rethrowing & better inspection
	 * @memberOf encase
	 * @category types
	 * @category encase
	 *
	 * @since 4.0.0-alpha.1
	 * @param  {Primitive} method method being decorated
	 * @param  {Type} type type to validate with
	 * @return {Function} function that returns a decorated TypeError with .inspect & metadata (arg, thrown, meta)
	 *
	 * @TODO js stringify if development
	 *
	 * @see MethodChain
	 * @see validators/schemaBuilder
	 * @see validators/validatorBuilder
	 * @see plugins/encase
	 *
	 * @example
	 *   const badValidator = x => {
	 *     if (x === 'bad') {
	 *       throw new Error('bad!')
	 *     }
	 *   }
	 *   const enhancer = enhanceError('eh', badValidator)
	 *
	 *   // called by plugins/encase when throws or invalid
	 *   let error
	 *   let arg = 'bad'
	 *   try {
	 *     error = badValidator(arg)
	 *   }
	 *   catch (e) {
	 *     error = enhancer(arg, e, {metadata: true})
	 *   }
	 *
	 *   console.log(error)
	 *   //=> {[eh]: { type: badValidator, arg: 'bad', json, str, rethrow }}
	 *   //=> console.log on DEVELOPMENT
	 */
	var error$3 = function (method, type) { return function (arg, thrown, meta) {
	  var argToString = toS(arg);
	  var data = {
	    [method]: {
	      type: type,
	      arg: {
	        val: arg,
	        str: argToString,
	        json: JSON.stringify(arg),
	      },
	    },
	  };

	  var error = assign(
	    new TypeError((argToString + " != " + type)),
	    data,
	    meta
	  );

	  // put it back in its place
	  if (thrown && thrown.message) { error.message += thrown.message; }
	  if (thrown && thrown.stack) { error.stack = thrown.stack; }

	  /* istanbul ignore next: dev */
	  if (dev) {
	    // since we are just inspecting the metadata on dev
	    error.inspect = function () {
	      var devMsg = 'inspecting on development';
	      var thrownMsg = "thrown: " + thrown;
	      var eMsg = "compare: " + (error.message);
	      var errorName = "name: " + (error.name);
	      var argMsg = "arg: " + arg + ";\nstr: " + (toS(
	        arg
	      )) + " " + (typeof arg) + ";\njson: " + (JSON.stringify(arg));
	      var typeMsg = "type: " + type;
	      var stackMsg = 'stack: ' + error.stack;
	      var dashMsg = "-----";
	      var msg = "\n" + dashMsg + " " + devMsg + " " + dashMsg + "\n";
	      if (meta) { msg += "meta: " + (JSON.stringify(meta)) + "\n"; }
	      msg += thrownMsg + "\n" + eMsg + "\n" + errorName + "\n\n";
	      msg += typeMsg + "\n" + argMsg;
	      msg += "\n\n" + stackMsg + "\n" + dashMsg + "\n";
	      return msg
	    };
	  }

	  error.reThrow = thrower(error);
	  return error
	}; };

	/* ___filename___: dist/deps/encase/tryCatch.js */


	/**
	 * @TODO could curry
	 *
	 * @memberOf encase
	 * @see https://github.com/fluture-js/Fluture#encase
	 * @since 4.0.0 <- moved out into a dep
	 * @since 1.0.0
	 *
	 * @param  {Function} call
	 * @return {boolean | any} validation/encased function call result
	 */
	var tryCatch = curry(3, function (call, onValid, onInvalid) { return function (a, b, c) {
	  var result;
	  try {
	    result = call(a, b, c);
	    return onValid ? onValid(result) : result
	  }
	  catch (error) {
	    // error.caught = true
	    // @NOTE: defaults to rethrow... if (isTrue(rethrow)) throw error
	    if (onInvalid) { return onInvalid(error) }
	    else { return error }
	  }
	}; });

	/* ___filename___: dist/deps/encase/tryCatch.js */

	/* ___filename___: dist/deps/encase/encase.js */


	/**
	 * @version 5.0.0 wrapped tryCatch & withSpecification in curry
	 * @version 4.0.1 added custom encaser
	 * @since   4.0.0
	 * @member encase
	 * @symb 🛡
	 *
	 * @param   {Function} call function to _encase_
	 * @param   {Function | undefined} [encaser=tryCatch] function to encase _with_
	 * @return  {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
	 *
	 * {@link https://github.com/fluture-js/Fluture#encase fluture-encase}
	 * {@link https://github.com/lodash/lodash/blob/master/attempt.js lodash-attempt}
	 * @see {@link lodash-attempt}
	 * @see {@link fluture-encase}
	 *
	 * @example
	 *
	 *  const throws = x => {
	 *    if (x === false) {
	 *       throw new Error('invalid - cannot be false')
	 *    }
	 *    return true
	 *  }
	 *  const api = encase(throws)
	 *
	 *
	 *  api.onValid(console.log)
	 *  api.onInvalid(console.error)
	 *
	 *  //--- invalid
	 *  api.call(false)
	 *  //=> 'invalid - cannot be false'
	 *
	 *  //--- valid
	 *  api.call(true)
	 *  //=> 'true'
	 *
	 */
	var encase = function (call, encaser) {
	  var encased = encaser ? encaser(call) : tryCatch(call);

	  // @TODO rethink this scoped approach
	  // left, right, rethrow
	  var onInvalid;
	  var onValid;

	  var config = function (a, b, c) { return encased(onValid, onInvalid)(a, b, c); };

	  config.then = config.onInvalid = function (fn) {
	    onInvalid = fn;
	    return config
	  };
	  config.catch = config.onValid = function (fn) {
	    onValid = fn;
	    return config
	  };

	  return config
	};

	/* ___filename___: dist/deps/encase/encase.js */

	var index$14 = encase;

	/* ___filename___: dist/deps/validators/error.js */

	/* ___filename___: dist/plugins/encase.js */



	var ERROR_META = {m: 1};

	/**
	 * 3 steps
	 * 0. enhance error
	 * 1. encase function with a specification
	 * 2. build a function to call onInvalid or onInvalid depending
	 *
	 * @since 4.0.0
	 *
	 * @param  {string} name name of the method
	 * @param  {Object | Function} parent object being decorated by MethodChain
	 * @param  {Object} built the current state of the decoration
	 * @return {Function} curried finisher, for specification
	 *
	 * @name methodEncasingFactory
	 * @func methodEncasingFactory
	 * @symb ⛑🏭
	 * @types encase
	 *
	 * @example
	 *
	 *  methodEncasingFactory('eh', {}, {onSet: console.log})
	 *  //=> Function
	 *
	 */
	function methodEncasingFactory(name, parent, built) {
	  /**
	   * @name scopedEncase
	   * @func scopedEncase
	   * @category type
	   * @since 4.0.0-beta.1
	   *
	   * @param  {Function} fnToEncase depending on the result of this, call
	   * @param  {string | Function | undefined} [type=undefined] Type
	   * @param  {Function | undefined} [specification=undefined] Specification
	   * @return {Function} the method...
	   *
	   * @example
	   *
	   *    const fnToEncase = arg => arg === true
	   *    const onInvalid = (error, key, arg, instance) => console.log(arguments)
	   *    const onValid = (key, arg, instance) => console.log(arguments)
	   *    const encased = scopedEncase(fnToEncase)
	   *      .onValid(onValid)
	   *      .onInvalid(onInvalid)
	   *    //=> typedOnCall
	   *
	   */
	  return function scopedEncase(fnToEncase, type, specification) {
	    // @@debugger
	    var enhanceError = error$3(name, type, fnToEncase, parent);

	    // if specification is not passed in, undefined defaults to tryCatch
	    var encased = index$14(fnToEncase, specification);

	    // our configured functions, with fallback defaults
	    var onSet = built.onCall || built.onSet;
	    var onValid = built.onValid || onSet;

	    // default to re-throw
	    var onInvalid =
	      built.onInvalid ||
	      (function (arg, error) { return enhanceError(arg, error, ERROR_META).reThrow(); });

	    /**
	     * @desc this is the actual built function
	     * @name typedOnCall
	     * @func typedOnCall
	     * @category type
	     * @since 4.0.0-beta.1
	     *
	     * @param  {any} arg arg to validate
	     * @return {Function} typedOnCall(argToValidate: any)
	     *
	     * @example
	     *
	     *    const encased = encase(fnToEncase)
	     *      .onValid()
	     *      .onInvalid(function)
	     *      .call()
	     *
	     */
	    return function typedOnCall(arg) {
	      var this$1 = this;

	      // nodejs way - error first, data second, instance last
	      var callInvalid = function (error) {
	        // @@debugger
	        onInvalid.call(this$1, enhanceError(arg, error), arg, name, this$1);
	      };

	      // @TODO: ensure it isn't a syntax error and is a type error
	      // if it is already an error, we should only enhance it
	      // @example `TypeError: Cannot read property 'call' of undefined`
	      encased
	        .onInvalid(callInvalid)
	        // @NOTE: onValid defaults to `this.set(name, arg)`
	        .onValid(function (result) {
	          // @@debugger
	          onValid.call(this$1, arg, name, this$1);
	        })
	        .call(this, arg);

	      return this
	    }
	  }
	}

	var encase_1 = methodEncasingFactory;

	/* ___filename___: dist/deps/encase/withSpecification.js */

	/* ___filename___: dist/plugins/encase.js */

	/* ___filename___: dist/plugins/types.js */







	// we'll be opinionated and say either `false` or `throw`
	var spec = withSpecification(not_1(_false));

	/**
	 * @pattern factory plugin
	 * @param  {string} name
	 * @param  {Object} parent
	 * @param  {Object} built
	 * @return {void}
	 */
	var types = function validatorPlugin(name, parent, built) {
	  // core domain of this fn, used by validators and configured fns
	  var type = built.type;

	  if (type) {
	    // if (ENV_DEVELOPMENT) {
	    //   this.debugSteps('added built type')
	    // }

	    // create our validator in the factory,
	    var validator = validatorBuilder(type);

	    // then encase it, prepare a TypeError factory
	    var encase = encase_1(name, parent, built);
	    var validatorMethod = encase(validator, type, spec);

	    /* istanbul ignore next: dev */
	    if (dev) {
	      validatorMethod.type = type;
	    }

	    this.onCall(validatorMethod).onSet(validatorMethod);
	  }
	};

	/* ___filename___: dist/plugins/obj.js */


	// @TODO optimize size here ez
	var obj$2 = function(methods, name) {
	  var this$1 = this;

	  var obj = methods[name];

	  if (_function(obj)) {
	    return function () {
	      // @TODO: IS THIS THE BEST DEFAULT?!
	      this$1.define(false);
	      this$1.onCall(obj);
	      // .onSet(obj).onGet(obj)
	    }
	  }
	  else {
	    return function () {
	      this$1.from(obj);
	      // @NOTE: this is reserved
	      if (obj.set) { this$1.onSet(obj.set); }
	      if (obj.get) { this$1.onGet(obj.get); }
	      if (obj.call) { this$1.onCall(obj.call); }
	      if (obj.set && obj.get) {
	        this$1.define().getSet();
	      }
	    }
	  }
	};

	/* ___filename___: dist/plugins/decorate.js */



	/**
	 * decorates a parent when the argument is provided
	 * BUT THE FUNCTIONS WILL STILL BE SCOPED TO CURRENT PARENT
	 * for easy factory chaining
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf MethodChain
	 * @param  {Object} parentToDecorate object to put the method on instead
	 * @return {MethodChain} @chainable
	 *
	 * @see MethodChain
	 *
	 * @TODO this is more like a preset since it *adds* plugins?
	 *       more of methodFactory now
	 *
	 * @example
	 *
	 *   const chain = new Chain()
	 *   const obj = {}
	 *   chain.method('ehOh').decorate(obj).build()
	 *   typeof obj.ehOh
	 *   //=> 'function'
	 *
	 */
	var decorate = function(parentToDecorate) {
	  // @TODO is objStrict?
	  // if (parentToDecorate) {
	  this.target(parentToDecorate);

	  // can use this to "undecorate"
	  // if (!parentToDecorate.meta) <- checks already inside of meta()
	  parentToDecorate.meta = index$8(parentToDecorate);

	  // default returns result of calling function,
	  // else .parentToDecorate
	  return this.plugin(function(name, parent) {
	    parentToDecorate.meta(decorated, name);

	    // @NOTE: so we can return...
	    /* prettier-ignore */
	    return this
	      .returns(function returnsFunction(result) {
	        return result || parentToDecorate
	      })
	      .callReturns(true)
	  })
	};

	/* ___filename___: dist/plugins/autoIncrement.js */
	/**
	 * @plugin
	 * @param  {Primitive} name method name
	 * @param  {Object} parent Parent
	 * @return {MethodChain} @chainable
	 */
	var autoIncrement = function(name, parent) {
	  return this.initial(0).onCall(function () { return parent.tap(name, function (num) { return num + 1; }); })
	};

	/* ___filename___: dist/plugins/autoGetSet.js */


	/**
	 * @memberOf MethodChain
	 * @plugin
	 *
	 * @param  {Primitive} name method name being built
	 * @param  {Object} parent parent containing the method
	 * @return {MethodChain} @chainable
	 *
	 * @see MethodChain
	 *
	 * @example
	 *
	 *    const chain = new Chain()
	 *    chain.methods('eh').plugin(autoGetSet).build()
	 *
	 *    chain.eh(1)
	 *    //=> Chain
	 *    chain.eh()
	 *    //=> 1
	 *
	 */
	function autoGetSet(name, parent) {
	  var auto = function (arg) { return (_undefined(arg) ? parent.get(name) : parent.set(name, arg)); };

	  // so we know if we defaulted them
	  auto.autoGetSet = true;
	  return this.onSet(auto).onGet(auto).onCall(auto)
	}

	var autoGetSet_1 = autoGetSet;

	/* ___filename___: dist/deps/util/getDescriptor.js */
	var getDescriptor = Object.getOwnPropertyDescriptor;

	/* ___filename___: dist/deps/argumentor.js */


	/**
	 * @desc turns arguments into an array, used as a util, for opt
	 *
	 * @name argumentor
	 * @since 3.0.0
	 * @return {Array<Arguments>}
	 *
	 * @see https://github.com/aretecode/awesome-deopt
	 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
	 * @see deps/util/lengthFromZero
	 *
	 * @example
	 *
	 *    function eh() {
	 *      const args = argumentor.apply(null, arguments).slice(1)
	 *
	 *      console.log(args)
	 *      //=> [1, 10, 100]
	 *    }
	 *    eh(0, 1, 10, 100)
	 *
	 */
	var argumentor = function() {
	  var arguments$1 = arguments;

	  var len = arguments.length;
	  // len > 1 ? len - 1 : 0
	  var args = new Array(lengthFromZero(len));
	  for (var i = 0; i < len; ++i) { args[i] = arguments$1[i]; }
	  return args
	};

	/* ___filename___: dist/deps/util/getPrototypeOf.js */

	/* ___filename___: dist/deps/util/getPrototypeOf.js */

	/* ___filename___: dist/deps/util/props.js */

	/* ___filename___: dist/deps/gc.js */






	// function gc() {
	//   if (typeof window !== 'undefined') window.global = window
	//   if (typeof global.gc === 'function') global.gc()
	// }

	/**
	 * @since 4.0.0
	 * @desc remove all methods, mark for garbage collection
	 *
	 * @param {Object} obj object to traverse and clear
	 * @return {void}
	 *
	 * @see https://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript
	 * @see https://v8project.blogspot.ca/2015/08/getting-garbage-collection-for-free.html
	 * @see https://github.com/natewatson999/js-gc
	 * @see https://github.com/siddMahen/node-gc
	 * @see http://buildnewgames.com/garbage-collector-friendly-code/
	 * @see https://stackoverflow.com/questions/27597335/ensuring-object-can-be-garbage-collected
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
	 *
	 * @TODO blacklist = [] param
	 * @TODO put all GC events into a cached map and debounce the operation
	 *
	 * @example
	 *
	 *  var scoped = {}
	 *  var ref = () => scoped
	 *  var obj = {scoped, ref, eh: true}
	 *
	 *  markForGarbageCollection(obj)
	 *  //=> void
	 *
	 *  obj
	 *  //=> undefined|{}
	 *
	 */
	function markForGarbageCollection(obj$$2) {
	  // @TODO: ArrayOrObj loop... like tons of libs do...
	  // let props = isObj(obj) ? ObjectProperties(obj) : obj //isArray(obj) ? obj
	  var props$$1 = keysObjOrArray(obj$$2);

	  for (var p = 0; p < props$$1.length; p++) {
	    if (obj(obj$$2[p])) {
	      markForGarbageCollection(obj$$2[p]);
	    }
	    delete obj$$2[p];
	  }

	  // traverse(obj).forEach(function(x) {
	  //   const {value} = this
	  //
	  //   // @NOTE: just delete the main path first, later we can use cleaner
	  //   // const shouldIgnore = path
	  //   //   .map(pathPart => ignore.includes(pathPart))
	  //   //   .includes(true)
	  //   //   !shouldIgnore &&
	  //
	  //   /* istanbul ignore else: safety for bottom up */
	  //   // ensure the longest paths in traverser are used...
	  //   if (!isArray(value) && !isObj(value)) {
	  //     this.remove()
	  //   }
	  // })

	  // simple fast easy cleanup
	  // for (let p = 0; p < props.length; p++) {
	  //   delete obj[p]
	  // }

	  props$$1 = undefined;
	  obj$$2 = undefined;
	}

	var gc = markForGarbageCollection;

	/* ___filename___: dist/plugins/schema.js */

	/* ___filename___: dist/plugins/types.js */

	/* ___filename___: dist/plugins/obj.js */

	/* ___filename___: dist/plugins/decorate.js */

	/* ___filename___: dist/plugins/autoIncrement.js */

	/* ___filename___: dist/plugins/autoGetSet.js */

	/* ___filename___: dist/deps/util/getDescriptor.js */

	/* ___filename___: dist/deps/argumentor.js */

	/* ___filename___: dist/deps/gc.js */

	/* ___filename___: dist/MethodChain.js */
	/* eslint complexity: "OFF" */
	/* eslint import/max-dependencies: "OFF" */

	/**
	 * @TODO clarify .set vs .call
	 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/property property-pattern}
	 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/prototype prototype-pattern}
	 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/step-builder step-builder-pattern}
	 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/builder builder-pattern}
	 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/mixins.png mixin-png}
	 * {@link https://sourcemaking.com/design_patterns/creational_patterns creational-patterns}
	 * {@link https://sourcemaking.com/design_patterns/factory_method factory-method}
	 * {@link https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e constructors}
	 * {@link https://www.sitepoint.com/factory-functions-javascript/ js-factory-functions}
	 */

	// core




	// plugins







	// const validatorBuilder = require('./deps/validators/validatorBuilder')
	// obj





	// utils




	// is







	var DEFAULTED_KEY = 'defaulted';
	var METHOD_KEYS = [
	  'onInvalid',
	  'onValid',
	  'initial',
	  'default',
	  'type',
	  'callReturns',
	  'target',
	  'onSet',
	  'onCall',
	  'onGet',
	];

	// const SET_KEY = METHOD_KEYS[0]

	function getSetFactory(_this, name, desc) {
	  _this[camelCase(("set-" + name))] = desc.set;
	  _this[camelCase(("get-" + name))] = desc.get;
	}

	function aliasFactory(name, parent, aliases) {
	  if (!_undefined(aliases)) {
	    for (var a = 0; a < aliases.length; a++) {
	      define(parent, aliases[a], getDescriptor(parent, name));
	    }
	  }
	}

	// @TODO to use as a function
	// function _methods() {}
	// _methods.use(obj) {
	//   this.obj = obj
	//   return _methods
	// }
	// _methods.extend = _methods.use
	// _methods.methods = function(methods) {
	//   return new MethodChain(this.obj)
	// }

	var methodFactories = {};

	/**
	 * ❗ using `+` will call `.build()` in a shorthand fashion
	 *
	 * @member MethodChain
	 * @inheritdoc
	 * @class
	 * @extends {ChainedMap}
	 * @type {Map}
	 *
	 * @since 4.0.0
	 *
	 * @types MethodChain
	 * @tests MethodChain
	 *
	 * @TODO maybe abstract the most re-usable core as a protected class
	 *        so the shorthands could be used, and more functionality made external
	 * @TODO need to separate schema from here as external functionality & add .add
	 * @TODO .prop - for things on the instance, not in the store?
	 *        !!! .sponge - absorn properties into the store
	 */
	var MethodChain = (function (ChainedMap) {
	  function MethodChain(parent) {
	    var this$1 = this;

	    // timer.start('methodchain')

	    ChainedMap.call(this, parent);

	    // ----------------
	    var set = this.set.bind(this);

	    this.newThis = function () { return new MethodChain(parent); };
	    this.toNumber = function () { return this$1.build(0); };

	    /**
	     * @example
	     *
	     *  chain
	     *     .method('eh')
	     *     .type(`?string`)
	     *     .type(`string[]`)
	     *     .type(`string|boolean`)
	     *     .type(`boolean[]|string[]`)
	     *     .type(`!date`)
	     *
	     */
	    this.extend(METHOD_KEYS);

	    // shorthand
	    this.method = this.methods = function (name) {
	      if (this$1.length) { return this$1.build().methods(name) }
	      else { return this$1.name(name) }
	    };

	    // default argument...
	    this.encase = function (x) {
	      return set('encase', parent[x] || x || true)
	    };

	    // alias
	    this.then = this.onValid.bind(this);
	    this.catch = this.onInvalid.bind(this);

	    this.returns = function (x, callReturns) { return set('returns', x || parent).callReturns(callReturns); };

	    // @NOTE replaces shorthands.chainWrap
	    this.chainable = this.returns;

	    /**
	     * @desc alias methods
	     * @since 2.0.0
	     *
	     * @param  {string | Array<string>} aliases aliases to remap to the current method being built
	     * @return {MethodChain} @chainable
	     *
	     * @NOTE these would be .transform
	     *
	     * @example
	     *
	     *     const chain = new Chain()
	     *     chain.methods(['canada']).alias(['eh']).build()
	     *     chain.eh('actually...canada o.o')
	     *     chain.get('canada')
	     *     //=> 'actually...canada o.o')
	     *
	     */
	    this.alias = function (aliases) { return this$1.tap('alias', function (old, merge) { return merge(old, toArr(aliases)); }); };
	    this.plugin = function (plugin) { return this$1.tap('plugins', function (old, merge) { return merge(old, toArr(plugin)); }); };

	    this.camelCase = function () { return set('camel', true); };

	    // @NOTE: x = true is much prettier, but compiles badly
	    var defaultToTrue = function (x) { return (_undefined(x) ? true : x); };
	    this.define = function (x) { return set('define', defaultToTrue(x)); };
	    this.getSet = function (x) { return set('getSet', defaultToTrue(x)); };

	    // @TODO unless these use scoped vars, they should be on proto
	    // @NOTE shorthands.bindMethods
	    this.bind = function (target) { return set('bind', _undefined(target) ? parent : target); };
	    this.autoGetSet = function () { return this$1.plugin(autoGetSet_1); };

	    this.plugin(types);

	    if (objWithKeys(methodFactories)) {
	      keys(methodFactories).forEach(function (factoryName) {
	        this$1[factoryName] = function (arg) { return methodFactories[factoryName].call(this$1, arg); };
	        if (dev) {
	          this$1[factoryName].methodFactory = true;
	        }
	      });
	    }
	  }

	  if ( ChainedMap ) MethodChain.__proto__ = ChainedMap;
	  MethodChain.prototype = Object.create( ChainedMap && ChainedMap.prototype );
	  MethodChain.prototype.constructor = MethodChain;

	  /**
	   * @desc setup methods to build
	   * @category builder
	   * @memberOf MethodChain
	   *
	   * @since 4.0.0-beta.1 <- moved to plugin
	   * @since 4.0.0
	   *
	   * @param  {string | Object | Array<string>} methods method names to build
	   * @return {MethodChain} @chainable
	   *
	   * @example
	   *
	   *    var obj = {}
	   *    new MethodChain(obj).name('eh').build()
	   *    typeof obj.eh
	   *    //=> 'function'
	   *
	   */
	  MethodChain.prototype.name = function name (methods) {
	    var this$1 = this;

	    var names = methods;

	    /**
	     * @desc this is a plugin for building methods
	     *       schema defaults value to `.type`
	     *       this defaults values to `.onCall`
	     */
	    if (!array(methods) && obj(methods)) {
	      names = keys(methods);
	      for (var name = 0; name < names.length; name++) {
	        this$1.plugin(obj$2.call(this$1, methods, names[name]));
	      }
	    }
	    return this.set('names', names)
	  };

	  /**
	   * an object that contains nestable `.type`s
	   * they are recursively (using an optimized traversal cache) mapped to validators
	   * ❗ this method auto-calls .build, all other method config calls should be done before it
	   *
	   * @TODO link to `deps/is` docs
	   *
	   * @version 4.0.0-beta.1 <- moved to plugin
	   * @since 4.0.0
	   *
	   * @category types
	   * @memberOf MethodChain
	   *
	   * @param {Object} obj schema
	   * @return {MethodChain} @chainable
	   *
	   * @TODO move out into a plugin to show how easy it is to use a plugin
	   *       and make it able to be split out for size when needed
	   *
	   * @TODO inherit properties (in plugin, for each key)
	   *       from this for say, dotProp, getSet
	   *
	   * @TODO very @important
	   *       that we setup schema validation at the highest root for validation
	   *       and then have some demo for how to validate on set using say mobx
	   *       observables for all the way down...
	   *
	   * @typedef `schema(schema: Obj): ChainAble`
	   *
	   * @example
	   *
	   *    chain
	   *      .methods()
	   *      .define()
	   *      .getSet()
	   *      .onInvalid((error, arg, instance) => console.log(error))
	   *      .schema({
	   *        id: '?number',
	   *        users: '?object|array',
	   *        topic: '?string[]',
	   *        roles: '?array',
	   *        creator: {
	   *          name: 'string',
	   *          email: 'email',
	   *          id: 'uuid',
	   *        },
	   *        created_at: 'date',
	   *        updated_at: 'date|date[]',
	   *        summary: 'string',
	   *      })
	   *
	   *    //--- valid
	   *    chain.created_at = new Date()
	   *    chain.setCreatedAt(new Date())
	   *
	   *    isDate(chain.created_at) === true
	   *
	   *    //--- nestable validation 👍
	   *    chain.merge({creator: {name: 'string'}})
	   *
	   *    //--- invalid
	   *    chain.updated_at = false
	   *
	   */
	  MethodChain.prototype.schema = function schema$$1 (obj$$1) {
	    return schema.call(this, obj$$1)
	  };

	  /**
	   * @desc set the actual method, also need .context - use .parent
	   * @memberOf MethodChain
	   * @since 4.0.0
	   *
	   * @param  {any} [returnValue=undefined] returned at the end of the function for ease of use
	   * @return {MethodChain} @chainable
	   *
	   * @TODO if passing in a name that already exists, operations are decorations... (partially done)
	   * @see https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
	   *
	   * @example
	   *
	   *    var obj = {}
	   *    const one = new MethodChain(obj).methods('eh').getSet().build(1)
	   *    //=> 1
	   *
	   *    typeof obj.getEh
	   *    //=> 'function'
	   *
	   */
	  MethodChain.prototype.build = function build (returnValue) {
	    var this$1 = this;

	    var parent = this.parent;
	    var names = toArr(this.get('names'));
	    var shouldTapName = this.get('camel');

	    for (var name = 0; name < names.length; name++) {
	      this$1._build(shouldTapName ? camelCase(names[name]) : names[name], parent);
	    }

	    // timer.stop('methodchain').log('methodchain').start('gc')

	    // remove refs to unused
	    this.clear();
	    delete this.parent;
	    gc(this);

	    // very fast - timer & ensuring props are cleaned
	    // timer.stop('gc').log('gc')
	    // require('fliplog').quick(this)

	    return _undefined(returnValue) ? parent : returnValue
	  };

	  /**
	   * @memberOf MethodChain
	   *
	   * @since 4.0.0
	   * @protected
	   * @param {Primitive} name method name
	   * @param {Object} parent being decorated
	   * @param {Object} built method being built
	   * @return {void}
	   *
	   * @TODO  optimize the size of this
	   *        with some bitwise operators
	   *        hashing the things that have been defaulted
	   *        also could be plugin
	   *
	   * @example
	   *
	   *  ._defaults('', {}, {})
	   *
	   *
	   * @example
	   *
	   *   let methodFactories
	   *
	   *   ### `onSet`
	   *
	   *   > defaults to `this.set(key, value)`
	   *
	   *   ```ts
	   *   public onSet(fn: Fn): MethodChain
	   *   ```
	   *
	   *   ### `onCall`
	   *
	   *   > defaults to .onSet ^
	   *
	   *   ```ts
	   *   public onCall(fn: Fn): MethodChain
	   *   ```
	   *
	   *   ### `onGet`
	   *
	   *   > defaults to `this.get(key)`
	   *
	   *   ```ts
	   *   public onGet(fn: Fn): MethodChain
	   *   ```
	   *
	   */
	  MethodChain.prototype._defaults = function _defaults (name, parent, built) {
	    // defaults
	    var defaultOnSet = function (arg) { return parent.set(name, arg); };
	    var defaultOnGet = function () { return parent.get(name); };

	    // so we know if we defaulted them
	    defaultOnSet[DEFAULTED_KEY] = true;
	    defaultOnGet[DEFAULTED_KEY] = true;

	    // when we've[DEFAULTED_KEY] already for another method,
	    // we need a new function,
	    // else the name will be scoped incorrectly
	    var onCall = built.onCall;
	    var onSet = built.onSet;
	    var onGet = built.onGet;
	    if (!onGet || onGet[DEFAULTED_KEY]) {
	      this.onGet(defaultOnGet);
	    }
	    if (!onCall || onCall[DEFAULTED_KEY]) {
	      this.onCall(defaultOnSet);
	    }
	    if (!onSet || onSet[DEFAULTED_KEY]) {
	      this.onSet(defaultOnSet);
	    }
	  };

	  /**
	   * @protected
	   * @since 4.0.0-alpha.1
	   * @memberOf MethodChain
	   *
	   * @param {Primitive} name
	   * @param {Object} parent
	   * @return {void}
	   *
	   * @TODO allow config of method var in plugins since it is scoped...
	   * @TODO add to .meta(shorthands)
	   * @TODO reduce complexity if perf allows
	   * @NOTE scoping here adding default functions have to rescope arguments
	   */
	  MethodChain.prototype._build = function _build (name, parent) {
	    var this$1 = this;

	    var method;
	    var existing;
	    var entries = function () { return this$1.entries(); };

	    // could ternary `let method =` here
	    if (hasOwnProperty_1(parent, name)) {
	      existing = getDescriptor(parent, name);

	      // avoid `TypeError: Cannot redefine property:`
	      if (_false(existing.configurable)) {
	        return
	      }

	      // use existing property, when configurable
	      method = existing.value;

	      if (dev) {
	        method.decorated = true;
	      }

	      this.onCall(method).onSet(method);
	    }
	    else if (parent[name]) {
	      method = parent[name];

	      if (dev) {
	        method.decorated = true;
	      }

	      this.onCall(method).onSet(method);
	    }

	    // scope it once for plugins & type building, then get it again
	    var built = entries();

	    this._defaults(name, parent, built);

	    // plugins can add methods,
	    // useful as plugins/presets & decorators for multi-name building
	    var instancePlugins = built.plugins;
	    if (instancePlugins) {
	      for (var plugin = 0; plugin < instancePlugins.length; plugin++) {
	        built = entries();
	        instancePlugins[plugin].call(this$1, name, parent, built);
	      }
	    }

	    // after last plugin is finished, or defaults
	    built = entries();

	    // wrap in encasing when we have a validator or .encase
	    // @NOTE: validator plugin was here, moved into a plugin
	    if (built.encase) {
	      var encased = encase_1.call(this, name, parent, built)(method);

	      if (dev) {
	        encased.encased = method;
	      }

	      this.onCall(encased).onSet(encased);
	      method = encased;
	      built = entries();
	    }

	    // not destructured for better variable names
	    var shouldAddGetterSetter = built.getSet;
	    var shouldDefineGetSet = built.define;
	    var defaultValue = built.default;

	    // can only have `call` or `get/set`...
	    var onGet = built.onGet;
	    var onSet = built.onSet;
	    var onCall = built.onCall;
	    var initial = built.initial;
	    var bind = built.bind;
	    var returns = built.returns;
	    var callReturns = built.callReturns;
	    var alias = built.alias;

	    // default method, if we do not have one already
	    if (!method) {
	      method = function (arg) {
	        if ( arg === void 0 ) arg = defaultValue;

	        return onCall.call(parent, arg);
	      };

	      if (dev) {
	        method.created = true;
	      }
	    }

	    if (bind) {
	      // bind = bindArgument || parent
	      method = method.bind(bind);
	    }
	    if (returns) {
	      var ref = method;
	      method = function() {
	        var args = argumentor.apply(null, arguments);

	        // eslint-disable-next-line prefer-rest-params
	        var result = ref.apply(parent, args);

	        return _true(callReturns)
	          ? returns.apply(parent, [result].concat(args))
	          : returns
	      };
	    }

	    if (!_undefined(initial)) {
	      parent.set(name, initial);
	    }

	    // --------------- stripped -----------

	    /**
	     * !!!!! @TODO put in `plugins.post.call`
	     * !!!!! @TODO ensure unique name
	     *
	     * can add .meta on them though for re-decorating
	     * -> but this has issue with .getset so needs to be on .meta[name]
	     */

	    /* istanbul ignore next: dev */
	    if (dev) {
	      define(onGet, 'name', {
	        value: camelCase(((onGet.name) + "+get-" + name)),
	      });
	      define(onSet, 'name', {
	        value: camelCase(((onSet.name) + "+set-" + name)),
	      });
	      define(onCall, 'name', {
	        value: camelCase(((onCall.name) + "+call-" + name)),
	      });
	      define(method, 'name', {value: camelCase(("" + name))});

	      if (built.type) { method.type = built.type; }
	      if (initial) { method.initial = initial; }
	      if (bind) { method.bound = bind; }
	      if (returns) { method.returns = returns; }
	      if (alias) { method.alias = alias; }
	      if (callReturns) { method.callReturns = callReturns; }
	      if (onGet) { method._get = onGet; }
	      if (onSet) { method._set = onSet; }
	      // eslint-disable-next-line
	      if (onCall != onCall) { method._call = onCall; }
	    }

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log({
	        name: name,
	        defaultValue: defaultValue,
	        initial: initial,
	        returns: returns,
	        onGet: onGet,
	        onSet: onSet,
	        method: method.toString(),
	      });
	    }

	    // ----------------- ;stripped ------------

	    // @TODO WOULD ALL BE METHOD.POST
	    // --- could be a method too ---
	    var getterSetter = {get: onGet, set: onSet};
	    var descriptor = shouldDefineGetSet ? getterSetter : {value: method};
	    if (existing) { descriptor = assign(existing, descriptor); }

	    // [TypeError: Invalid property descriptor.
	    // Cannot both specify accessors and a value or writable attribute, #<Object>]
	    if (descriptor.value && descriptor.get) {
	      delete descriptor.value;
	    }
	    if (!_undefined(descriptor.writable)) {
	      delete descriptor.writable;
	    }

	    var target = this.get('target') || parent;

	    define(target, name, descriptor);

	    if (shouldAddGetterSetter) {
	      if (target.meta) { target.meta(shorthands, name, onSet); }
	      getSetFactory(target, name, getterSetter);
	    }

	    aliasFactory(name, target, alias);

	    // if (built.metadata) {
	    //   target.meta(SHORTHANDS_KEY, name, set)
	    // }
	    // require('fliplog')
	    //   .bold('decorate')
	    //   .data({
	    //     // t: this,
	    //     descriptor,
	    //     shouldDefineGetSet,
	    //     method,
	    //     str: method.toString(),
	    //     // target,
	    //     name,
	    //   })
	    //   .echo()
	  };

	  // ---

	  /**
	   * @desc add methods to the parent for easier chaining
	   * @alias extendParent
	   * @memberOf MethodChain
	   *
	   * @since 4.0.0-beta.1 <- moved to plugin
	   * @since 4.0.0 <- moved from Extend
	   * @since 1.0.0
	   *
	   * @param {Object} [parentToDecorate=undefined] decorate a specific parent shorthand
	   * @return {ChainedMap} @chainable
	   *
	   * @see plugins/decorate
	   * @see ChainedMap.parent
	   *
	   * @example
	   *
	   *  var obj = {}
	   *  new MethodChain({}).name('eh').decorate(obj).build()
	   *  typeof obj.eh
	   *  //=> 'function'
	   *
	   * @example
	   *
	   *     class Decorator extends Chain {
	   *       constructor(parent) {
	   *         super(parent)
	   *         this.methods(['easy']).decorate(parent).build()
	   *         this.methods('advanced')
	   *           .onCall(this.advanced.bind(this))
	   *           .decorate(parent)
	   *           .build()
	   *       }
	   *       advanced(arg) {
	   *         this.set('advanced', arg)
	   *         return this.parent
	   *       }
	   *       easy(arg) {
	   *         this.parent.set('easy-peasy', arg)
	   *       }
	   *     }
	   *
	   *     class Master extends Chain {
	   *       constructor(parent) {
	   *         super(parent)
	   *         this.eh = new Decorator(this)
	   *       }
	   *     }
	   *
	   *     const master = new Master()
	   *
	   *     master.get('easy-peasy')
	   *     //=> true
	   *
	   *     master.eh.get('advanced')
	   *     //=> 'a+'
	   *
	   * @example
	   *
	   *    +chain.method('ehOh').decorate(null)
	   *    //=> @throws Error('must provide parent argument')
	   *
	   */
	  MethodChain.prototype.decorate = function decorate$$1 (parentToDecorate) {
	    /* istanbul ignore next: devs */
	    if (dev) {
	      if (!(parentToDecorate || this.parent.parent)) {
	        throw new Error('must provide parent argument')
	      }
	    }
	    return decorate.call(this, parentToDecorate || this.parent.parent)
	  };

	  /**
	   * @desc adds a plugin to increment the value on every call
	   *        @modifies this.initial
	   *        @modifies this.onCall
	   *
	   * @memberOf MethodChain
	   * @version 4.0.0-beta.1 <- moved to plugin
	   * @version 4.0.0 <- renamed from .extendIncrement
	   * @since 0.4.0
	   *
	   * @return {MethodChain} @chainable
	   *
	   * @see plugins/autoIncrement
	   *
	   * @example
	   *
	   *     chain.methods(['index']).autoIncrement().build().index().index(+1).index()
	   *     chain.get('index')
	   *     //=> 3
	   *
	   */
	  MethodChain.prototype.autoIncrement = function autoIncrement$$1 () {
	    return this.plugin(autoIncrement)
	  };

	  return MethodChain;
	}(ChainedMapBase));

	/**
	 * @desc add methodFactories easily
	 * @static
	 * @since 4.0.0-beta.2
	 *
	 * @param {Object} methodFactory factories to add
	 * @return {void}
	 *
	 * @example
	 *
	 *   function autoGetSet(name, parent) {
	 *     const auto = arg =>
	 *       (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))
	 *
	 *     //so we know if we defaulted them
	 *     auto.autoGetSet = true
	 *     return this.onSet(auto).onGet(auto).onCall(auto)
	 *   }
	 *   MethodChain.addPlugin({autoGetSet})
	 *
	 *
	 *   const chain = new Chain()
	 *   chain.methods('eh').autoGetSet().build()
	 *
	 *   chain.eh(1)
	 *   //=> chain
	 *   chain.eh()
	 *   //=> 1 *
	 *
	 */
	MethodChain.add = function addMethodFactories(methodFactory) {
	  assign(methodFactories, methodFactory);
	};
	methodFactories = MethodChain.add;

	var MethodChain_1 = MethodChain;

	/* ___filename___: dist/deps/is/mapish.js */



	/**
	 * @func isMapish
	 *
	 * @memberOf is
	 * @since 3.0.0
	 * @extends isMap
	 * @variation also checks `instanceof Chainable`
	 *
	 * @param  {*} x value to check
	 * @return {boolean} isMapish
	 *
	 * @example
	 *
	 *    isMapish(new Map)
	 *    //=> true
	 *
	 *    isMapish(new Chain)
	 *    //=> true
	 *
	 *    isMapish({})
	 *    //=> false
	 *
	 *    isMapish(1)
	 *    //=> false
	 *
	 */
	var mapish = function (x) { return map(x) || x instanceof Chainable; };

	/* ___filename___: dist/MethodChain.js */

	/* ___filename___: dist/deps/is/mapish.js */

	/* ___filename___: dist/MergeChain.js */
	/* eslint complexity: "OFF" */












	var ON_EXISTING_KEY = 'onExisting';
	var ON_VALUE_KEY = 'onValue';
	var MERGER_KEY = 'merger';
	var MERGER_OPTIONS_KEY = 'opts';
	var OBJ_KEY = 'obj';

	/**
	 * @since 1.0.0
	 * @type {Map}
	 * @extends {ChainedMapBase}
	 * @member MergeChain
	 * @memberOf Chainable
	 *
	 * @types MergeChain
	 * @tests MergeChain
	 * @see deps/dopemerge
	 *
	 * {@link https://sourcemaking.com/design_patterns/visitor visitor-pattern}
	 *
	 * @TODO consider just making this a function,
	 *       because 80/20 onValue merger & onExisting
	 *       are rarely used & are easily overridable with .merge
	 */
	var MergeChain = (function (ChainedMapBase$$1) {
	  function MergeChain(parent) {
	    ChainedMapBase$$1.call(this, parent);

	    /* prettier-ignore */
	    this
	      .extend([ON_EXISTING_KEY, ON_VALUE_KEY, OBJ_KEY])
	      .set(ON_VALUE_KEY, function () { return true; })
	      .set(MERGER_KEY, index$2);
	  }

	  if ( ChainedMapBase$$1 ) MergeChain.__proto__ = ChainedMapBase$$1;
	  MergeChain.prototype = Object.create( ChainedMapBase$$1 && ChainedMapBase$$1.prototype );
	  MergeChain.prototype.constructor = MergeChain;

	  /**
	   * @desc options for merging with dopemerge
	   *       @modifies this.merger | this.opts
	   *
	   * @memberOf MergeChain
	   * @since 1.0.2
	   * @param  {Object | Function} opts when object: options for the merger. when function: is the merger
	   * @return {MergeChain} @chainable
	   * @see dopemerge
	   *
	   * @example
	   *   {
	   *     stringToArray: true,
	   *     boolToArray: false,
	   *     boolAsRight: true,
	   *     ignoreTypes: ['null', 'undefined', 'NaN'],
	   *     debug: false,
	   *   }
	   *
	   * @example
	   *    .merger(require('lodash.mergewith')())
	   */
	  MergeChain.init = function init (parent) {
	    return new MergeChain(parent)
	  };

	  MergeChain.prototype.merger = function merger (opts) {
	    if (_function(opts)) { return this.set(MERGER_KEY, opts) }
	    return this.set(MERGER_OPTIONS_KEY, opts)
	  };

	  // [v] messes comments on conditional brace style
	  /* prettier-ignore */
	  /**
	   * @desc merges object in, goes through all keys, checks cbs, dopemerges
	   *
	   * @since 1.0.0
	   *
	   * @param  {Object} [obj2=undefined] object to merge in, defaults to this.get('obj')
	   * @return {MergeChain} @chainable
	   *
	   * @see ChainedMap
	   * @TODO issue here if we extend without shorthands &
	   *       we want to merge existing values... :s
	   *
	   *
	   * @example
	   *
	   *  const chain = new Chain()
	   *  chain.merge({canada: {eh: true}})
	   *  chain.merge({canada: {arr: [0, {'1': 2}], eh: {again: true}}})
	   *  chain.entries()
	   *  //=> {canada:{ eh: {again: true}, arr: [0, {'1': 2}] }}
	   *
	   */
	  MergeChain.prototype.merge = function merge (obj2) {
	    var this$1 = this;

	    // better uglifying
	    var parent = this.parent;
	    var get = function (key) { return this$1.get(key); };

	    var onExisting = get(ON_EXISTING_KEY);
	    var onValue = get(ON_VALUE_KEY);
	    var opts = get(MERGER_OPTIONS_KEY);
	    var obj = obj2 || get(OBJ_KEY);
	    var merger = get(MERGER_KEY);
	    var shorthands$$1 = parent.meta ? parent.meta(shorthands) : {};
	    var keys$$1 = keys(obj);

	    // @@debugger

	    /* istanbul ignore next: devs */
	    if (dev) {
	      if (!obj) {
	        console.log({onExisting: onExisting, opts: opts, obj: obj, merger: merger, shorthands: shorthands$$1, keys: keys$$1, parent: parent});
	        throw new Error('must provide an object to merge')
	      }
	    }

	    /**
	     * @private
	     *
	     * since this would be slower
	     * if I want to not have a speedy default when using .onExisting
	     * should @note to use .extend
	     * when using chains without a class & doing .merge (edge-case)
	     *
	     * @param  {Primitive} key key (shorthands[key] or just key)
	     * @param  {*} value obj[key]
	     * @return {void}
	     *
	     * @TODO could use .eq here
	     * @TODO if (isMapish(obj)) obj = obj.entries()
	     *
	     * @example
	     *  var obj = {key: 1}
	     *
	     *  MergeChain.init(obj).merge({key: ['value']})
	     *
	     *  // goes to this internal scoped function
	     *  handleExisting('key', ['value'])
	     *  // if there is .onValue or .onExisting, use them, default deepmerge
	     *
	     *  obj
	     *  //=> {key: [1, 'value']}
	     *
	     */
	    var handleExisting = function (key, value) {
	      /**
	       * @desc when fn is a full method, not an extended shorthand
	       * @since 0.5.0
	       *
	       * @param {Primitive} keyToSet key we chose to set
	       * @param {*} valueToSet value we chose to set (merged, existing, new)
	       * @return {Parent | Chain | *} .set or [keyToSet] return
	       *
	       * @example
	       *
	       *    MergeChain.init(new Chain().extend(['eh']))
	       *
	       *    //isFunction: true => call parent[keyToSet](valueToSet)
	       *    setChosen('eh', 1)
	       *    //=> parent
	       *    parent.get('eh')
	       *    //=> 1
	       *
	       *    //=>isFunction: false => parent.set(keyToSet, valueToSet)
	       *    setChosen('oh', 1)
	       *    //=> parent //<- unless .set is overriden
	       *    parent.get('oh')
	       *    //=> 1
	       *
	       */
	      var setChosen = function (keyToSet, valueToSet) { return (_function(parent[key])
	          ? parent[keyToSet](valueToSet)
	          : parent.set(keyToSet, valueToSet)); };

	      /**
	       * check if it's shorthanded
	       * -> check if it has a value already
	       */
	      if (_true(parent.has(key))) {
	        // get that value
	        var existing = parent.get(key);

	        /**
	         * if we have onExisting, call it
	         * else default to dopemerge
	         */
	        if (_undefined(onExisting)) {
	          /* istanbul ignore next: devs */
	          if (debug) {
	            console.log(
	              'parent has: no onExisting',
	              {existing: existing, [key]: value}
	            );
	          }
	          setChosen(key, merger(existing, value, opts));
	        }
	        else {
	          /* istanbul ignore next: devs */
	          if (debug) {
	            console.log(
	              'parent has: has onExisting',
	              {existing: existing, onExisting: onExisting, [key]: value}
	            );
	          }

	          /**
	           * maybe we should not even have `.onExisting`
	           * since we can just override merge method...
	           * and then client can just use a custom merger...
	           *
	           * could add and remove subscriber but that's overhead and
	           * tricky here, because if we set a value that was just set...
	           */
	          setChosen(key, onExisting(existing, value, opts));
	        }
	      }
	      else {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log('parent does not have', {[key]: value});
	        }
	        setChosen(key, value);
	      }
	    };

	    for (var k = 0, len = keys$$1.length; k < len; k++) {
	      // key to the current property in the data being merged
	      var key = keys$$1[k];

	      // we have our value, no we can change the key if needed for shorthands
	      var value = obj[key];

	      // @NOTE: when shorthands is an object, key is the method it should call
	      if (!_undefined(shorthands$$1[key]) && shorthands$$1[key] !== key) {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log(
	            'had a shorthand with a diff key than the object (likely @alias)',
	            {shorthandMethod: shorthands$$1[key], key: key, value: value}
	          );
	        }
	        key = shorthands$$1[key];
	      }

	      // method for the key
	      var method = parent[key];

	      /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
	      // use onValue when set
	      if (!onValue(value, key, this$1)) {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log('had onValue, was false, ignored', {onValue: onValue, key: key, value: value});
	        }
	        continue
	      }
	      // when property itself is a Chainable
	      else if (mapish(method)) {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log('has method or shorthand');
	        }
	        parent[key].merge(value);
	      }
	      // we have a method or shorthand
	      else if (method) {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log('has method or shorthand', {method: method, key: key, value: value});
	        }
	        handleExisting(key, value);
	      }
	      // default to .set on the store
	      else {
	        /* istanbul ignore next: devs */
	        if (debug) {
	          console.log('went to default', {method: method, key: key, value: value});
	        }
	        parent.set(key, value);
	      }
	    }

	    return parent
	  };

	  return MergeChain;
	}(ChainedMapBase));

	/**
	 * @memberOf MergeChain
	 * @method onExisting
	 * @since 0.9.0
	 * @example
	 *
	 *    const {Chain, MergeChain} = require('chain-able')
	 *
	 *    const chain = new Chain().set('str', 'stringy')
	 *
	 *    MergeChain.init(chain)
	 *      .onExisting((a, b) => a + b)
	 *      .merge({str: '+'})
	 *
	 *    chain.get('str')
	 *    //=> 'stringy+'
	 *
	 */

	var MergeChain_1 = MergeChain;

	// @TODO re-enable this later
	// module.exports = new MethodChain(MergeChain.prototype)
	//   .methods(['onExisting', 'onValue', 'obj'])
	//   .build(MergeChain)

	/* ___filename___: dist/MergeChain.js */

	/* ___filename___: dist/ChainedMap.js */





	/**
	 * @desc ChainedMap composer
	 * @category Chainable
	 * @category Map
	 * @memberOf ChainedMapBase
	 * @class ChainedMap
	 * @since 0.0.1
	 * @alias ComposeMap
	 * @extends {ChainedMapBase}
	 *
	 * @param {Class | Object | Composable} [SuperClass=ChainedMapBase] class to extend
	 * @return {Class} ChainedMap
	 *
	 * @see ChainedMapBase
	 * @tests ChainedMap
	 * @types ChainedMap
	 *
	 * @example
	 *
	 *    const heh = class {}
	 *    const composed = ChainedMap.compose(heh)
	 *    const hehchain = new Composed()
	 *    hehchain instanceof heh
	 *    //=> true
	 *
	 */

	var ComposeChainedMap = function (SuperClass) {
	  var Composed =
	    SuperClass === ChainedMapBase
	      ? SuperClass
	      : ChainedMapBase.compose(SuperClass);

	  var ChainedMap = (function (Composed) {
	    function ChainedMap () {
	      Composed.apply(this, arguments);
	    }

	    if ( Composed ) ChainedMap.__proto__ = Composed;
	    ChainedMap.prototype = Object.create( Composed && Composed.prototype );
	    ChainedMap.prototype.constructor = ChainedMap;

	    ChainedMap.prototype.methods = function methods (names) { return this.method(names) };

	    /**
	     * @desc the way to easily start building methods when using chainable instances
	     *
	     * @since 4.0.0
	     * @category methods
	     * @alias methods
	     *
	     * @param  {string | Array<string> | Primitive} names method names to add to the object
	     * @return {MethodChain} @chainable
	     *
	     * @see MethodChain
	     *
	     * @example
	     *
	     *   const chain = new Chain()
	     *   chain.method('eh').build()
	     *   chain.eh(true)
	     *   chain.get('eh')
	     *   // => true
	     *
	     */
	    ChainedMap.prototype.method = function method (names) {
	      return new MethodChain_1(this).name(names)
	    };

	    /**
	     * @desc merges an object with the current store
	     * @since 0.4.0
	     * @category merge
	     *
	     * @param {Object} obj object to merge
	     * @param {Function | null} [handleMergeFn=undefined] return the merger to the callback
	     * @return {ChainedMap} @chainable
	     *
	     * @TODO needs to pass in additional opts somehow...
	     * @see deps/dopemerge
	     * @see MergeChain
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *    chain.set('eh', [1])
	     *    chain.merge({eh: [2]})
	     *    chain.get('eh')
	     *    // => [1, 2]
	     *
	     * @example
	     *
	     *   const chain = new Chain()
	     *   chain.set('emptyArr', [])
	     *   chain.merge({emptyArr: []}, mergeChain =>
	     *     mergeChain.onExisting((a, b) => []).merger((a, b) => []).merge()
	     *   )
	     *   chain.get('emptyArr').length)
	     *   //=> 0
	     *
	     */
	    ChainedMap.prototype.merge = function merge (obj, handleMergeFn) {
	      var merger = MergeChain_1.init(this);

	      if (_undefined(handleMergeFn)) {
	        merger.merge(obj);
	      }
	      else {
	        handleMergeFn(merger.obj(obj));
	      }

	      return this
	    };

	    return ChainedMap;
	  }(Composed));

	  return ChainedMap
	};

	var composed = ComposeChainedMap(ChainedMapBase);
	composed.compose = ComposeChainedMap;

	var ChainedMap = composed;

	/* ___filename___: dist/ChainedSet.js */



	/**
	 * @class
	 * @category Chainable
	 * @category Set
	 * @memberOf Chainable
	 * @member ChainedSet
	 *
	 * @TODO could add .first .last ?
	 * @NOTE had Symbol.isConcatSpreadable but it was not useful
	 *
	 * @tutorial https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
	 * @see http://2ality.com/2015/09/well-known-symbols-es6.html
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
	 * @see Chainable
	 * @tests ChainedSet
	 * @types ChainedSet
	 *
	 * @extends {Chainable}
	 * @prop {Set} store
	 * @type {Set}
	 */
	var ChainedSet = (function (Chainable$$2) {
	  function ChainedSet(parent) {
	    Chainable$$2.call(this, parent);
	    this.store = new Set();
	  }

	  if ( Chainable$$2 ) ChainedSet.__proto__ = Chainable$$2;
	  ChainedSet.prototype = Object.create( Chainable$$2 && Chainable$$2.prototype );
	  ChainedSet.prototype.constructor = ChainedSet;

	  /**
	   * @desc appends a new element with a specified value to the end of the .store
	   * @memberOf ChainedSet
	   * @since 0.4.0
	   *
	   * @param {any} value any value to add to **end** of the store
	   * @return {ChainedSet} @chainable
	   *
	   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add mozilla-set-add}
	   * {@link https://github.com/lodash/lodash/blob/master/.internal/addSetEntry.js#L9 lodash-add-set-entry}
	   * @see {@link mozilla-set-add}
	   * @see {@link lodash-add-set-entry}
	   *
	   * @example
	   *
	   *   const people = new ChainedSet()
	   *   people
	   *     .add('sam')
	   *     .add('sue')
	   *
	   *   for (let name of people) console.log(name)
	   *   //=> sam, sue
	   *
	   */
	  ChainedSet.prototype.add = function add (value) {
	    this.store.add(value);
	    return this
	  };

	  /**
	   * @desc inserts the value at the **beginning** of the Set
	   * @memberOf ChainedSet
	   * @since 0.4.0
	   *
	   * @param {any} value any value to add to **beginning** the store
	   * @return {ChainedSet} @chainable
	   *
	   * @example
	   *
	   *   const people = new ChainedSet()
	   *   people
	   *     .add('sue')
	   *     .prepend('first')
	   *
	   *   for (let name of people) console.log(name)
	   *   //=> first, sue
	   *
	   */
	  ChainedSet.prototype.prepend = function prepend (value) {
	    this.store = new Set([value].concat(Chainable$$2.prototype.values.call(this)));
	    return this
	  };

	  /**
	   * @desc merge any Array/Set/Iteratable/Concatables into the array, at the end
	   * @since 0.4.0
	   * @memberOf ChainedSet
	   *
	   * @param {Array | Set | Concatable} arr values to merge in and append
	   * @return {ChainedSet} @chainable
	   *
	   * @example
	   *
	   *   const people = new ChainedSet()
	   *   people
	   *     .add('sam')
	   *     .add('sue')
	   *     .prepend('first')
	   *     .merge(['merged'])
	   *
	   *   for (let name of people) console.log(name)
	   *   //=> first, sam, sue, merged
	   *
	   */
	  ChainedSet.prototype.merge = function merge (arr) {
	    var this$1 = this;

	    var mergeable = toArr(arr);
	    for (var i = 0; i < mergeable.length; i++) {
	      this$1.store.add(mergeable[i]);
	    }
	    return this
	  };

	  return ChainedSet;
	}(Chainable));

	var ChainedSet_1 = ChainedSet;

	/* ___filename___: dist/ChainedMap.js */

	/* ___filename___: dist/FactoryChain.js */





	var ON_CHAIN_UP_DOWN_KEY = 'onChainUpDown';
	var ON_DONE_KEY = 'onDone';

	/**
	 * @extends {ChainedMapBase}
	 * @inheritdoc
	 * @prop {Object} data
	 * @prop {Set} _calls
	 * @type {Map}
	 *
	 * {@link http://robdodson.me/javascript-design-patterns-factory/ abstract-factory-pattern}
	 *
	 * @member FactoryChain
	 * @category Chainable
	 * @tests FactoryChain
	 * @types FactoryChain
	 */
	var FactoryChain = (function (ChainedMap$$1) {
	  function FactoryChain(parent) {
	    ChainedMap$$1.call(this, parent);

	    this.data = {};
	    this._calls = new Set();

	    this.factory()
	      .extend(['optional', 'required', ON_CHAIN_UP_DOWN_KEY, ON_DONE_KEY])
	      .set('len', 0);
	  }

	  if ( ChainedMap$$1 ) FactoryChain.__proto__ = ChainedMap$$1;
	  FactoryChain.prototype = Object.create( ChainedMap$$1 && ChainedMap$$1.prototype );
	  FactoryChain.prototype.constructor = FactoryChain;

	  /**
	   * @desc chain back up to parent for any of these
	   * @since 2.0.0
	   *
	   * @param  {Array<string>} methods methods to trigger `onChainUpDown` on
	   * @return {FactoryChain} @chainable
	   *
	   * @memberOf FactoryChain
	   * @emits onChainUpDown
	   * @TODO should have a debug log for this
	   *
	   * @example
	   *
	   *    const {Chain, FactoryChain, ChainedSet} = require('chain-able')
	   *
	   *    class Things extends Chain {
	   *      constructor(parent) {
	   *        super(parent)
	   *        this.people = new ChainedSet(this)
	   *      }
	   *      person() {
	   *        const person = new FactoryChain(this)
	   *        person
	   *          .props(['name', 'age', 'email'])
	   *          .onChainUpDown(this.person)
	   *          .chainUpDowns(['person'])
	   *          .onDone(personChain => {
	   *            this.people.add(personChain)
	   *            return this
	   *          })
	   *
	   *        return person
	   *      }
	   *    }
	   *
	   *    const things = new Things()
	   *    const returned = things
	   *        .person()
	   *          .name('sue')
	   *        .person()
	   *          .age(100)
	   *          .name('john')
	   *          .email('@')
	   *
	   */
	  FactoryChain.prototype.chainUpDowns = function chainUpDowns (methods) {
	    var arguments$1 = arguments;
	    var this$1 = this;

	    methods.forEach(function (m) {
	      this$1[m] = function () {
	        // @@debugger
	        this$1.end();
	        return this$1.parent[m].apply(this$1.parent, arguments$1)
	      };
	    });
	    return this
	  };

	  /**
	   * @desc adds an *array* of properties, using FactoryChain.prop
	   * @since 2.0.0
	   *
	   * @memberOf FactoryChain
	   * @param  {Array<string>} names property names
	   * @return {FactoryChain} @chainable
	   *
	   * @see FactoryChain.prop
	   *
	   * @example
	   *
	   *    person.props(['name', 'age', 'email'])
	   *
	   *    typeof person.name
	   *    //=> 'function'
	   *
	   *    person.name().age()
	   *    //=> FactoryChain
	   *
	   *    person.name().age().email()
	   *    //=> ParentChain
	   *
	   *    // person.name().age().person()
	   *    //=> FactoryChain
	   *    //^ because .person is `chainUpDowns`
	   *    //^ so it finishes the old chain, and begins a new one
	   *
	   */
	  FactoryChain.prototype.props = function props (names) {
	    var this$1 = this;

	    names.forEach(function (name) { return this$1.prop(name); });
	    return this
	  };

	  /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
	  /**
	   * @desc add property that are counted towards the call count for easy auto-ending chaining
	   * @since 2.0.0
	   *
	   * @param  {Primitive} name property name
	   * @param  {Function | null | undefined} [onCall=undefined] callback for the property
	   * @return {FactoryChain} @chainable
	   *
	   * @memberOf FactoryChain
	   *
	   * @example
	   *
	   *    person
	   *      //.prop also accepts an optional callback,
	   *      //for nestable nestable chains
	   *      .prop('name')
	   *      .prop('age')
	   *      .prop('email')
	   *
	   */
	  FactoryChain.prototype.prop = function prop (name, onCall) {
	    var this$1 = this;

	    this.tap('len', function (len) { return len + 1; });

	    // so if we call a property twice,
	    // chain back up to parent,
	    // add a new chain
	    if (!_undefined(this[name]) && _true(this.has(ON_CHAIN_UP_DOWN_KEY))) {
	      this.end();
	      return this.get(ON_CHAIN_UP_DOWN_KEY)()[name](onCall)
	    }

	    // @TODO need to spread as needed
	    this[name] = function (args) {
	      // @@debugger
	      /* istanbul ignore next: devs */
	      if (debug) {
	        console.log(
	          ("called " + name + " with:"),
	          args,
	          "calls length is now:",
	          this$1._calls.size
	        );
	      }
	      if (_undefined(onCall)) { this$1.data[name] = args; }
	      else { onCall(args); }

	      this$1._calls.add(name);

	      // aka magicReturn
	      return this$1._calls.size === this$1.get('len') ? this$1.end() : this$1
	    };
	    return this
	  };

	  /**
	   * @desc access data being built when stepping through a factory
	   * @since 2.0.0
	   *
	   * @param  {Primitive} [prop=undefined] key of the data, or returns all data
	   * @return {any} this.data
	   *
	   * @memberOf FactoryChain
	   *
	   * @example
	   *
	   *    .data['prop'] = 'eh'
	   *    .getData('prop')
	   *    //=> 'eh'
	   *    .getData()
	   *    //=> {prop: 'eh'}
	   *
	   * @example
	   *
	   *    const person = new FactoryChain(this)
	   *    const age = person.props(['name', 'age']).age(10).getData('age')
	   *    expect(age).toBe(10)
	   *
	   */
	  FactoryChain.prototype.getData = function getData (prop) {
	    /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
	    return _undefined(prop) ? this.data : this.data[prop]
	  };

	  /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
	  /**
	   * @desc creates/add the `.end` method,
	   *       which checks how many methods have been called,
	   *       and decides whether to return parent or not
	   *       @modifies this.end
	   *
	   * @since 2.0.0
	   *
	   * @param  {Object} [obj={}] optional object to use for creating .end
	   * @return {FactoryChain} @chainable
	   *
	   * @memberOf FactoryChain
	   */
	  FactoryChain.prototype.factory = function factory (obj) {
	    var this$1 = this;

	    this.end = function (arg) {
	      // @@debugger
	      var ended;

	      if (obj && !_undefined(obj.end)) { ended = obj.end; }
	      else if (this$1.has(ON_DONE_KEY)) { ended = this$1.get(ON_DONE_KEY); }

	      if (ended) { ended = ended.call(this$1, this$1.data, this$1.parent, this$1, arg); }

	      if (ended && ended !== this$1) { return ended }
	      else { return this$1.parent }
	    };

	    return this
	  };

	  return FactoryChain;
	}(ChainedMap));

	var FactoryChain_1 = FactoryChain;

	/* ___filename___: dist/deps/fp/pipeTwo.js */
	/**
	 * Performs left-to-right function composition. ONLY CAN PIPE 2 ARGUMENTS
	 *
	 * @NOTE The result of pipe is not automatically curried.
	 * @NOTE This is a variation, is the internal version with only 2 functions, for now
	 *
	 * @func
	 * @memberOf fp
	 * @since v5.0.0
	 * @category Function
	 *
	 * @param {...Function} f function first
	 * @param {...Function} g function next
	 * @return {Function}
	 *
	 * @see https://github.com/ramda/ramda/blob/master/src/pipe.js
	 * @see https://github.com/ramda/ramda/blob/master/test/pipe.js
	 *
	 * @types fp
	 * @tests fp/pipe
	 *
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate);
	 *      f(3, 4); // -(3^4) + 1
	 *
	 */
	var pipeTwo = function _pipe(f, g) {
	  return function() {
	    return g.call(this, f.apply(this, arguments))
	  }
	};

	/* ___filename___: dist/deps/matcher/escape-string-regex.js */


	/**
	 * @func escapeStringRegExp
	 * @module escape-string-regexp
	 * @memberOf matcher
	 * @since 3.0.0
	 *
	 * @param  {string} str string to escape
	 * @return {string} escaped string
	 *
	 * {@link https://github.com/sindresorhus/escape-string-regexp escape-string-regexp}
	 * @see {@link escape-string-regexp *} 🍴
	 * @see fp/replace
	 *
	 * @NOTE also as const escapeStringRegexp = require('escape-string-regexp');
	 *
	 * @example
	 *
	 *    const escaped = escapeStringRegexp('how much $ for a unicorn?');
	 *    //=> 'how much \$ for a unicorn\?'
	 *    new RegExp(escaped);
	 *
	 */
	var escapeStringRegex = replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

	/* ___filename___: dist/deps/fp/pipeTwo.js */

	/* ___filename___: dist/deps/matcher/escape-string-regex.js */

	/* ___filename___: dist/deps/matcher/to-regexp.js */




	/**
	 * @func toRegExp
	 * @memberOf matcher
	 * @module to-regexp
	 * @extends escapeStringRegExp
	 *
	 * @param {string} str string to escape
	 * @return {string} escaped str
	 *
	 * @example
	 *
	 *    toRegExp('*')
	 *    => '.*'
	 *
	 *    toRegExp('eh')
	 *    => 'eh'
	 *
	 */
	var toRegexp = pipeTwo(escapeStringRegex, replace(/\\\*/g, '.*'));

	/* ___filename___: dist/deps/matcher/to-regexp.js */

	/* ___filename___: dist/deps/matcher/matcher.js */
	/**
	 * @name matcher
	 * @member matcher
	 * @see https://github.com/sindresorhus/matcher/blob/master/index.js
	 * @symb 🎯
	 * @types matcher
	 * @tests deps/matcher
	 */







	var m = {};

	/**
	 * @desc turn any string[], function[], or RegExp[] into a matcher
	 * @memberOf matcher
	 * @since 3.0.0
	 * @func make
	 *
	 * @param  {Array<string> | string | Function | RegExp} pattern a matchable pattern
	 * @param  {boolean | undefined} shouldNegate turn into a negated regex
	 * @param  {boolean | undefined} alphaOmega should have regex start at the beginning and the end
	 * @return {Array<string> | string | Function | RegExp} matchable
	 *
	 * @example
	 *
	 *    matcher.make('*')
	 *    //=> RegExp('.*', 'i')
	 *
	 * @example
	 *
	 *    var any = new RgExp('.*', 'i')
	 *    matcher.make(any)
	 *    //=> any
	 *
	 * @example
	 *
	 *    var strings = x => typeof x === 'string'
	 *    matcher.make(strings)
	 *    // {test: strings}
	 *
	 * @example
	 *
	 *    var tester = {test: x => x === true}
	 *    matcher.make(tester)
	 *    // tester
	 *
	 * @example
	 *
	 *    var noName = '!name'
	 *    matcher.make(noName, true)
	 *    // new RegExp('(?:name)', 'i')
	 *
	 * @example
	 *
	 *    var noName = '!name'
	 *    matcher.make(noName, true, true)
	 *    // new RegExp('^(?:name)$', 'i')
	 *
	 */
	m.make = function (pattern, shouldNegate, alphaOmega) {
	  if (index$10.has(pattern)) { return index$10.get(pattern) }

	  var matchable = pattern;
	  if (matcher(matchable) && !matchable.test) { matchable.test = matchable; }
	  if (matcher(matchable)) { return matchable }

	  // if (!matchable) {
	  //   console.log({pattern, shouldNegate, alphaOmega})
	  //   throw new Error('eh')
	  // }
	  var negated = matchable[0] === '!';
	  if (negated) { matchable = matchable.slice(1); }
	  matchable = toRegexp(matchable);

	  if (negated && shouldNegate) { matchable = "(?!" + matchable + ")"; }
	  if (alphaOmega) { matchable = "^" + matchable + "$"; }

	  matchable = regexp$2(("" + matchable), 'i');
	  matchable.negated = negated;

	  index$10.set(pattern, matchable);
	  return matchable
	};

	/**
	 * @desc same as .make but also accepts inputs, and returns an array
	 * @memberOf matcher
	 * @func match
	 * @since 3.0.0
	 *
	 * @param  {Array<string> | string} inputs input to use patterns as predicates on
	 * @param  {Array<string> | string | Function | RegExp} patterns predicates to match with, transformed to Matcher
	 * @param  {boolean | undefined} shouldNegate should negate, passed to matcher.make
	 * @param  {boolean | undefined} alphaOmega should enforce regex @beginning and end, passed to .matcher
	 * @return {Array<any>}
	 *
	 * @see Matcher.make
	 * @see compose/Observe
	 *
	 * @example
	 *
	 *
	 *   matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
	 *   //=> ['moo']
	 *
	 *   matcher(['foo', 'bar', 'moo'], ['!*oo']);
	 *
	 *
	 * @example
	 *
	 *
	 *   matcher('kinga', 'kinga')
	 *   //=> ['kinga']
	 *   matcher('k*nga', 'kinga')
	 *   //=> ['kinga']
	 *   matcher('kinga', 'nope')
	 *   //=> []
	 *
	 *   matcher(new RegExp(/kinga/), 'kinga')
	 *   //=> ['kinga']
	 *   matcher(new RegExp(/kinga/), 'nope')
	 *   //=> ['nope']
	 *
	 *   matcher(x => x === 'kinga', 'kinga')
	 *   //=> ['kinga']
	 *   matcher(x => x === 'kinga', 'nope')
	 *   //=> []
	 *
	 *   matcher({test: x => x === 'kinga'}, 'kinga')
	 *   //=> ['kinga']
	 *   matcher({test: x => x === 'kinga'}, 'nope')
	 *   //=> []
	 *
	 *
	 */
	m.matcher = function (inputs, patterns, shouldNegate, alphaOmega) {
	  patterns = toArr(patterns).map(function (p) { return m.make(p, shouldNegate, alphaOmega); });
	  inputs = toArr(inputs);

	  var firstNegated = patterns[0].negated;
	  var matchesToReturn = [];

	  for (var i = 0; i < inputs.length; i++) {
	    var input = inputs[i];
	    // If first pattern is negated we include everything to match user expectation
	    var matches = firstNegated;
	    for (var j = 0; j < patterns.length; j++) {
	      if (patterns[j].test(input)) {
	        matches = !patterns[j].negated;
	      }
	    }

	    if (matches) { matchesToReturn.push(input); }
	  }

	  return matchesToReturn
	};

	/**
	 * @TODO replace to-test
	 */
	// m.test = (inputs, patterns) => m.matcher(inputs, patterns).length !== 0

	var matcher$2 = assign(m.matcher, m);

	/* ___filename___: dist/deps/matcher/matcher.js */

	var index$18 = matcher$2;

	/* ___filename___: dist/compose/Observe.js */


	// const eq = require('../deps/traversers/eq')





	var eq$1 = traverse_1.eq;
	var clone$1 = traverse_1.clone;

	/**
	 * scoped clones
	 * @private
	 * @type {Map}
	 */
	var objs = new Map();

	/**
	 * @desc > subscribe to changes
	 *       ❗ called only on **change**
	 *       observers are only called when data they subscribe to changes
	 *
	 * @since 3.0.1
	 * @class Observe
	 * @member Observe
	 * @extends {ChainedMap}
	 * @extends {DotProp}
	 * @memberOf compose
	 * @category Chainable
	 *
	 * @param  {Class | Composable} Target composable class
	 * @return {Observe} class
	 *
	 * @tests Observe
	 * @types Observe
	 *
	 * @see ChainedMap
	 * @see DotProp
	 * @see deps/matcher
	 * @see deps/traversers/eq
	 * @see deps/traverse
	 * @see DotProp
	 *
	 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/observer observer-pattern}
	 * {@link https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts reactivex}
	 * {@link https://github.com/sindresorhus/awesome-observables awesome-observables}
	 * {@link https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 building-observables}
	 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/observer.png js-observer-png}
	 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/publishsubscribe.png pubsub-png}
	 * {@link https://github.com/tusharmath/observable-air observable-air}
	 *
	 * @see {@link reactivex}
	 * @see {@link awesome-observables}
	 * @see {@link building-observables}
	 * @see {@link observer-pattern}
	 * @see {@link observable-air}
	 *
	 * @example
	 *
	 *    const {compose} = require('chain-able')
	 *    const {DotProp} = compose
	 *    new DotProp()
	 *    //=> DotProp
	 *
	 */
	var Observe = function (Target) {
	  // return class Observe extends Target {
	  /**
	   * @desc observe properties when they change
	   *
	   * @method
	   * @memberOf Observe
	   * @since 4.0.0 <- refactored with dot-prop
	   * @since 1.0.0
	   *
	   * @param  {Matchable} properties Matchable properties to observe
	   * @param  {Function} fn onChanged
	   * @return {Target} @chainable
	   *
	   * @see traversers/eq
	   * @see toarr
	   * @see matcher
	   *
	   * {@link https://jsfiddle.net/wqxuags2/28/ for a Demo Clock with observable}
	   *
	   * @see {@link for a Demo Clock with observable}
	   * @see examples/playground/TodoStore
	   *
	   * @TODO gotta update `data` if `deleting` too...
	   * @TODO un-observe
	   * @TODO should hash these callback properties
	   * @TODO just throttle the `.set` to allow easier version of .commit
	   *
	   * @example
	   *
	   *   const Target = require('chain-able')
	   *
	   *   const chain = new Target()
	   *   const log = arg => console.log(arg)
	   *
	   *   chain
	   *     .extend(['eh'])
	   *     .observe('eh', data => log(data))
	   *     .eh(true)
	   *   //=> {eh: true}
	   *
	   * @example
	   *
	   *    chain
	   *      .extend(['canada', 'timbuck'])
	   *      .observe(['canad*'], data => console.log(data.canada))
	   *      .canada(true)
	   *      .canada(true)
	   *      .timbuck(false)
	   *
	   *    //=> true
	   *    //=> false
	   *
	   *    // only called when changed,
	   *    // otherwise it would be 2 `true` & 1 `false`
	   *
	   */
	  Target.prototype.observe = function chainObserve(properties, fn) {
	    var this$1 = this;

	    var props = toArr(properties);
	    var hashKey = props.join('_');
	    var data = {};

	    /* prettier-ignore */
	    return this.meta(observers, function (changed) {
	      /**
	       * match the keys, make the data out of it
	       */
	      var m = index$18(changed.key, props);

	      // @@debugger

	      for (var i = 0; i < m.length; i++) {
	        var segments$$2 = segments(m[i]);
	        set$2(data, segments$$2, this$1.get(segments$$2));
	      }

	      /**
	       * if we have called it at least once...
	       *    and it has not changed, leave it
	       * else
	       *    clone it
	       *    call the observer
	       */
	      if (objs.has(hashKey) && eq$1(objs.get(hashKey), data)) {
	        // @@debugger
	        return
	      }

	      // @@debugger

	      /**
	       * it did change - clone it for next deepEquals check
	       */
	      objs.set(hashKey, clone$1(data));

	      /**
	       * call the observer - it matched & data changed
	       */
	      fn.call(this$1, data, this$1);
	    })
	  };
	  return Target
	};

	/* ___filename___: dist/compose/Shorthands.js */
	/**
	 * @since 2.0.0
	 */




	/**
	 * @class Shorthands
	 * @member Shorthands
	 * @extends {ChainedMap}
	 * @extends {DotProp}
	 * @memberOf compose
	 * @category Chainable
	 *
	 * @param  {Class | Composable} Target composable class
	 * @return {Shorthands} class
	 *
	 * @tests Shorthands
	 * @types Shorthands
	 *
	 * @see ChainedMap
	 * @see DotProp
	 * @see deps/matcher
	 * @see deps/traversers/eq
	 * @see deps/traverse
	 * @see DotProp
	 *
	 * {@link https://github.com/ReactiveX/rxjs/blob/master/src/Subscriber.ts reactivex}
	 * {@link https://github.com/sindresorhus/awesome-observables awesome-observables}
	 * {@link https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87 building-observables}
	 * @see {@link reactivex}
	 * @see {@link awesome-observables}
	 * @see {@link building-observables}
	 *
	 * @example
	 *
	 *    const {compose} = require('chain-able')
	 *    const {DotProp} = compose
	 *    new DotProp()
	 *    //=> DotProp
	 *
	 */
	var Shorthands = function (Target) {
	  return (function (Target) {
	    function Shorthands(parent) {
	      Target.call(this, parent);

	      if (parent && parent.meta) {
	        this.meta.debug = parent.meta.debug;
	      }
	      else {
	        this.debug(false);
	      }
	    }

	    if ( Target ) Shorthands.__proto__ = Target;
	    Shorthands.prototype = Object.create( Target && Target.prototype );
	    Shorthands.prototype.constructor = Shorthands;

	    // https://github.com/fluents/chain-able/issues/32
	    // find(key, data = this.entries(true)) {
	    //   let val = null
	    //   const matcher = new RegExp(key.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'))
	    //   // console.debug(`key: ${key} `)
	    //   const cb = (x, traverser) => {
	    //     if (matcher.test(traverser.key) || traverser.path.includes(key)) {
	    //       val = x
	    //       traverser.stop()
	    //       // console.error({x})
	    //     }
	    //     // console.debug(`path: ${traverser.path.join('.')} prop: ${traverser.key}`)
	    //     // console.dir({x, path: traverser.path, key: traverser.key})
	    //   }
	    //
	    //   traverse(data).forEach(function(x) {
	    //     cb(x, this)
	    //   })
	    //   return val
	    // }

	    /**
	     * @desc sets on store not this.set for easier extension
	     *
	     * @since 4.0.0 <- moved from Extend to Shorthands
	     * @since 0.2.0
	     *
	     * @param {boolean} [should=true] shouldDebug
	     * @return {Chainable} @chainable
	     *
	     * @NOTE is inherited by any chain with a parent with .meta.debug
	     *
	     *  @example
	     *
	     *    const Chain = require('chain-able')
	     *    const chain = new Chain()
	     *    chain.debug()
	     *
	     *    chain.get('debug')
	     *    //=> true
	     *
	     *    // not in entries
	     *    chain.entries()
	     *    //=> {}
	     *
	     */
	    Shorthands.prototype.debug = function debug (should) {
	      this.meta.debug = _undefined(should) ? true : should;
	      return this
	    };

	    /**
	     * @desc sets a value **only** when .has is false
	     *       aka set if the value has not been set
	     *
	     * @memberOf ShorthandChain
	     * @since 1.0.2
	     *
	     * @param {Primitive} name key to set if it has not been done so already
	     * @param {any} value value to set when key has not been already set
	     * @return {ShorthandChain} @chainable
	     *
	     * @see ChainedMapBase.set
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *
	     *    chain.set('eh', true)
	     *
	     *    // eh is already set ^, ignored
	     *    chain.setIfEmpty('eh', false)
	     *
	     *    chain.get('eh')
	     *    //=> true
	     *
	     * @example
	     *
	     *   new Chain().setIfEmpty('canada', true).entries()
	     *   //=> {canada: true}
	     *
	     * @example
	     *
	     *   // longhand way to do the same thing
	     *   if (chain.has('eh') === false) {
	     *     chain.set('eh', false)
	     *   }
	     *
	     *   // or using .when
	     *   chain.when(!chain.has('eh'), instance => instance.set('eh', false))
	     *
	     */
	    Shorthands.prototype.setIfEmpty = function setIfEmpty (name, value) {
	      if (_false(this.has(name))) { return this.set(name, value) }
	      else { return this }
	    };

	    /**
	     * @desc returns any value passed in
	     *       return a value at the end of a chain regardless
	     *
	     * @memberOf ShorthandChain
	     * @since 3.0.0
	     *
	     * @param  {any} value value to return at the end of a chain
	     * @return {any} value
	     *
	     * @example
	     *
	     *    const chain = new Chain()
	     *
	     *    const saveAndDebug = env => chain
	     *      .from({env: env.NODE_ENV})
	     *      .return(JSON.stringify(env))
	     *
	     *    console.log(saveAndDebug(process.env))
	     *    //=> value of process.env
	     */
	    Shorthands.prototype.return = function return$1 (value) {
	      return value
	    };

	    /**
	     * @desc wrap a value, if it's a Function call it, return this
	     *       aka execute something and return this
	     *
	     * @memberOf ShorthandChain
	     * @since 2.0.0
	     * @param  {Function | any} fn function to call, or just any value
	     * @return {ShorthandChain} @chainable
	     *
	     * @example
	     *
	     *    const {eh} = chain.wrap(chain => chain.eh = true)
	     *    //=> true
	     *
	     * @example
	     *
	     *    new Chain()
	     *      .wrap(encased => encased.fn = arg => {
	     *        throw new Error('encased yo')
	     *      })
	     *      .method('fn')
	     *      .encase()
	     *      .catch(error => {
	     *        //=> Error('encasedYo')
	     *      })
	     *      .build()
	     *      .fn(true)
	     *
	     */
	    Shorthands.prototype.wrap = function wrap (fn) {
	      if (_function(fn)) { fn.call(this, this); }
	      return this
	    };

	    return Shorthands;
	  }(Target))
	};

	/* ___filename___: dist/deps/to/boolean.js */
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	var boolean_1$2 = function (x) { return !!x; };

	/* ___filename___: dist/deps/fp/pipe.js */




	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 * In some libraries this function is named `sequence`.
	 *
	 * @icon |
	 * @func
	 * @memberOf fp
	 * @since v5.0.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
	 * @extends fp/pipeTwo
	 *
	 * @param {Function} first function first
	 * @param {...Function} rest function next
	 * @return {Function}
	 *
	 * @see R.compose
	 * @see https://github.com/ramda/ramda/blob/master/src/pipe.js
	 * @see https://github.com/ramda/ramda/blob/master/test/pipe.js
	 *
	 * @types fp
	 * @tests fp/pipe
	 *
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *      f(3, 4); // -(3^4) + 1
	 *
	 * @example
	 *
	 *    var x = v => v + 'x'
	 *    var y = v => v + 'y'
	 *    var z = v => v + 'z'
	 *
	 *    const xyz = pipe(x, y, z)
	 *    /// starts with w, adds x, then y, then z
	 *    const wxyz = xyz('w')
	 *    //=> 'wxyz'
	 */
	var pipe = function pipe(first) {
	  // @TODO: could move into pipeArray
	  // could start from first, second? etc?
	  // (isArray(first) ? first : argumentor.apply(null, arguments))
	  var args = argumentor.apply(null, arguments)
	    .slice(1).reduce(function (previous, next) { return pipeTwo(previous, next); });

	  return pipeTwo(first, args)
	};

	/* ___filename___: dist/deps/to/boolean.js */

	/* ___filename___: dist/deps/fp/pipe.js */

	/* ___filename___: dist/deps/matcher/to-test.js */







	// @TODO use in matcher
	var constructEscRegExp = pipe(escapeStringRegex, regexp$2);

	/**
	 * @desc like matcher, but .isMatch
	 * @since  3.0.0
	 *
	 * @param {Matchable} matchable any matchable
	 * @param {any} [arg1=undefined] arg to match with
	 * @param {any} [arg2=undefined] optional second arg to pass into tester
	 * @return {boolean} is a match, passes the test
	 *
	 * @NOTE as else-if for easier ternary uglification
	 *
	 * @example
	 *
	 *   matcher('kinga', 'kinga')
	 *   //=> true
	 *   matcher('k*nga', 'kinga')
	 *   //=> true
	 *   matcher('kinga', 'nope')
	 *   //=> false
	 *
	 *   matcher(new RegExp(/kinga/), 'kinga')
	 *   //=> true
	 *   matcher(new RegExp(/kinga/), 'nope')
	 *   //=> false
	 *
	 *   matcher(x => x === 'kinga', 'kinga')
	 *   //=> true
	 *   matcher(x => x === 'kinga', 'nope')
	 *   //=> false
	 *
	 *   matcher({test: x => x === 'kinga'}, 'kinga')
	 *   //=> true
	 *   matcher({test: x => x === 'kinga'}, 'nope')
	 *   //=> false
	 *
	 */
	function toTest(matchable, arg1, arg2) {
	  if (stringPrimitive(matchable)) { return constructEscRegExp(matchable).test(arg1) }
	  else if (_function(matchable) && !matchable.test) { return matchable(arg1) }
	  else { return matchable.test(arg1, arg2) }
	}

	var toTest_1 = pipe(toTest, boolean_1$2);

	/* ___filename___: dist/deps/matcher/to-test.js */

	/* ___filename___: dist/deps/matcher/any-key-val.js */


	/**
	 * the original simple to-test matcher for traversable,
	 * will be merged into, or simplified as simplified into matcher
	 *
	 * @since 2.0.0
	 *
	 * @TODO should use matcher,
	 * @TODO should inprove the callback data...
	 *
	 * @types matcher
	 *
	 * @param  {Matchable[]} keys matchable keys
	 * @param  {Matchable[]} vals matchable values
	 * @return {boolean} matched or not
	 *
	 * @example
	 *
	 *  anyKeyVal([], [])(0, 0)
	 *  //=> false
	 *
	 *  anyKeyVal([() => true], [])(0, 0)
	 *  //=> true
	 *
	 */
	var anyKeyVal = function (keys, vals) { return function (prop, val) {
	  for (var i = 0; i < keys.length; i++) {
	    if (toTest_1(keys[i], prop, val)) { return true }
	  }
	  for (var i$1 = 0; i$1 < vals.length; i$1++) {
	    if (toTest_1(vals[i$1], val, prop)) { return true }
	  }
	  return false
	}; };

	/* ___filename___: dist/deps/matcher/any-key-val.js */

	/* ___filename___: dist/TraverseChain.js */






	var TRAVERSED_KEY = 1;
	var EXTENSION_KEYS = ['obj', 'keys', 'vals', 'onNonMatch', 'onMatch', 'clone'];

	/**
	 * @since 1.0.0
	 * @type {Map}
	 * @extends {ChainedMapBase}
	 *
	 * @memberOf Chainable
	 * @member Traverse
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
	var TraverseChain = (function (ChainedMapBase$$2) {
	  function Traverser(parent) {
	    ChainedMapBase$$2.call(this, parent);
	    this.call = this.traverse.bind(this);

	    /* prettier-ignore */
	    this
	      .extend(EXTENSION_KEYS)
	      .keys([])
	      .vals([])
	      // key,
	      .onMatch(function (arg, traverser) { return traverser.remove(); });
	  }

	  if ( ChainedMapBase$$2 ) Traverser.__proto__ = ChainedMapBase$$2;
	  Traverser.prototype = Object.create( ChainedMapBase$$2 && ChainedMapBase$$2.prototype );
	  Traverser.prototype.constructor = Traverser;

	  /**
	   * @desc runs traverser, checks the tests, calls the onMatch
	   *       @modifies this.cleaned
	   *
	   * @alias call
	   * @since 1.0.0
	   * @param  {boolean} [shouldReturn=false] returns traversed object
	   * @return {any} this.obj/data cleaned
	   *
	   * @memberOf TraverseChain
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
	  Traverser.prototype.traverse = function traverse$1 (shouldReturn) {
	    var ref = this.entries();
	    var obj = ref.obj;
	    var keys = ref.keys;
	    var vals = ref.vals;
	    var onMatch = ref.onMatch;
	    var onNonMatch = ref.onNonMatch;
	    var clone = ref.clone;
	    var result = clone ? traverse_1(obj).clone() : obj;

	    // diff between keys and val is order of arg in ^ tester
	    var matcher = anyKeyVal(keys, vals);

	    /* istanbul ignore next: debug */
	    if (debug) {
	      console.log('matcher for traverse...', keys, vals);
	    }

	    // bound to the traverser
	    traverse_1(result).forEach(function(key, x, traverser) {
	      if (traverser.isRoot) {
	        // nothing
	      }
	      else if (matcher(key, x)) {
	        /* istanbul ignore next: debug */
	        if (debug) {
	          console.log('------- match ------- ', key, x);
	        }

	        onMatch(x, traverser);
	      }
	      else if (onNonMatch) {
	        /* istanbul ignore next: debug */
	        if (debug) {
	          console.log('------- NONmatch ------- ', key, x);
	        }

	        onNonMatch(x, traverser);
	      }
	    });

	    this.set(TRAVERSED_KEY, result);
	    return _true(shouldReturn) ? result : this
	  };

	  /**
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
	  Traverser.prototype.traversed = function traversed () {
	    return this.get(TRAVERSED_KEY)
	  };

	  return Traverser;
	}(ChainedMapBase));

	/* ___filename___: dist/TraverseChain.js */

	/* ___filename___: dist/compose/Transform.js */










	/**
	 * @param  {Class | Composable} Target composable class
	 * @return {TransformChain} class
	 * @example
	 *    compose(class {})
	 *    //=> TransformChain
	 */
	var Transform = function (Target) {
	  var set = Target.prototype.set;

	  /**
	   * @class TransformChain
	   * @member TransformChain
	   * @extends {ChainedMap}
	   * @memberOf compose
	   * @category Chainable
	   *
	   * @tests TransformChain
	   * @types TransformChain
	   *
	   * @symb 🤖
	   * @type {Map}
	   *
	   * @see deps/traverse
	   * @see TraverseChain
	   *
	   * {@link https://github.com/iluwatar/java-design-patterns/tree/master/state state-pattern}
	   * {@link https://github.com/iluwatar/java-design-patterns/tree/master/strategy strategy-pattern}
	   */
	  // return class Transform extends Target {
	  // -------------------------------------------

	  /**
	   * @desc traverse `this`, or `this.entries`
	   * @since 1.0.2
	   *
	   * @param  {boolean | traversable} [useThis=false] use the instance properties that are `mapish` as well
	   * @return {TraverseChain} @chainable
	   *
	   * @see TraverseChain
	   * @see js-traverse
	   *
	   * @example
	   *  TAKE FROM TRAVERSECHAIN
	   */
	  Target.prototype.traverse = function traverseChain(useThis) {
	    if ( useThis === void 0 ) useThis = false;

	    /* prettier-ignore */
	    return new TraverseChain(this)
	      .obj(_false(useThis)
	        ? this.entries(true)
	        : _true(useThis)
	          ? this
	          : useThis
	      )
	  };

	  /**
	   * @since 1.0.2
	   * @memberOf TransformChain
	   *
	   * @param  {string | Function} key currently just string
	   * @param  {Function} value callback accepting the value as only arg to transform with
	   * @return {TransformChain} @chainable
	   *
	   * @TODO dot-prop here
	   *
	   * @example
	   *
	   *   // coerce values with .id into the value they hold
	   *   chain
	   *     .transform('dis', val => (typeof val === 'string' ? val : val.id))
	   *
	   *   chain.set('dis', 'eh')
	   *   chain.get('dis')
	   *   //=> 'eh'
	   *
	   *   chain.set('dis', {id: 'eh'})
	   *   chain.get('dis')
	   *   //=> 'eh'
	   *
	   *
	   * @example
	   *
	   *    import {format} from 'date-fns/esm'
	   *    import {Chain} from 'chain-able'
	   *
	   *    const chain = new Chain()
	   *    chain.transform('created_at', date => format(date, 'MM/DD/YYYY'))
	   *    chain.set('created_at', new Date())
	   *
	   *    // is formatted human-readable pretty!
	   *    const {created_at} = chain.entries()
	   *    //=> '02/11/2014'
	   *
	   */
	  Target.prototype.transform = function transform(key, value) {
	    return this.meta(transformers, key, value)
	  };

	  /**
	   * @memberOf TransformChain
	   *
	   * @override
	   * @inheritdoc
	   * @since 1.0.0
	   *
	   * @param {Primitive} key key to set with
	   * @param {any} val value to set for key
	   * @param {undefined | string | Array<string>} dotPropKey special key used for initializing dot prop values in an optimized way to keep reference
	   * @return {Chainable} @chainable
	   *
	   * @see this.observe, this.transform
	   */
	  Target.prototype.set = function transformSet(key, val, dotPropKey) {
	    var this$1 = this;

	    var value = val;

	    // get
	    var transformers$$2 = this.meta(transformers, key);
	    for (var t = 0; t < transformers$$2.length; t++) {
	      value = transformers$$2[t].call(this$1, value, this$1);
	    }

	    // super.set(key, value)
	    set.call(this, key, value);

	    // get
	    var observers$$2 = this.meta(observers);

	    // skip the below if we have no observers
	    if (!observers$$2.length) {
	      return this
	    }

	    var data = {key: dotPropKey, value: value};
	    if (_undefined(dotPropKey)) {
	      data.key = obj(value) ? paths(key, value) : key;
	    }

	    for (var o = 0; o < observers$$2.length; o++) {
	      observers$$2[o](data);
	    }

	    return this
	  };

	  // @TODO
	  // // https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object
	  // ordered(comperator = null) {
	  //   // this.set = this.before(this.set)
	  //   this.set = (key, value) => {
	  //     // have to iterate over the keys before setting
	  //     // and then after merging in values, update
	  //     if (this.store.has(key)) {
	  //       // first
	  //       let keys = this.store.keys()
	  //       if (isFunction(comperator)) keys = keys.sort(comperator)
	  //
	  //       // after
	  //       const store = this.store
	  //       this.store = new Map()
	  //       keys.forEach(keyInOrder => this.store.set(key, store.get(key)))
	  //       store.clear()
	  //     }
	  //   }
	  // }

	  // --- remap ---
	  /**
	   * @desc remap properties from 1 to another, for example, apis with inconsistent naming
	   * @memberOf TransformChain
	   * @since 1.0.0
	   * @symb 🗺
	   *
	   * @param  {string | Object} from property name string, or {[from]: to}
	   * @param  {string} [to=undefined] property name to change key to
	   * @return {Chain} @chainable
	   *
	   * @see TransformChain.transform
	   * @IDEA could also be a function, but then might as well use .transform
	   *
	   * @example
	   *
	   *  chain
	   *    .remap('dis', 'dat')
	   *    .from({dis: true})
	   *
	   *  chain.entries()
	   *  //=> {dat: true}
	   *
	   * @example
	   *
	   *  chain
	   *    .remap({dis: 'dat'})
	   *    .from({dis: 1, other: true}}
	   *
	   *  chain.entries()
	   *  //=> {dist: 1, other: true}
	   *
	   */
	  Target.prototype.remap = function chainRemap(from, to) {
	    var this$1 = this;

	    var remap = obj(from) ? from : {[from]: to};

	    /* prettier-ignore */
	    keys(remap).forEach(function (key) { return this$1.transform(key, function (val) {
	      this$1.set(remap[key], val);
	      return val
	    }); });

	    return this
	  };

	  return Target
	};

	/* ___filename___: dist/deps/dot/has.js */




	/**
	 * @name dot.has
	 * @memberOf dot
	 * @func
	 * @since 3.0.0
	 * @extends dot/getPathSegments
	 *
	 * @param  {Object} obj the object to retrieve the nested property from.
	 * @param  {Dottable | string | Array} path dot-prop-path to use
	 * @return {boolean} has at path
	 *
	 * @example
	 *
	 *    dot.has({a: {b: 2}}, 'a.b'); //=> true
	 *    dot.has({a: {b: 2}}, ['a', 'b']); //=> true
	 *    dot.has({c: {b: 2}}, ['a', 'b']); //=> undefined
	 *
	 */
	var has$1 = function dotHas(obj$$2, path) {
	  if (!dottable(obj$$2, path)) {
	    return false
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    if (obj(obj$$2)) {
	      if (!(pathArr[i] in obj$$2)) {
	        return false
	      }

	      obj$$2 = obj$$2[pathArr[i]];
	    }
	    else {
	      return false
	    }
	  }

	  return true
	};

	/* ___filename___: dist/deps/dot/delete.js */





	/**
	 * @desc delete a path on an object
	 * @name dot.delete
	 * @memberOf dot
	 * @func
	 * @since 3.0.0
	 * @extends dot/getPathSegments
	 *
	 * @param  {Object} obj the object to DELETE the nested property from.
	 * @param  {Dottable | string | Array} path dot-prop-path to use
	 * @return {void}
	 *
	 *
	 * @example
	 *
	 *    dot.get({a: {b: 2}}, 'a.b'); //=> 2
	 *    dot.get({a: {b: 2}}, ['a', 'b']); //=> 2
	 *    dot.get({c: {b: 2}}, ['a', 'b']); //=> undefined
	 *
	 */
	var _delete = function dotdelete(obj$$2, path) {
	  if (!dottable(obj$$2, path)) {
	    return
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    var p = pathArr[i];

	    if (i === lengthMinusOne(pathArr)) {
	      delete obj$$2[p];
	      return
	    }

	    obj$$2 = obj$$2[p];

	    if (!obj(obj$$2)) {
	      return
	    }
	  }
	};

	/* ___filename___: dist/deps/dot/has.js */

	/* ___filename___: dist/deps/dot/delete.js */

	/* ___filename___: dist/deps/dot/dot-prop.js */
	// const escape = require('./escape')
	// const dottable = require('./dottable')
	// const segments = require('./segments')
	// const paths = require('. paths')





	var dotProp = {
	  has: has$1,
	  get: get,
	  set: set$2,
	  delete: _delete,
	};

	/* ___filename___: dist/deps/dot/dot-prop.js */

	var index$20 = dotProp;

	/* ___filename___: dist/deps/is/dot.js */




	/**
	 * @since 3.0.0
	 * @memberOf is
	 * @name isDot
	 *
	 * @TODO update with conditional
	 *
	 * @param  {*} x value to check
	 * @return {boolean} x isDot
	 *
	 * @see isArray
	 * @see isString
	 * @see includes
	 *
	 * @example
	 *    isDot('eh.oh')      //=> true
	 *    isDot('eh')         //=> false
	 *    isDot(['eh', 'oh']) //=> true
	 */
	var dot = function isDot(x) {
	  return array(x) || (string(x) && x.includes('.'))
	};

	/* ___filename___: dist/deps/is/dot.js */

	/* ___filename___: dist/compose/DotProp.js */
	/**
	 * @since 2.0.0
	 */



	/**
	 * @desc checks if this.meta.dot != false & isDot(key) - scoped
	 *
	 * @private
	 * @since 3.0.1
	 *
	 * @param  {string} key key in .get/.has/.delete/set
	 * @param  {DotProp} thisArg Chain
	 * @return {boolean} shouldDot
	 *
	 * @see DotProp.dot
	 * @see deps/is/dot
	 * @see deps/meta
	 * @see https://lodash.com/docs/#get
	 * @see https://github.com/sindresorhus/dot-prop
	 *
	 * @example
	 *
	 *  const chain = new DotProp()
	 *  shouldDot('me.me', chain)
	 *  //=> true
	 *
	 *  const chain = new DotProp()
	 *  shouldDot('me', chain)
	 *  //=> false
	 *
	 *  const chain = new DotProp()
	 *  chain.dot(false)
	 *  shouldDot('me.me', chain)
	 *  //=> false
	 *
	 */
	var shouldDot = function (key, thisArg) { return thisArg.meta.dot !== false && dot(key); };

	/**
	 * @class DotProp
	 * @member Observe
	 * @extends {ChainedMap}
	 * @memberOf compose
	 * @category Chainable
	 *
	 * @param  {Class | Composable} Target composable class
	 * @return {DotProp} class
	 *
	 * @tests DotProp
	 * @types DotProp
	 *
	 * @see deps/dot
	 *
	 * @example
	 *
	 *    const {compose} = require('chain-able')
	 *    const {DotProp} = compose
	 *    new DotProp()
	 *    //=> DotProp
	 *
	 * @example
	 *
	 *    const chain = new Chain()
	 *
	 *    chain.set('moose.simple', 1)
	 *    //=> Chain
	 *
	 *    chain.get('moose.simple')
	 *    //=>1
	 *
	 *    chain.get('moose')
	 *    //=> {simple: 1}
	 *
	 *    chain.set('moose.canada.eh', true).set('moose.canada.igloo', true)
	 *    //=> Chain
	 *
	 *    //set, has, get, delete :-)
	 *    chain.delete('moose.canada.eh')
	 *    //=> Chain
	 *
	 *    //also works with an array (moose.canada.igloo)
	 *    chain.get(['moose', 'canada', 'igloo'])
	 *    //=> true
	 *
	 */
	var DotProp = function (Target) {
	  // is this any better?
	  var entries = Target.prototype.entries;
	  var set = Target.prototype.set;
	  var has = Target.prototype.has;
	  var get = Target.prototype.get;
	  var del = Target.prototype.delete;

	  /**
	   * @method dot
	   * @methodTarget DotProp
	   * @since 3.0.1
	   *
	   * @param  {boolean} [useDot=undefined] use dot prop or not
	   * @return {DotProp} @chainable
	   *
	   * @see deps/meta
	   *
	   * @example
	   *
	   *     const chain = new Target()
	   *     chain.dot(false)
	   *     chain.set('moose.simple', 1)
	   *
	   *     toArr(chain.store.keys())
	   *     //=> ['moose.simple']
	   *
	   */
	  Target.prototype.dot = function enableDisableDot(useDot) {
	    this.meta.dot = useDot;
	    return this
	  };

	  /**
	   * @desc since we have a map,
	   *       we need to ensure the first property is available
	   *       otherwise we have an empty map.entries obj
	   *       which does nothing by reference
	   * @since 3.0.1
	   * @memberOf DotProp
	   *
	   * @override
	   * @inheritdoc
	   *
	   * @see TargetedMap.set
	   * @see .dot
	   *
	   * @example
	   *    const chain = new Target()
	   *
	   *    chain.set('moose.simple', 1)
	   *    //=> Target store:Map:  { moose: { simple: 1 } }
	   */
	  Target.prototype.set = function dotSet(key, val) {
	    if (shouldDot(key, this)) {
	      // first accessor
	      // @example: `canada` in `canada.eh`
	      var prop = key.split('.').shift();

	      // we already know it is .dot, call super instead
	      // if (!super.has(prop)) super.set(prop, {})

	      // spread
	      var data = entries.call(this);

	      // set on the spread data
	      index$20.set(data, key, val);

	      // is already by ref, but be extra safe, + observables
	      return set.call(this, prop, data[prop], key)
	    }
	    return set.call(this, key, val)
	  };

	  /**
	   * @desc dot-prop enabled get
	   * @method get
	   * @memberOf DotProp
	   *
	   * @since 3.0.1
	   * @override
	   * @inheritdoc
	   *
	   * @param {Primitive} key dot prop key, or any primitive key
	   * @param {any} [fallback=undefined] fallback value, if it cannot find value with key path
	   * @return {any} value for path, or fallback value if provided
	   *
	   * @see ChainedMap.get
	   * @see deps/dot
	   * @see deps/is/dot
	   *
	   * @TODO dot-prop on non-store instance.property when using nested chains...
	   *
	   * @example
	   *
	   *    chain.set('moose.simple', 1)
	   *    //=> Chain
	   *
	   *    chain.get('moose.simple')
	   *    //=>1
	   *
	   *    chain.get('moose')
	   *    //=> {simple: 1}
	   *
	   * @example
	   *
	   *    //also works with an array (moose.simple)
	   *    chain.get(['moose', 'simple'])
	   *    //=> 1
	   *
	   */
	  Target.prototype.get = function dotGet(key, fallback) {
	    return shouldDot(key, this)
	      ? index$20.get(entries.call(this), key, fallback)
	      : get.call(this, key)
	  };

	  /**
	   * @method has
	   * @methodOf DotProp
	   * @since 3.0.1
	   * @override
	   * @inheritdoc
	   *
	   * @see deps/dot
	   * @see deps/is/dot
	   *
	   * @example
	   *
	   *  chain.set('one.two', 3)
	   *  chain.has('one.two')
	   *  //=> true
	   *
	   */
	  Target.prototype.has = function dotHas(key) {
	    return shouldDot(key, this)
	      ? index$20.has(entries.call(this), key)
	      : has.call(this, key)
	  };

	  /**
	   * @method delete
	   * @methodOf DotProp
	   * @since 3.0.1
	   *
	   * @override
	   * @inheritdoc
	   * @see deps/dot
	   * @see deps/is/dot
	   *
	   * @example
	   *
	   *    chain.set('moose.canada.eh', true)
	   *    chain.set('moose.canada.igloo', true)
	   *    //=> Chain
	   *
	   *    chain.delete('moose.canada.eh')
	   *    //=> Chain
	   *
	   *    chain.has('moose.canada.eh')
	   *    //=> true
	   *
	   *    //still has moose.canada.igloo
	   *    chain.has('moose.canada')
	   *    //=> true
	   *
	   */
	  Target.prototype.delete = function dotDelete(key) {
	    return shouldDot(key, this)
	      ? index$20.delete(entries.call(this), key)
	      : del.call(this, key)
	  };

	  return Target
	};

	/* ___filename___: dist/compose/Observe.js */

	/* ___filename___: dist/compose/Shorthands.js */

	/* ___filename___: dist/compose/Transform.js */

	/* ___filename___: dist/compose/DotProp.js */

	/* ___filename___: dist/compose/compose.js */








	var ComposableExtensions = [Observe, Shorthands, Transform, DotProp];

	/**
	 * @desc compose chains all the way up from Chainable
	 * @since 3.0.0
	 *
	 * @param  {Class | Function | undefined} [target=ChainedMap] class or function to extend
	 * @param  {Array | undefined} [extensions=[Observe, Shorthands, Transform, DotProp]] Array of extensions to compose together left to right
	 * @return {Class | Function} composed
	 *
	 * @tutorial examples/playground/compose
	 * @tutorial examples/babel/decorators
	 *
	 * @name compose
	 * @func compose
	 * @member compose
	 * @tests compose
	 * @types compose
	 * @symb 🎼
	 *
	 * @see https://formidable.com/blog/2017/infinite-state-composition-with-freactal/
	 * @see https://blog.javascripting.com/2016/02/02/encapsulation-in-redux/
	 * @see https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/
	 * @see https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257
	 * @see https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
	 * @see https://github.com/stoeffel/awesome-fp-js
	 *
	 * @example
	 *
	 *  class Eh extends compose() {}
	 *  new Eh() instanceof Chainable
	 *  //=> true
	 *
	 * @example
	 *
	 *  class Target {}
	 *  class Eh extends compose(Target) {}
	 *  new Eh() instanceof Target
	 *  //=> true
	 *
	 * @example
	 *
	 *  class Target {}
	 *  const mixin = SuperClass => class extends SuperClass {}
	 *  class Eh extends compose(Target, ) {}
	 *  new Eh() instanceof Chainable
	 *  //=> true
	 *
	 * @example
	 *
	 *    class Winning {}
	 *    class Yes extends compose(Winning) {
	 *      get winning() {
	 *        return true
	 *      }
	 *    }
	 *    const yes = new Yes()
	 *    yes instanceof Winning && yes.winning
	 *    //=> true
	 *
	 */
	function compose(target, extensions) {
	  var extend = _undefined(extensions) ? ComposableExtensions : extensions;
	  var composed = target;

	  if (target && target instanceof Object) {
	    composed = ChainedMap.compose(Chainable.compose(target));
	  }
	  else {
	    composed = ChainedMap;
	  }

	  for (var index = 0; index < extend.length; index++) {
	    composed = extend[index](composed) || composed || ChainedMap;
	  }

	  return composed
	}

	compose.Observe = Observe;
	compose.Shorthands = Shorthands;
	compose.Transform = Transform;
	compose.DotProp = DotProp;

	var compose_1 = compose;

	/* ___filename___: dist/compose/compose.js */

	var index$16 = compose_1;

	/* ___filename___: dist/deps/fp/mapWhere.js */




	/**
	 * Creates an array of values by running each property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
	 *
	 * @memberOf fp
	 * @since 5.0.0
	 * @category Object
	 *
	 * @param {Object} obj The object to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @return {Array} Returns the new mapped array.
	 *
	 * @see https://github.com/lodash/lodash/blob/master/map.js
	 *
	 * @example
	 *
	 *   const square = n => n * n
	 *   map({ 'a': 4, 'b': 8 }, square)
	 *   // => [16, 64] (iteration order is not guaranteed)
	 *
	 */
	function mapWhere(obj, predicate) {
	  var output = {};
	  var isArrayObj = array(obj);
	  var keys = keysObjOrArray(obj);

	  for (var index = 0; index < keys.length; index++) {
	    var key = isArrayObj ? index : keys[index];
	    var value = obj[key];

	    if (predicate(value, key, obj)) {
	      output[key] = value;
	    }
	  }

	  return output
	}

	var mapWhere_1 = curry(2, mapWhere);

	/* ___filename___: dist/deps/reduce/toObj.js */
	var toObj = function reduceObj(array, iterator) {
	  return array.reduce(function(reduced, next) {
	    iterator(reduced, next);
	    return reduced
	  }, {})
	};

	/* ___filename___: dist/deps/fp/mapWhere.js */

	/* ___filename___: dist/deps/reduce/toObj.js */

	/* ___filename___: dist/deps/reduce/clean.js */






	// const [isNotReal, isNotEmpty] = [isReal, isEmpty].map(not)
	// const isNotEmptyOrNotReal = or(isNotReal, isNotEmpty)
	var mapNotEmpty = mapWhere_1('_', function (x) { return real(x) && !empty(x); });

	/**
	 * @desc goes through the maps,
	 *       and the map values,
	 *       reduces them to array
	 *       then to an object using the reduced values
	 *
	 * @memberOf reduce
	 * @since 4.0.0 <- moved as a dep function
	 * @since 0.4.0
	 *
	 * @param {Object} obj object to clean, usually .entries()
	 * @return {Object} reduced object, without `notReal` values
	 *
	 * @TODO seems to be overkill with reducing mapping just copy & ignore or delete?
	 *
	 * @see reduce
	 * @see isObjWithKeys
	 * @see isNotEmptyArray
	 * @see isReal
	 * @see http://underscorejs.org/#reduce
	 *
	 * @example
	 *
	 *   const map = new ChainedMap()
	 *
	 *   map
	 *    .set('emptyArr', [])
	 *    .set('arr', [1])
	 *    .set('nill', null)
	 *    .set('emptyObj', {})
	 *    .set('obj', {keys: true})
	 *
	 *   clean(map.entries())
	 *   //=> {arr: [1], obj: {keys: true}}
	 *
	 */
	var clean = function clean(obj) {
	  var mapped = mapNotEmpty(obj);
	  var keys$$2 = keys(mapped);
	  var iterator = function (reduced, key) { return (reduced[key] = mapped[key]); };

	  return toObj(keys$$2, iterator)
	};

	/* ___filename___: dist/deps/traversers/eq.js */
	var eq$2 = traverse_1.eq;

	var index$22 = validatorBuilder;

	/* ___filename___: dist/ChainedSet.js */

	/* ___filename___: dist/FactoryChain.js */

	/* ___filename___: dist/deps/reduce/clean.js */

	/* ___filename___: dist/deps/traversers/eq.js */

	var index = createCommonjsModule(function (module) {
	// dep

	// core



	// merge



	// easy


	// composer



	// export
	var exp = index$16();
	exp.chainable = construct(1, exp);
	exp.builder = construct(1, MethodChain_1);
	exp.Chain = exp;
	exp.compose = index$16;

	// deps
	exp.traverse = traverse_1;
	exp.addMethodFactories = MethodChain_1.add;

	exp.toArr = toArr; // exp.toarr =
	exp.camelCase = camelCase;
	exp.dot = index$20;
	exp.matcher = index$18;
	exp.reduce = index$6;
	exp.clean = clean;
	exp.meta = index$8;
	exp.eq = eq$2;
	exp.types = index$22;
	exp.encase = index$14;
	exp.curry = curry;
	exp.replace = replace;

	exp.addTypes = exp.types.addTypes;

	// core
	exp.Chainable = Chainable;
	exp.ChainedSet = ChainedSet_1;
	exp.ChainedMap = ChainedMap;
	exp.FactoryChain = FactoryChain_1;
	exp.MethodChain = MethodChain_1;

	// merge
	exp.MergeChain = MergeChain_1;
	exp.merge = index$2;

	exp.is = index$12;

	assign(exp, exp.is);

	// @NOTE: no need for exporting as an __esModule,
	// it adds additional checking wrapper
	module.exports = exp;


	});

	var index$1 = unwrapExports(index);

	return index$1;

})));
//# sourceMappingURL=index.js.map
