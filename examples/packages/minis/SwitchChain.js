const {Chain, ChainedSet, merge, eq, is} = require('../../../')

const {isFunction, isBoolean, isArray, isString, isNull} = is
const ignoredTypes = ['null', 'undefined', 'NaN']
const simpleKindOf = x => (isArray(x) ? 'array' : isNull(x) ? 'null' : typeof x)

// @TODO find the other SwitchChain that also has break?
// needs more checks
class Switch extends Chain {
  constructor(value) {
    super(value)
    this.cases = new ChainedSet(this)
    this.value = this.parent
  }

  static on(value) {
    return new Switch(value)
  }

  // could be decorate
  case(value, cb) {
    let check = () => {
      if (eq(this.value, value)) {
        return cb()
      }
      return false
    }

    if (isFunction(value)) {
      check = value
    }

    if (isBoolean(value)) {
      check = () => {
        if (value) {
          return cb()
        }
        return false
      }
    }

    this.cases.add(check)

    return this
  }

  // auto ending
  default(cb) {
    return this.set('default', cb).end()
  }

  end() {
    for (let [condition] of this.cases) {
      const result = condition()
      if (result) return result
    }

    return this.get('default')()
  }
}

// could use say matcher super easily but the point is
// being able to use the array, since === would not work with an array usually
function DopeSwitch(one, two) {
  const types = [one, two].map(simpleKindOf)
  const [type1, type2] = types

  if (ignoredTypes.includes(type1)) return two
  if (ignoredTypes.includes(type2)) return one

  /* prettier-ignore */
  const result = Switch
    .on(types)
    // strings[]
    .case(['string', 'string'], () => one + two)
    .case(['array', 'string'], () => one.concat([two]))
    .case(['string', 'array'], () => two.concat([one]))
    // primitives
    .case(['string', 'number'], () => [one, two])
    .case(['number', 'string'], () => [one, two])
    .case(['number', 'boolean'], () => [one, two])
    .case(['boolean', 'string'], () => [one, two])
    .case(['boolean', 'number'], () => [one, two])
    // boolean[]
    .case(['boolean', 'boolean'], () => one)
    .case(['array', 'boolean'], () => one.concat([two]))
    .case(['boolean', 'array'], () => one.concat([two]))
    // number[]
    .case(['number', 'number'], () => one + two)
    .case(['array', 'number'], () => one.concat([two]))
    .case(['number', 'array'], () => one.concat([two]))
    // concat
    .default(() => merge(one, two))

  return result
}

function DopeSwitchDebug(one, two) {
  const key = String([one, two])
  return {[key]: DopeSwitch(one, two)}
}

const merges = [
  DopeSwitchDebug(1, 1),
  DopeSwitchDebug('1', 1),
  DopeSwitchDebug([], 100),
  DopeSwitchDebug({}, {eh: true}),
  DopeSwitchDebug([], []),
  DopeSwitchDebug([], {}),
  DopeSwitchDebug(['duck', 'duck', 'duck'], ['goose']),
]

console.log(merges)
