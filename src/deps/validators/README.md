problem:
  - naming and file count for validator + schema was becoming bad
  - too many 'factories'
  - logic for core was in deps where it should not be
  - method chain was too big
  - file size was too big
  - external configuration was not so easy
solution:
  - move all domain logic related to methodchain out of deps
  - plugins for method chain
  -

```js
// @NOTE isNull & isUndefined to lowercase is no good...
//       one way to do it, but not as good
// const TYPES = ['null', 'undefined']
// const REPLACE = ['nill', 'undef']
// .replace(TYPES[0], REPLACE[0])
// .replace(TYPES[1], REPLACE[1])
//
// @NOTE: removed this in favor of escaping the key
//        plus this 2x the map size
//
// const ObjectKeys = require('../util/keys')
// const validationKeys = ObjectKeys(is)
// for (let i = 0; i < validationKeys.length; i++) {
//   const key = validationKeys[i]
//   const transformedKey = key.toLowerCase().replace('is', '')
//   is[transformedKey] = is[key]
// }

// s.charAt(0).toUpperCase()
```
