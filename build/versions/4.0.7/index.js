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
	 * @NOTE || typeof x === 'undefined'
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

	var iterator = Symbol.iterator;

	// typeof Symbol !== 'undefined'
	//   ? Symbol.iterator
	//   : '@@iterator'

	var instance = Symbol.hasInstance;

	var primitive = Symbol.toPrimitive;

	var prototypeOf = function (obj, comparator) { return Object.prototype.isPrototypeOf.call(obj, comparator); };

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @memberOf is
	 *
	 * @param {*} value The value to query.
	 * @return {string} Returns the `toStringTag`.
	 *
	 * @see https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
	 * @TODO obj[Symbol.toStringTag]
	 */
	var toS = function (obj) { return Object.prototype.toString.call(obj); };

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
	  return x instanceof Map || toS(x) === '[object Map]'
	};

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
	var set = function (x) { return x instanceof Set || toS(x) === '[object Set]'; };

	/**
	 * Checks if `value` is classified as a `Function` object.
	 * @category Lang
	 *
	 * @param  {*} x The value to check.
	 * @return {boolean} x isFunction
	 *
	 * @since 3.0.0
	 * @memberOf is
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
	 */
	var _function = function isFunction(x) {
	  return typeof x === 'function'
	};

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

	var keys = Object.keys;

	var assign = Object.assign;

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

	var ignored = function (key) { return key === 'parent' || key === 'store' || key === 'meta' || key === 'className'; };

	// key === 'decorated' ||
	// key === 'transformers' ||
	// key === 'inspect' ||

	/* istanbul ignore next: wip build */
	var dev = process.env.NODE_ENV !== 'production';

	var shouldClear = function (key, property) { return !ignored(key) &&
	  (map(property) || set(property) || (property && property.store)); };

	var C = function (SuperClass) {
	  /* istanbul ignore next: dev */
	  if (dev) {
	    if (!SuperClass || !SuperClass.prototype) {
	      console.log({SuperClass: SuperClass});
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
	   */
	  var Chainable = (function (SuperClass) {
	    function Chainable(parent) {
	      SuperClass.call(this);
	      if (parent) { this.parent = parent; }
	      this.className = this.constructor.name;
	    }

	    if ( SuperClass ) Chainable.__proto__ = SuperClass;
	    Chainable.prototype = Object.create( SuperClass && SuperClass.prototype );
	    Chainable.prototype.constructor = Chainable;

	    /**
	     * @desc Iterator for looping values in the store
	     *
	     * @since 0.5.0
	     * @see this.store
	     * @type {generator}
	     * @return {Object} {value: undefined | any, done: true | false}
	     *
	     * @NOTE assigned to a variable so buble ignores it
	     * @see https://github.com/sindresorhus/quick-lru/blob/master/index.js
	     * @see https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context
	     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
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
	     * @return {Chainable | any}
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
	     * @since 0.3.0
	     * @param {any} keyOrValue key when Map, value when Set
	     * @return {boolean}
	     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
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

	      // const size = this.store.size
	      // const allocated = new Array(size)
	      // // .forEach((value, index) => {
	      //
	      // const values = this.store.values()
	      //
	      // for (let index = 0; index < size; index++) {
	      //   // const value = values[index]
	      //   const value = values.next().value
	      //   // console.log({value, index, values})
	      //   allocated[index] = value
	      // }
	      //
	      // return allocated
	    };

	    /**
	     * @see http://2ality.com/2015/09/well-known-symbols-es6.html#default-tostring-tags
	     * @since 1.0.2
	     *
	     * @param {string} hint enum[default, string, number]
	     * @return {Primitive}
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
	  }(SuperClass));

	  var ChainPrototype = Chainable.prototype;

	  /**
	   * @private
	   * @since 0.5.0
	   * @example for (var i = 0; i < chain.length; i++)
	   * @see ChainedMap.store
	   * @return {number}
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

	var c = C((function () {
	  function anonymous () {}

	  return anonymous;
	}()));

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
	c.compose = C;

	var Chainable = c;

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
	var objLoose = function (x) { return typeof x === 'object'; };

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

	/**
	 * @param  {*} x value
	 * @return {boolean} isObjStrict
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isObjStrict
	 * @see is/obj
	 * @see is/objWithKeys
	 * @see is/objLoose
	 * @see is/null
	 * @see https://github.com/sindresorhus/is-obj/blob/master/index.js
	 * @TODO !Array.isArray
	 *
	 * @extends isObjLoose
	 * @variation null will not count as an object
	 *
	 * @example
	 *
	 *  isObjStrict(new Object())
	 *  //=> true
	 *  isObjStrict({})
	 *  //=> true
	 *  isObjStrict(Object.create(null))
	 *  //=> true
	 *  isObjStrict(null)
	 *  //=> false
	 *
	 *  isObjStrict(new Set())
	 *  //=> false
	 *  isObjStrict(function() {})
	 *  //=> false
	 *  isObjStrict('')
	 *  //=> false
	 *  isObjStrict(1)
	 *  //=> false
	 *
	 */
	var objStrict = function (x) { return !nullOrUndefined(x) && objLoose(x); };

	/**
	 * @func isArray
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	 * @type {Function}
	 * @since 3.0.0
	 */
	var array = Array.isArray;

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

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
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
	var regexp = function (obj) { return obj instanceof RegExp || toS(obj) === '[object RegExp]'; };

	/**
	 * @param  {*} x value
	 * @return {boolean} isDate
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isDate
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
	  return x instanceof Date || toS(x) === '[object Date]'
	};

	/**
	 * @desc Checks if `value` is classified as a boolean primitive or object.
	 * @category Lang
	 * @since 3.0.0
	 *
	 * @param  {*} x value
	 * @return {boolean} isBoolean
	 *
	 * @extends isTrue
	 * @extends isFalse
	 * @see is/toS
	 * @memberOf is
	 * @func isBoolean
	 *
	 * @NOTE could also have typeof x === 'boolean' || (/true|false/).test(x)
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
	  return _true(x) || _false(x) || toS(x) === '[object Boolean]'
	};

	/* prettier-ignore */
	/**
	 * @desc when Array -> 'array'
	 *       when null -> 'null'
	 *       else `typeof x`
	 * @param  {any} x
	 * @return {string} type
	 */
	var simpleKindOf = function (x) {
	  return array(x)
	    ? 'array'
	    : _null(x)
	      ? 'null'
	      : typeof x
	};

	var includes = function (haystack, needle) { return haystack.includes(needle); };

	var index$4 = includes;

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
	  return objStrict(x) && !regexp(x) && !date(x)
	}

	/**
	 * @desc make a new empty Array or Object for cloning
	 * @memberOf dopemerge
	 * @since 2.0.0
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
	 */
	function emptyTarget(val) {
	  return array(val) ? [] : {}
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

	var index$2 = dopemerge_1;

	/**
	 * @tutorial https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
	 * @see https://github.com/lodash/lodash/blob/master/.internal/setToArray.js
	 * ^ could use if needed
	 */
	var from = Array.from;

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
	    }, {});
	  }

	  return reduced
	};

	var index$6 = reduce;

	/**
	 * @desc recursively reduce maps and objects that include reducable data
	 * @since 4.0.0
	 *
	 * @sig reduced => object => isMap(object) -> reduced; merge(object, reduced)
	 *
	 * @param {Object | any} reduced merged object and reduced
	 * @return {Function} Function(values: Object)
	 *
	 * @see ChainedMap
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
	var entries = function (reduced) { return function (obj) {
	  var keys$$2 = keys(obj);

	  for (var k = 0; k < keys$$2.length; k++) {
	    var key = keys$$2[k];

	    if (ignored(key)) {
	      continue
	    }

	    var val = obj[key];
	    if (val && _function(val.entries)) {
	      assign(reduced, {[key]: val.entries(true) || {}});
	    }
	  }

	  return reduced
	}; };

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

	var concat = function (one, two) { return toArr(one || []).concat(toArr(two)); };

	/* istanbul ignore next: wip build */
	var transformers = process.env.NODE_ENV === 'production'
	  ? 'transformers'
	  : 'transformers';

	/* istanbul ignore next: wip build */
	var observers = process.env.NODE_ENV === 'production'
	  ? 'observers'
	  : 'observers';

	/* istanbul ignore next: wip build */
	var shorthands = process.env.NODE_ENV === 'production'
	  ? 'shorthands'
	  : 'shorthands';

	/* istanbul ignore next: wip build */
	var decorated = process.env.NODE_ENV === 'production'
	  ? 'decorated'
	  : 'decorated';

	// will expand this later
	var isInKeyMapAsSet = function (x) { return x === observers; };

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
	  var get = function (key, prop) { return (has(key, prop) ? store[key].get(prop) : []); };

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
	        if (_undefined(store[key])) { return [] }
	        else { return store[key].size === 0 ? [] : from(store[key].values()) }
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
	      else if (_undefined(store[key])) { return [] }
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

	var index$8 = meta;

	/**
	 * this is to avoid circular requires
	 * because MergeChain & MethodChain extend this
	 * yet .method & .merge use those chains
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
	 * {@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}
	 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}
	 * @see {@link pony-map}
	 * @see {@link mozilla-map}
	 *
	 * @see ChainedMap
	 * @see Chainable
	 * @see MergeChain
	 * @see MethodChain
	 * @see ChainedMap
	 *
	 */

	var CMC = function (SuperClass) {
	  return (function (SuperClass) {
	    function ChainedMapBase(parent) {
	      SuperClass.call(this, parent);

	      this.store = new Map();
	      this.meta = index$8(this);
	    }

	    if ( SuperClass ) ChainedMapBase.__proto__ = SuperClass;
	    ChainedMapBase.prototype = Object.create( SuperClass && SuperClass.prototype );
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
	        var val = obj[key];
	        var fn = this$1[key];

	        if (fn && fn.merge) {
	          fn.merge(val);
	        }
	        else if (_function(fn)) {
	          fn.call(this$1, val);
	        }
	        else {
	          this$1.set(key, val);
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
	  }(SuperClass))
	};

	/**
	 * @desc ChainedMapBase composer
	 * @alias ComposeMap
	 * @type {Composer}
	 * @method compose
	 * @memberOf ChainedMapBase
	 *
	 * @param {Class | Object | Composable} [SuperClass=Chainable] class to extend
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
	var cmc = CMC(Chainable);
	cmc.compose = CMC;

	var ChainedMapBase = cmc;

	var debug = process.env.NODE_ENV === 'debug'; // || process.env.DEBUG = true

	/**
	 * @func isObj
	 *
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @return {boolean} Returns `true` if `value` is an object, else `false`.
	 *
	 * @memberOf is
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
	 */
	var obj = function (x) { return objStrict(x) || _function(x); };

	/**
	 * @param  {*} x value
	 * @return {boolean} isError
	 *
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
	  return x instanceof Error || toS(x) === '[object Error]'
	};

	/**
	 * @param  {*} x value
	 * @return {boolean} isNumber
	 *
	 * @since 3.0.0
	 * @memberOf is
	 * @func isNumber
	 * @see is/real
	 *
	 * @example
	 *
	 *  isNumber(1)
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
	 */
	var number = function (x) { return typeof x === 'number' || toS(x) === '[object Number]'; };

	/**
	 * @desc turns arguments into an array, used as a util, for opt
	 *
	 * @since 3.0.0
	 * @return {Array<Arguments>}
	 *
	 * @see https://github.com/aretecode/awesome-deopt
	 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
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
	  var args = new Array(len);
	  for (var i = 0; i < len; ++i) { args[i] = arguments$1[i]; }
	  return args
	};

	var hasOwnProperty_1 = function (haystack, needle) { return Object.prototype.hasOwnProperty.call(haystack, needle); };

	var getPrototypeOf = Object.getPrototypeOf;

	/* eslint no-new-wrappers: "off" */
	/* eslint eqeqeq: "off" */
	/* eslint func-style: "off" */
	/* eslint complexity: "off" */



















	/**
	 * @since 3.0.0
	 *
	 * @param {Array | Object | any} xs iteratee
	 * @param {Function} fn callback for each iteration
	 * @TODO unexpectedly breaks things iterating
	 * if you are relying on internal functionality
	 * (such as .path, .get, .value...) with map & set
	 *
	 * @NOTE if there is .forEach on the obj already, use it
	 * otherwise, call function for each
	 *
	 * @private
	 *
	 * @example
	 *
	 *   forEach([1], console.log)
	 *   //=> 1
	 *
	 */
	var forEach = function(xs, fn) {
	  if (xs.forEach) { xs.forEach(fn); }
	  else { for (var i = 0; i < xs.length; i++) { fn(xs[i], i, xs); } }
	};

	/**
	 * {@link https://sourcemaking.com/design_patterns/chain_of_responsibility chainofresponsibility}
	 *
	 * @param {Traversable} obj object to traverse
	 *
	 * @constructor
	 *
	 * @example
	 *
	 *    traverse({})
	 *    //=> new Traverse(obj)
	 *
	 */
	var traverse = function(obj) {
	  return new Traverse(obj)
	};
	var traverse_1 = traverse;

	/**
	 * @func
	 * @class TraverseJS
	 * @classdesc Traverse and transform objects by visiting every node on a recursive walk.
	 * @prop {any} value the data passed in as an argument to traverse on
	 *
	 * @category traverse
	 * @memberOf Traverse
	 * @see deps/traverse
	 * @category traverse
	 * @types traverse
	 * @tests traverse/*
	 *
	 * @TODO: symbol, map, set
	 * @tutorial https://github.com/substack/js-traverse
	 *
	 * @param {Traversable} obj any traversable value
	 *
	 * @example
	 *
	 *   traverse({})
	 *   //=> Traverser
	 *
	 */
	function Traverse(obj) {
	  this.value = obj;
	}

	/**
	 * @desc Get the element at the array path.
	 *
	 * @param  {Array<string>} ps paths
	 * @return {any} value at dot-prop
	 *
	 * @memberOf Traverse
	 * @see this.forEach
	 * @todo hasOwnProperty
	 */
	Traverse.prototype.get = function(ps) {
	  var node = this.value;
	  for (var i = 0; i < ps.length; i++) {
	    var key = ps[i];
	    if (!node || !hasOwnProperty_1(node, key)) {
	      node = undefined;
	      break
	    }
	    node = node[key];
	  }
	  return node
	};

	/**
	 * @desc Return whether the element at the array path exists.
	 *
	 * @param  {Array<string>} pathsArray paths
	 * @return {boolean} has element at path
	 *
	 * @memberOf Traverse
	 * @see hasOwnProperty
	 *
	 * @example
	 *
	 *    traverse({eh: true}).has(['eh'])
	 *    //=> true
	 *
	 * @example
	 *
	 *    traverse({eh: true}).has(['canada'])
	 *    //=> false
	 *
	 *
	 * @example
	 *
	 *    traverse([0]).has([2])
	 *    //=> false
	 *
	 */
	Traverse.prototype.has = function(pathsArray) {
	  var node = this.value;
	  for (var i = 0; i < pathsArray.length; i++) {
	    var key = pathsArray[i];
	    if (!node || !hasOwnProperty_1(node, key)) {
	      return false
	    }
	    node = node[key];
	  }
	  return true
	};

	/**
	 * @desc Set the element at the array path to value.
	 *
	 * @param  {Array<string>} arrayPath paths
	 * @param  {any} value any value to assign to the element @ the path
	 * @return {any} value passed in
	 *
	 * @memberOf Traverse
	 * @see deps/dot
	 */
	Traverse.prototype.set = function(arrayPath, value) {
	  var node = this.value;
	  var i = 0;
	  for (; i < arrayPath.length - 1; i++) {
	    var key = arrayPath[i];
	    if (!hasOwnProperty_1(node, key)) { node[key] = {}; }
	    node = node[key];
	  }
	  node[arrayPath[i]] = value;
	  return value
	};

	/**
	 * @desc Execute fn for each node in the object and return a new object with the results of the walk. To update nodes in the result use this.update(value).
	 *
	 * @method
	 * @memberOf Traverse
	 * @see walk
	 * @param  {Function} cb fn for each node in the object
	 * @return {any}
	 *
	 * @example
	 *    var {traverse} = require('chain-able')
	 *
	 *    var obj = {a: 1, b: 2, c: [3, 4]}
	 *    obj.c.push(obj)
	 *
	 *    var scrubbed = traverse(obj).map(function(x) {
	 *      if (this.circular) this.remove()
	 *    })
	 *    console.dir(scrubbed)
	 *    //=> { a: 1, b: 2, c: [ 3, 4 ] }
	 */
	Traverse.prototype.map = function(cb) {
	  return walk(this.value, cb, true)
	};

	/**
	 * @desc Execute fn for each node in the object but unlike .map(), when this.update() is called it updates the object in-place.
	 *       executes a provided function once for each traversed element.
	 *
	 * @param  {Function} callback provided callback function
	 * @return {any} this.value
	 *
	 * @memberOf Traverse
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	 *
	 *  @example
	 *
	 *     var {traverse} = require('chain-able')
	 *
	 *     var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]
	 *     traverse(obj).forEach(function(x) {
	 *       if (x < 0) this.update(x + 128)
	 *     })
	 *
	 *     console.dir(obj)
	 *     //=> [ 5, 6, 125, [ 7, 8, 126, 1 ], { f: 10, g: 115 } ]
	 *
	 */
	Traverse.prototype.forEach = function(callback) {
	  this.value = walk(this.value, callback, false);
	  return this.value
	};

	/**
	 * @desc applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
	 *       calls cb for each loop that is .notRoot
	 *       defaults initial value to `this.value`
	 *
	 * @param  {Function} cb callback forEach
	 * @param  {Object | Array | any} init initial value
	 * @return {Object | Array | any}
	 *
	 * @see https://en.wikipedia.org/wiki/Fold_(higher-order_function)
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	 * @memberOf Traverse
	 *
	 * @example
	 *
	 *    var {traverse} = require('chain-able')
	 *
	 *    var obj = {
	 *      a: [1, 2, 3],
	 *      b: 4,
	 *      c: [5, 6],
	 *      d: {e: [7, 8], f: 9},
	 *    }
	 *
	 *    var leaves = traverse(obj).reduce(function(acc, x) {
	 *      if (this.isLeaf) acc.push(x)
	 *      return acc
	 *    }, [])
	 *
	 *    console.dir(leaves)
	 *    //=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
	 *
	 */
	Traverse.prototype.reduce = function(cb, init) {
	  var skip = arguments.length === 1;
	  var acc = skip ? this.value : init;
	  this.forEach(function(x) {
	    if (!this.isRoot || !skip) {
	      acc = cb.call(this, acc, x);
	    }
	  });
	  return acc
	};

	/**
	 * @desc Return an Array of every possible non-cyclic path in the object. Paths are Arrays of string keys.
	 * @return {Array<string>}
	 * @memberOf Traverse
	 * @tests traverse/keys
	 */
	Traverse.prototype.paths = function() {
	  var acc = [];
	  this.forEach(function(x) {
	    acc.push(this.path);
	  });
	  return acc
	};

	/**
	 * @desc Return an Array of every node in the object.
	 * @memberOf Traverse
	 * @return {Array<any>}
	 */
	Traverse.prototype.nodes = function() {
	  var acc = [];
	  this.forEach(function(x) {
	    acc.push(this.node);
	  });
	  return acc
	};

	/**
	 * @desc Create a deep clone of the object.
	 *
	 * @return {any}
	 *
	 * @memberOf Traverse
	 *
	 * @example
	 *    const {traverse, eq} = require('chain-able')
	 *
	 *    const obj = {eh: true, canada: [1]}
	 *    const cloned = traverse(obj).clone()
	 *    cloned.eh = false
	 *    eq(cloned, obj)
	 *    //=> false
	 *
	 */
	Traverse.prototype.clone = function() {
	  var parents = [];
	  var nodes = [];

	  return (function clone(src) {
	    for (var i = 0; i < parents.length; i++) {
	      if (parents[i] === src) {
	        return nodes[i]
	      }
	    }

	    if (objStrict(src)) {
	      var dst = copy(src);

	      parents.push(src);
	      nodes.push(dst);

	      forEach(keys(src), function (key) {
	        dst[key] = clone(src[key]);
	      });

	      parents.pop();
	      nodes.pop();
	      return dst
	    }
	    else {
	      return src
	    }
	  })(this.value)
	};

	/**
	 * @func
	 *
	 * @param  {any} root root node
	 * @param  {Function} cb callback for each
	 * @param  {boolean} immutable should mutate or not
	 * @return {any}
	 *
	 * @see traverse.forEach
	 */
	function walk(root, cb, immutable) {
	  var path = [];
	  var parents = [];
	  var alive = true;

	  /**
	   * @emits before
	   * @emits pre
	   * @emits post
	   * @emits after
	   *
	   * @param  {any} node_
	   * @return {State} see types
	   */
	  return (function walker(node_) {
	    // both are objs with properties that get changed but
	    var node = immutable ? copy(node_) : node_;
	    var modifiers = {};
	    var keepGoing = true;

	    /**
	     * Each method that takes a callback has a context (its this object) with these attributes:
	     * @prop {boolean} isRoot @alias isNotRoot Whether or not the present node is a leaf node (has no children)
	     * @type {Object}
	     */
	    var state = {
	      /**
	       * The present node on the recursive walk
	       * @type {Array}
	       */
	      node: node,
	      /**
	       * @see traverse.context.node
	       * @protected
	       * @type {Array}
	       */
	      node_: node_,
	      /**
	       * An array of string keys from the root to the present node
	       * @type {Array}
	       */
	      path: [].concat(path),
	      /**
	       * The context of the node's parent. This is undefined for the root node.
	       * @type {undefined | Primitive}
	       */
	      parent: parents[parents.length - 1],
	      parents: parents,
	      /**
	       * The name of the key of the present node in its parent. This is undefined for the root node.
	       * @type {undefined | Primitive}
	       */
	      key: path.slice(-1)[0],
	      /**
	       * Whether the present node is the root node
	       * @type {Boolean}
	       */
	      isRoot: path.length === 0,
	      /**
	       * Depth of the node within the traversal
	       * @type {number}
	       */
	      level: path.length,
	      /**
	       * If the node equals one of its parents, the circular attribute is set to the context of that parent and the traversal progresses no deeper.
	       * @type {null | boolean}
	       */
	      circular: null,
	      /**
	       * Set a new value for the present node.
	       * All the elements in value will be recursively traversed unless stopHere is true.
	       *
	       * @param  {Function} x
	       * @param  {boolean} stopHere
	       * @return {void}
	       */
	      update: function update(x, stopHere) {
	        if (!state.isRoot) {
	          state.parent.node[state.key] = x;
	        }
	        state.node = x;
	        if (stopHere) { keepGoing = false; }
	      },
	      /**
	       * Delete the current element from its parent in the output. Calls delete even on Arrays.
	       * @param  {boolean} stopHere
	       * @return {void}
	       */
	      delete: function delete$1(stopHere) {
	        delete state.parent.node[state.key];
	        if (stopHere) { keepGoing = false; }
	      },
	      /**
	       * Remove the current element from the output. If the node is in an Array it will be spliced off. Otherwise it will be deleted from its parent.
	       * @param  {boolean} stopHere
	       * @return {void}
	       */
	      remove: function remove(stopHere) {
	        // @NOTE safety
	        if (_undefined(state.parent)) {
	          return
	        }
	        else if (array(state.parent.node)) {
	          state.parent.node.splice(state.key, 1);
	        }
	        else {
	          delete state.parent.node[state.key];
	        }
	        if (stopHere) { keepGoing = false; }
	      },
	      keys: null,
	      /**
	       * Call this function before any of the children are traversed.
	       * You can assign into this.keys here to traverse in a custom order.
	       * @param  {Function} fn
	       * @return {any}
	       */
	      before: function before(fn) {
	        modifiers.before = fn;
	      },
	      /**
	       * Call this function after any of the children are traversed.
	       * @param  {Function} fn
	       * @return {any}
	       */
	      after: function after(fn) {
	        modifiers.after = fn;
	      },
	      /**
	       * Call this function before each of the children are traversed.
	       * @param  {Function} fn
	       * @return {any}
	       */
	      pre: function pre(fn) {
	        modifiers.pre = fn;
	      },
	      /**
	       * Call this function after each of the children are traversed.
	       * @param  {Function} fn
	       * @return {any}
	       */
	      post: function post(fn) {
	        modifiers.post = fn;
	      },
	      /**
	       * @modifies alive
	       * @protected
	       * @return {void}
	       */
	      stop: function stop() {
	        alive = false;
	      },
	      /**
	       * @modifies keepGoing
	       * @protected
	       * @return {void}
	       */
	      block: function block() {
	        keepGoing = false;
	      },
	    };

	    if (!alive) { return state }

	    /**
	     * @desc updates if needed:
	     *       @modifies keys
	     *       @modifies circular
	     *       @modifies isLeaf
	     *       @modifies notLeaf
	     *       @modifies notRoot
	     * @return {void}
	     */
	    function updateState() {
	      if (objStrict(state.node)) {
	        if (!state.keys || state.node_ !== state.node) {
	          state.keys = keys(state.node);
	        }

	        // @NOTE was ==
	        state.isLeaf = state.keys.length === 0;

	        for (var i = 0; i < parents.length; i++) {
	          if (parents[i].node_ === node_) {
	            state.circular = parents[i];
	            break
	          }
	        }
	      }
	      else {
	        state.isLeaf = true;
	        state.keys = null;
	      }

	      state.notLeaf = !state.isLeaf;
	      state.notRoot = !state.isRoot;
	    }

	    updateState();
	    // @NOTE added last `,state` arg to not have it have to use `this`,
	    // but broke some things so moved to another fn
	    //
	    // use return values to update if defined
	    var ret = cb.call(state, state.node);
	    if (!_undefined(ret) && state.update) { state.update(ret); }

	    if (modifiers.before) { modifiers.before.call(state, state.node); }

	    if (!keepGoing) { return state }

	    // when it's some sort of itertable object, loop it further
	    if (objStrict(state.node) && !state.circular) {
	      parents.push(state);

	      updateState();

	      forEach(state.keys, function (key, i) {
	        path.push(key);

	        if (modifiers.pre) { modifiers.pre.call(state, state.node[key], key); }

	        var child = walker(state.node[key]);
	        if (immutable && hasOwnProperty_1(state.node, key)) {
	          state.node[key] = child.node;
	        }

	        // @NOTE was ==
	        child.isLast = i === state.keys.length - 1;
	        child.isFirst = i === 0;

	        if (modifiers.post) { modifiers.post.call(state, child); }

	        path.pop();
	      });
	      parents.pop();
	    }

	    if (modifiers.after) { modifiers.after.call(state, state.node); }

	    return state
	  })(root).node
	}

	/**
	 * @func
	 * @TODO   does not respect ObjectDescriptors
	 * @NOTE   wicked ternary
	 * @param  {any} src
	 * @return {any}
	 */
	function copy(src) {
	  // require('fliplog').data(src).bold('copying').echo()
	  if (objStrict(src)) {
	    var dst;

	    // require('fliplog').underline('is obj').echo()
	    if (map(src)) {
	      dst = index$6(src);
	    }
	    else if (set(src)) {
	      dst = toArr(src);
	    }
	    if (array(src)) {
	      dst = [];
	    }
	    else if (date(src)) {
	      dst = new Date(src.getTime ? src.getTime() : src);
	    }
	    else if (regexp(src)) {
	      dst = new RegExp(src);
	    }
	    else if (error$1(src)) {
	      dst = {message: src.message};
	    }
	    else if (boolean_1(src)) {
	      dst = new Boolean(src);
	    }
	    else if (number(src)) {
	      dst = new Number(src);
	    }
	    else if (string(src)) {
	      dst = new String(src);
	    }
	    else {
	      //if (Object.create && Object.getPrototypeOf)
	      dst = Object.create(getPrototypeOf(src));
	    }
	    // else if (src.constructor === Object) {
	    //   dst = {}
	    // }
	    // else {
	    //   // @NOTE: only happens if above getPrototypeOf does not exist
	    //   var proto = (src.constructor && src.constructor.prototype) ||
	    //   src.__proto__ || {}
	    //   var T = function() {}
	    //   T.prototype = proto
	    //   dst = new T()
	    // }

	    forEach(keys(src), function (key) {
	      dst[key] = src[key];
	    });
	    return dst
	  }
	  else {
	    // require('fliplog').red('is NOT OBJ').echo()
	    return src
	  }
	}

	/**
	 * @desc adds methods to Traverser
	 */
	forEach(keys(Traverse.prototype), function (key) {
	  traverse[key] = function(obj) {
	    var t = new Traverse(obj);

	    // args = argumentor.apply(null, arguments).slice(1)
	    return t[key].apply(t, argumentor.apply(null, arguments).slice(1))
	  };
	});

	var index$10 = new Map();

	/* prettier-ignore */
	/**
	 * @since 4.0.0
	 * @NOTE had `onlyLongest` & `asString` but can just .join(',') to match
	 * @desc gathers dot.prop from any value, with a prefixed/base key
	 * @param  {Primitive}  key
	 * @param  {Traversable}  value
	 * @param  {boolean | undefined} longest
	 * @return {Array<string>} paths
	 */
	var paths = function(key, value, longest) {
	  if (index$10.has(value)) { return index$10.get(value) }

	  var paths = [];

	  // gather all paths in the object
	  // filter to ensure only the longest paths are kept
	  //
	  // .map the paths to `dot-prop`,
	  // `matcher` takes in an array so it will work for all
	  traverse_1(value).forEach(function(x) {
	    var currentPath = this.path;

	    // ignore
	    if (!currentPath || !currentPath.length) { return }

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

	  index$10.set(value, paths);

	  return paths
	};

	var enumerable = function (obj, prop) { return Object.prototype.propertyIsEnumerable.call(obj, prop); };

	// reduces size by hundreds of bytes gzipped...
	var length = function (x) { return x.length; };

	// lengthMinusOne
	var lengthMinusOne = function (x) { return length(x) - 1; };

	var cache$1;
	var segments = function (path) {
	  if (!cache$1) { cache$1 = new Map(); }
	  if (cache$1.has(path)) { return cache$1.get(path) }
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

	  cache$1.set(path, parts);
	  return parts
	};

	// const isDot = require('./is/dot')
	// const isDottable = (obj, path) => isObj(obj) && isDot(path)
	var dottable = function (obj$$1, path) { return (obj(obj$$1) && string(path)) || array(path); };

	var get = function(obj, path, value) {
	  if (!dottable(obj, path)) {
	    return _undefined(value) ? obj : value
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    if (!enumerable(obj, pathArr[i])) {
	      return value
	    }

	    obj = obj[pathArr[i]];

	    if (nullOrUndefined(obj)) {
	      // `obj` is either `undefined` or `null` so we want to stop the loop, and
	      // if this is not the last bit of the path, and
	      // if it did't return `undefined`
	      // it would return `null` if `obj` is `null`
	      // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
	      if (i !== lengthMinusOne(pathArr)) {
	        return value
	      }

	      break
	    }
	  }

	  return obj
	};

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
	var stringOrNumber = function (x) { return string(x) || number(x); };

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

	/**
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

	/**
	 * @func isMatcher
	 * @memberOf is
	 * @since 3.0.0
	 *
	 * @param  {*} x value to check
	 * @return {boolean} isFunction || isRegExp
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
	var matcher = function (x) { return _function(x) || x instanceof RegExp; };

	// dont need these yet
	// const isNullOrUndefined = require('./nullOrUndefined')
	// const isClass = require('./class')
	// const isEnumerable = require('./enumerable')
	// const isMapish = require('./mapish')
	// isTrue

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
	  isObject: obj,
	  isObjStrict: objStrict,
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
	  isMatcher: matcher,
	};

	/* prettier-ignore */
	/**
	 * @desc camelCase
	 * @since 0.2.0
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

	/**
	 * return a negated function
	 * @memberOf conditional
	 * @since  4.0.1
	 * @param  {Function} fn any function
	 * @return {Function} !Function
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
	var not = function (fn) { return function (x) { return !fn(x); }; };

	/**
	 * first fn & second fn
	 * @memberOf conditional
	 * @since  4.0.1
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

	/**
	 * first fn || second fn
	 * @memberOf conditional
	 * @since  4.0.1
	 * @param  {Function} left first fn
	 * @param  {Function} right second fn
	 * @return {boolean} one of the functions return truthy
	 *
	 * @example
	 *
	 *    const either = or(x => x === false, x => x === true)
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
	 */
	var or = function (left, right) { return function (x) { return left(x) || right(x); }; };

	/**
	 * map all values in an array to see if all match
	 * @memberOf conditional
	 * @since  4.0.1
	 * @param  {Function} predicate match the value
	 * @return {boolean} all match predicate
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
	var all = function (predicate) { return function (arr) {
	  for (var i in arr) {
	    if (!predicate(arr[i])) { return false }
	  }
	  return true
	}; };

	var all_1 = all;

	/**
	 * @since 4.0.0 <- moved out of the store, into scoped
	 * @since 1.0.0
	 * @desc library of validators to use by name
	 *       @modifies this.validators
	 * @param  {Object} validators
	 */














	var validators = new ChainedMapBase();

	// eslint-disable-next-line
	var stripArithmeticSymbols = function (x) { return x.replace(/[?\[\]!\|]/g, ''); };
	var escapedKey = function (x) { return camelCase('is-' + x); };
	var enummy = function (enums) { return function (x) { return enums === x || enums.includes(x); }; };

	// @TODO: .remap!!!
	// @TODO: can use these to return noops with error logging on development
	var get$2 = function (key) { return validators.get(key) || validators.get(escapedKey(key)) || enummy(key); };
	var has = function (key) { return validators.has(key) || validators.get(escapedKey(key)); };
	var set$2 = function (key, value) { return validators.set(key, value); };
	var doesNotHave = not(has);

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

	// ----
	// @NOTE: putting these as functions increased size 20 bytes: worth it
	// ----

	// @SIZE: another 10bytes for these fns
	var isNotRealOrIsEmptyString = and(not(real), function (x) { return x === ''; });

	// const isArrayOf = predicate => x => isArray(x) && x.every(predicate)
	var isArrayOf = function (predicate) { return and(array, all_1(predicate)); };
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
	  set$2(fullKey, function (x) {
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

	  var isValidOrNotRealOrEmptyStr = or(fn, isNotRealOrIsEmptyString);
	  var isValidOrArrayOfValid = or(fn, isArrayOf(fn));
	  if (doesNotHave(optionalType)) {
	    set$2(optionalType, isValidOrNotRealOrEmptyStr);
	  }
	  if (doesNotHave(typeOrArrayOrType)) {
	    set$2(typeOrArrayOrType, isValidOrArrayOfValid);
	  }
	  if (doesNotHave(notType)) {
	    set$2(notType, not(fn));
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
	builder.set = set$2;
	builder.addTypes = addTypes; // was merge
	builder.map = validators;
	var validatorBuilder = builder;

	var isNotNested = function (x) { return stringOrNumber(x) ||
	  boolean_1(x) ||
	  !real(x) ||
	  error$1(x) ||
	  regexp(x); };

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
	    if (isNotNested(input)) {
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
	var schema = function schema(obj$$1) {
	  var this$1 = this;

	  var parent = this.parent;
	  var ref = this.entries();
	  var onValid = ref.onValid;
	  var onInvalid = ref.onInvalid;
	  var define = ref.define;
	  var getSet = ref.getSet;
	  var keys$$2 = keys(obj$$1);

	  for (var k = 0; k < keys$$2.length; k++) {
	    var key = keys$$2[k];
	    var value = obj$$1[key];

	    // parent.method
	    //   ? parent.method(key)
	    //   :
	    //
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

	var withSpecification = function (specification) { return function (call) { return function (onInvalid, onValid) { return function (a, b, c) {
	  var result = call(a, b, c);
	  if (specification(result)) { return onInvalid(result) }
	  else { return onValid(result) }
	}; }; }; };

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

	/**
	 * @see https://github.com/fluture-js/Fluture#encase
	 * @since 4.0.0 <- moved out into a dep
	 * @since 1.0.0
	 *
	 * @param  {Function} call
	 * @return {boolean | any} validation/encased function call result
	 */
	var tryCatch = function (call) { return function (onValid, onInvalid, rethrow) { return function (a, b, c) {
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
	}; }; };

	/**
	 * @version 4.0.1 added custom encaser
	 * @since   4.0.0
	 * @param   {Function} call function to _encase_
	 * @param   {Function | undefined} [encaser=tryCatch] function to encase _with_
	 * @return  {Function} -> FunctionObject{onInvalid, onValid, rethrow, call}
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

	var index$14 = encase;

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

	// we'll be opinionated and say either `false` or `throw`
	var spec = withSpecification(not(_false));

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

	/**
	 * @plugin
	 * @param  {Primitive} name method name
	 * @param  {Object} parent Parent
	 * @return {MethodChain} @chainable
	 */
	var autoIncrement = function(name, parent) {
	  return this.initial(0).onCall(function () { return parent.tap(name, function (num) { return num + 1; }); })
	};

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

	var getDescriptor = Object.getOwnPropertyDescriptor;

	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * @desc properties, property symbols, object keys
	 *       ^ all again for prototype
	 *
	 * @param  {Object} obj object to get properties & symbols from
	 * @return {Array<string>} properties
	 *
	 * @example
	 *    var obj = {key: true}
	 *    allProperties(obj)
	 *    //=> ['key']
	 *
	 * @example
	 *    class One {
	 *      method() {}
	 *    }
	 *    class Two extends One {
	 *      eh() {}
	 *    }
	 *    allProperties(new Two())
	 *    //=> ['eh', 'method']
	 *
	 */
	function allProperties(obj) {
	  var proto = getPrototypeOf(obj);
	  return [].concat(
	    getOwnPropertyNames(obj),
	    getOwnPropertySymbols(obj),
	    keys(obj),
	    proto ? allProperties(proto) : []
	  )
	}

	var props = allProperties;

	// function gc() {
	//   if (typeof window !== 'undefined') window.global = window
	//   if (typeof global.gc === 'function') global.gc()
	// }

	/**
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
	 * @since 4.0.0
	 * @desc remove all methods, mark for garbage collection
	 * @param {Object} obj object to traverse and clear
	 * @return {void}
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
	  var props$$1 = props(obj$$2);

	  traverse_1(obj$$2).forEach(function(x) {
	    var ref = this;
	    var value = ref.value;

	    // @NOTE: just delete the main path first, later we can use cleaner
	    // const shouldIgnore = path
	    //   .map(pathPart => ignore.includes(pathPart))
	    //   .includes(true)
	    //   !shouldIgnore &&

	    /* istanbul ignore else: safety for bottom up */
	    // ensure the longest paths in traverser are used...
	    if (!array(value) && !obj(value)) {
	      this.remove();
	    }
	  });

	  // simple fast easy cleanup
	  for (var p = 0; p < props$$1.length; p++) {
	    delete obj$$2[p];
	  }

	  props$$1 = undefined;
	  obj$$2 = undefined;
	}

	var gc = markForGarbageCollection;

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
	      if (!this$1.length) { return this$1.name(name) }
	      return this$1.build().methods(name)
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

	/**
	 * @desc ChainedMap composer
	 * @category Chainable
	 * @category Map
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
	var CM = function (SuperClass) {
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

	var cm = CM(ChainedMapBase);
	cm.compose = CM;

	var ChainedMap = cm;

	/**
	 * @class
	 * @category Chainable
	 * @category Set
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
	   * @since 0.4.0
	   * @param {any} value any value to add to **end** of the store
	   * @return {ChainedSet} @chainable
	   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
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
	   */
	  ChainedSet.prototype.add = function add (value) {
	    this.store.add(value);
	    return this
	  };

	  /**
	   * @since 0.4.0
	   * @desc inserts the value at the **beginning** of the Set
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
	   */
	  ChainedSet.prototype.prepend = function prepend (value) {
	    this.store = new Set([value].concat(Chainable$$2.prototype.values.call(this)));
	    return this
	  };

	  /**
	   * @desc merge any Array/Set/Iteratable/Concatables into the array, at the end
	   * @since 0.4.0
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

	// @TODO use this in the bitwise arithmetic validation builder
	// @TODO check v8 on this
	// eslint-disable-next-line
	var eqeq = function (x, y) { return x == y; };

	/* eslint complexity: "off" */
	/* eslint func-style: "off" */
	/* eslint no-proto: "off" */
	/* eslint consistent-return: "off" */
	/* eslint eqeqeq: "off" */














	// const isFunction = require('../is/function')
	// const isString = require('../is/string')
	// const isNumber = require('../is/number')
	// const isBoolean = require('../is/boolean')
	// const isPrimitive = x => isString(x) || isBoolean(x) || isNumber(x)
	// const isArguments = x => toS(x) === '[object Arguments]'
	// const sameKeysLength = (x, y) => Object.keys(x).length === Object.keys(y).length

	/* prettier-ignore */
	/**
	 * @desc deep traversal of nodes to compare any data types
	 *       does not check reference, only value equality
	 *
	 * @since 3.0.0
	 * @symb ⚖️
	 * @memberOf traverse
	 * @types traverse
	 * @tests traverse/equals
	 *
	 * @param  {any} a compare a with b
	 * @param  {any} b compare b with a
	 * @param  {boolean} [loose=false] whether to do looser equals check
	 * @return {boolean} isEqual
	 *
	 * @see traverse
	 *
	 * @example
	 *
	 *    eq(1, 1)
	 *    //=> true
	 *
	 *    eq(true, false)
	 *    //=> false
	 *
	 *    eq({}, {})
	 *    //=> true
	 *
	 * @example
	 *
	 *    eq(
	 *      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]},
	 *      {d: new Date(0, 0, 0, 0), x: [1, 2, 3]}
	 *    )
	 *    //=> true
	 *
	 *    eq([new RegExp('x')], [/x/])
	 *    //=> true
	 *
	 *    eq([new String('x')], ['x'])
	 *    //=> true
	 *
	 *    eq([new Boolean(false)], [false])
	 *    //=> true
	 *
	 *    eq([undefined], [null]) || eq(undefined, null)
	 *    //=> false
	 *
	 * @example
	 *
	 *     var xs = [1, 2, 3, 4]
	 *     delete xs[2]
	 *
	 *     var ys = Object.create(Array.prototype)
	 *     ys[0] = 1
	 *     ys[1] = 2
	 *     ys[3] = 4
	 *
	 *     eq(xs, ys)
	 *     //=> true
	 *
	 *     eq(xs, [1, 2, undefined, 4])
	 *     //=> false
	 *
	 */
	var eq = function(a, b, loose) {
	  var equal = true;
	  var node = b;

	  traverse_1(a).forEach(function(y) {
	    var notEqual = function() {
	      equal = false;
	      // this.stop();
	      // return undefined;
	    };

	    // if (node === undefined || node === null) return notEqual();
	    if (!this.isRoot) {
	      // if (!Object.hasOwnProperty.call(node, this.key)) return notEqual()
	      if (!objLoose(node)) {
	        return notEqual()
	      }
	      node = node[this.key];
	    }

	    var x = node;

	    this.post(function() {
	      node = x;
	    });

	    // @@debugger

	    /* istanbul ignore next: dev */
	    if (debug) {
	      console.log('types: ', {x: toS(x), y: toS(y)});
	    }

	    if (this.circular) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('circular', this);
	      }
	      if (traverse_1(b).get(this.circular.path) !== x) {
	        notEqual();
	      }
	    }
	    else if (nullOrUndefined(x) || nullOrUndefined(y)) {
	      if (x !== y) {
	        notEqual();
	      }
	    }
	    else if (typeof x !== typeof y) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('diff types', typeof x, typeof y);
	      }
	      if (_true(loose) && eqeq(x, y)) {
	        // ignore
	      }
	      else {
	        notEqual();
	      }
	    }
	    else if (x.__proto__ !== y.__proto__) {
	      notEqual();
	    }
	    else if (x === y) {
	      // nop
	    }
	    // @NOTE: .toString will be covered for functions and regexes in objStrict
	    // else if (isRegExp(x)) {
	    //   // both regexps on account of the __proto__ check
	    //   if (x.toString() != y.toString()) {
	    //     notEqual()
	    //   }
	    // }
	    // else if (isFunction(x)) {
	    //   if (x !== y) {
	    //     notEqual()
	    //   }
	    // }
	    else if (objStrict(x)) {
	      // @NOTE: this is never called
	      // if (toS(y) === '[object Arguments]' || toS(x) === '[object Arguments]') {
	      //   if (toS(x) !== toS(y)) {
	      //     notEqual()
	      //   }
	      // }
	      if (regexp(x) || regexp(y)) {
	        if (!x || !y || x.toString() !== y.toString()) {
	          notEqual();
	        }
	      }
	      else if (date(x) || date(y)) {
	        if (
	          !(date(x)) ||
	          !(date(y)) ||
	          x.getTime() !== y.getTime()
	        ) {
	          notEqual();
	        }
	      }
	      else {
	        // @NOTE: it will traverse through values if they are == here
	        var xKeys = keys(x);
	        var yKeys = keys(y).length;
	        if (xKeys.length !== yKeys) {
	          return notEqual()
	        }
	        for (var k = 0; k < xKeys.length; k++) {
	          if (!hasOwnProperty_1(y, xKeys[k])) {
	            notEqual();
	          }
	        }
	      }
	    }
	    // isString(x) || isBoolean(x) || isNumber(x) || isIterator(x)
	    else if (toS(x) === toS(y) && x !== y) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('same str types - diff values', {s: toS(x), x: x, y: y});
	      }
	      notEqual();
	    }
	    else if (toS(x) !== toS(y)) {
	      /* istanbul ignore next: dev */
	      if (debug) {
	        console.log('diff str types', {x: toS(x), y: toS(y)});
	      }
	      notEqual();
	    }
	  });

	  return equal
	};

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
	var escapeStringRegex = function (str) { return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'); };

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
	var toRegexp = function (str) { return escapeStringRegex(str).replace(/\\\*/g, '.*'); };

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

	  matchable = new RegExp(("" + matchable), 'i');
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
	  if (!inputs) {
	    console.log({inputs: inputs, shouldNegate: shouldNegate, alphaOmega: alphaOmega});
	    throw new Error('NOT inputs')
	  }
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

	var index$18 = matcher$2;

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

	var set$3 = function dotset(obj$$2, path, value) {
	  if (!dottable(obj$$2, path)) {
	    return
	  }

	  var pathArr = segments(path);

	  for (var i = 0; i < pathArr.length; i++) {
	    var p = pathArr[i];

	    if (!obj(obj$$2[p])) {
	      obj$$2[p] = {};
	    }

	    if (i === lengthMinusOne(pathArr)) {
	      obj$$2[p] = value;
	    }

	    obj$$2 = obj$$2[p];
	  }
	};

	var dotProp = {
	  has: has$1,
	  get: get,
	  set: set$3,
	  delete: _delete,
	};

	var index$20 = dotProp;

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
	 * @param  {Class | Composable} Chain composable class
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
	 * @see {@link reactivex}
	 * @see {@link awesome-observables}
	 * @see {@link building-observables}
	 * @see {@link observer-pattern}
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
	        index$20.set(data, segments$$2, this$1.get(segments$$2));
	      }

	      /**
	       * if we have called it at least once...
	       *    and it has not changed, leave it
	       * else
	       *    clone it
	       *    call the observer
	       */
	      if (objs.has(hashKey) && eq(objs.get(hashKey), data)) {
	        // @@debugger
	        return
	      }

	      // @@debugger

	      /**
	       * it did change - clone it for next deepEquals check
	       */
	      objs.set(hashKey, traverse_1(data).clone());

	      /**
	       * call the observer - it matched & data changed
	       */
	      fn.call(this$1, data, this$1);
	    })
	  };
	  return Target
	};

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
	 * @param  {Class | Composable} SuperClass composable class
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
	var Shorthands = function (SuperClass) {
	  return (function (SuperClass) {
	    function Shorthands(parent) {
	      SuperClass.call(this, parent);

	      if (parent && parent.meta) {
	        this.meta.debug = parent.meta.debug;
	      }
	      else {
	        this.debug(false);
	      }
	    }

	    if ( SuperClass ) Shorthands.__proto__ = SuperClass;
	    Shorthands.prototype = Object.create( SuperClass && SuperClass.prototype );
	    Shorthands.prototype.constructor = Shorthands;

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
	  }(SuperClass))
	};

	/**
	 * @desc like matcher, but .isMatch
	 * @since  3.0.0
	 *
	 * @param  {Matchable} matchable any matchable
	 * @param  {any} [arg1=undefined] arg to match with
	 * @param  {any} [arg2=undefined] optional second arg to pass into tester
	 * @return {boolean} is a match, passes the test
	 *
	 * @NOTE   as else-if for easier ternary uglification
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
	var toTest = function (matchable, arg1, arg2) {
	  if (string(matchable)) { return !!new RegExp(escapeStringRegex(matchable)).test(arg1) }
	  else if (_function(matchable) && !matchable.test) { return !!matchable(arg1) }
	  else { return !!matchable.test(arg1, arg2) }
	};

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
	    if (toTest(keys[i], prop, val)) { return true }
	  }
	  for (var i$1 = 0; i$1 < vals.length; i$1++) {
	    if (toTest(vals[i$1], val, prop)) { return true }
	  }
	  return false
	}; };

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

	    // bound to the traverser
	    traverse_1(obj).forEach(function(x) {
	      if (matcher(this.key, x)) {
	        onMatch(x, this);
	      }
	      else if (onNonMatch) {
	        onNonMatch(x, this);
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

	/**
	 * @param  {Class | Composable} SuperClass composable class
	 * @return {TransformChain} class
	 * @example
	 *    compose(class {})
	 *    //=> TransformChain
	 */
	var Transform = function (SuperClass) {
	  var set = SuperClass.prototype.set;

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
	  // return class Transform extends SuperClass {
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
	  SuperClass.prototype.traverse = function traverseChain(useThis) {
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
	  SuperClass.prototype.transform = function transform(key, value) {
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
	  SuperClass.prototype.set = function transformSet(key, val, dotPropKey) {
	    var this$1 = this;

	    var value = val;

	    // get
	    var transformers$$2 = this.meta(transformers, key);
	    for (var t = 0; t < transformers$$2.length; t++) {
	      value = transformers$$2[t].call(this$1, value, this$1);
	    }

	    // super.set(key, value)
	    set.call(this, key, value);

	    var data = {key: dotPropKey, value: value};
	    if (_undefined(dotPropKey)) {
	      data.key = obj(value) ? paths(key, value) : key;
	    }

	    // get
	    var observers$$2 = this.meta(observers);
	    for (var o = 0; o < observers$$2.length; o++) {
	      observers$$2[o](data);
	    }

	    return this
	  };

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
	  SuperClass.prototype.remap = function chainRemap(from, to) {
	    var this$1 = this;

	    var remap = from;
	    if (!obj(from)) { remap = {[from]: to}; }

	    /* prettier-ignore */
	    keys(remap).forEach(function (key) { return this$1.transform(key, function (val) {
	      this$1.set(remap[key], val);
	      return val
	    }); });

	    return this
	  };

	  return SuperClass
	};

	var dot$1 = function isDot(x) {
	  return array(x) || (string(x) && x.includes('.'))
	};

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
	var shouldDot = function (key, thisArg) { return thisArg.meta.dot !== false && dot$1(key); };

	/**
	 * @class DotProp
	 * @member Observe
	 * @extends {ChainedMap}
	 * @memberOf compose
	 * @category Chainable
	 *
	 * @param  {Class | Composable} Chain composable class
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

	var ComposableExtensions = [Observe, Shorthands, Transform, DotProp];

	/**
	 * @desc compose chains all the way up from Chainable
	 * @since 3.0.0
	 *
	 * @param  {Class | Function | undefined} [target=ChainedMap] class or function to extend
	 * @param  {Array | undefined} [extensions=[Observe, Shorthands, Transform, DotProp]] Array of extensions to compose together left ro right
	 * @return {Class | Function} composed
	 *
	 * @tutorial examples/playground/compose
	 * @tutorial examples/babel/decorators
	 *
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

	var index$16 = compose_1;

	/**
	 * @desc value is an Array, with at least 1 value
	 * @param  {*} x value
	 * @return {boolean} isNotEmptyArray
	 *
	 * @since 4.0.0-alpha.1
	 * @memberOf is
	 * @func isNotEmptyArray
	 *
	 * @extends isArray
	 * @variation && array.length !== 0
	 * @see is/objWithKeys
	 * @see is/array
	 *
	 * @example
	 *  isNotEmptyArray(new Array(3))
	 *  //=> true
	 *  isNotEmptyArray([1, 2, 3])
	 *  //=> true
	 *
	 *  isNotEmptyArray(new Array())
	 *  //=> false
	 *  isNotEmptyArray([])
	 *  //=> false
	 *  isNotEmptyArray(new Map())
	 *  //=> false
	 */
	var notEmptyArray = function (x) { return array(x) && x.length !== 0; };

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
	 * @see reduce
	 * @see isObjWithKeys
	 * @see isNotEmptyArray
	 * @see isReal
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
	  return keys(obj).reduce(function(acc, key) {
	    var val = obj[key];

	    if (real(val) && (notEmptyArray(val) || objWithKeys(val))) {
	      acc[key] = val;
	    }

	    return acc
	  }, {})
	};

	var index$22 = validatorBuilder;

	var index = createCommonjsModule(function (module) {
	// core



	// merge



	// easy


	// composer


	// export
	var exp = index$16();
	exp.chainable = function (parent) { return new exp(parent); };
	exp.builder = function (obj) { return new MethodChain_1(obj); };
	exp.Chain = exp;
	exp.compose = index$16;

	// deps
	exp.traverse = traverse_1;
	exp.addMethodFactories = MethodChain_1.add;

	exp.toArr = toArr; // exp.toarr =
	exp.camelCase = camelCase;
	exp.dot = index$20;
	exp.matcher = index$18;
	exp.is = index$12;
	exp.reduce = index$6;
	exp.clean = clean;
	exp.meta = index$8;
	exp.eq = eq;
	exp.types = index$22;

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

	// @NOTE: no need for exporting as an __esModule,
	// it adds additional checking wrapper
	module.exports = exp;


	});

	var index$1 = unwrapExports(index);

	return index$1;

})));
//# sourceMappingURL=index.js.map
