# schemaBuilder.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `schemaFactory`
* <a href="#schemaFactory">`schemaFactory`</a>

<!-- /div -->

<!-- div -->

## `typeValidator`
* <a href="#typeValidator">`typeValidator`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `schemaFactory`

<!-- div -->

<h3 id="schemaFactory"><a href="#schemaFactory">#</a>&nbsp;<code>schemaFactory(property=undefined, nestedSchema=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L60 "View in source") [&#x24C9;][1]

(Function): pass the property & schema in, get a nestable typeValidator out

#### Since
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

<!-- div -->

## `typeValidator`

<!-- div -->

<h3 id="typeValidator"><a href="#typeValidator">#</a>&nbsp;<code>typeValidator(property=undefined, nestedSchema=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js#L102 "View in source") [&#x24C9;][1]

(Function): pass the property & schema in, get a nestable typeValidator out


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/is/array.js">fluents/chain able/blob/master/src/deps/is/array.js</a>
#### Since
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

 [1]: #schemafactory "Jump back to the TOC."
