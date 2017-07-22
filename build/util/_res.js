const {resolve} = require('path')
const {curry} = require('../../')

module.exports = curry(2, (dir, rel) => resolve(dir, rel))
