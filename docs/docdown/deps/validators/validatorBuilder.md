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

<h3 id="ChainedMap"><a href="#ChainedMap">#</a>&nbsp;<code>ChainedMap(validators=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L8 "View in source") [&#x24C9;][1]

(Function): library of validators to use by name

#### Arguments
1. `validators=undefined` *(Object)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `addTypes`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/schema.d.ts">🌊  Types: schema.d</a>&nbsp;

<h3 id="addTypes"><a href="#addTypes">#</a>&nbsp;<code>addTypes(types=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L75 "View in source") [&#x24C9;][1]

(Function): add custom types for validation

#### Arguments
1. `types=undefined` *(Object)*: custom Types

#### Example
```js
addTypes({ yaya: x => typeof x === 'string' })

const chain = new Chain().methods('eh').type('yaya').build()

chain.eh('good')
//=> chain

chain.eh(!!'throws')
//=> TypeError(false != {yaya: x => typeof x === 'string'})

```
#### Example
```js
const custom = {}
custom.enums = enums => x => enums.includes(x)
custom['*'] = x => true
addTypes(custom)
//-> void

new Chain().methods('eh').type('*').build().eh
//=> validateType(custom['*'])

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`

<!-- div -->

<a href="https://github.com/fluents/chain-able/blob/master/typings/schema.d.ts">🌊  Types: schema.d</a>&nbsp;

<h3 id="arithmeticTypeFactory"><a href="#arithmeticTypeFactory">#</a>&nbsp;<code>arithmeticTypeFactory(fullKey=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L182 "View in source") [&#x24C9;][1]

(Function): transform arithmetic strings into types


### @todos 

- [ ] coercing values to certain types: arithmeticTypeFactory('<value>')
 
#### Since
4.0.0-alpha.1

#### Arguments
1. `fullKey=undefined` *(Matchable)*: arithmetic type key

#### Returns
*(Matchable)*: function to match with, with .inspect for easy debugging

#### Example
```js
arithmeticTypeFactory('?string')
//=> x => !isReal(x) || isString(x)

```
#### Example
```js
arithmeticTypeFactory('?string|string[]')
//=> x => isString(x) || isArrayOf(isString)(x)

```
#### Example
```js
arithmeticTypeFactory('!string')
//=> x => not(isString)(x)

```
#### Example
```js
types.addTypes({ star: x => true })
arithmeticTypeFactory('object|function|star')
//=> x => isObj(x) || isFunction(x) || isStar(x)

```
#### Example
```js
arithmeticTypeFactory('===')
//=> x => (['===']).includes(x)

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `builder`

<!-- div -->

<h3 id="builder"><a href="#builder">#</a>&nbsp;<code>builder(fullKey=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L247 "View in source") [&#x24C9;][1]

(Function): @pattern @builder -> builds using multiple factories depending on conditons or abstractFactory whatever opinionated: if it's a function, it's a validator...


### @notes 

* if/else is for uglifying ternaries, even though else if is not needed
* if key is number, iterating the array
 
#### Since
4.0.0

#### Arguments
1. `fullKey=undefined` *(Function|Primitive|string)*: arithmetic key to the validator

#### Returns
*(Function)*: validator

#### Example
```js
// functionType
const isString = x => typeof x === 'string'
builder(isString)
// => isString

```
#### Example
```js
// stringType (built in, or custom-keyed validator, or eqeqeq)
builder('string')
// => isString

const enummy = builder('enum')
// => x => ['enum'].includes(x)

```
#### Example
```js
// arithmeticType
builder('string|string[]')
// => isString || isArrayOf(isString)

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `schema.prototype`

<!-- div -->

<h3 id="schema-prototype-typeListFactory"><a href="#schema-prototype-typeListFactory">#</a>&nbsp;<code>schema.prototype.typeListFactory(fullKey=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L110 "View in source") [&#x24C9;][1]

Function

#### Arguments
1. `fullKey=undefined` *(string)*: a key with `|` and/or '&'

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
