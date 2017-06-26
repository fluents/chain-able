import * as chain from 'chain-able'

chain.methods() // $ExpectType MethodChain

// builtWithToPrimative
;+chain
  .method('eh_oh')
  .default('...')
  .alias(['eh'])
  .camelCase()
  .define()
  .getSet()
  .onInvalid((e, arg, instance) => console.error(e))
  .onValid((arg, instance) => console.log('valid'))
  .type('?string[]')
  .returns(chain) // $ExpectType number

chain.setEhOh // $ExpectType Function
chain.getEhOh // $ExpectType Function

// ...
chain.get('ehOh') // $ExpectType string

const prop = Object.getOwnPropertyDescriptor
prop(chain, 'ehOh').get // $ExpectType Function
prop(chain, 'ehOh').set // $ExpectType Function
prop(chain, 'eh') === prop(chain, 'ehOh') // $ExpectType boolean

// throws?
// chain.setEhOh(false)

chain.setEhOh('str').setEhOh(['strs']) // $ExpectType Chain

chain.length // $ExpectType number

// expect context & scope?
chain.method('index').bind().autoIncrement().index(+1).get('index') // $ExpectType number

// true
chain.eq({}, {}) // $ExpectType boolean
chain.eq([], []) // $ExpectType boolean
chain.eq([1], [1]) // $ExpectType boolean

// false
chain.eq([2], [1]) // $ExpectType boolean
chain.eq([{}], [1]) // $ExpectType boolean
chain.eq({eh: true}, {eh: 1}) // $ExpectType boolean

chain.clean({removed: undefined}) // $ExpectType Object
chain.clean({removed: null}) // $ExpectType Object
chain.clean({kept: 1}) // $ExpectType Object

// 1
chain.matcher('canada.arr.0', 'canada.*').length // $ExpectType number
// ['foo']
chain.matcher(['foo', 'bar'], ['fo*', 'ba*', '!bar']) // $ExpectType array

// 0
chain.matcher('canada', 'canada.*').length // $ExpectType number
chain.matcher(['unicorn'], ['!unicorn']).length // $ExpectType number

chain.is // $ExpectType Object
chain.validators // $ExpectType Function
chain.compose // $ExpectType Function
chain.traverse // $ExpectType Function
chain.init // $ExpectType Function
chain.camelCase // $ExpectType Function
chain.reduce // $ExpectType Function
chain.meta // $ExpectType Function
chain.toArr // $ExpectType array

chain.methods().schema({
  id: '?number',
  users: '?object|array',
  topic: '?string[]',
  roles: '?array',
  creator: {
    name: 'string',
    email: 'email',
    id: 'uuid',
  },
  created_at: 'date',
  updated_at: 'date|date[]',
  summary: 'string',
}) // $ExpectType Chain

chain.merge({}, []) // $ExpectType object
chain.merge({}, {}) // $ExpectType object
chain.merge([], []) // $ExpectType array
chain.merge({}, {}, {clone: true}) // $ExpectType object
chain.merge({empty: []}, {empty: [1]}) // $ExpectType object
chain.merge(null, {}) // $ExpectType object
chain.merge({}, null) // $ExpectType object
chain.merge(undefined, {}) // $ExpectType object
chain.merge({}, undefined) // $ExpectType object
chain.merge(true, false) // $ExpectType boolean
chain.merge(false, true) // $ExpectType boolean
chain.merge(false, true, {boolToArray: true}) // $ExpectType array
chain.merge('eh', 'eh') // $ExpectType string
chain.merge('eh', 'eh', {stringToArray: true}) // $ExpectType array

chain.toArray([]) // $ExpectType array
chain.toArray(new Map()) // $ExpectType array
chain.toArray(new Map().entries()) // $ExpectType array

chain.isString('') // $ExpectType boolean
chain.isString(0) // $ExpectType boolean

chain.isNumber(0) // $ExpectType boolean
chain.isNumber('') // $ExpectType boolean

chain.isNull(null) // $ExpectType boolean
chain.isNull(0) // $ExpectType boolean

chain.isUndefined(undefined) // $ExpectType boolean
chain.isUndefined(0) // $ExpectType boolean

chain.isFunction(function() {}) // $ExpectType boolean
chain.isFunction(class {}) // $ExpectType boolean
chain.isFunction('') // $ExpectType boolean

chain.isBoolean('') // $ExpectType boolean
chain.isBoolean(true) // $ExpectType boolean
chain.isBoolean(!1) // $ExpectType boolean

chain.isObj({}) // $ExpectType boolean
chain.isObj(function() {}) // $ExpectType boolean
chain.isObj(0) // $ExpectType boolean

chain.isError(new Error('')) // $ExpectType boolean
chain.isError(new TypeError('')) // $ExpectType boolean
chain.isError(0) // $ExpectType boolean

chain.isSet(new Set()) // $ExpectType boolean
chain.isSet(new Map()) // $ExpectType boolean
chain.isMap(new Map()) // $ExpectType boolean
chain.isMap(new Set()) // $ExpectType boolean

chain.isDate(new Date()) // $ExpectType boolean
chain.isDate('') // $ExpectType boolean

chain.isPureObj({}) // $ExpectType boolean
chain.isPureObj(function() {}) // $ExpectType boolean

chain.isReal(null) // $ExpectType boolean
chain.isReal(undefined) // $ExpectType boolean
chain.isReal(Number(undefined)) // $ExpectType boolean
chain.isReal(1) // $ExpectType boolean

chain.isSymbol(Symbol('eh')) // $ExpectType boolean
chain.isSymbol('eh') // $ExpectType boolean

chain.isTrue(true) // $ExpectType boolean
chain.isTrue(false) // $ExpectType boolean
chain.isFalse(true) // $ExpectType boolean
chain.isFalse(false) // $ExpectType boolean

chain.isMatcher('') // $ExpectType boolean
chain.isMatcher('*') // $ExpectType boolean
chain.isMatcher(new RegExp()) // $ExpectType boolean
chain.isMatcher(['']) // $ExpectType boolean
chain.isMatcher(function() {}) // $ExpectType boolean
chain.isMatcher({test() {}}) // $ExpectType boolean

chain.isObjLoose({test() {}}) // $ExpectType boolean
chain.isObjLoose(null) // $ExpectType boolean
