const isFunction = require('../deps/is/function')

module.exports = function(methods, name) {
  const obj = methods[name]

  if (isFunction(obj)) {
    return () => {
      // @TODO: IS THIS THE BEST DEFAULT?!
      this.define(false)
      this.onCall(obj)
      // .onSet(obj).onGet(obj)
    }
  }
  else {
    return () => {
      this.from(obj)
      // @NOTE: this is reserved
      if (obj.set) this.onSet(obj.set)
      if (obj.get) this.onGet(obj.get)
      if (obj.call) this.onCall(obj.call)
      if (obj.set && obj.get) {
        this.define().getSet()
      }
    }
  }
}
