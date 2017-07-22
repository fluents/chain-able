const {resolve} = require('path')
const {curry} = require('../../')

// replace()
const toRel = (rootPath, filePath) => filePath.replace(rootPath, '')

module.exports = curry(2, toRel)
