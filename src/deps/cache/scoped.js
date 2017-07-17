// @TODO could also just have files for .set .has .get .delete .clear...

// @TODO:
// just pass in as first param!
// var SET = 1
// var GET = 2
// var HAS = 4
// var DELETE = 8

// const isSet = require('../is/set')
// const ArrayFrom = require('../util/from')
// const isUndefined = require('../is/undefined')
// const concat = require('../concat')
// const toarr = require('../to-arr')
//
// const store = {}
//
// const ensureInitialized = (name, value, mapOrSet) => {
//   if (isUndefined(store[name])) store[name] = new Map()
// }
//
// const has = (key, prop) => {
//   return isUndefined(prop) ? !!store[key].size : store[key].has(prop)
// }
//
// const get = (key, prop, fallback = []) => {
//   return has(key, prop) ? store[key].get(prop) : fallback
// }
//
// const set = (key, prop, value) => {
//   const storage = store[key]
//   // when it's a set, we have no `prop`, we just have .add
//   // so `prop = value` && `value = undefined`
//   if (isSet(storage)) {
//     storage.add(prop)
//   }
//   else {
//     const existing = storage.get(prop)
//     const val = concat(existing, value)
//     storage.set(prop, val)
//   }
// }
// const cache = (key, prop, value) => {
//   /* prettier-ignore */
//   if (isUndefined(value)) {
//     // when we want to just access the property, return an array
//     // @example `.meta('transformers')`
//     if (isUndefined(prop)) {
//       if (isUndefined(store[key])) return []
//       else return store[key].size === 0 ? [] : ArrayFrom(store[key])
//     }
//     // we have `key, prop`
//     //
//     // 1: should `prop` be a value, (isSet?)
//     else if (isInKeyMapAsSet(key)) {
//       ensureInitialized(key)
//       set(key, prop)
//     }
//     // 2: prop is a key, we want to return the [..] for that specific property
//     // @example `.meta('transformers', 'eh')`
//     else if (isUndefined(store[key])) return []
//     else return toarr(get(key, prop))
//   }
//   // we have `key, prop, value`
//   else {
//     ensureInitialized(key)
//     // we have a value, let's add it
//     set(key, prop, value)
//   }
// }
//
// const scoped = cache('segments', {default: []})
//
// // has/get
// if (scoped('key')) {
//   // todo eh
// }
//
// // set
// scoped('key', 'value')
