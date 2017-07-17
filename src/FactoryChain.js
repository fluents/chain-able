const ENV_DEBUG = require('./deps/env/debug')
const ChainedMap = require('./ChainedMap')
const isUndefined = require('./deps/is/undefined')
const isTrue = require('./deps/is/true')

const ON_CHAIN_UP_DOWN_KEY = 'onChainUpDown'
const ON_DONE_KEY = 'onDone'

/**
 * @extends {ChainedMapBase}
 * @inheritdoc
 * @prop {Object} data
 * @prop {Set} _calls
 * @type {Map}
 *
 * {@link http://robdodson.me/javascript-design-patterns-factory/ abstract-factory-pattern}
 *
 * @member FactoryChain
 * @category Chainable
 * @tests FactoryChain
 * @types FactoryChain
 */
class FactoryChain extends ChainedMap {
  constructor(parent) {
    super(parent)

    this.data = {}
    this._calls = new Set()

    this.factory()
      .extend(['optional', 'required', ON_CHAIN_UP_DOWN_KEY, ON_DONE_KEY])
      .set('len', 0)
  }

  /**
   * @desc chain back up to parent for any of these
   * @since 2.0.0
   *
   * @param  {Array<string>} methods methods to trigger `onChainUpDown` on
   * @return {FactoryChain} @chainable
   *
   * @memberOf FactoryChain
   * @emits onChainUpDown
   * @TODO should have a debug log for this
   *
   * @example
   *
   *    const {Chain, FactoryChain, ChainedSet} = require('chain-able')
   *
   *    class Things extends Chain {
   *      constructor(parent) {
   *        super(parent)
   *        this.people = new ChainedSet(this)
   *      }
   *      person() {
   *        const person = new FactoryChain(this)
   *        person
   *          .props(['name', 'age', 'email'])
   *          .onChainUpDown(this.person)
   *          .chainUpDowns(['person'])
   *          .onDone(personChain => {
   *            this.people.add(personChain)
   *            return this
   *          })
   *
   *        return person
   *      }
   *    }
   *
   *    const things = new Things()
   *    const returned = things
   *        .person()
   *          .name('sue')
   *        .person()
   *          .age(100)
   *          .name('john')
   *          .email('@')
   *
   */
  chainUpDowns(methods) {
    methods.forEach(m => {
      this[m] = () => {
        // @@debugger
        this.end()
        return this.parent[m].apply(this.parent, arguments)
      }
    })
    return this
  }

  /**
   * @desc adds an *array* of properties, using FactoryChain.prop
   * @since 2.0.0
   *
   * @memberOf FactoryChain
   * @param  {Array<string>} names property names
   * @return {FactoryChain} @chainable
   *
   * @see FactoryChain.prop
   *
   * @example
   *
   *    person.props(['name', 'age', 'email'])
   *
   *    typeof person.name
   *    //=> 'function'
   *
   *    person.name().age()
   *    //=> FactoryChain
   *
   *    person.name().age().email()
   *    //=> ParentChain
   *
   *    // person.name().age().person()
   *    //=> FactoryChain
   *    //^ because .person is `chainUpDowns`
   *    //^ so it finishes the old chain, and begins a new one
   *
   */
  props(names) {
    names.forEach(name => this.prop(name))
    return this
  }

  /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
  /**
   * @desc add property that are counted towards the call count for easy auto-ending chaining
   * @since 2.0.0
   *
   * @param  {Primitive} name property name
   * @param  {Function | null | undefined} [onCall=undefined] callback for the property
   * @return {FactoryChain} @chainable
   *
   * @memberOf FactoryChain
   *
   * @example
   *
   *    person
   *      //.prop also accepts an optional callback,
   *      //for nestable nestable chains
   *      .prop('name')
   *      .prop('age')
   *      .prop('email')
   *
   */
  prop(name, onCall) {
    this.tap('len', len => len + 1)

    // so if we call a property twice,
    // chain back up to parent,
    // add a new chain
    if (!isUndefined(this[name]) && isTrue(this.has(ON_CHAIN_UP_DOWN_KEY))) {
      this.end()
      return this.get(ON_CHAIN_UP_DOWN_KEY)()[name](onCall)
    }

    // @TODO need to spread as needed
    this[name] = args => {
      // @@debugger
      /* istanbul ignore next: devs */
      if (ENV_DEBUG) {
        console.log(
          `called ${name} with:`,
          args,
          `calls length is now:`,
          this._calls.size
        )
      }
      if (isUndefined(onCall)) this.data[name] = args
      else onCall(args)

      this._calls.add(name)

      // aka magicReturn
      return this._calls.size === this.get('len') ? this.end() : this
    }
    return this
  }

  /**
   * @desc access data being built when stepping through a factory
   * @since 2.0.0
   *
   * @param  {Primitive} [prop=undefined] key of the data, or returns all data
   * @return {any} this.data
   *
   * @memberOf FactoryChain
   *
   * @example
   *
   *    .data['prop'] = 'eh'
   *    .getData('prop')
   *    //=> 'eh'
   *    .getData()
   *    //=> {prop: 'eh'}
   *
   * @example
   *
   *    const person = new FactoryChain(this)
   *    const age = person.props(['name', 'age']).age(10).getData('age')
   *    expect(age).toBe(10)
   *
   */
  getData(prop) {
    /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
    return isUndefined(prop) ? this.data : this.data[prop]
  }

  /* istanbul ignore next: sourcemaps trigger istanbul here incorrectly */
  /**
   * @desc creates/add the `.end` method,
   *       which checks how many methods have been called,
   *       and decides whether to return parent or not
   *       @modifies this.end
   *
   * @since 2.0.0
   *
   * @param  {Object} [obj={}] optional object to use for creating .end
   * @return {FactoryChain} @chainable
   *
   * @memberOf FactoryChain
   */
  factory(obj) {
    this.end = arg => {
      // @@debugger
      let ended

      if (obj && !isUndefined(obj.end)) ended = obj.end
      else if (this.has(ON_DONE_KEY)) ended = this.get(ON_DONE_KEY)

      if (ended) ended = ended.call(this, this.data, this.parent, this, arg)

      if (ended && ended !== this) return ended
      else return this.parent
    }

    return this
  }
}

module.exports = FactoryChain
