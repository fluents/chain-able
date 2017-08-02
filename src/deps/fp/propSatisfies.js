const curry = require('../fp/curry')
const hasIn = require('../is/hasIn')

// 5.0.0-beta.7
module.exports = curry(3, function _propSatisfies(propertyPath, fnIs, obj) {
  return hasIn(obj, propertyPath)
    ? fnIs(obj[propertyPath])
    : false
})
