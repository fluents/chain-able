```js
// function getProperty(obj, name) {
//   name = name.split('.')
//   for (var i = 0; i < name.length - 1; i++) {
//     obj = obj[name[i]]
//     if (!isObj(obj)) return
//   }
//   return obj[name.pop()]
// }
// function setProperty(obj, name, value) {
//   name = name.split('.')
//   for (var i = 0; i < name.length - 1; i++) {
//     if (!isObj(obj[name[i]]) && !isUndefined(obj[name[i]]))
//       return
//     if (!obj[name[i]]) obj[name[i]] = {}
//     obj = obj[name[i]]
//   }
//   obj[name.pop()] = value
// }
```
