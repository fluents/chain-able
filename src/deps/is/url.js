const isStringPrimitive = require('../is/stringPrimitive')
const urlRegExp = require('../regexp/url')

/**
 * @TODO var urlRegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i
 *
 * @see https://github.com/arasatasaygin/is.js
 * @see http://mathiasbynens.be/demo/url-regex
 * @see https://github.com/chriso/validator.js/blob/master/src/lib/isURL.js
 * @see https://stackoverflow.com/questions/38704811/javascript-isurl-function
 * @see https://github.com/jquery-validation/jquery-validation
 *
 * @since 5.0.0-beta.5
 *
 * @param {string | *} x possible url
 * @return {boolean}
 */
function isUrl(x) {
  if (!isStringPrimitive(x)) return false
  else if (urlRegExp.test(x)) return true
  else return false
}

module.exports = isUrl
