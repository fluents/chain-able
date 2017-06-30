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

/**
 * @desc enhance an Error, enable rethrowing & better inspection
 * @memberOf encase
 * @category types
 * @category encase
 *
 * @since 4.0.0-alpha.1
 * @param  {Primitive} method method being decorated
 * @param  {Type} type type to validate with
 * @return {Function} function that returns a decorated TypeError with .inspect & metadata (arg, thrown, meta)
 *
 * @TODO js stringify if development
 *
 * @see MethodChain
 * @see validators/schemaBuilder
 * @see validators/validatorBuilder
 * @see plugins/encase
 *
 * @example
 *   const badValidator = x => {
 *     if (x === 'bad') {
 *       throw new Error('bad!')
 *     }
 *   }
 *   const enhancer = enhanceError('eh', badValidator)
 *
 *   // called by plugins/encase when throws or invalid
 *   let error
 *   let arg = 'bad'
 *   try {
 *     error = badValidator(arg)
 *   }
 *   catch (e) {
 *     error = enhancer(arg, e, {metadata: true})
 *   }
 *
 *   console.log(error)
 *   //=> {[eh]: { type: badValidator, arg: 'bad', json, str, rethrow }}
 *   //=> console.log on DEVELOPMENT
 */
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
  if (thrown && thrown.message) error.message += thrown.message
  if (thrown && thrown.stack) error.stack = thrown.stack

  /* istanbul ignore next: dev */
  if (ENV_DEVELOPMENT) {
    // since we are just inspecting the metadata on dev
    error.inspect = () => {
      const devMsg = 'inspecting on development'
      const thrownMsg = `thrown: ${thrown}`
      const eMsg = `compare: ${error.message}`
      const errorName = `name: ${error.name}`
      const argMsg = `arg: ${arg};\nstr: ${toS(
        arg
      )} ${typeof arg};\njson: ${JSON.stringify(arg)}`
      const typeMsg = `type: ${type}`
      const stackMsg = 'stack: ' + error.stack
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
