/* eslint complexity: "OFF" */
/* eslint import/max-dependencies: "OFF" */

/**
 * @TODO clarify .set vs .call
 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/property property-pattern}
 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/prototype prototype-pattern}
 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/step-builder step-builder-pattern}
 * {@link https://github.com/iluwatar/java-design-patterns/tree/master/builder builder-pattern}
 * {@link https://github.com/addyosmani/essential-js-design-patterns/blob/master/diagrams/mixins.png mixin-png}
 * {@link https://sourcemaking.com/design_patterns/creational_patterns creational-patterns}
 * {@link https://sourcemaking.com/design_patterns/factory_method factory-method}
 * {@link https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e constructors}
 * {@link https://www.sitepoint.com/factory-functions-javascript/ js-factory-functions}
 */

// core
const ChainedMap = require('./ChainedMapBase')
const SHORTHANDS_KEY = require('./deps/meta/shorthands')
const ENV_DEVELOPMENT = require('./deps/env/dev')
const ENV_DEBUG = require('./deps/env/debug')
// plugins
const schemaMethod = require('./plugins/schema')
const typesPlugin = require('./plugins/types')
const objPlugin = require('./plugins/obj')
const encasePlugin = require('./plugins/encase')
const decoratePlugin = require('./plugins/decorate')
const autoIncrementPlugin = require('./plugins/autoIncrement')
const autoGetSetPlugin = require('./plugins/autoGetSet')
// const validatorBuilder = require('./deps/validators/validatorBuilder')
// obj
const hasOwnProperty = require('./deps/util/hasOwnProperty')
const getDescriptor = require('./deps/util/getDescriptor')
const ObjectDefine = require('./deps/define')
const ObjectKeys = require('./deps/util/keys')
const ObjectAssign = require('./deps/util/assign')
// utils
const toarr = require('./deps/to-arr')
const argumentor = require('./deps/argumentor')
const camelCase = require('./deps/string/camelCase')
const markForGarbageCollection = require('./deps/gc')
// is
const isObj = require('./deps/is/obj')
const isArray = require('./deps/is/array')
const isUndefined = require('./deps/is/undefined')
const isTrue = require('./deps/is/true')
const isFalse = require('./deps/is/false')
const isObjWithKeys = require('./deps/is/objWithKeys')

const DEFAULTED_KEY = 'defaulted'
const METHOD_KEYS = [
  'onInvalid',
  'onValid',
  'initial',
  'default',
  'type',
  'callReturns',
  'target',
  'onSet',
  'onCall',
  'onGet',
]

// const SET_KEY = METHOD_KEYS[0]

function getSetFactory(_this, name, desc) {
  _this[camelCase(`set-${name}`)] = desc.set
  _this[camelCase(`get-${name}`)] = desc.get
}

function aliasFactory(name, parent, aliases) {
  if (!isUndefined(aliases)) {
    for (let a = 0; a < aliases.length; a++) {
      ObjectDefine(parent, aliases[a], getDescriptor(parent, name))
    }
  }
}

// @TODO to use as a function
// function _methods() {}
// _methods.use(obj) {
//   this.obj = obj
//   return _methods
// }
// _methods.extend = _methods.use
// _methods.methods = function(methods) {
//   return new MethodChain(this.obj)
// }

let methodFactories = {}

/**
 * ❗ using `+` will call `.build()` in a shorthand fashion
 *
 * @member MethodChain
 * @inheritdoc
 * @class
 * @extends {ChainedMap}
 * @type {Map}
 *
 * @since 4.0.0
 *
 * @types MethodChain
 * @tests MethodChain
 *
 * @TODO maybe abstract the most re-usable core as a protected class
 *        so the shorthands could be used, and more functionality made external
 * @TODO need to separate schema from here as external functionality & add .add
 * @TODO .prop - for things on the instance, not in the store?
 *        !!! .sponge - absorn properties into the store
 */
class MethodChain extends ChainedMap {
  constructor(parent) {
    // timer.start('methodchain')

    super(parent)

    // ----------------
    const set = this.set.bind(this)

    this.newThis = () => new MethodChain(parent)
    this.toNumber = () => this.build(0)

    /**
     * @example
     *
     *  chain
     *     .method('eh')
     *     .type(`?string`)
     *     .type(`string[]`)
     *     .type(`string|boolean`)
     *     .type(`boolean[]|string[]`)
     *     .type(`!date`)
     *
     */
    this.extend(METHOD_KEYS)

    // shorthand
    this.method = this.methods = name => {
      if (this.length) return this.build().methods(name)
      else return this.name(name)
    }

    // default argument...
    this.encase = x => {
      return set('encase', parent[x] || x || true)
    }

    // alias
    this.then = this.onValid.bind(this)
    this.catch = this.onInvalid.bind(this)

    this.returns = (x, callReturns) =>
      set('returns', x || parent).callReturns(callReturns)

    // @NOTE replaces shorthands.chainWrap
    this.chainable = this.returns

    /**
     * @desc alias methods
     * @since 2.0.0
     *
     * @param  {string | Array<string>} aliases aliases to remap to the current method being built
     * @return {MethodChain} @chainable
     *
     * @NOTE these would be .transform
     *
     * @example
     *
     *     const chain = new Chain()
     *     chain.methods(['canada']).alias(['eh']).build()
     *     chain.eh('actually...canada o.o')
     *     chain.get('canada')
     *     //=> 'actually...canada o.o')
     *
     */
    this.alias = aliases =>
      this.tap('alias', (old, merge) => merge(old, toarr(aliases)))
    this.plugin = plugin =>
      this.tap('plugins', (old, merge) => merge(old, toarr(plugin)))

    this.camelCase = () => set('camel', true)

    // @NOTE: x = true is much prettier, but compiles badly
    const defaultToTrue = x => (isUndefined(x) ? true : x)
    this.define = x => set('define', defaultToTrue(x))
    this.getSet = x => set('getSet', defaultToTrue(x))

    // @TODO unless these use scoped vars, they should be on proto
    // @NOTE shorthands.bindMethods
    this.bind = target => set('bind', isUndefined(target) ? parent : target)
    this.autoGetSet = () => this.plugin(autoGetSetPlugin)

    this.plugin(typesPlugin)

    if (isObjWithKeys(methodFactories)) {
      ObjectKeys(methodFactories).forEach(factoryName => {
        this[factoryName] = arg => methodFactories[factoryName].call(this, arg)
        if (ENV_DEVELOPMENT) {
          this[factoryName].methodFactory = true
        }
      })
    }
  }

  /**
   * @desc setup methods to build
   * @category builder
   * @memberOf MethodChain
   *
   * @since 4.0.0-beta.1 <- moved to plugin
   * @since 4.0.0
   *
   * @param  {string | Object | Array<string>} methods method names to build
   * @return {MethodChain} @chainable
   *
   * @example
   *
   *    var obj = {}
   *    new MethodChain(obj).name('eh').build()
   *    typeof obj.eh
   *    //=> 'function'
   *
   */
  name(methods) {
    let names = methods

    /**
     * @desc this is a plugin for building methods
     *       schema defaults value to `.type`
     *       this defaults values to `.onCall`
     */
    if (!isArray(methods) && isObj(methods)) {
      names = ObjectKeys(methods)
      for (let name = 0; name < names.length; name++) {
        this.plugin(objPlugin.call(this, methods, names[name]))
      }
    }
    return this.set('names', names)
  }

  /**
   * an object that contains nestable `.type`s
   * they are recursively (using an optimized traversal cache) mapped to validators
   * ❗ this method auto-calls .build, all other method config calls should be done before it
   *
   * @TODO link to `deps/is` docs
   *
   * @version 4.0.0-beta.1 <- moved to plugin
   * @since 4.0.0
   *
   * @category types
   * @memberOf MethodChain
   *
   * @param {Object} obj schema
   * @return {MethodChain} @chainable
   *
   * @TODO move out into a plugin to show how easy it is to use a plugin
   *       and make it able to be split out for size when needed
   *
   * @TODO inherit properties (in plugin, for each key)
   *       from this for say, dotProp, getSet
   *
   * @TODO very @important
   *       that we setup schema validation at the highest root for validation
   *       and then have some demo for how to validate on set using say mobx
   *       observables for all the way down...
   *
   * @typedef `schema(schema: Obj): ChainAble`
   *
   * @example
   *
   *    chain
   *      .methods()
   *      .define()
   *      .getSet()
   *      .onInvalid((error, arg, instance) => console.log(error))
   *      .schema({
   *        id: '?number',
   *        users: '?object|array',
   *        topic: '?string[]',
   *        roles: '?array',
   *        creator: {
   *          name: 'string',
   *          email: 'email',
   *          id: 'uuid',
   *        },
   *        created_at: 'date',
   *        updated_at: 'date|date[]',
   *        summary: 'string',
   *      })
   *
   *    //--- valid
   *    chain.created_at = new Date()
   *    chain.setCreatedAt(new Date())
   *
   *    isDate(chain.created_at) === true
   *
   *    //--- nestable validation 👍
   *    chain.merge({creator: {name: 'string'}})
   *
   *    //--- invalid
   *    chain.updated_at = false
   *
   */
  schema(obj) {
    return schemaMethod.call(this, obj)
  }

  /**
   * @desc set the actual method, also need .context - use .parent
   * @memberOf MethodChain
   * @since 4.0.0
   *
   * @param  {any} [returnValue=undefined] returned at the end of the function for ease of use
   * @return {MethodChain} @chainable
   *
   * @TODO if passing in a name that already exists, operations are decorations... (partially done)
   * @see https://github.com/iluwatar/java-design-patterns/tree/master/step-builder
   *
   * @example
   *
   *    var obj = {}
   *    const one = new MethodChain(obj).methods('eh').getSet().build(1)
   *    //=> 1
   *
   *    typeof obj.getEh
   *    //=> 'function'
   *
   */
  build(returnValue) {
    const parent = this.parent
    const names = toarr(this.get('names'))
    const shouldTapName = this.get('camel')

    for (let name = 0; name < names.length; name++) {
      this._build(shouldTapName ? camelCase(names[name]) : names[name], parent)
    }

    // timer.stop('methodchain').log('methodchain').start('gc')

    // remove refs to unused
    this.clear()
    delete this.parent
    markForGarbageCollection(this)

    // very fast - timer & ensuring props are cleaned
    // timer.stop('gc').log('gc')
    // require('fliplog').quick(this)

    return isUndefined(returnValue) ? parent : returnValue
  }

  /**
   * @memberOf MethodChain
   *
   * @since 4.0.0
   * @protected
   * @param {Primitive} name method name
   * @param {Object} parent being decorated
   * @param {Object} built method being built
   * @return {void}
   *
   * @TODO  optimize the size of this
   *        with some bitwise operators
   *        hashing the things that have been defaulted
   *        also could be plugin
   *
   * @example
   *
   *  ._defaults('', {}, {})
   *
   *
   * @example
   *
   *   let methodFactories
   *
   *   ### `onSet`
   *
   *   > defaults to `this.set(key, value)`
   *
   *   ```ts
   *   public onSet(fn: Fn): MethodChain
   *   ```
   *
   *   ### `onCall`
   *
   *   > defaults to .onSet ^
   *
   *   ```ts
   *   public onCall(fn: Fn): MethodChain
   *   ```
   *
   *   ### `onGet`
   *
   *   > defaults to `this.get(key)`
   *
   *   ```ts
   *   public onGet(fn: Fn): MethodChain
   *   ```
   *
   */
  _defaults(name, parent, built) {
    // defaults
    const defaultOnSet = arg => parent.set(name, arg)
    const defaultOnGet = () => parent.get(name)

    // so we know if we defaulted them
    defaultOnSet[DEFAULTED_KEY] = true
    defaultOnGet[DEFAULTED_KEY] = true

    // when we've[DEFAULTED_KEY] already for another method,
    // we need a new function,
    // else the name will be scoped incorrectly
    const {onCall, onSet, onGet} = built
    if (!onGet || onGet[DEFAULTED_KEY]) {
      this.onGet(defaultOnGet)
    }
    if (!onCall || onCall[DEFAULTED_KEY]) {
      this.onCall(defaultOnSet)
    }
    if (!onSet || onSet[DEFAULTED_KEY]) {
      this.onSet(defaultOnSet)
    }
  }

  /**
   * @protected
   * @since 4.0.0-alpha.1
   * @memberOf MethodChain
   *
   * @param {Primitive} name
   * @param {Object} parent
   * @return {void}
   *
   * @TODO allow config of method var in plugins since it is scoped...
   * @TODO add to .meta(shorthands)
   * @TODO reduce complexity if perf allows
   * @NOTE scoping here adding default functions have to rescope arguments
   */
  _build(name, parent) {
    let method
    let existing
    const entries = () => this.entries()

    // could ternary `let method =` here
    if (hasOwnProperty(parent, name)) {
      existing = getDescriptor(parent, name)

      // avoid `TypeError: Cannot redefine property:`
      if (isFalse(existing.configurable)) {
        return
      }

      // use existing property, when configurable
      method = existing.value

      if (ENV_DEVELOPMENT) {
        method.decorated = true
      }

      this.onCall(method).onSet(method)
    }
    else if (parent[name]) {
      method = parent[name]

      if (ENV_DEVELOPMENT) {
        method.decorated = true
      }

      this.onCall(method).onSet(method)
    }

    // scope it once for plugins & type building, then get it again
    let built = entries()

    this._defaults(name, parent, built)

    // plugins can add methods,
    // useful as plugins/presets & decorators for multi-name building
    const instancePlugins = built.plugins
    if (instancePlugins) {
      for (let plugin = 0; plugin < instancePlugins.length; plugin++) {
        built = entries()
        instancePlugins[plugin].call(this, name, parent, built)
      }
    }

    // after last plugin is finished, or defaults
    built = entries()

    // wrap in encasing when we have a validator or .encase
    // @NOTE: validator plugin was here, moved into a plugin
    if (built.encase) {
      const encased = encasePlugin.call(this, name, parent, built)(method)

      if (ENV_DEVELOPMENT) {
        encased.encased = method
      }

      this.onCall(encased).onSet(encased)
      method = encased
      built = entries()
    }

    // not destructured for better variable names
    const shouldAddGetterSetter = built.getSet
    const shouldDefineGetSet = built.define
    const defaultValue = built.default

    // can only have `call` or `get/set`...
    const {
      onGet,
      onSet,
      onCall,
      initial,
      bind,
      returns,
      callReturns,
      alias,
    } = built

    // default method, if we do not have one already
    if (!method) {
      method = (arg = defaultValue) => onCall.call(parent, arg)

      if (ENV_DEVELOPMENT) {
        method.created = true
      }
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

        return isTrue(callReturns)
          ? returns.apply(parent, [result].concat(args))
          : returns
      }
    }

    if (!isUndefined(initial)) {
      parent.set(name, initial)
    }

    // --------------- stripped -----------

    /**
     * !!!!! @TODO put in `plugins.post.call`
     * !!!!! @TODO ensure unique name
     *
     * can add .meta on them though for re-decorating
     * -> but this has issue with .getset so needs to be on .meta[name]
     */

    /* istanbul ignore next: dev */
    if (ENV_DEVELOPMENT) {
      ObjectDefine(onGet, 'name', {
        value: camelCase(`${onGet.name}+get-${name}`),
      })
      ObjectDefine(onSet, 'name', {
        value: camelCase(`${onSet.name}+set-${name}`),
      })
      ObjectDefine(onCall, 'name', {
        value: camelCase(`${onCall.name}+call-${name}`),
      })
      ObjectDefine(method, 'name', {value: camelCase(`${name}`)})

      if (built.type) method.type = built.type
      if (initial) method.initial = initial
      if (bind) method.bound = bind
      if (returns) method.returns = returns
      if (alias) method.alias = alias
      if (callReturns) method.callReturns = callReturns
      if (onGet) method._get = onGet
      if (onSet) method._set = onSet
      // eslint-disable-next-line
      if (onCall != onCall) method._call = onCall
    }

    /* istanbul ignore next: dev */
    if (ENV_DEBUG) {
      console.log({
        name,
        defaultValue,
        initial,
        returns,
        onGet,
        onSet,
        method: method.toString(),
      })
    }

    // ----------------- ;stripped ------------

    // @TODO WOULD ALL BE METHOD.POST
    // --- could be a method too ---
    const getterSetter = {get: onGet, set: onSet}
    let descriptor = shouldDefineGetSet ? getterSetter : {value: method}
    if (existing) descriptor = ObjectAssign(existing, descriptor)

    // [TypeError: Invalid property descriptor.
    // Cannot both specify accessors and a value or writable attribute, #<Object>]
    if (descriptor.value && descriptor.get) {
      delete descriptor.value
    }
    if (!isUndefined(descriptor.writable)) {
      delete descriptor.writable
    }

    const target = this.get('target') || parent

    ObjectDefine(target, name, descriptor)

    if (shouldAddGetterSetter) {
      if (target.meta) target.meta(SHORTHANDS_KEY, name, onSet)
      getSetFactory(target, name, getterSetter)
    }

    aliasFactory(name, target, alias)

    // if (built.metadata) {
    //   target.meta(SHORTHANDS_KEY, name, set)
    // }
    // require('fliplog')
    //   .bold('decorate')
    //   .data({
    //     // t: this,
    //     descriptor,
    //     shouldDefineGetSet,
    //     method,
    //     str: method.toString(),
    //     // target,
    //     name,
    //   })
    //   .echo()
  }

  // ---

  /**
   * @desc add methods to the parent for easier chaining
   * @alias extendParent
   * @memberOf MethodChain
   *
   * @since 4.0.0-beta.1 <- moved to plugin
   * @since 4.0.0 <- moved from Extend
   * @since 1.0.0
   *
   * @param {Object} [parentToDecorate=undefined] decorate a specific parent shorthand
   * @return {ChainedMap} @chainable
   *
   * @see plugins/decorate
   * @see ChainedMap.parent
   *
   * @example
   *
   *  var obj = {}
   *  new MethodChain({}).name('eh').decorate(obj).build()
   *  typeof obj.eh
   *  //=> 'function'
   *
   * @example
   *
   *     class Decorator extends Chain {
   *       constructor(parent) {
   *         super(parent)
   *         this.methods(['easy']).decorate(parent).build()
   *         this.methods('advanced')
   *           .onCall(this.advanced.bind(this))
   *           .decorate(parent)
   *           .build()
   *       }
   *       advanced(arg) {
   *         this.set('advanced', arg)
   *         return this.parent
   *       }
   *       easy(arg) {
   *         this.parent.set('easy-peasy', arg)
   *       }
   *     }
   *
   *     class Master extends Chain {
   *       constructor(parent) {
   *         super(parent)
   *         this.eh = new Decorator(this)
   *       }
   *     }
   *
   *     const master = new Master()
   *
   *     master.get('easy-peasy')
   *     //=> true
   *
   *     master.eh.get('advanced')
   *     //=> 'a+'
   *
   * @example
   *
   *    +chain.method('ehOh').decorate(null)
   *    //=> @throws Error('must provide parent argument')
   *
   */
  decorate(parentToDecorate) {
    /* istanbul ignore next: devs */
    if (ENV_DEVELOPMENT) {
      if (!(parentToDecorate || this.parent.parent)) {
        throw new Error('must provide parent argument')
      }
    }
    return decoratePlugin.call(this, parentToDecorate || this.parent.parent)
  }

  /**
   * @desc adds a plugin to increment the value on every call
   *        @modifies this.initial
   *        @modifies this.onCall
   *
   * @memberOf MethodChain
   * @version 4.0.0-beta.1 <- moved to plugin
   * @version 4.0.0 <- renamed from .extendIncrement
   * @since 0.4.0
   *
   * @return {MethodChain} @chainable
   *
   * @see plugins/autoIncrement
   *
   * @example
   *
   *     chain.methods(['index']).autoIncrement().build().index().index(+1).index()
   *     chain.get('index')
   *     //=> 3
   *
   */
  autoIncrement() {
    return this.plugin(autoIncrementPlugin)
  }
}

/**
 * @desc add methodFactories easily
 * @static
 * @since 4.0.0-beta.2
 *
 * @param {Object} methodFactory factories to add
 * @return {void}
 *
 * @example
 *
 *   function autoGetSet(name, parent) {
 *     const auto = arg =>
 *       (isUndefined(arg) ? parent.get(name) : parent.set(name, arg))
 *
 *     //so we know if we defaulted them
 *     auto.autoGetSet = true
 *     return this.onSet(auto).onGet(auto).onCall(auto)
 *   }
 *   MethodChain.addPlugin({autoGetSet})
 *
 *
 *   const chain = new Chain()
 *   chain.methods('eh').autoGetSet().build()
 *
 *   chain.eh(1)
 *   //=> chain
 *   chain.eh()
 *   //=> 1 *
 *
 */
MethodChain.add = function addMethodFactories(methodFactory) {
  ObjectAssign(methodFactories, methodFactory)
}
methodFactories = MethodChain.add

module.exports = MethodChain
