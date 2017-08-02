/** @ignore 🚧 wip */

// const toFunction = require('../cast/toFunction')
// const forInUnguarded = require('../loop/each/forInUnguarded')
//
// function __ehs(args) {
//   this.__eh = 1
// }
// function _ehs(args) {
//   __ehs.call(this)
//   this._eh = args
// }
//
// const Ehs = toFunction(_ehs)
// function ehs(args) {
//   return new _ehs(args)
// }
//
// console.log(new Ehs(0))
//
// const copy = x => forInUnguarded(x, (value, key) => x[key] = value)
//
// // https://h3manth.com/new/blog/2014/thisarg-in-javascript/
// // const fpChain = (...chains) => {
// //   function functionContext() {
// //     this.store = new Map()
// //     return this
// //   }
// //   function eh() {
// //     functionContext.call(this, this)
// //     console.log(this)
// //   }
//
// //   function inherit(Parent, Child) {
// //     const ParentPrototype = Object.getPrototypeOf(Parent)
// //     Object.setPrototypeOf(Child, ParentPrototype)
// //     Chained.prototype = Object.create(ParentPrototype);
// //     Chained.prototype.constructor = Chained
// //   }
// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError('Cannot call a class as a function')
//   }
// }
//
// function _possibleConstructorReturn(self, _super) {
//   if (!self) {
//     throw new ReferenceError(
//       'this hasn\'t been initialised - super() hasn\'t been called'
//     )
//   }
//
//   const call = _super.call(self)
//   return call && (typeof call === 'object' || typeof call === 'function')
//     ? call
//     : self
// }
//
// function _inherits(subClass, superClass) {
//   if (typeof superClass !== 'function' && superClass !== null) {
//     throw new TypeError(
//       'Super expression must either be null or a function, not ' +
//         typeof superClass
//     )
//   }
//   subClass.prototype = Object.create(superClass && superClass.prototype, {
//     constructor: {
//       value: subClass,
//       enumerable: false,
//       writable: true,
//       configurable: true,
//     },
//   })
//   if (superClass)
//     Object.setPrototypeOf
//       ? Object.setPrototypeOf(subClass, superClass)
//       : subClass.__proto__ = superClass
//
//   return function callForConstructor(self) {
//     const call = superClass.call(self)
//     return call && (typeof call === 'object' || typeof call === 'function')
//       ? call
//       : self
//   }
// }
//
// function eh() {
//   console.log('what')
//   this.eh = true
//   // @NOTE this is an example of constructor returning & not using `this`
//   var _this = copy(this)
//   _this._ = 0
//   return _this
// }
//
// const _super = eh
// const call = _inherits(Chained, _super)
// function Chained() {
//   // _classCallCheck(this, Chained)
//   // var _this = _super.call(this) || this
//   var _this = call(this, _super)
//
//   // _super.call(this)
//   _this.ca = true
//   console.log('chained')
//   return _this
// }

// var Chained = (function(_super) {
//   const call = _inherits(Chained, _super)
//   function Chained() {
//     // _classCallCheck(this, Chained)
//     // var _this = _super.call(this) || this
//     var _this = call(this, _super)
//
//     // _super.call(this)
//     _this.ca = true
//     console.log('chained')
//     return _this
//   }
//
//   return Chained
//   // return buble(Chained, _super)
// })
// Chained = Chained(eh)

// console.log(new Chained())
// console.log(protos(Chained), protos(new Chained()))
// console.log({Chained})
// console.log(new Chained())

// fpChain([])

// const curry = require('./curry')
//
// /**
//  * Returns the first function passed as an argument to the second,
//  * allowing you to adjust arguments, run code before and after, and
//  * conditionally execute the original function.
//  *
//  * @memberOf fp
//  * @since 5.0.0-beta.5
//  *
//  * @param {Function} fn function to wrap
//  * @param {Function} wrap function that wraps `fn`
//  *
//  * @symb 🍬
//  * @name wrap
//  *
//  * {@link http://underscorejs.org/#wrap underscore-wrap}
//  * {@link https://github.com/jashkenas/underscore/blob/master/underscore.js#L909 underscore-src-wrap}
//  * @see {@link underscore-wrap}
//  * @see {@link underscore-src-wrap}
//  *
//  * @example
//  *
//  *   var hello = function(name) { return "hello: " + name; };
//  *   hello = wrap(hello, function(func) {
//  *     return "before, " + func("moe") + ", after";
//  *   })
//  *
//  *   hello()
//  *   //=> 'before, hello: moe, after'
//  *
//  */
// function wrap(fn, wrapper) {
//   // this just passes `fn` into wrap...
//   // maybe, instead, add `pre` & `post`
//   // was `partial(wrapper, fn)`
//   return curry(3, wrapper, fn)
// }
//
// const argumentor = require('../cast/argumentor')
// const isFunction = require('../is/function')
//
// // @TODO maybe returning `false` will disable the function?
// //       or returning `noop` ?
// //       or anything but `nill` ?
// function pre(target, subscriber) {
//   return curry(target.length, function() {
//     const args = argumentor.apply(null, arguments)
//
//     // call subscriber
//     const returned = subscriber.apply(this, args)
//
//     if (returned === false) return null
//     else if (isFunction(returned)) return returned
//     else return target.apply(this, args)
//   })
// }
// function post(target, subscriber) {
//   const args = argumentor.apply(null, arguments)
//   const returned = target.apply(this, args)
//
//   // also original args??
//   subscriber.apply(null, returned)
// }
//
// // http://ramdajs.com/docs/#memoizeWith
//
// // AND THEN, COULD JUST USE `NTH` ON RETURNED
//
// // HOW CAN THE SUBSCRIBERS GET THE RESULTS?
// // LIKE IF WE WANT TO SEE THE RETURNED VALUE?
// //
// // return result from last?
// // @example
// //
// //  const pre = console.log
// //  const post = console.error
// //  const multiply = (n, factor) => n * factor
// //  notifyEach(pre, multiply, post)
// function notifyEach(subscribers) {
//   return function() {
//     const args = arguments
//     const results = []
//     subscribers.forEach(subscriber => {
//       results.push(subscriber.apply(null, arguments))
//     })
//   }
// }
//
// // USE ARRAY OF OBJECTS, TO AN OBJECT WITH INDEXES AS A PROPERTY
// function indexBy() {}
//
//
// // Return a random integer between min and max (inclusive).
// const random = function(min, max) {
//   if (isNill(max)) {
//     max = min
//     min = 0
//   }
//   return min + Math.floor(Math.random() * (max - min + 1))
// }
//
// // @NOTE USES LODASH.ORDERBY
// function orderByKeys(obj, orderFirst) {
//   const orderedObj = {}
//   orderFirst = orderFirst.reverse()
//   const keys = Object.keys(obj)
//   _sortBy(keys, key => orderFirst.indexOf(key))
//     .reverse()
//     .forEach(key => {
//       orderedObj[key] = obj[key]
//     })
//   return orderedObj
// }
//
//
// /**
//  * @example
//  *
//  * remapBy(prop('id'), [{'id': 'eh'}])
//  *
//  * @example
//  * in: [
//  *  {id: 'eh', val: 'canada'},
//  *  {id: 'moose', val: 'igloo'}
//  * ]
//  *
//  * out: {
//  *  'eh': {id: 'eh', val: 'canada'},
//  *  'moose': {id: 'moose', val: 'igloo'}
//  * }
//  */
// // or INDEXBY
// function remapBy(transformer, vals) {
//   const remapped = {}
//
//   // @TODO: should reload if there is no remap by id vals...
//   if (!isObj(vals)) return remapped
//
//   var asObj = values(vals)
//
//   // if (isArray(vals)) {
//   //   // if it does not have the prop, add it as the index
//   //   // if it has it, and it is an array, join it
//   //   vals = values.map((data, i) => {
//   //     if (!data[prop]) data[prop] = i
//   //     if (isArray(data[prop])) data[prop] = data[prop].join(',')
//   //     return data
//   //   })
//   //
//   //   return arrToObj(values, {
//   //     keyFn: ({i}) => values[i][prop],
//   //     valFn: ({i, val}) => val,
//   //   })
//   // }
//
//   // remap to add item id as object property
//   const props = keys(asObj)
//   for (let i = 0, len = props.length; i < len; i++) {
//     const key = props[i]
//     const val = asObj[key]
//
//     remapped[val.id] = val
//   }
//   // console.debug('remapById', {values, asObj})
//
//   return remapped
// }
//
//
// function omit(obj, keys) {
//   const target = {}
//   for (let i in obj) {
//     if (keys.indexOf(i) >= 0 || !hasOwnProperty(obj, i)) continue
//     target[i] = obj[i]
//   }
//   return target
// }
//
//
// // http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
// // module.exports = function fliphash(str) {
// //   //  || typeof str !== 'string'
// //   // if (str === undefined || str === null) {
// //   //   console.log('you passed not real value to fliphash')
// //   //   return str
// //   // }
// //   if (isNill(str)) return 'nill'
// //   let len = str.length
// //   if (len === 0) return 0
// //
// //   let hash = 0
// //
// //   for (let i = 0; i < len; i++) {
// //     const char = str.charCodeAt(i)
// //     hash = ((hash << 5) - hash) + char
// //     hash = hash & hash // Convert to 32bit integer
// //   }
// //   return hash
// // }
// //
// // const test = require('ava')
// // const fliphash = require('../')
// //
// // test('hashes a number', t => {
// //   t.plan(1)
// //   const txt = 'ehohehoh... wayoh wayoh wayoh-wayoh!'
// //   t.true(typeof fliphash(txt) === 'number')
// // })
// //
// // test('hashes are the same', t => {
// //   t.plan(1)
// //   const txt = 'hullabaloo000&&&!!!eh'
// //   t.is(fliphash(txt), fliphash(txt))
// // })
//
//
// module.exports = curry(2, wrap)
