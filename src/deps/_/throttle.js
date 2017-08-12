const isObj = require('../is/obj')
const isIn = require('../is/in')
const noop = require('../util/noop')
const toBoolean = require('../cast/toBoolean')
const debounce = require('./debounce')

/**
 * - Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * - Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * @NOTE If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @since 5.0.0-beta.1
 *
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @return {Function} Returns the new throttled function.
 *
 * @fork 0.1.0
 * @category Function
 *
 * {@link https://github.com/andrewplummer/Sugar/blob/master/lib/function.js#L172 sugar-throttle}
 * {@link https://github.com/lodash/lodash/blob/master/throttle.js lodash-throttle}
 * {@link https://css-tricks.com/debouncing-throttling-explained-examples/ debounce-vs-throttle-difference-explained}
 * @see {@link debounce-vs-throttle-difference-explained}
 * @see {@link lodash-throttle}
 * @see {@link sugar-throttle}
 *
 * @example
 *
 *     // Avoid excessively updating the position while scrolling.
 *     jQuery(window).on('scroll', throttle(updatePosition, 100))
 *
 *     // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 *     const throttled = throttle(renewToken, 300000, { 'trailing': false })
 *     jQuery(element).on('click', throttled)
 *
 *     // Cancel the trailing throttled invocation.
 *     jQuery(window).on('popstate', throttled.cancel)
 *
 */
module.exports = function throttle(func, wait, options) {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    func = noop
    // throw new TypeError('Expected a function')
  }
  if (isObj(options)) {
    leading = isIn(options, 'leading')
      ? toBoolean(options.leading)
      : leading

    trailing = isIn(options, 'trailing')
      ? toBoolean(options.trailing)
      : trailing
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing,
  })
}

// is underscore.js version
// function(func, wait, options = {}) {
//   let timeout
//   let thisArg
//   let args
//   let result
//   let previous = 0
//
//   const later = function() {
//     previous = options.leading === false ? 0 : Date.now()
//     timeout = null
//     result = func.apply(thisArg, args)
//     if (!timeout) thisArg = args = null
//   }
//
//   const throttled = function() {
//     const now = Date.now()
//     if (!previous && options.leading === false) previous = now
//
//     const remaining = wait - (now - previous)
//     thisArg = this
//     args = arguments
//
//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout)
//         timeout = null
//       }
//
//       previous = now
//       result = func.apply(thisArg, args)
//
//       if (!timeout) thisArg = args = null
//     }
//     else if (!timeout && options.trailing !== false) {
//       timeout = setTimeout(later, remaining)
//     }
//     return result
//   }
//
//   throttled.cancel = function() {
//     clearTimeout(timeout)
//     previous = 0
//     timeout = thisArg = args = null
//   }
//
//   return throttled
// }
