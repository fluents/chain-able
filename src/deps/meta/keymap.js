// const isUndefined = require('../is/undefined')
// const isString = require('../is/string')
//
// const keys = [
//   /* --- chain --- */
//   /*  0  */ 'parent',
//   /*  1  */ 'store',
//   /*  2  */ 'meta',
//   /*  3  */ 'className',
//   /* --- meta --- */
//   /*  4  */ 'observers',
//   /*  5  */ 'transformers',
//   /*  6  */ 'decorated',
//   /*  7  */ 'shorthands',
//   /* --- types --- */
//   /*  8  */ 'undefined',
//   /*  9  */ 'null',
//   /*  10 */ 'string',
//   /*  11 */ 'number',
//   /*  12 */ 'function',
//   /*  13 */ 'array',
//   /*  14 */ 'boolean',
//   /* --- next --- */
//   '_', // ?
// ]
//
// /* prettier-ignore */
// /**
//  * @param  {number} [index=Number]
//  * @param  {undefined | Object | Array} [obj=undefined]
//  * @param  {undefined | any} [val=undefined]
//  * @return {string | number | any}
//  */
// function access(index = -Infinity, obj = undefined, val = undefined) {
//   if (isString(index)) index = keys.indexOf(index)
//   // now map this to the arrays...
//   let key = keys[index]
//   // just name
//   if (isUndefined(obj)) return key
//   // get prop
//   else if (isUndefined(val)) return obj[key]
//   // set prop
//   else if (!isUndefined(val)) return (obj[key] = val)
// }
//
// const enums = require('./enums')
// module.exports = Object.assign(access, enums, {access})

// const eh = {parent: 100}
// const timer = require('fliplog').fliptime()
// timer.start('access')
//
// let a = []
// let i = 0
// while (i < 10000000) {
//   a.push(access(0, eh, 'eh'))
//   eh.parent = 'eh'
//   a.push(eh.parent)
//   i++
// }
//
// timer.stop('access').log('access')
