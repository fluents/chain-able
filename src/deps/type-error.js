const toS = require('./is/toS')
const ObjectAssign = require('./util/assign')

// @TODO: js stringify if development
// , validator, thisArg
module.exports = (method, type) => (arg, e) => {
  const data = {
    [method]: {
      type,
      argument: {value: arg, type: toS(arg)},
      thrown: e,
      // thisArg,
      // validator,
    },
  }

  const error = ObjectAssign(new TypeError('!='), data)

  /* istanbul ignore next: dev */
  if (process.env.NODE_ENV !== 'production') {
    // since we are just inspecting the metadata on dev
    error.inspect = () => {
      // data.error = error
      return data
    }
  }

  error.reThrow = () => {
    /* istanbul ignore next: dev */
    if (process.env.NODE_ENV !== 'production') console.log(error)
    throw error
  }

  return error
}
