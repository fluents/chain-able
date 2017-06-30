# validatorBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMap`
* <a href="#ChainedMap">`ChainedMap`</a>

<!-- /div -->

<!-- div -->

## `addTypes`
* <a href="#addTypes">`addTypes`</a>

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`
* <a href="#arithmeticTypeFactory">`arithmeticTypeFactory`</a>

<!-- /div -->

<!-- div -->

## `builder`
* <a href="#builder">`builder`</a>

<!-- /div -->

<!-- div -->

## `schema.prototype`
* <a href="#schema-prototype-typeListFactory">`schema.prototype.typeListFactory`</a>

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

## `addTypes`

<!-- div -->

<h3 id="addTypes"><a href="#addTypes">#</a>&nbsp;<code>addTypes(types)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L75 "View in source") [&#x24C9;][1]



#### Since
4.0.0 <- used with schema, used in method chain

#### Arguments
1. `types` *(Object)*: custom Types

#### Example
```js
addTypes({yaya: x => typeof x === 'string'})

  const chain = new Chain().methods('eh').type('yaya').build()

  chain.eh('good')
  //=> chain

  chain.eh(!!'throws')
  //=> TypeError(false != {yaya: x => typeof x === 'string'})
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`

<!-- div -->

<h3 id="arithmeticTypeFactory"><a href="#arithmeticTypeFactory">#</a>&nbsp;<code>arithmeticTypeFactory(fullKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L182 "View in source") [&#x24C9;][1]



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
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L247 "View in source") [&#x24C9;][1]



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

<!-- div -->

## `schema.prototype`

<!-- div -->

<h3 id="schema-prototype-typeListFactory"><a href="#schema-prototype-typeListFactory">#</a>&nbsp;<code>schema.prototype.typeListFactory(fullKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L110 "View in source") [&#x24C9;][1]



#### Arguments
1. `fullKey` *(string)*: a key with `|` and/or '&'

#### Returns
*(Function)*: validator

#### Example
```js
const isStringOrNumber = typeListFactory('string|number')

   isStringOrNumber(1)
   //=> true
   isStringOrNumber('one')
   //=> true
   isStringOrNumber(Object)
   //=> false
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #chainedmap "Jump back to the TOC."
