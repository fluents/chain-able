/**
 * @desc for exporting `debugger` versions, for easy debugging & verbose logs
 * @memberOf env
 * @since 4.0.0
 * @category Build
 * @type {boolean}
 */
module.exports = process.env.NODE_ENV === 'debug' // || process.env.DEBUG = true
