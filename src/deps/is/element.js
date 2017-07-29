const isObjectNotNull = require('./objNotNull')
const isPlainObject = require('./objPlain')

/**
 * Checks if `x` is likely a DOM element.
 *
 * @since 5.0.0-beta.5
 * @fork 0.1.0
 * @category Lang
 * @param {*} x The x to check.
 * @return {boolean} Returns `true` if `x` is a DOM element, else `false`.
 *
 * {@link https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/object.js#L347 prototype-is-element}
 * {@link https://github.com/lodash/lodash/blob/master/isElement.js lodash-is-element}
 * @see {@link lodash-is-element}
 * @see {@link prototype-is-element}
 *
 * @example
 *
 *   isElement(document.body)
 *   //=> true
 *
 *   isElement('<body>')
 *   //=> false
 *
 */
function isElement(x) {
  // typeof HTMLElement === 'object' ? o instanceof HTMLElement : // DOM2
  return isObjectNotNull(x) && x.nodeType === 1 && !isPlainObject(x)
}

module.exports = isElement
