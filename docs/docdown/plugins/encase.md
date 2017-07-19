# encase.js API documentation

<!-- div class="toc-container" -->

<!-- div -->

## `methodEncasingFactory`
* <a href="#methodEncasingFactory"  data-meta="methodEncasingFactory name undefined parent undefined built undefined"  data-call="methodEncasingFactory name undefined parent undefined built undefined"  data-category="Methods"  data-description="Function 3 steps 0 enhance error 1 encase function with a specification 2 build a function to call onInvalid or onInvalid depending"  data-name="methodEncasingFactory"  data-all="meta n methodEncasingFactory name undefined parent undefined built undefined call methodEncasingFactory name undefined parent undefined built undefined category Methods description Function 3 steps n0 enhance error n1 encase function with a specification n2 build a function to call onInvalid or onInvalid depending name methodEncasingFactory member see notes todos klassProps" >`methodEncasingFactory`</a>

<!-- /div -->

<!-- div -->

## `scopedEncase`
* <a href="#scopedEncase"  data-meta="scopedEncase fnToEncase undefined type undefined specification undefined"  data-call="scopedEncase fnToEncase undefined type undefined specification undefined"  data-category="type"  data-description="Function"  data-name="scopedEncase"  data-all="meta scopedEncase fnToEncase undefined type undefined specification undefined call scopedEncase fnToEncase undefined type undefined specification undefined category type description Function name scopedEncase member see notes todos klassProps" >`scopedEncase`</a>

<!-- /div -->

<!-- div -->

## `typedOnCall`
* <a href="#typedOnCall"  data-meta="typedOnCall arg undefined"  data-call="typedOnCall arg undefined"  data-category="type"  data-description="Function this is the actual built function"  data-name="typedOnCall"  data-all="meta typedOnCall arg undefined call typedOnCall arg undefined category type description Function this is the actual built function name typedOnCall member see notes todos klassProps" >`typedOnCall`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `methodEncasingFactory`

<!-- div -->

<h3 id="methodEncasingFactory" data-member="" data-category="Methods" data-name="methodEncasingFactory"><code>methodEncasingFactory(name=undefined, parent=undefined, built=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L30 "View in source") [&#x24C9;][1]

(Function): 3 steps
0. enhance error
1. encase function with a specification
2. build a function to call onInvalid or onInvalid depending


#### @symb 

⛑🏭 

#### @Since
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

<!-- div -->

## `scopedEncase`

<!-- div -->

<h3 id="scopedEncase" data-member="" data-category="type" data-name="scopedEncase"><code>scopedEncase(fnToEncase=undefined, [type=undefined], [specification=undefined])</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L53 "View in source") [&#x24C9;][1]

Function


#### @Since
4.0.0-beta.1

#### Arguments
1. `fnToEncase=undefined` *(Function)*: depending on the result of this, call
2. `[type=undefined]` *(|Function|string)*: Type
3. `[specification=undefined]` *(|Function)*: Specification

#### Returns
*(Function)*: the method...

#### Example
```js
const fnToEncase = arg => arg === true
const onInvalid = (error, key, arg, instance) => console.log(arguments)
const onValid = (key, arg, instance) => console.log(arguments)
const encased = scopedEncase(fnToEncase).onValid(onValid).onInvalid(onInvalid)
//=> typedOnCall

```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `typedOnCall`

<!-- div -->

<h3 id="typedOnCall" data-member="" data-category="type" data-name="typedOnCall"><code>typedOnCall(arg=undefined)</code></h3>
<br>
<br>
[&#x24C8;](https://github.com/fluents/chain-able/blob/master/src/plugins/encase.js#L87 "View in source") [&#x24C9;][1]

(Function): this is the actual built function


#### @Since
4.0.0-beta.1

#### Arguments
1. `arg=undefined` *(any)*: arg to validate

#### Returns
*(Function): typedOnCall(argToValidate: any)*

#### Example
```js
const encased = encase(fnToEncase)
     .onValid()
     .onInvalid(function)
     .call()
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #methodencasingfactory "Jump back to the TOC."
