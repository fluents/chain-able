/* istanbul ignore: @TODO */

const construct = require('./construct')

// adds .init function that is constructN
module.exports = function addInit(Klass, n = 1) {
  Klass.init = construct(n, Klass)
  // return Klass
}
