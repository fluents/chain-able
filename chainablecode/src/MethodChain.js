// core
const ChainedMap = require('./ChainedMapBase')
const meta = require('./deps/meta')
const DECORATED_KEY = require('./deps/meta/decorated')
// .
const toarr = require('./deps/to-arr')
const argumentor = require('./deps/argumentor')
// error
const encase = require('./deps/encase')
const camelCase = require('./deps/camel-case')
const typeError = require('./deps/type-error')
// is
const isObj = require('./deps/is/obj')
const isArray = require('./deps/is/array')
const isFunction = require('./deps/is/function')
const validatorFactory = require('./deps/validators')
const traverse = require('./deps/traverse')
// obj
const hasOwnProperty = require('./deps/util/hasOwnProperty')
const getDescriptor = require('./deps/util/getDescriptor')
const ObjectDefine = require('./deps/define')
const ObjectKeys = require('./deps/util/keys')
const ObjectAssign = require('./deps/util/assign')
const markForGarbageCollection = require('./deps/gc')
const dot = require('./deps/dot-prop')

// const timer = require('fliplog').fliptime()

function getSetFactory(_this, name, desc) {
  _this[camelCase(`set-${name}`)] = desc.set
  _this[camelCase(`get-${name}`)] = desc.get
}

function aliasFactory(name, parent, aliases) {
  if (aliases) {
    for (let a = 0; a < aliases.length; a++) {
      ObjectDefine(parent, aliases[a], getDescriptor(parent, name))
    }
  }
}

const schemaFactory = nestedSchema => argForValidation => {
  let valid = true
  traverse(nestedSchema).forEach(function(x) {
    const key = this.key
    const validator = validatorFactory(x)
    if (!validator(dot.get(argForValidation, key))) {
      valid = false
      this.stop()
    }
  })
  return valid
}

/**
 * @since 4.0.0
 *
 * @TODO: only encase on option
 * @TODO: define .name on the function
 *
 * @desc create a validator factory for types
 *
 * @param  {string} name
 * @param  {Object | Function} parent
 * @param  {Object} built
 * @return {MethodChain} @chainable
 */
function validatorMethodFactory(name, parent, built) {
  // core domain of this fn, used by validators and configured fns
  const type = built.type

  // create our validator in the factory,
  // then encase it, prepare a TypeError factory
  const validator = validatorFactory(type)

  // require('fliplog').data({validator: validator.toString(), type}).exit()
  const encasedValidator = encase(validator)
  const error = typeError(name, type, validator, parent)

  // our configured functions, with fallback defaults
  const set = built.call || built.set
  const onValid = built.onValid || set
  const onInvalid = built.onInvalid || (arg => error(arg).reThrow())

  // eslint-disable-next-line func-style
  return function typedOnCall(arg) {
    // nodejs way - error first, data second, instance last
    const callInvalid = e => onInvalid.call(this, error(arg, e), arg, this)

    encasedValidator
      .onInvalid(e => {
        return callInvalid(e)
      })
      .onValid(result => {
        // require('fliplog').data({result, arg}).exit()

        // we'll be opinionated and say either `false` or `throw`
        if (result === false) return callInvalid()

        // @NOTE: onValid defaults to this... this.set(name, arg)
        return onValid.call(this, arg, this)
      })
      .call(arg)

    return this
  }
}

// https://github.com/iluwatar/java-design-patterns/tree/master/property
// https://github.com/iluwatar/java-design-patterns/tree/master/prototype

// @TODO: to use as a function
// function _methods() {}
// _methods.use(obj) {
//   this.obj = obj
//   return _methods
// }
// _methods.extend = _methods.use
// _methods.methods = function(methods) {
//   return new MethodChain(this.obj)
// }

/**
 * @since 4.0.0
 *
 * @TODO: .prop - for things on the instance, not in the store?
 *        !!! .sponge - absorn properties into the store
 *
 * @type {Map}
 */
class MethodChain extends ChainedMap {
  constructor(parent) {
    // timer.start('methodchain')

    super(parent)

    // ----------------

    const set = this.set.bind(this)

    this.toNumber = () => this.build(0)

    this.extend([
      'onInvalid',
      'onValid',
      'initial',
      'default',
      'type',
      'callReturns',
      'decorationTarget',
    ])

    // shorthand
    this.method = this.methods = name => this.build().methods(name)

    // default argument...
    this.encase = x => set('encase', parent[x] || x)

    // alias
    this.then = this.onValid.bind(this)
    this.catch = this.onInvalid.bind(this)

    // @NOTE shorthands.bindMethods
    this.bind = (should = parent) => set('bind', should)
    this.returns = (x, callReturns) =>
      set('returns', x || parent).set('callReturns', callReturns)

    // @NOTE  replaces shorthands.chainWrap
    this.chainable = this.returns

    this.onSet = x => set('set', x)
    this.onGet = x => set('get', x)
    this.onCall = x => set('call', x)

    this.alias = aliases =>
      this.tap('alias', (old, merge) => merge(old, toarr(aliases)))
    this.factory = factory =>
      this.tap('factories', (old, merge) => merge(old, toarr(factory)))

    /**
     * @since 4.0.0
     * @param  {string | Object | Array<string>} methods
     * @return {MethodChain}
     */
    this.name = methods => {
      let names = methods

      /**
       * @desc this is a factory for building methods
       *       schema defaults value to `.type`
       *       this defaults values to `.onCall`
       */
      if (!isArray(methods) && isObj(methods)) {
        names = ObjectKeys(methods)
        names.forEach(method =>
          this.factory(name => {
            const obj = methods[name]

            if (isFunction(obj)) {
              // @TODO: IS THIS THE BEST DEFAULT?!
              this.define(false)
              this.onCall(obj)
              // .onSet(obj).onGet(obj)
            }
            else {
              this.from(obj)
              // @NOTE: this is reserved
              if (obj.set) this.onSet(obj.set)
              if (obj.get) this.onGet(obj.get)
              if (obj.call) this.onCall(obj.call)
              // aka, ^ this.from !!!!
              // if (obj.type) this.type(obj.type)
              // if (obj.define) this.define(true)
              // if (obj.getSet) this.getSet(true)
              // if (obj.alias) this.alias(obj.alias)
              // if (obj.factory) this.factory(obj.factory)
              // if (obj.onValid) this.onValid(obj.onValid)
              // if (obj.onInvalid) this.onInvalid(obj.onInvalid)
              // if (obj.initial) this.initial(obj.initial)
              // if (obj.default) this.default(obj.default)
              // if (obj.returns) this.returns(obj.returns)
              if (obj.set && obj.get) {
                this.define().getSet()
              }
            }
          })
        )
      }
      return set('names', names)
    }

    this.camelCase = () => set('camel', true)

    this.define = (x = true) => set('define', x)
    this.getSet = (x = true) => set('getSet', x)
  }

  /**
   * @since 4.0.0
   * @param {Object} obj schema
   * @return {MethodChain} @chainable
   *
   * @TODO inherit properties (in factory, for each key)
   *       from this for say, dotProp, getSet
   *
   * @TODO very @important
   *       that we setup schema validation at the highest root for validation
   *       and then have some demo for how to validate on set using say mobx
   *       observables for all the way down...
   */
  schema(obj) {
    const keys = ObjectKeys(obj)
    for (let k = 0; k < keys.length; k++) {
      const key = keys[k]
      const value = obj[key]
      if (isObj(value)) {
        schemaFactory(value)
      }
      else {
        this.parent.method(key).type(value).define().build()
      }
    }

    return this
  }

  /**
   * @TODO: if passing in a name that already exists, operations are decorations... (partially done)
   * @see https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
   *
   * @since 4.0.0
   * @desc set the actual method, also need .context - use .parent
   * @param  {any} [returnValue=undefined] returned at the end of the function for ease of use
   * @return {MethodChain} @chainable
   */
  build(returnValue) {
    const parent = this.parent
    const names = toarr(this.get('names'))
    const shouldTapName = this.get('camel')

    for (let n = 0; n < names.length; n++) {
      let name = names[n]
      if (shouldTapName) name = camelCase(name)
      this._build(name, parent)
    }

    // timer.stop('methodchain').log('methodchain').start('gc')

    // remove refs to unused
    this.clear()
    delete this.parent
    markForGarbageCollection(this)

    // timer.stop('gc').log('gc')
    // require('fliplog').quick(this)

    return returnValue === undefined ? parent : returnValue
  }

  /**
   * @TODO: optimize the size of this
   *        with some bitwise operators
   *        hashing the things that have been defaulted
   *
   * @since 4.0.0
   * @protected
   */
  _defaults(name, parent, built) {
    // defaults
    const defaultOnSet = arg => parent.set(name, arg)
    const defaultOnGet = () => parent.get(name)

    // so we know if we defaulted them
    defaultOnSet.defaulted = true
    defaultOnGet.defaulted = true

    // when we've defaulted already for another method,
    // we need a new function,
    // else the name will be scoped incorrectly
    const {call, set, get} = built
    if (!get || get.defaulted) {
      this.onGet(defaultOnGet)
    }
    if (!call || call.defaulted) {
      this.onCall(defaultOnSet)
    }
    if (!set || set.defaulted) {
      this.onSet(defaultOnSet)
    }
  }

  /**
   * @protected
   * @TODO: add to shorthands..
   * @NOTE: scoping here adding default functions have to rescope arguments
   * @param {Primitive} name
   * @param {Object} parent
   * @return {void}
   */
  _build(name, parent) {
    let method
    let existing
    const entries = () => this.entries()

    // could ternary `let method =` here
    if (hasOwnProperty(parent, name)) {
      existing = getDescriptor(parent, name)
      // avoid `TypeError: Cannot redefine property:`
      if (existing.configurable === false) return
      // use existing property, when configurable
      method = existing.value
      this.onCall(method).onSet(method)
    }
    else if (parent[name]) {
      method = parent[name]
    }

    // scope it once for factories & type building, then get it again
    let built = entries()

    this._defaults(name, parent, built)

    // factories can add methods,
    // useful as plugins/presets & decorators for multi-name building
    if (built.factories) {
      built.factories.map(factory => factory(name, parent))
    }

    built = entries()

    if (built.type) {
      const validatorMethod = validatorMethodFactory(name, parent, built)
      this.set('call', validatorMethod).set('set', validatorMethod)
      built = entries()
    }

    // not destructured for better variable names
    const shouldAddGetterSetter = built.getSet
    const shouldDefineGetSet = built.define
    const defaultValue = built.default

    // can only have `call` or `get/set`...
    const {get, set, call, initial, bind, returns, callReturns} = built

    // default method, if we do not have one already
    if (!method) {
      method = (arg = defaultValue) => call.call(parent, arg)
    }

    if (bind) {
      // bind = bindArgument || parent
      method = method.bind(bind)
    }
    if (returns) {
      const ref = method
      method = function() {
        const args = argumentor.apply(null, arguments)

        // eslint-disable-next-line prefer-rest-params
        const result = ref.apply(parent, args)

        return callReturns === true
          ? returns.apply(parent, [result].concat(args))
          : returns
      }
    }
    if (initial !== undefined) {
      parent.set(name, initial)
    }

    // --------------- stripped -----------

    // can add .meta on them though for re-decorating
    // -> but this has issue with .getset so needs to be on .meta[name]
    if (process.env.NODE_ENV !== 'production') {
      ObjectDefine(get, 'name', {value: camelCase(`get-${name}`)})
      ObjectDefine(set, 'name', {value: camelCase(`set-${name}`)})
      ObjectDefine(call, 'name', {value: camelCase(`call-${name}`)})
      ObjectDefine(method, 'name', {value: camelCase(`${name}`)})
    }

    if (process.env.NODE_ENV === 'debug') {
      console.log({
        name,
        defaultValue,
        initial,
        returns,
        get,
        set,
        method: method.toString(),
      })
    }

    // ----------------- ;stripped ------------

    // --- could be a method too ---
    let descriptor = shouldDefineGetSet ? {get, set} : {value: method}
    if (existing) descriptor = ObjectAssign(existing, descriptor)

    const target = this.get('decorationTarget') || parent
    ObjectDefine(target, name, descriptor)
    if (shouldAddGetterSetter) getSetFactory(target, name, {get, set})
    aliasFactory(name, target, built.alias)
    // require('fliplog').quick({
    //   t: this,
    //   descriptor,
    //   shouldDefineGetSet,
    //   method,
    //   target,
    //   name,
    // })
  }

  // ---

  /**
   * @since 4.0.0 <- moved from Extend
   * @since 1.0.0
   * @alias extendParent
   * @desc add methods to the parent for easier chaining
   * @see ChainedMap.parent
   * @param {Object} parentToDecorate
   * @return {ChainedMap} @chainable
   */
  decorate(parentToDecorate) {
    if (!parentToDecorate) {
      parentToDecorate = this.parent.parent
    }
    else if (!parentToDecorate) {
      if (process.env.NODE_ENV === 'development') {
        throw new Error('must provide parent argument')
      }
      return this
    }
    this.decorationTarget(parentToDecorate)

    // can use this to "undecorate"
    parentToDecorate.meta = parentToDecorate.meta || meta(parentToDecorate)

    // default returns result of calling function,
    // else .parentToDecorate
    return this.factory((name, parent) => {
      parentToDecorate.meta(DECORATED_KEY, name)

      // @NOTE: so we can return...
      /* prettier-ignore */
      return this
        .returns(parentToDecorate)
        .callReturns(function returnsFunction(result, ...args) {
          return result || parentToDecorate
        })
    })
  }

  /**
   * @since 4.0.0 <- renamed from .extendIncrement
   * @since 0.4.0
   * @desc adds a factory to increment the value on every call
   *        @modifies this.initial
   *        @modifies this.onCall
   * @return {MethodChain} @chainable
   */
  autoIncrement() {
    /* prettier-ignore */
    return this.factory((name, parent) => this
      .set('initial', 0)
      .set('call', () => parent.tap(name, num => num + 1))
    )
  }
}

module.exports = MethodChain
