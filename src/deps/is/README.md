https://tc39.github.io/ecma262/#sec-well-known-intrinsic-objects
https://github.com/lodash/lodash/blob/master/.internal/isPrototype.js
https://tc39.github.io/ecma262/#sec-property-descriptor-specification-type
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger

---

https://github.com/infernojs/inferno/blob/master/packages/inferno-shared/src/index.ts
https://www.npmjs.com/package/kind-of

https://github.com/lodash/lodash/blob/master/.internal/baseGetTag.js
https://github.com/lodash/lodash/blob/master/.internal/getTag.js
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
https://github.com/canjs/can-util/tree/master/js

https://github.com/bitovi/guide-automation
https://github.com/bitovi/checklist
https://github.com/bitovi/u
https://github.com/bitovi/steal-tools-builder
https://github.com/addyosmani/es6-tools

https://github.com/madrobby/zepto
http://code.jquery.com/jquery-3.2.1.js
https://github.com/sstephenson/prototype

https://tc39.github.io/ecma262/#sec-object.isfrozen

- I've been improving so much code, reading every library that's any good
- next to every single one of them has some "isX" util
- @example `isFunction`, `isNull`, `isError`,
- they get really hot, and they are really small, so they get inlined blazing fast and it's dope
- **...** but if you have say 3 libraries, and each one has their own `isFunction` or `isNull`, that defeats the purpose! need a build function & compat checker to replace & merge as needed for best perf in apps not just libs
