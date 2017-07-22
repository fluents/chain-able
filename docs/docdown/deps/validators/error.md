# error.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `encase`
* <a href="#encase-prototype-exports"  data-meta="exports method undefined type undefined"  data-call="exports method undefined type undefined"  data-category="Methods"  data-description="Function enhance an Error enable rethrowing better inspection"  data-name="exports"  data-member="encase"  data-see="href https github com fluents chain able blob master src MethodChain js label fluents chain able blob master src method chain js href https github com fluents chain able blob master src deps validators schemaBuilder js label fluents chain able blob master src deps validators schema builder js href https github com fluents chain able blob master src deps validators validatorBuilder js label fluents chain able blob master src deps validators validator builder js href https github com fluents chain able blob master src plugins encase js label fluents chain able blob master src plugins encase js"  data-todos="js stringify if development"  data-all="meta exports method undefined type undefined call exports method undefined type undefined category Methods description Function enhance an Error enable rethrowing better inspection name exports member encase see href https github com fluents chain able blob master src MethodChain js label fluents chain able blob master src method chain js href https github com fluents chain able blob master src deps validators schemaBuilder js label fluents chain able blob master src deps validators schema builder js href https github com fluents chain able blob master src deps validators validatorBuilder js label fluents chain able blob master src deps validators validator builder js href https github com fluents chain able blob master src plugins encase js label fluents chain able blob master src plugins encase js notes todos js stringify if development n klassProps" >`encase.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `encase`

<!-- div -->

<h3 id="encase-prototype-exports" data-member="encase" data-category="Methods" data-name="exports"><code>encase.exports(method=undefined, type=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/validators/error.js#L54 "View in source") [&#x24C9;][1]

(Function): enhance an Error, enable rethrowing & better inspection


#### @see 

* <a href="https://github.com/fluents/chain-able/blob/master/src/MethodChain.js" >fluents/chain able/blob/master/src/method chain.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/validators/schemaBuilder.js" >fluents/chain able/blob/master/src/deps/validators/schema builder.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/deps/validators/validatorBuilder.js" >fluents/chain able/blob/master/src/deps/validators/validator builder.js</a>
* <a href="https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js" >fluents/chain able/blob/master/src/plugins/encase.js</a>

#### @todos 

- [ ] js stringify if development
 

#### @Since
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

 [1]: #encase "Jump back to the TOC."
