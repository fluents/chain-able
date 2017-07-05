# schemaBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `schema.prototype`
* <a href="#schema-prototype-typeValidator">`schema.prototype.typeValidator`</a>

<!-- /div -->

<!-- div -->

## `schemaFactory`
* <a href="#schemaFactory">`schemaFactory`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `schema.prototype`

<!-- div -->

<h3 id="schema-prototype-typeValidator"><a href="#schema-prototype-typeValidator">#</a>&nbsp;<code>schema.prototype.typeValidator(input=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L102 "View in source") [&#x24C9;][1]

build a recursive schema for all around runtime type safety


### @symb 

🛂 
#### Since
4.0.0-beta.1

#### Arguments
1. `input=undefined` *(any)*: the input to validate

#### Returns
*(boolean)*: valid

#### Example
```js
const typeValidator = schemaFactory('eh', x => typeof x === 'string')

var isValid = typeValidator('stringy')
//=> true

var isValid = typeValidator(Number)
//=> false

```
#### Example
```js
const isNumber = x => typeof x === 'number'
const typeValidator = schemaFactory('eh', { canada: 'number' })

var isValid = typeValidator({ canada: 1 })
//=> true

var isValid = typeValidator({})
//=> false

var isValid = typeValidator({ canada: false })
//=> false

var isValid = typeValidator(1)
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `schemaFactory`

<!-- div -->

<h3 id="schemaFactory"><a href="#schemaFactory">#</a>&nbsp;<code>schemaFactory(property=undefined, nestedSchema=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L60 "View in source") [&#x24C9;][1]

pass the property & schema in, get a nestable typeValidator out


### @symb 

🛂 
#### Since
4.0.0-alpha.1

#### Arguments
1. `property=undefined` *(Primitive)*: property name of the currently nested schema
2. `nestedSchema=undefined` *(Schema|Type)*: a nested schema with Type validators, or a Type validator

#### Returns
*(boolean)*: valid

#### Example
```js
// property name here is `dates`, then `created`, then `at`
nestedSchema = {
  dates: {
    created: {
      at: 'date',
    },
  },
}

input = {
  dates: {
    created: {
      at: new Date(),
    },
  },
}

input = new Date()
input = {
  dates: {
    mismatch: true,
  },
}

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #schema.prototype "Jump back to the TOC."
