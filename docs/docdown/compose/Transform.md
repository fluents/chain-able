# Transform.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `remap`
* <a href="#remap">`remap`</a>

<!-- /div -->

<!-- div -->

## `set`
* <a href="#set">`set`</a>

<!-- /div -->

<!-- div -->

## `transform`
* <a href="#transform">`transform`</a>

<!-- /div -->

<!-- div -->

## `traverse`
* <a href="#traverse">`traverse`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `remap`

<!-- div -->

<h3 id="remap"><a href="#remap">#</a>&nbsp;<code>remap(from, to)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L105 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Arguments
1. `from` *(string)*: property name
2. `to` *(string)*: property name to change key to

#### Returns
*(Chain)*: @chainable

#### Example
```js
this
   .remap('dis', 'dat')
   .remap({dis: 'dat'})
   .from({dis: true})
 == {dat: true}
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `set`

<!-- div -->

<h3 id="set"><a href="#set">#</a>&nbsp;<code>set(key, val, dotPropKey)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L63 "View in source") [&#x24C9;][1]



#### Since
1.0.0

#### Arguments
1. `key` *(Primitive)*:
2. `val` *(any)*:
3. `dotPropKey` *(|string|string&#91;&#93;)*:

#### Returns
*(Chainable)*: @chainable

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `transform`

<!-- div -->

<h3 id="transform"><a href="#transform">#</a>&nbsp;<code>transform(key, value)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L49 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `key` *(Function|string)*: currently just string
2. `value` *(Function)*:

#### Returns
*(This)*: @chainable

#### Example
```js
this
    .transform('dis', val => (typeof val === 'string' ? val : val.id))
    .set('dis', 'eh') // .get('dis') === 'eh'
    .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `traverse`

<!-- div -->

<h3 id="traverse"><a href="#traverse">#</a>&nbsp;<code>traverse([useThis=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/compose/Transform.js#L22 "View in source") [&#x24C9;][1]



#### Since
1.0.2

#### Arguments
1. `[useThis=false]` *(boolean|traversable)*:

#### Returns
*(ChainedMapExtendable)*: @chainable

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #remap "Jump back to the TOC."
