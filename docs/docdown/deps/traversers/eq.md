# eq.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `traverse.prototype`
* <a href="#traverse-prototype-exports">`traverse.prototype.exports`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `traverse.prototype`

<!-- div -->

* <a href="https://github.com/fluents/chain-able/blob/master/typings/TraverseChain.d.ts">🌊  Types: TraverseChain.d</a>&nbsp;
* <a href="https://github.com/fluents/chain-able/blob/master/typings/traverse.d.ts">🌊  Types: traverse.d</a>&nbsp;

<h3 id="traverse-prototype-exports"><a href="#traverse-prototype-exports">#</a>&nbsp;<code>traverse.prototype.exports(a=undefined, b=undefined, [loose=false])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/deps/traversers/eq.js#L94 "View in source") [&#x24C9;][1]

deep traversal of nodes to compare any data types does not check reference, only value equality


### @symb 

⚖️ 
#### Since
3.0.0

#### Arguments
1. `a=undefined` *(any)*: compare a with b
2. `b=undefined` *(any)*: compare b with a
3. `[loose=false]` *(boolean)*: whether to do looser equals check

#### Returns
*(boolean)*: isEqual

#### Example
```js
eq(1, 1)
//=> true

eq(true, false)
//=> false

eq({}, {})
//=> true

```
#### Example
```js
eq(
  { d: new Date(0, 0, 0, 0), x: [1, 2, 3] },
  { d: new Date(0, 0, 0, 0), x: [1, 2, 3] }
)
//=> true

eq([new RegExp('x')], [/x/])
//=> true

eq([new String('x')], ['x'])
//=> true

eq([new Boolean(false)], [false])
//=> true

eq([undefined], [null]) || eq(undefined, null)
//=> false

```
#### Example
```js
var xs = [1, 2, 3, 4]
delete xs[2]

var ys = Object.create(Array.prototype)
ys[0] = 1
ys[1] = 2
ys[3] = 4

eq(xs, ys)
//=> true

eq(xs, [1, 2, undefined, 4])
//=> false

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #traverse.prototype "Jump back to the TOC."
