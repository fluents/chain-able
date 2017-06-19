const ChainedSet = require('./ChainedSet')
const compose = require('./compose')

const Composed = compose({extend: true})

/**
 * @inheritdoc
 * @prop {Object} data
 * @prop {Set} _calls
 * @type {Map}
 */
class FactoryChain extends Composed {
  constructor(parent) {
    super(parent)

    this.data = {}
    this._calls = new ChainedSet(this)

    this.factory()
      .extend(['optional', 'required', 'chainUpDown', 'onDone'])
      .set('len', 0)
  }

  /**
   * @TODO should have a debug log for this
   * @desc chain back up to parent for any of these
   * @param  {Array<string>} methods
   * @return {FactoryChain} @chainable
   */
  chainUpDowns(methods) {
    methods.forEach(m => {
      this[m] = (arg1, arg2, arg3, arg4, arg5) => {
        this.end()
        return this.parent[m](arg1, arg2, arg3, arg4, arg5)
      }
    })
    return this
  }

  /**
   * @param  {Array<string>} names
   * @return {FactoryChain} @chainable
   */
  props(names) {
    names.forEach(name => this.prop(name))
    return this
  }

  /**
   * @param  {Primitive} name
   * @param  {Function | null | undefined} [cb=undefined]
   * @return {FactoryChain} @chainable
   */
  prop(name, cb) {
    this.tap('len', len => len + 1)

    // console.log({name}, this.get('len'))

    // so if we call a property twice,
    // chain back up to parent,
    // add a new chain
    if (this[name] !== undefined && this.has('chainUpDown') === true) {
      this.end()
      return this.get('chainUpDown')()[name](cb)
    }

    // @TODO need to spread as needed
    this[name] = args => {
      if (cb === undefined) this.data[name] = args
      else cb(args)

      this._calls.add(name)

      // aka magicReturn
      return this._calls.length === this.get('len') ? this.end() : this
    }
    return this
  }

  /**
   * @param  {any} [prop=undefined] key of the data, or returns all data
   * @return {any}
   */
  getData(prop) {
    return prop === undefined ? this.data : this.data[prop]
  }

  factory(obj = {}) {
    this.end = arg => {
      if (obj.end !== undefined) {
        const ended = obj.end(this.data, this.parent, this, arg)
        if (ended && ended !== this) return ended
      }
      else if (this.has('onDone')) {
        const ended = this.get('onDone')(this.data, this.parent, this, arg)
        if (ended && ended !== this) return ended
      }

      return this.parent
    }

    return this
  }
}

module.exports = FactoryChain
