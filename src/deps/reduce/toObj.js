module.exports = function reduceObj(array, iterator) {
  return array.reduce(function(reduced, next) {
    iterator(reduced, next)
    return reduced
  }, {})
}
