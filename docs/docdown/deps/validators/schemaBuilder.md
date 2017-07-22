# schemaBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `schema`
* <a href="#schema-prototype-typeValidator"  data-meta="typeValidator input undefined"  data-call="typeValidator input undefined"  data-category="Methods"  data-description="Function build a recursive schema for all around runtime type safety"  data-name="typeValidator"  data-member="schema"  data-see="href https github com fluents chain able blob master src deps expressions bitwiseMathOperator js label is"  data-all="meta n typeValidator input undefined call typeValidator input undefined category Methods description Function build a recursive schema for all around runtime type safety name typeValidator member schema see href https github com fluents chain able blob master src deps expressions bitwiseMathOperator js label is notes todos klassProps" >`schema.typeValidator`</a>

<!-- /div -->

<!-- div -->

## `schemaFactory`
* <a href="#schemaFactory"  data-meta="schemaFactory property undefined nestedSchema undefined"  data-call="schemaFactory property undefined nestedSchema undefined"  data-category="Methods"  data-description="Function pass the property schema in get a nestable typeValidator out"  data-name="schemaFactory"  data-all="meta schemaFactory property undefined nestedSchema undefined call schemaFactory property undefined nestedSchema undefined category Methods description Function pass the property schema in get a nestable typeValidator out name schemaFactory member see notes todos klassProps" >`schemaFactory`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `schema`

<!-- div -->

<h3 id="schema-prototype-typeValidator" data-member="schema" data-category="Methods" data-name="typeValidator"><code>schema.typeValidator(input=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L91 "View in source") [&#x24C9;][1]

(Function): build a recursive schema for all around runtime type safety


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/expressions/bitwiseMathOperator.js" >is</a>

#### @symb 

🛂 

#### @Since
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

<h3 id="schemaFactory" data-member="" data-category="Methods" data-name="schemaFactory"><code>schemaFactory(property=undefined, nestedSchema=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L49 "View in source") [&#x24C9;][1]

(Function): pass the property & schema in, get a nestable typeValidator out


#### @Since
4.0.0-alpha.1

#### Arguments
1. `property=undefined` *(Primitive)*: property name of the currently nested schema
2. `nestedSchema=undefined` *(Schema|Type)*: a nested schema with Type validators, or a Type validator

#### Returns
*(Function)*: typeValidator

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

 [1]: #schema "Jump back to the TOC."
