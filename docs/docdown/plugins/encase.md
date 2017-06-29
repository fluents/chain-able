# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `methodEncasingFactory`
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>

<!-- /div -->

<!-- div -->

## `return function`
* <a href="#return function">`return function`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `methodEncasingFactory`

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name, parent, built)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L25 "View in source") [&#x24C9;][1]



#### Since
4.0.0

#### Arguments
1. `name` *(string)*: name of the method
2. `parent` *(Function|Object)*: object being decorated by MethodChain
3. `built` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, {onSet: console.log})
 // => Function
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `return function`

<!-- div -->

<h3 id="return function"><a href="#return function">#</a>&nbsp;<code>return function(fnToEncase(fnToEncase, [type=undefined], [specification=undefined])</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L32 "View in source") [&#x24C9;][1]



#### Arguments
1. `fnToEncase` *(Function)*:
2. `[type=undefined]` *(|Function|string)*:
3. `[specification=undefined]` *(|Function)*:

#### Returns
*(Function)*: the method...

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodencasingfactory "Jump back to the TOC."
