const toS = require('../is/toS')
const ObjectAssign = require('../util/assign')
const ENV_DEVELOPMENT = require('../env/dev')

/* istanbul ignore next: dev */
const thrower = error => () => {
  if (ENV_DEVELOPMENT) {
    console.log(error)
  }

  throw error
}

// @TODO: js stringify if development
// , validator, thisArg
module.exports = (method, type) => (arg, thrown, meta) => {
  const argToString = toS(arg)
  const data = {
    [method]: {
      type,
      arg: {
        val: arg,
        str: argToString,
        json: JSON.stringify(arg),
      },
    },
  }

  const error = ObjectAssign(
    new TypeError(`${argToString} != ${type}`),
    data,
    meta
  )

  // put it back in its place
  if (thrown.message) error.message += thrown.message
  if (thrown.stack) error.stack = thrown.stack

  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    // since we are just inspecting the metadata on dev
    error.inspect = () => {
      const devMsg = 'inspecting on development'
      const thrownMsg = `thrown: ${thrown.message}`
      const eMsg = `compare: ${error.message}`
      const errorName = `name: ${error.name}`
      const argMsg = `arg: ${arg};\nstr: ${toS(
        arg
      )} ${typeof arg};\njson: ${JSON.stringify(arg)}`
      const typeMsg = `type: ${type}`
      const stackMsg = 'stack: ' + thrown.stack
      const dashMsg = `-----`
      let msg = `\n${dashMsg} ${devMsg} ${dashMsg}\n`
      if (meta) msg += `meta: ${JSON.stringify(meta)}\n`
      msg += `${thrownMsg}\n${eMsg}\n${errorName}\n\n`
      msg += `${typeMsg}\n${argMsg}`
      msg += `\n\n${stackMsg}\n${dashMsg}\n`
      return msg
    }
  }

  error.reThrow = thrower(error)
  return error
}
