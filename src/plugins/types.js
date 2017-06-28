const ENV_DEVELOPMENT = require('../deps/env/dev')
const not = require('../deps/conditional/not')
const isFalse = require('../deps/is/false')
const withSpecification = require('../deps/encase/withSpecification')
const validatorBuilder = require('../deps/validators/validatorBuilder')
const encaseType = require('./encase')

// we'll be opinionated and say either `false` or `throw`
const spec = withSpecification(not(isFalse))

/**
 * @pattern factory plugin
 * @param  {string} name
 * @param  {Object} parent
 * @param  {Object} built
 * @return {void}
 */
module.exports = function validatorPlugin(name, parent, built) {
  // core domain of this fn, used by validators and configured fns
  const type = built.type

  if (type) {
    // if (ENV_DEVELOPMENT) {
    //   this.debugSteps('added built type')
    // }

    // create our validator in the factory,
    const validator = validatorBuilder(type)

    // then encase it, prepare a TypeError factory
    const encase = encaseType(name, parent, built)
    const validatorMethod = encase(validator, type, spec)

    if (ENV_DEVELOPMENT) {
      validatorMethod.type = type
    }

    this.onCall(validatorMethod).onSet(validatorMethod)
  }
}
