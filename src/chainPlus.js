/** @ignore 🚧 wip */

const ignored = require('./deps/meta/ignored')
const getMeta = require('./deps/meta/meta')
const Chain = require('./compose/index')
const throttle = require('./deps/_/throttle')
const isFunction = require('./deps/is/function')
const isString = require('./deps/is/string')
const curry = require('./deps/fp/curry')
const bind = require('./deps/fp/bind')
const toArr = require('./deps/to-arr')
const camelCase = require('./deps/string/camelCase')
const eq = require('./deps/traversers/eq')
const isEmpty = require('./deps/is/empty')
const escapeDot = require('./deps/dot/escape')
const not = require('./deps/conditional/not')
const ObjectKeys = require('./deps/util/keys')

module.exports = (chain) => {
  // could also do `before` & `after` diffs for keys when instantiating
  // chain.sponge = () => {
  //   mapKeys(chain, key => {
  //     if (!ignored(key)) return
  //
  //     // larger... faster... (than inlining 1 if statement...)
  //     const value = chain[key]
  //     if (isFunction(value)) return
  //
  //     // what if conflict?
  //     chain.set(key, value)
  //   })
  // }
  chain.addPooling = () => {
    // addPoolingTo(Chain)
    chain.release = () => {
      // Chain.release(chain)
      chain.clear(true)
      chain.meta = undefined
      chain.meta = getMeta(chain)
    }
    chain.init = chain.getPooled = parent => Chain.getPooled(parent)
  }

  chain._ifElse = (condition, fn = null) => {
    const ifElse = {}
    ifElse.then = cb => {
      ifElse._then = cb
      return (condition.call(chain) ? cb.call(chain) : ifElse)
    }
    ifElse.else = cb => {
      ifElse._else = cb
      return (!condition.call(chain) ? cb.call(chain) : ifElse)
    }
    ifElse.elseIf = chain.ifElse
    return ifElse
  }

  // THIS WAY, THIS IS LIKE .when which is called every change
  chain.ifElse = (condition, fn = null) => {
    const ifElse = chain._ifElse(condition)
    // chain.observe('*', debounce(() => {
    //   if (ifElse._then) ifElse._then.call(chain)
    //   if (ifElse._else) ifElse._else.call(chain)
    // }), 10)
    chain.observe('*', throttle(() => {
      if (ifElse._then) ifElse._then.call(chain)
      if (ifElse._else) ifElse._else.call(chain)
    }), 5)

    // chain.observe('*', changed => {
    //   require('fliplog').data({changed}).echo()
    //   if (ifElse._then) ifElse._then.call(chain)
    //   if (ifElse._else) ifElse._else.call(chain)
    // })
    return ifElse
  }

  const _eq = curry(2, eq)
  // @TODO when passing `propIs` and using a non-function, use `propeq`
  // chain.prop = curry(2, chain.propEq)
  chain.propEq = (prop, value) => eq(chain.get(prop), value)
  chain.propIs = (prop, fn) => {
    if (isString(fn)) {
      fn = _eq(fn)
    }
    if (!isFunction(fn)) {
      // require('fliplog').quick({fn})
    }
    return fn(chain.get(prop))
  }

  // chain.propIsNot = not(chain.propIs)
  chain.freezeProp = prop => {
    const frozen = chain.get(prop)
    chain.transform(prop, data => frozen)
  }
  chain.propIsNot = (prop, fn) => not(chain.propIs(prop, fn))
  chain.propEq = curry(2, chain.propEq)
  chain.propIs = curry(2, chain.propIs)
  chain.propIsNot = curry(2, chain.propIsNot)
  chain.transform = curry(2, bind(chain.transform, chain))
  chain.observe = curry(2, bind(chain.observe, chain))
  chain.set = bind(chain.set, chain)

  // @NOTE could curry 3, but that forces an else... bah
  chain.when = curry(2, chain.when)

  const _transforms = (prop, transforms) =>
    transforms.forEach(transform => chain.transform(prop, transform))
  chain.transforms = curry(2, _transforms)

  // @TODO when prefix, could do so much like
  // `{ehView} = chain` for prefix
  // `{viewEh} = chain` for postfix
  //
  // const {get, set} = chain.boundMethods('get,set')
  // bindMethods, scopedMethods
  chain.boundMethods = (methods, prefix = '') => {
    const bound = {}
    const bounds = toArr(methods).forEach(method =>
      bound[method] = bind(chain[method], chain)
    )
    return bound
  }

  // ignore transform and observe
  chain.setSilent = curry(2, (key, prop) => {
    chain.store.set(key, prop)
    return chain
  })

  // partial, `view`
  chain.view = prop => () => chain.get(prop)
  chain.lense = prop => {
    // @TODO allow using every single `is` as property of the `is` returned
    //
    // [x] also return a destructurable obj with camel like
    // [prop] + '-View'
    const obj = {
      escapeDot: () => {
        prop = escapeDot(prop)
        return chain
      },
      has: () => chain.has(prop),
      get: () => chain.get(prop),
      view: chain.view(prop),
      eq: chain.propEq(prop),
      is: chain.propIs(prop),
      not: chain.propIsNot(prop),
      freeze: () => chain.freezeProp(prop),
      // update, adjust
      // set: chain.set(prop),
      set: val => chain.set(prop, val),
      setSilent: val => chain.setSilent(prop, val),
      transform: chain.transform(prop),
      observe: chain.observe(prop),
      transforms: chain.transforms(prop),
    }

    // clone: true
    // obj.mapKeys()
    ObjectKeys(obj).forEach(key => {
      const destructurableKey = camelCase(key + '-' + prop)
      const destructurableReverse = camelCase(prop + '-' + key)
      obj[destructurableKey] = obj[key]
      obj[destructurableReverse] = obj[key]
    })

    return obj
  }

  chain.unobserve = observer =>
    chain.meta('observe').delete(observer)
  chain.untransform = transformer =>
    chain.meta('transform').delete(transformer)
  return chain
}
