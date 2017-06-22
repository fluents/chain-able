const toarr = require('./to-arr')

module.exports = (one, two) => toarr(one || []).concat(toarr(two))
