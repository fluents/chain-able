// !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
module.exports = function isFiniteNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
