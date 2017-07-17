# error.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `encase.prototype`
* <a href="#encase-prototype-exports">`encase.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `encase.prototype`

<!-- div -->

<h3 id="encase-prototype-exports"><a href="#encase-prototype-exports">#</a>&nbsp;<code>encase.prototype.exports(method=undefined, type=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/error.js#L54 "View in source") [&#x24C9;][1]

(Function): enhance an Error, enable rethrowing & better inspection


### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js">fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js">fluents/chain able/blob/master/src/deps/validators/schema builder.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js">fluents/chain able/blob/master/src/deps/validators/validator builder.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js">fluents/chain able/blob/master/src/plugins/encase.js</a>

### @todos 

- [ ] js stringify if development
 
#### Since
4.0.0-alpha.1

#### Arguments
1. `method=undefined` *(Primitive)*: method being decorated
2. `type=undefined` *(Type)*: type to validate with

#### Returns
*(Function): function that returns a decorated TypeError with .inspect & metadata (arg, thrown, meta)*

#### Example
```js
const badValidator = x => {
  if (x === 'bad') {
    throw new Error('bad!')
  }
}
const enhancer = enhanceError('eh', badValidator)

// called by plugins/encase when throws or invalid
let error
let arg = 'bad'
try {
  error = badValidator(arg)
} catch (e) {
  error = enhancer(arg, e, { metadata: true })
}

console.log(error)
//=> {[eh]: { type: badValidator, arg: 'bad', json, str, rethrow }}
//=> console.log on DEVELOPMENT

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #encase.prototype "Jump back to the TOC."
