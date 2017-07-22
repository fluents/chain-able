things like some utils like `not` and such can go in here

maybe also have `lib` for lodash style things?

@TODO `none`

// @NOTE: there is no need for enum, just `|`, could use `==`
// this way we could also just do ==
//
// "enum:1,2,3"
// "enum:'1','2','3'"
// "["enum", 1, 2, 3]"
// function enumTypeFactory(fullKey) {
//   const key = 'enum:' + fullKey.join(',')
//   if (!has(key)) {
//     set(key, x => fullKey.includes(x))
//   }
//   return get(key)
// }

https://github.com/fantasyland/daggy
https://github.com/paldepind/union-type
