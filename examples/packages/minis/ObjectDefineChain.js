const {Chain, isUndefined, isFunction, isObj, isReal, isBoolean} = require('../../../src')

const booleanMethods = ['configurable', 'enumerable']
const allReal = x => x.filter(isReal).length === x.length

// @TODO: all statics
class ObjectDefineChain extends Chain {
  constructor(parent) {
    super(parent)

    // normal methods
    this
      .methods(['obj', 'value', 'prop'])
      .build()

    const onInvalid = () => {
      console.log('must provide a boolean to ' + booleanMethods.join(','))
    }

    // default all params to `true` and all initial values `true`
    this
      .methods(booleanMethods)
      .default(true)
      .initial(true)
      .type('boolean')
      .onInvalid(onInvalid)
      .build()

    // do not want to define writable by default,
    // it is different since you cannot use it with get set
    this
      .method('writable')
      .type('boolean')
      .onInvalid(onInvalid)
      .build()

    // --------
    // only needed because get & set are keywords for chainable/maps
    const get = this.get.bind(this)
    const set = this.set.bind(this)

    this.get = keyOrFunction => {
      // setting `.get`
      if (isFunction(keyOrFunction)) {
        return set('get', keyOrFunction)
      }
      // normal `key`
      else {
        return get(keyOrFunction)
      }
    }

    // if we pass in `function` without `value` = `set`
    this.set = (keyOrFunction, value) => {
      if (isUndefined(value) && isFunction(keyOrFunction)) {
        return set('set', keyOrFunction)
      }
      else {
        // console.log('HAD VALUE DAMNIT', value)
        return set(keyOrFunction, value)
      }
    }
  }

  descriptor(descriptor) {
    return this.from(descriptor)
  }

  // @TODO validate on development env when using .get & .set & .value
  // when we pass in an object, it can be the shorthand way to do a define
  define(optionalObj) {
    if (isObj(optionalObj)) this.obj(optionalObj)

    const {
      obj,
      configurable,
      enumerable,
      writable,
      set,
      get,
      value,
      prop,
    } = this.entries()

    const descriptor = {configurable, enumerable}

    // could also do
    // this.observe(['get', 'set', 'value'], x => {
    //   if (x.get && x.set && x.value) {
    //     throw new Error('cannot provide get set and value')
    //   }
    // })
    //
    // debug
    if (this.get('debug')) {
      if (allReal([get, set, value])) {
        throw new Error('cannot provide get set and value')
      }
    }

    // can only use .value or .get + .set
    if (isFunction(get)) descriptor.get = get
    if (isFunction(set)) descriptor.set = set
    if (isReal(value)) descriptor.value = value
    if (isBoolean(writable)) descriptor.writable = writable

    Object.defineProperty(obj, prop, descriptor)
    return this
  }
}


const invalidD = new ObjectDefineChain()
const getSetD = new ObjectDefineChain()
const fromD = new ObjectDefineChain()

function onGet() {}
function onSet() {}
const value = true
const obj = {}

try {
  invalidD
    .debug(true)
    .value(value)
    .get(onGet)
    .set(onSet)
    .define(obj)
}
catch (e) {

}

getSetD
  .configurable()
  .enumerable()
  .prop('eh')
  .get(onGet)
  .set(onSet)
  .define(obj)

fromD
  .prop('from')
  .descriptor({value: true, writable: true, enumerable: false})
  .define(obj)


require('fliplog').data({obj}).echo()
//=>  obj: { eh: [Getter/Setter], from: true } }
