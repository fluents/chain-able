# validatorBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMap`
* <a href="#ChainedMap">`ChainedMap`</a>

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`
* <a href="#arithmeticTypeFactory">`arithmeticTypeFactory`</a>

<!-- /div -->

<!-- div -->

## `builder`
* <a href="#builder">`builder`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedMap`

<!-- div -->

<h3 id="ChainedMap"><a href="#ChainedMap">#</a>&nbsp;<code>ChainedMap(validators)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L8 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- moved out of the store, into scoped

#### Arguments
1. `validators` *(Object)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`

<!-- div -->

<h3 id="arithmeticTypeFactory"><a href="#arithmeticTypeFactory">#</a>&nbsp;<code>arithmeticTypeFactory(fullKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L120 "View in source") [&#x24C9;][1]



#### Since
4.0.0-alpha.1

#### Arguments
1. `fullKey` *(Matchable)*: arithmetic type key

#### Returns
*(Matchable)*: function to match with, with .inspect for easy debugging

#### Example
```js
arithmeticTypeFactory('?string')
  //=> x => !isReal(x) || isString(x)
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `builder`

<!-- div -->

<h3 id="builder"><a href="#builder">#</a>&nbsp;<code>builder(fullKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L184 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `fullKey` *(Function|Primitive|string)*: arithmetic key to the validator

#### Returns
*(Function)*: validator

#### Example
```js
// functionType
   const isString = x => typeof x === 'string'
   builder(isString)
   // => isString
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedmap "Jump back to the TOC."
