const escapeStringRegexp = require('./escape-string-regex')
module.exports = str => escapeStringRegexp(str).replace(/\\\*/g, '.*')
