# related
- https://github.com/lodash/lodash/blob/master/.internal/stringToPath.js
- https://github.com/mariocasciaro/object-path/blob/master/index.js
- https://github.com/sindresorhus/dot-prop/blob/master/index.js
- https://github.com/sindresorhus/is-obj/blob/master/index.js

# segments:
```js
// same thing, but while loop is 3x faster
// function regexed(path) {
//   return path
//     .replace(/\\./g, '__e46__')
//     .replace(/\./g, '__46__')
//     .replace(/(__e46__)/g, '.')
//     .split(/__46__/)
//
//   /* also the same */
//   return path
//     .replace(/\\./g, '__e46__')
//     .split('.')
//     .map(l => l.replace('__e46__', '.'))
// }
```
