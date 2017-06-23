const toS = require('./is/toS')
const ObjectAssign = require('./util/assign')

// @TODO: js stringify if development
// , validator, thisArg
module.exports = (method, type) => (arg, e) => {
  const data = {
    [method]: {
      type,
      // thisArg,
      argument: {value: arg, type: toS(arg)},
      // validator,
      thrown: e,
    },
  }

  const error = ObjectAssign(new TypeError('!='), data)

  if (process.env.NODE_ENV !== 'production') {
    error.inspect = () => {
      // data.error = error

      return data
      // since we are just inspecting the metadata on dev
      // console.log(data)
      // return error.stack
    }
  }

  error.reThrow = () => {
    if (process.env.NODE_ENV !== 'production') console.log(error)
    throw error
  }

  return error
}
