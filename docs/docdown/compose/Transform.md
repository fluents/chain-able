# Transform.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `TransformChain.prototype`
* <a href="#TransformChain-prototype-remap">`TransformChain.prototype.remap`</a>
* <a href="#TransformChain-prototype-set">`TransformChain.prototype.set`</a>
* <a href="#TransformChain-prototype-transform">`TransformChain.prototype.transform`</a>

<!-- /div -->

<!-- div -->

## `exports`
* <a href="#exports">`exports`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#traverse">`traverse`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `TransformChain.prototype`

<!-- div -->

<h3 id="TransformChain-prototype-remap"><a href="#TransformChain-prototype-remap">#</a>&nbsp;<code>TransformChain.prototype.remap(from, [to=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L180 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Arguments
1. `from` *(Object|string)*: property name string, or {&#91;from&#93;: to}
2. `[to=undefined]` *(string)*: property name to change key to

#### Returns
*(Chain)*: @chainable

#### Example
```js
chain
   .remap('dis', 'dat')
   .from({dis: true})

 chain.entries()
 //=> {dat: true}
```
---

<!-- /div -->

<!-- div -->

<h3 id="TransformChain-prototype-set"><a href="#TransformChain-prototype-set">#</a>&nbsp;<code>TransformChain.prototype.set(key, val, dotPropKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L122 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Arguments
1. `key` *(Primitive)*: key to set with
2. `val` *(any)*: value to set for key
3. `dotPropKey` *(|string|string&#91;&#93;)*: special key used for initializing dot prop values in an optimized way to keep reference

#### Returns
*(Chainable)*: @chainable

---

<!-- /div -->

<!-- div -->

<h3 id="TransformChain-prototype-transform"><a href="#TransformChain-prototype-transform">#</a>&nbsp;<code>TransformChain.prototype.transform(key, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L104 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `key` *(Function|string)*: currently just string
2. `value` *(Function)*: callback accepting the value as only arg to transform with

#### Returns
*(TransformChain)*: @chainable

#### Example
```js
// coerce values with .id into the value they hold
  chain
    .transform('dis', val => (typeof val === 'string' ? val : val.id))

  chain.set('dis', 'eh')
  chain.get('dis')
  //=> 'eh'

  chain.set('dis', {id: 'eh'})
  chain.get('dis')
  //=> 'eh'
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `exports`

<!-- div -->

<h3 id="exports"><a href="#exports">#</a>&nbsp;<code>exports(SuperClass)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L18 "View in source") [&#x24C9;][1]



#### Arguments
1. `SuperClass` *(Class|Composable)*: composable class

#### Returns
*(TransformChain)*: class

#### Example
```js
compose(class {})
   //=> TransformChain
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse([useThis=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L54 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `[useThis=false]` *(boolean|traversable)*: use the instance properties that are `mapish` as well

#### Returns
*(TraverseChain)*: @chainable

#### Example
```js
TAKE FROM TRAVERSECHAIN
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #transformchain.prototype "Jump back to the TOC."
