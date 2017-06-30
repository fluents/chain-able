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

<h3 id="schema-prototype-typeValidator"><a href="#schema-prototype-typeValidator">#</a>&nbsp;<code>schema.prototype.typeValidator(input)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L98 "View in source") [&#x24C9;][1]



#### Since
4.0.0-beta.1

#### Arguments
1. `input` *(any)*: the input to validate

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
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `schemaFactory`

<!-- div -->

<h3 id="schemaFactory"><a href="#schemaFactory">#</a>&nbsp;<code>schemaFactory(property, nestedSchema)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L56 "View in source") [&#x24C9;][1]



#### Since
4.0.0-alpha.1

#### Arguments
1. `property` *(Primitive)*: property name of the currently nested schema
2. `nestedSchema` *(Schema|Type)*: a nested schema with Type validators, or a Type validator

#### Returns
*(Function)*: typeValidator

#### Example
```js
// property name here is `dates`, then `created`, then `at`
nestedSchema = {
  dates: {
     created: {
        at: 'date'
     }
  }
}

input = {
   dates: {
     created: {
       at: new Date()
     }
   }
}

input = new Date()
input = {
   dates: {
     mismatch: true
   }
}
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #schema.prototype "Jump back to the TOC."
