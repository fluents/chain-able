const isNil = require('../is/nullOrUndefined')
const isDate = require('../is/date')
const isNumber = require('../is/number')
const isString = require('../is/string')
const isArray = require('../is/array')
const newDate = require('../construct/date')

/**
 * convert values to dates
 * @since 5.0.0-beta.7
 *
 * @param {Date | number | string | Array<*> | *} date value to cast to a Date
 * @return {Date} it's a date!
 *
 * @example
 *    toDate()
 *    //=> new Date()
 *
 *    toDate('october-31-1960')
 *    //=> Date.parse('october-31-1960')
 *
 *    toDate(1000000)
 *    //=> new Date(1000000)
 *
 *    // year, month [, date, hours, minutes, seconds, milliseconds]
 *    toDate([2014, 1, 1])
 *    //=> new Date(2014, 1, 1)
 */
module.exports = function toDate(date) {
  // this is fallback too
  // if (isNil(date)) return newDate()
  if (isDate(date)) return date
  if (isNumber(date)) return newDate(date)
  if (isString(date)) return Date.parse(date)
  if (isArray(date)) return newDate.apply(this, date)
  else return newDate()
}
