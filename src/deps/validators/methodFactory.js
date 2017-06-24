const methodEncasingFactory = require('../encase/factory')
const validatorFactory = require('./validatorFactory')

function validatorMethodFactory(name, parent, built) {
  // core domain of this fn, used by validators and configured fns
  const type = built.type

  // create our validator in the factory,
  // then encase it, prepare a TypeError factory
  const validator = validatorFactory(type)

  return methodEncasingFactory(name, parent, built, validator, type)
}

module.exports = validatorMethodFactory
