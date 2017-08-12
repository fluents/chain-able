/* istanbul ignore: @docblocks @member */

const flatten = require('./flatten')
const flattenRecursive = require('./flattenRecursive')
const concat = require('./concat')
const insertAtIndex = require('./insertAtIndex')
const uniq = require('./uniq')
const preAllocate = require('./preAllocate')

/**
 * @symb []
 * @member array
 * @type {Object}
 */
module.exports = {
  flatten,
  concat,
  insertAtIndex,
  flattenRecursive,
  uniq,
  preAllocate,
}
