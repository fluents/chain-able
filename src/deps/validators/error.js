const toS = require('../is/toS')
const ObjectAssign = require('../util/assign')
const ENV_DEVELOPMENT = require('../env/dev')

// @TODO: js stringify if development
// , validator, thisArg
module.exports = (method, type) => (arg, e) => {
  const argToString = toS(arg)
  const data = {
    [method]: {
      type,
      argument: {value: arg, type: argToString},
      thrown: e,
      // thisArg,
      // validator,
    },
  }

  const error = ObjectAssign(new TypeError(`${argToString} != ${type}`), data)

  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    // since we are just inspecting the metadata on dev
    error.inspect = () => {
      // data.error = error
      return data
    }
  }

  error.reThrow = () => {
    /* istanbul ignore next: dev */
    if (ENV_DEVELOPMENT) {
      console.log(error)
    }

    throw error
  }

  return error
}
