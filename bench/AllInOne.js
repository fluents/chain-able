const ChainedMap = require('../ChainedMap')
const ChainedSet = require('../ChainedSet')
const toarr = require('../deps/to-arr')
const dopemerge = require('../deps/dopemerge')
const FactoryChain = require('../FactoryChain')
const camelCase = require('../deps/camel-case')

// https://www.youtube.com/watch?v=SwSle66O5sU
const OFF = `${~315 >>> 3}@@`
const SymbolToPrimative = Symbol.toPrimitive
let TraverseChain

class TypeChainError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    }
    else {
      this.stack = new Error(message).stack
    }
  }
}

module.exports = class All extends ChainedMap {
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  constructor(parent) {
    super(parent)
    if (parent && parent.has && parent.has('debug')) {
      this.debug(parent.get('debug'))
    }
    else {
      this.debug(false)
    }
  }

  /**
   * @since 0.0.1
   * @desc return store.entries, plus all chain properties if they exist
   * @param  {boolean} [chains=false] if true, returns all properties that are chains
   * @return {Object}
   */
  entries(chains = false) {
    const entries = super.entries() || {}

    if (chains === false) return entries

    const addEntries = thisArg => {
      Object.keys(thisArg).forEach(key => {
        if (
          key === 'inspect' ||
          key === 'parent' ||
          key === 'store' ||
          key === 'shorthands' ||
          key === 'decorated' ||
          key === 'mixed'
        ) {
          return
        }

        const val = thisArg[key]
        if (val && typeof val.entries === 'function') {
          Object.assign(entries, {[key]: val.entries(true) || {}})
        }
      })

      return {addEntries, entries}
    }

    return addEntries(this).addEntries(entries).entries
  }

  // --- should be in mixn :s ---

  // --- --- --- debug --- --- ---

  /**
   * @since 1.0.0
   * @inheritdoc
   * @override
   * @desc same as ChainedMap.get, but checks for debug
   */
  get(name) {
    if (name === 'debug') return this._debug
    return super.get(name)
  }
  /**
   * @since 0.2.0
   * @NOTE sets on store not this.set for easier extension
   * @param {boolean} [should=true]
   * @return {Chainable} @chainable
   */
  debug(should = true) {
    this._debug = should
    return this
    // return this.store.set('debug', should)
  }

  // --- original ChainedMapExtendable ---

  /**
   * @since 1.0.0
   * @alias extendParent
   * @desc add methods to the parent for easier chaining
   * @see ChainedMapExtendable.parent
   * @param  {Array<string | Object>} decorations
   * @return {ChainedMapExtendable} @chainable
   */
  decorateParent(decorations) {
    // can use this to "undecorate"
    if (this.parent && !this.parent.decorated) {
      this.parent.decorated = this.parent.decorated || []
    }

    decorations.forEach(decoration => {
      let method
      let returnee
      let key
      let cb

      if (typeof decoration === 'object') {
        method = Object.keys(decoration).pop()
        cb = decoration[method]
      }

      method = method || decoration.method || decoration
      returnee = decoration.return // || this.parent
      key = decoration.key || method

      // console.log({method, key}, 'parent decorations')

      // @NOTE ignores when no parent
      if (!returnee && !this.parent) {
        if (this.get('debug') === true) {
          console.log('had no parent: ', method, this.className)
        }
        return
      }

      this.parent.decorated.push(method)
      this.parent[method] = (arg1, arg2, arg3) => {
        cb = cb || this[method]
        let result
        if (cb) result = cb.call(this, arg1, arg2, arg3)
        else this.set(key, arg1)
        return returnee || result || this.parent || this
      }
    })

    return this
  }

  // --- extend extend ---

  /**
   * @since 0.4.0
   * @param  {Array<string>} methods
   * @param  {string}  name
   * @param  {Boolean} [thisArg=null]
   * @example
   *  chain.extendAlias(['eh'], 'canada')
   *  chain.eh == chain.canada
   * @return {ChainedMap}
   */
  extendAlias(methods, name, thisArg = null) {
    /* prettier-ignore */
    toarr(methods)
      .forEach(method => (this[method] = this[name].bind(thisArg || this)))

    return this
  }

  /**
   * @since 0.4.0
   * @param {Array<string>} methods
   * @param {any} val
   * @param {string} [prefix='no']
   * @param {string} [inverseValue='todo']
   * @return {ChainedMapExtendable} @chainable
   */
  extendPrefixed(methods, val, prefix = 'no', inverseValue = 'todo') {
    this.extendWith(methods, val)
    this.extendWith(
      methods.map(method => addPrefix(method, prefix)),
      !val,
      prefix
    )
    return this
  }

  /**
   * @desc add methods for keys with default values,
   *       and inverse functions to set the value to the opposite
   * @param {Array<string>} methods
   * @param {any} val
   * @param {string} [prefix]
   * @return {ChainedMapExtendable} @chainable
   */
  extendWith(methods, val, prefix) {
    this.shorthands = [...this.shorthands, ...methods]
    methods.forEach(method => {
      this[method] = value => {
        if (value === undefined || value === null) value = val
        if (prefix) return this.set(removePrefix(method, prefix), value)
        return this.set(method, value)
      }
    })
    return this
  }

  // --- boolean & increment presets ---

  /**
   * @see ChainedMapExtendable.extendPrefixed
   * @param {Array<string>} methods
   * @param {any} val
   * @param {string} [prefix='no']
   * @return {ChainedMapExtendable} @chainable
   */
  extendBool(methods, val, prefix = 'no') {
    this.extendPrefixed(methods, !val, prefix)
    return this
  }

  /**
   * @since 0.4.0
   * @see ChainedMapExtendable.extendWith
   * @example this.extendFalse('eh').eh().get('eh') === false
   * @param {Array<string>} methods
   * @return {ChainedMapExtendable} @chainable
   */
  extendFalse(methods) {
    this.extendWith(methods, false)
    return this
  }

  /**
   * @since 0.4.0
   * @see ChainedMapExtendable.extendWith
   * @example this.extendTrue('eh').eh().get('eh') === true
   * @param {Array<string>} methods
   * @return {ChainedMapExtendable} @chainable
   */
  extendTrue(methods) {
    this.extendWith(methods, true)
    return this
  }

  /**
   * @since 0.4.0
   * @desc when called, increments the value
   * @example this.extendIncrement(['eh']).eh().eh().eh().get('eh') === 3
   * @param  {Array<string>} methods
   * @return {ChainedMap}
   */
  extendIncrement(methods) {
    // every time it is called, just increment
    // add to this.shorthands

    methods.forEach(method => {
      this.shorthands.push(method)
      this[method] = () => {
        let value = (this.get(method) | 0) + 1
        this.set(method, value)
        return this
      }
    })
    return this
  }

  /**
   * @since 0.4.0
   * @desc uses an object, loops through keys, adds method
   * @see ChainedMapExtendable.shorthands
   *
   * @param  {Object} methods
   * @param  {any} val default value
   * @return {ChainedMap}
   */
  extendDefault(methods, val) {
    this.shorthands = [...this.shorthands, ...methods]

    Object.keys(methods).forEach(method => {
      this[method] = (value = val || methods[method]) => this.set(method, value)
    })

    return this
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @desc returns a dot chain
   * @since 1.0.0
   * @param {string | null} [name=null]
   * @return {Object}
   */
  dotter(name = null) {
    if (name !== null) {
      if (this.get('debug') === true) {
        console.log('chain:dotter:used-name', {name})
      }
      return this._dotter(name)
    }

    return {
      name: dotName => this._dotter(dotName),
    }
  }

  /**
   * @protected
   * @since 1.0.0
   * @TODO split into a class
   * @see FlipChain.when
   * @desc take a dot-prop (or normal string) name
   *       returns an object with `.dotted` & `.otherwise`
   * @param  {string} name
   * @return {Object}
   */
  _dotter(name) {
    let accessor = name
    let first = name
    let hasDot = name.includes('.')
    let value

    if (hasDot) {
      accessor = name.split('.')
      first = accessor.shift()
    }

    const dotted = {}

    dotted.dotted = cb => {
      if (hasDot === false) return dotted
      value = cb(first, accessor, name)
      return dotted
    }

    dotted.otherwise = cb => {
      if (hasDot === true) return dotted
      value = cb(name)
      return dotted
    }

    // chain it
    dotted.dotted.otherwise = dotted.otherwise

    dotted.value = () => {
      return value
    }

    return dotted
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @TODO should hash these callback properties
   * @TODO just throttle the `.set` to allow easier version of .commit
   * @TODO .unobserve
   * @see https://medium.com/@benlesh/learning-observable-by-building-observable-d5da57405d87
   * @since 1.0.0
   * @alias on
   *
   * @example
   *   chain
   *     .extend(['eh'])
   *     .observe('eh', data => data.eh === true)
   *     .eh(true)
   *
   * @param  {string} properties
   * @param  {Function} cb
   * @return {Chain} @chainable
   */
  observe(properties, cb) {
    if (this.observers === undefined) {
      this.observers = new ChainedSet(this)
    }

    /* prettier-ignore */
    this.observers
      .add(changed => {
        // @TODO
        //  use `changed` to simply only update data with changed
        //  keep scoped data
        //  const {key, value} = changed

        const data = {}
        const props = toarr(properties)
        for (let i = 0; i < props.length; i++) {
          const prop = props[i]
          data[prop] = this.get(prop)
        }
        cb(data, this)
      })

    return this
  }

  /**
   * @since 1.0.2
   * @desc traverse `this`, or `this.entries`
   * @see TraverseChain
   * @see js-traverse
   * @param  {boolean} [useThis=false]
   * @return {ChainedMapExtendable} @chainable
   */
  traverse(useThis = false) {
    TraverseChain = TraverseChain || require('../TraverseChain')

    /* prettier-ignore */
    return new TraverseChain(this)
      .obj(useThis === false ? this.entries(true) : this)
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @since 1.0.2
   * @TODO handle transformers with an array...
   * @see obj-chain
   *
   * @example
   *   this
   *     .transform('dis', val => (typeof val === 'string' ? val : val.id))
   *     .set('dis', 'eh') // .get('dis') === 'eh'
   *     .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
   *
   * @param  {string | Function} key currently just string
   * @param  {any | Function} value
   * @return {This} @chainable
   */
  transform(key, value) {
    if (this.transformers === undefined) {
      this.transformers = {}
    }
    this.transformers[key] = value
    return this
  }

  /**
   * @inheritdoc
   * @see this.observe, this.transform
   * @since 1.0.0
   */
  set(key, val) {
    let value = val
    /* prettier-ignore */
    if (this.transformers !== undefined && this.transformers[key] !== undefined) {
      value = this.transformers[key](value, this)
    }

    super.set(key, value)

    if (this.observers !== undefined) {
      this.observers.values().forEach(observer => observer({key, value}))
    }

    return this
  }

  /**
   * @TODO add to .set
   * @inheritdoc
   * @override
   * @since 1.0.0
   * @desc if we have a keymap, remap, otherwise, just normal .from
   * @see FlipChain.from
   * @example chain.from({eh: true}) === chain.merge({eh: true})
   * @param  {Object} obj
   * @return {Chain} @chainable
   */
  from(obj) {
    if (this.has('keymap') === false) {
      return super.from(obj)
    }

    const keymap = this.get('keymap')
    const keys = Object.keys(obj)
    const mappedKeys = keys.map(key => {
      if (keymap[key]) return keymap[key]
      return key
    })

    for (let i = 0; i < keys.length; i++) {
      const key = mappedKeys[i]
      // skip if we already have it
      if (obj[key]) continue
      // otherwise, set it, can delete the old one
      obj[key] = obj[keys[i]]
    }

    return super.from(obj)
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @TODO could also be an array of `from` and corresponds to an array of `to`
   * @since 1.0.0
   * @example
   *  this
   *    .remapKeys()
   *    .remapKey('dis', 'dat')
   *    .from({dis: true})
   *  == {dat: true}
   *
   * @param  {string} from property name
   * @param  {string} to property name to change key to
   * @return {Chain} @chainable
   */
  remapKey(from, to) {
    if (this.has('keymap') === false) this.set('keymap', {})
    this.get('keymap')[from] = to
    return this
  }

  /**
   * @since 1.0.0
   * @desc library of validators to use by name
   *       @modifies this.validators
   * @param  {Object} validators
   * @return {TypeChain} @chainable
   */
  validators(validators) {
    if (this.has('validators')) {
      const merged = dopemerge(this.get('validators'), validators)
      return this.set('validators', merged)
    }
    return this.set('validators', validators)
  }

  /**
   * @since 1.0.0
   * @desc add a validated function to do .set
   * @param  {string | null} [name=null] shorthand for .name
   * @return {FactoryChain} @chainable
   */
  typed(name = null) {
    const typed = new FactoryChain(this)

    const chain = typed
      .prop('type')
      .prop('name')
      .prop('onInvalid')
      .prop('onValid')
      .chainUpDown(this.typed)
      .chainUpDowns(['typed'])
      .onDone(data => {
        this.extendTyped(data.name, data.type, data.onInvalid, data.onValid)
      })

    if (name !== null && typeof name === 'string') {
      chain.name(name)
      return chain
    }
    if (name !== null && typeof name === 'object') {
      return chain.merge(name).end()
    }

    return chain
  }

  /**
   * @protected
   * @since 1.0.0
   * @desc extend a type
   * @param  {string} name
   * @param  {any} type
   * @param  {Function | null} [onInvalid=null]
   * @param  {Function | null} [onValid=null]
   * @return {This} @chainable
   */
  extendTyped(name, type, onInvalid = null, onValid = null) {
    this[name] = arg => {
      const typeError = () => {
        const errorMsg = `[typof: ${typeof name}, name: ${name}] was not of type ${type}`
        return new TypeChainError(errorMsg)
      }
      if (onInvalid === null) {
        onInvalid = e => {
          throw typeError()
        }
      }
      const validator = typeof type === 'string' ?
        this.get('validators')[type] :
        type

      if (typeof validator !== 'function') {
        console.error({validators: this.get('validators')}, '\n\n')
        throw new TypeChainError(`${validator} for ${type} was not a function`)
      }

      let valid = true

      // @TODO remove try catch unless `.encase` is used
      try {
        valid = validator(arg)
      }
      catch (e) {
        valid = e
      }

      if (this.get('debug') === true) {
        // console.log('validating: ', {valid, arg, name})
      }

      // .error, .stack, === 'object'
      if (valid === null || valid === true) {
        this.set(name, arg)
        if (onValid !== null) onValid(arg, this, typeError())
      }
      else {
        onInvalid(arg, this)
      }
      return this
    }
    return this
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @TODO maybe just flow methods with a toFunction or something instead?
   * @since 1.0.2
   * @desc to allow flowing,
   * @param  {Array<string>} methods
   * @return {This} @chainable
   */
  bindMethods(methods) {
    methods.forEach(method => (this[method] = this[method].bind(this)))
    return this
  }

  /**
   * @desc wrap it simply to call a fn and return `this`
   * @since 1.0.2
   * @param  {string}   name
   * @param  {Function} fn
   * @return {This} @chainable
   */
  chainWrap(name, fn) {
    this[name] = (arg1, arg2, arg3) => {
      fn(arg1, arg2, arg3)
      return this
    }
    return this
  }

  /**
   * @desc set if the value has not been set
   * @since 1.0.2
   * @see this.set
   * @param {string} name
   * @param {any} value
   * @return {This} @chainable
   */
  setIfEmpty(name, value) {
    this.when(this.has(name) === false, () => {
      this.set(value)
    })
    return this
  }

  // --- added new ChainedMapExtendable stuff ---

  /**
   * @since 1.0.2
   * @desc traverse `this`, or `this.entries`
   * @see TraverseChain
   * @see js-traverse
   * @param  {Function[]} funcs functions to flow left to right
   * @return {Function} passes args through the functions, bound to this
   */
  flow(...funcs) {
    const length = funcs ? funcs.length : 0
    return (...args) => {
      let index = 0
      // eslint-disable-next-line
      let result = length ? funcs[index].apply(this, args) : args[0]
      for (; index < length; ++index) {
        // eslint-disable-next-line
        result = funcs[index].call(this, result)
      }
      return result
    }
  }

  /**
   * @desc return a value at the end of a chain regardless
   * @param  {any} value value to return at the end of a chain
   * @return {any}
   */
  return(value) {
    return value
  }

  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------

  /**
   * @inheritdoc
   * @override
   * @desc for inspecting
   * @since 1.0.1
   * @param  {Array<string> | Object} methods
   * @return {This} @chainable
   */
  clean(methods) {
    if (Array.isArray(methods) === false) {
      return super.clean(methods)
    }
    methods.forEach(method => {
      delete this[method]
      if (!this.parent || typeof this.parent !== 'object') return
      delete this.parent[method]
    })
    return this
  }

  /**
   * @TODO abstract this
   * @TODO this may break .from
   * @since 1.0.2
   * @desc add getter setter to methods
   *
   * @example
   *   // defining
   *   this.eh = val => this.set('eh', val)
   *   this.defineGetSet(['eh'])
   *
   *   // usage
   *   this.eh = true
   *   this.eh == true
   *   this.eh(true).eh() == true
   *
   * @param  {Array<string>} methods
   * @return {This} @chainable
   */
  defineGetSet(methods) {
    methods.forEach(method => {
      // reference current method, since we overwrite it
      const ref = this[method] && this[method].bind ?
        this[method].bind(this) :
        this[method]

      const getter = () => ref()

      // when arg is not passed in, count it as a getter
      // because `call` can be getter
      const setter = (arg = OFF) => {
        if (arg === OFF) return getter()
        return ref(arg)
      }

      // configurable
      Object.defineProperty(this, method, {
        configurable: true,
        enumerable: true,
        get: getter,
        set: setter,
      })
    })

    return this
  }

  /**
   * @desc add camelCased getX setX methods alongside the defined getSet
   * @since 1.0.2
   *
   * @example
   *  .extendGetSet(['eh'], this)
   *  -> setEh()
   *  -> .getEh,
   *  -> .eh {
   *      get(getter): getEh,
   *      set(setter): setEh
   *     }
   *
   * @example
   *  // usage
   *  this.extendGetSet(['ehOh'])
   *
   *  // with methods
   *  this.ehOh(true)
   *  this.ehOh() === this.getEhOh() === true
   *
   *  // with defined set and get + symbol toPrimative
   *  this.ehOh = false
   *  this.ehOh == false
   *  this.ehOh.valueOf() === false
   *
   * @param  {Array<string>}  methods
   * @param  {Object} thisArg
   * @return {This} @chainable
   */
  extendGetSet(methods, thisArg) {
    methods.forEach(method => {
      let getter
      let setter

      if (typeof method === 'string') {
        getter = () => this.get(method)
        // when arg is not passed in, count it as a getter
        // because `call` can be getter
        setter = (arg1 = OFF) => {
          if (arg1 === OFF) return getter()
          return this.set(method, arg1)
        }
      }
      else {
        getter = arg => method.get(arg)
        setter = (arg1 = OFF, arg2, arg3) => {
          if (arg1 === OFF) return getter()
          return method.set(arg1, arg2, arg3)
        }
      }

      const getMethod = camelCase(`get-${method}`)
      const setMethod = camelCase(`set-${method}`)

      this[getMethod] = getter
      this[setMethod] = setter

      // also should have `setGet`
      Object.defineProperty(this, method, {
        configurable: true,
        enumerable: true,
        get: function getr(arg1) {
          const getrAsFn = (arg2 = OFF) => {
            return setter(arg2) // getter
          }
          getrAsFn[SymbolToPrimative] = hint => {
            return getter(OFF)
          }
          getrAsFn.valueOf = () => getter(OFF)
          return getrAsFn
        },
        set: function setr(arg1 = OFF, arg2 = OFF, arg3 = OFF) {
          return setter(arg1, arg2, arg3)
        },
      })
    })

    return this
  }
}
