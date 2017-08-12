const firstToUpperCase = require('./firstToUpperCase')

// pretty much camel-case here
const addPrefix = (string, prefix) => prefix + firstToUpperCase(string)

function removePrefix(string, prefix) {
  if (string.indexOf(prefix) === 0) string = string.slice(prefix.length)
  return string.charAt(0).toLowerCase() + string.slice(1)
}

module.exports = {
  firstToUpperCase,
  addPrefix,
  removePrefix,
}
