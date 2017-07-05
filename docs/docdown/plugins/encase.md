# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `methodEncasingFactory`
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>
* <a href="#methodEncasingFactory">`methodEncasingFactory`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `methodEncasingFactory`

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name=undefined, parent=undefined, built=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L30 "View in source") [&#x24C9;][1]

(Function): 3 steps
0. enhance error
1. encase function with a specification
2. build a function to call onInvalid or onInvalid depending


### @symb 

⛑🏭 
#### Since
4.0.0

#### Arguments
1. `name=undefined` *(string)*: name of the method
2. `parent=undefined` *(Function|Object)*: object being decorated by MethodChain
3. `built=undefined` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, { onSet: console.log })
//=> Function

```
---

<!-- /div -->

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name=undefined, parent=undefined, built=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L53 "View in source") [&#x24C9;][1]

(Function): 3 steps
0. enhance error
1. encase function with a specification
2. build a function to call onInvalid or onInvalid depending


### @symb 

⛑🏭 
#### Since
4.0.0

#### Arguments
1. `name=undefined` *(string)*: name of the method
2. `parent=undefined` *(Function|Object)*: object being decorated by MethodChain
3. `built=undefined` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, { onSet: console.log })
//=> Function

```
---

<!-- /div -->

<!-- div -->

<h3 id="methodEncasingFactory"><a href="#methodEncasingFactory">#</a>&nbsp;<code>methodEncasingFactory(name=undefined, parent=undefined, built=undefined)</code></h3>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L87 "View in source") [&#x24C9;][1]

(Function): 3 steps
0. enhance error
1. encase function with a specification
2. build a function to call onInvalid or onInvalid depending


### @symb 

⛑🏭 
#### Since
4.0.0

#### Arguments
1. `name=undefined` *(string)*: name of the method
2. `parent=undefined` *(Function|Object)*: object being decorated by MethodChain
3. `built=undefined` *(Object)*: the current state of the decoration

#### Returns
*(Function)*: curried finisher, for specification

#### Example
```js
methodEncasingFactory('eh', {}, { onSet: console.log })
//=> Function

```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodencasingfactory "Jump back to the TOC."
