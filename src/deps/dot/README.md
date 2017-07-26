# related
- https://github.com/lodash/lodash/blob/master/.internal/stringToPath.js
- https://github.com/mariocasciaro/object-path/blob/master/index.js
- https://github.com/sindresorhus/dot-prop/blob/master/index.js
- https://github.com/sindresorhus/is-obj/blob/master/index.js
- https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/misc/getByPath.js
- http://pothibo.com/2013/7/memoizations-accessories-private-variable-in-javascript
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors
- https://gist.github.com/keeto/273490
- http://knockoutjs.com/documentation/custom-bindings.html
- http://javascriptplayground.com/blog/2013/12/es5-getters-setters/
- http://batmanjs.org/docs/accessors.html
- http://ejohn.org/blog/javascript-getters-and-setters/
- https://github.com/tvcutsem/harmony-reflect
https://github.com/timjansen/minified.js/blob/master/src/minified-generated-full-src.js#L503

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
