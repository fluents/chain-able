# validatorBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `ChainedMap`
* <a href="#ChainedMap"  data-meta="ChainedMap validators undefined"  data-call="ChainedMap validators undefined"  data-category="Methods"  data-description="Function library of validators to use by name"  data-name="ChainedMap"  data-all="meta ChainedMap validators undefined call ChainedMap validators undefined category Methods description Function library of validators to use by name name ChainedMap member see notes todos klassProps" >`ChainedMap`</a>

<!-- /div -->

<!-- div -->

## `addTypes`
* <a href="#addTypes"  data-meta="addTypes types undefined"  data-call="addTypes types undefined"  data-category="Methods"  data-description="Function add custom types for validation"  data-name="addTypes"  data-see="href https github com fluents chain able search utf8 E2 9C 93 q deps validators validatorFactory type label deps validators validatorFactory"  data-all="meta addTypes types undefined call addTypes types undefined category Methods description Function add custom types for validation name addTypes member see href https github com fluents chain able search utf8 E2 9C 93 q deps validators validatorFactory type label deps validators validatorFactory notes todos klassProps" >`addTypes`</a>

<!-- /div -->

<!-- div -->

## `arithmeticTypeFactory`
* <a href="#arithmeticTypeFactory"  data-meta="arithmeticTypeFactory fullKey undefined"  data-call="arithmeticTypeFactory fullKey undefined"  data-category="types"  data-description="Function transform arithmetic strings into types"  data-name="arithmeticTypeFactory"  data-see="href https github com fluents chain able blob master src deps expressions bitwiseMathOperator js label is"  data-todos="coercing values to certain types arithmeticTypeFactory value"  data-all="meta arithmeticTypeFactory fullKey undefined call arithmeticTypeFactory fullKey undefined category types description Function transform arithmetic strings into types name arithmeticTypeFactory member see href https github com fluents chain able blob master src deps expressions bitwiseMathOperator js label is notes todos coercing values to certain types arithmeticTypeFactory value n klassProps" >`arithmeticTypeFactory`</a>

<!-- /div -->

<!-- div -->

## `builder`
* <a href="#builder"  data-meta="builder fullKey undefined"  data-call="builder fullKey undefined"  data-category="types"  data-description="Function pattern builder builds using multiple factories depending on conditons or abstractFactory whatever opinionated if it s a function it s a validator"  data-name="builder"  data-see="href https developer mozilla org en docs Web JavaScript Reference Functions Default parameters label https developer mozilla org en docs Web JavaScript Reference Functions Default parameters"  data-notes="if else is for uglifying ternaries even though else if is not needed if key is number iterating the array"  data-all="meta builder fullKey undefined call builder fullKey undefined category types description Function pattern builder builds using multiple factories depending on conditons or abstractFactory whatever opinionated if it s a function it s a validator name builder member see href https developer mozilla org en docs Web JavaScript Reference Functions Default parameters label https developer mozilla org en docs Web JavaScript Reference Functions Default parameters notes if else is for uglifying ternaries even though else if is not needed n if key is number iterating the array n todos klassProps" >`builder`</a>

<!-- /div -->

<!-- div -->

## `schema`
* <a href="#schema-prototype-typeListFactory"  data-meta="typeListFactory fullKey undefined"  data-call="typeListFactory fullKey undefined"  data-category="types"  data-description="Function"  data-name="typeListFactory"  data-member="schema"  data-all="meta typeListFactory fullKey undefined call typeListFactory fullKey undefined category types description Function name typeListFactory member schema see notes todos klassProps" >`schema.typeListFactory`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `ChainedMap`

<!-- div -->

<h3 id="ChainedMap" data-member="" data-category="Methods" data-name="ChainedMap"><code>ChainedMap(validators=undefined)</code></h3>
<br>
<br>
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

<h3 id="addTypes" data-member="" data-category="Methods" data-name="addTypes"><code>addTypes(types=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L74 "View in source") [&#x24C9;][1]

(Function): add custom types for validation


#### @see 

* <a href="https://github.com/fluents/chain-able/search?utf8=%E2%9C%93&q=deps/validators/validatorFactory&type=" >deps/validators/validatorFactory</a>
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

<h3 id="arithmeticTypeFactory" data-member="" data-category="types" data-name="arithmeticTypeFactory"><code>arithmeticTypeFactory(fullKey=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L172 "View in source") [&#x24C9;][1]

(Function): transform arithmetic strings into types


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/expressions/bitwiseMathOperator.js" >is</a>

#### @todos 

- [ ] coercing values to certain types: arithmeticTypeFactory('<value>')
 

#### @Since
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

<h3 id="builder" data-member="" data-category="types" data-name="builder"><code>builder(fullKey=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L237 "View in source") [&#x24C9;][1]

(Function): @pattern @builder -> builds using multiple factories depending on conditons or abstractFactory whatever opinionated: if it's a function, it's a validator...


#### @see 

* <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters" >https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters</a>

#### @notes 

* if/else is for uglifying ternaries, even though else if is not needed
* if key is number, iterating the array
 

#### @Since
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

## `schema`

<!-- div -->

<h3 id="schema-prototype-typeListFactory" data-member="schema" data-category="types" data-name="typeListFactory"><code>schema.typeListFactory(fullKey=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js#L100 "View in source") [&#x24C9;][1]

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
