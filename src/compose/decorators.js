// @see https://github.com/mobxjs/mobx/blob/master/src/utils/decorators.ts
const MethodChain = require('../MethodChain')
const compose = require('../compose')

const chainMethods = parent => new MethodChain(parent)

const decorator = instructions => target => {
  const extension = class ChainableDecoration extends compose(target) {}
  // log.verbose(100).data(extension).echo()
  const decorated = instructions(chainMethods(extension.prototype))
  return decorated.build(extension)
}

// ---- @TODO ---
// can do these 3 without extending constructor, just by using proto
// ---        ---
const observe = (keys, fn) => target => {
  return class ChainableObserverDecorator extends target {
    constructor(parent) {
      super(parent)
      return this.observe(keys, fn.bind(this))
    }
  }
}
const transform = (keys, value) => target => {
  return class ChainableTransformDecorator extends target {
    constructor(parent) {
      super(parent)
      return this.transform(keys, value.bind(this))
    }
  }
}
const remap = (from, to) => target => {
  return class ChainableTransformDecorator extends target {
    constructor(parent) {
      super(parent)
      return this.remap(from, to)
    }
  }
}
// ----

// for experimenting
// const onValid = (key, arg) => {
//   log.bold('valid :-)').data({arg, key}).echo()
//   console.log('\n')
// }
// const onInvalid = (error, arg, instance) => {
//   log.red('invalid').data({error, arg, instance}).exit()
//   console.log('\n')
// }

// @NOTE: need to manage onInvalid onValid... could check for methods :3
/* prettier-ignore */
const schema = obj => target => decorator(builder =>
  builder
    .onValid(target.prototype.onValid)
    .onInvalid(target.prototype.onInvalid)
    .schema(obj)
)(target)

/* prettier-ignore */
const schema2 = obj => target =>  {
  return class ChainableSchemaDecoration extends target {
    constructor(parent) {
      super(parent)
      chainMethods(this)
        .onValid(this.onValid)
        .onInvalid(this.onInvalid)
        .schema(obj)
      return this
    }
  }
}

exports.chainMethods = chainMethods
exports.methodDecorator = decorator
exports.decorator = decorator
exports.observe = observe
exports.transform = transform
exports.remap = remap
exports.schema = schema
exports.schema2 = schema2
exports.compose = compose
