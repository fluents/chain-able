const replace = require('../fp/replace')

// replaceEscapedStar
module.exports = replace(/\\\*/g, '.*')
