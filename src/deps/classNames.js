/**
 * @example get className() {return classNames(this)}
 * @param  {Object} _c
 * @return {string}
 */
module.exports = function classNames(_c) {
  let className = _c.constructor.name
  let c = _c
  let l = 0
  while ((c = Object.getPrototypeOf(c))) {
    if (l++ > 11) break
    className += '.' + c.constructor.name
  }
  return className
}
