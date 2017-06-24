# [chain-able](https://github.com/fluents/chain-able#readme) *4.0.0*

> interfaces that describe their intentions.


### src/Chainable.js


#### if() 

istanbul ignore next: dev






##### Returns


- `Void`



#### new Chainable() 








##### Returns


- `Void`



#### Chainable.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### Chainable.[Iterator]() 








##### Examples

```javascript
for (var [key, val] of chainable) {}
```
```javascript
 * [Symbol.iterator](): void { for (const item of this.store) yield item }
```


##### Returns


- `Object`  {value: undefined | any, done: true | false}



#### Chainable.end() 








##### Returns


- `Chainable` `any`  



#### Chainable.when(condition[, trueBrancher&#x3D;Function, falseBrancher&#x3D;Function]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| condition | `boolean` `string`  | when string, checks this.get | &nbsp; |
| trueBrancher&#x3D;Function | `Function`  | called when true | *Optional* |
| falseBrancher&#x3D;Function | `Function`  | called when false | *Optional* |




##### Examples

```javascript
 const prod = process.env.NODE_ENV === 'production'
 chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
```


##### Returns


- `ChainedMap`  



#### Chainable.clear([clearPropertiesThatAreChainLike&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| clearPropertiesThatAreChainLike&#x3D;true | `boolean`  |  | *Optional* |




##### Returns


- `Chainable`  @chainable



#### Chainable.delete(key) 

calls .delete on this.store.map




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string` `any`  |  | &nbsp; |




##### Returns


- `Chainable`  



#### Chainable.has(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Examples

```javascript
if (chain.has('eh') === false) chain.set('eh', true)
```


##### Returns


- `boolean`  



#### Chainable.values() 








##### Returns


- `Array.&lt;any&gt;`  



#### Chainable.[Primitive](hint) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| hint | `string`  |  | &nbsp; |




##### Examples

```javascript
chain + 1 (calls this)
```


##### Returns


- `Primitive`  



#### Chainable.ObjectDefine() 








##### Examples

```javascript
for (var i = 0; i < chain.length; i++)
```


##### Returns


- `number`  




### src/ChainedMap.js


#### methods() 

prettier-ignore






##### Returns


- `Void`



#### method(names) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| names | `string` `Array.<string>` `Primitive`  |  | &nbsp; |




##### Returns


- `MethodChain`  



#### merge(obj, cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | object to merge | &nbsp; |
| cb | `Function`  | return the merger to the callback | &nbsp; |




##### Examples

```javascript
chain.set('eh', [1]).merge({eh: [2]}).get('eh') === [1, 2]
```


##### Returns


- `ChainedMap`  @chainable




### src/ChainedMapBase.js


#### constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ChainedMapBase` `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### tap(name, fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string` `any`  | key to `.get` | &nbsp; |
| fn | `Function`  | function to tap with | &nbsp; |




##### Examples

```javascript
 chain
   .set('moose', {eh: true})
   .tap('moose', moose => {moose.eh = false; return moose})
   .get('moose') === {eh: false}
```


##### Returns


- `Chain`  @chainable



#### from(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |




##### Examples

```javascript
chain.from({eh: true}) === chain.eh(true)
```


##### Returns


- `Chainable`  @chainable



#### extend(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.<string>`  |  | &nbsp; |




##### Examples

```javascript
this.extend(['eh']) === this.eh = val => this.set('eh', val)
```


##### Returns


- `ChainedMapBase`  



#### entries([chains&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| chains&#x3D;false | `boolean`  | if true, returns all properties that are chains | *Optional* |




##### Returns


- `Object`  



#### get(key) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |




##### Examples

```javascript
chain.set('eh', true).get('eh') === true
```


##### Returns


- `any`  



#### set(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `any`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Examples

```javascript
chain.set('eh', true).get('eh') === true
```


##### Returns


- `ChainedMapBase`  




### src/ChainedSet.js


#### new ChainedSet() 








##### Returns


- `Void`



#### ChainedSet.constructor(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `ChainedSet` `Chainable` `any`  |  | &nbsp; |




##### Returns


- `Void`



#### ChainedSet.add(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable



#### ChainedSet.prepend(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable



#### ChainedSet.merge(arr) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| arr | `Array` `Set` `Concatable`  |  | &nbsp; |




##### Returns


- `ChainedSet`  @chainable




### src/compose/DotProp.js


#### dot() 








##### Returns


- `Void`



#### shouldDot(key, thisArg) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string`  |  | &nbsp; |
| thisArg | `DotProp`  |  | &nbsp; |




##### Returns


- `boolean`  



#### dot([useDot&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| useDot&#x3D;true | `boolean`  |  | *Optional* |




##### Returns


- `DotProp`  @chainable



#### set() 








##### Returns


- `Void`



#### get(key, fallback) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| fallback | `any`  |  | &nbsp; |




##### Returns


- `Void`



#### has() 








##### Returns


- `Void`



#### delete() 








##### Returns


- `Void`




### src/compose/index.js


#### compose([target, extensions]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| target | `Class` `Function`  |  | *Optional* |
| extensions | `Array`  |  | *Optional* |




##### Returns


- `Class` `Function`  




### src/compose/Observe.js


#### observe(properties, fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| properties | `Matchable`  |  | &nbsp; |
| fn | `Function`  |  | &nbsp; |




##### Examples

```javascript
  chain
    .extend(['eh'])
    .observe('eh', data => data.eh === true)
    .eh(true)
```


##### Returns


- `Chain`  @chainable




### src/compose/Shorthands.js


#### isUndefined() 








##### Returns


- `Void`



#### debug([should&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| should&#x3D;true | `boolean`  |  | *Optional* |




##### Returns


- `Chainable`  @chainable



#### setIfEmpty(name, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Returns


- `This`  @chainable



#### return(value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| value | `any`  | value to return at the end of a chain | &nbsp; |




##### Returns


- `any`  



#### wrap(fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| fn | `any`  |  | &nbsp; |




##### Returns


- `This`  @chainable




### src/compose/Transform.js


#### traverse([useThis&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| useThis&#x3D;false | `boolean` `traversable`  |  | *Optional* |




##### Returns


- `ChainedMapExtendable`  @chainable



#### transform(key, value) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `string` `Function`  | currently just string | &nbsp; |
| value | `Function`  |  | &nbsp; |




##### Examples

```javascript
  this
    .transform('dis', val => (typeof val === 'string' ? val : val.id))
    .set('dis', 'eh') // .get('dis') === 'eh'
    .set('dis', {id: 'eh'}) // .get('dis') === 'eh'
```


##### Returns


- `This`  @chainable



#### set(key, val[, dotPropKey]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| val | `any`  |  | &nbsp; |
| dotPropKey | `string` `Array.<string>`  |  | *Optional* |




##### Returns


- `Chainable`  @chainable



#### remap(from, to) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| from | `string`  | property name | &nbsp; |
| to | `string`  | property name to change key to | &nbsp; |




##### Examples

```javascript
 this
   .remap('dis', 'dat')
   .remap({dis: 'dat'})
   .from({dis: true})
 == {dat: true}
```


##### Returns


- `Chain`  @chainable



#### ObjectKeys() 

prettier-ignore






##### Returns


- `Void`




### src/deps/camel-case.js


#### module.exports(str) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  |  | &nbsp; |




##### Returns


- `string`  
s.charAt(0).toLowerCase() + string.slice(1)




### src/deps/class-names.js


#### module.exports(_c) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| _c | `Object`  |  | &nbsp; |




##### Examples

```javascript
get className() {return classNames(this)}
```


##### Returns


- `string`  




### src/deps/clean.js


#### module.exports(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | object to clean, usually .entries() | &nbsp; |




##### Returns


- `Object`  




### src/deps/define.js


#### module.exports(obj, name, descriptor) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |
| name | `Primitive`  |  | &nbsp; |
| descriptor | `Object`  |  | &nbsp; |




##### Examples

```javascript
var desc = Object.getOwnPropertyDescriptor(obj, 'eh')
```


##### Returns


-  




### src/deps/dopemerge.js


#### ezType() 

prettier-ignore






##### Returns


- `Void`




### src/deps/dot-prop-paths.js


#### module.exports(key, value[, longest]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| value | `Traversable`  |  | &nbsp; |
| longest | `boolean`  |  | *Optional* |




##### Returns


- `Array.&lt;string&gt;`  paths




### src/deps/dot-segments.js


#### while() 








##### Examples

```javascript
1          '\.eh' -1 === '\\'      (true)
               +1 !== undefined (true, eh)
```
```javascript
2          '.eh'  -1 === '\\'      (false, undefined)
                +1 !== undefined (true, eh)
```
```javascript
3          '\.'  -1 === '\\'      (true)
               +1 !== undefined (false, eh)
```


##### Returns


- `Void`




### src/deps/encase/factory.js


#### methodEncasingFactory(name, parent, built, functionToEncase, type) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| parent | `Object` `Function`  |  | &nbsp; |
| built | `Object`  |  | &nbsp; |
| functionToEncase | `Function`  |  | &nbsp; |
| type | `string` `Function` `any`  |  | &nbsp; |




##### Returns


- `MethodChain`  @chainable




### src/deps/encase/index.js


#### encase(call) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| call | `Function`  |  | &nbsp; |




##### Returns


- `boolean` `any`  validation/encased function call result



#### module.exports(call) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| call | `Function`  |  | &nbsp; |




##### Returns


- `Function`  -> FunctionObject{onInvalid, onValid, rethrow, call}




### src/deps/env/dev.js


#### module.exports() 

istanbul ignore next: wip build






##### Returns


- `Void`




### src/deps/gc.js


#### markForGarbageCollection(obj, ignore) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  |  | &nbsp; |
| ignore | `Array.<string>`  |  | &nbsp; |




##### Returns


-  




### src/deps/is/class.js


#### module.exports() 

istanbul ignore next: build - things are compiled so isClass is not used






##### Returns


- `Void`




### src/deps/matcher.js


#### m.make(pattern[, shouldNegate, alphaOmega]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| pattern | `Array.<string>` `string` `Function` `RegExp`  |  | &nbsp; |
| shouldNegate | `boolean`  |  | *Optional* |
| alphaOmega | `boolean`  |  | *Optional* |




##### Returns


- `Array.&lt;string&gt;` `string` `Function` `RegExp`  matchable



#### m.matcher(inputs, patterns[, shouldNegate, alphaOmega]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| inputs | `Array.<string>` `string`  |  | &nbsp; |
| patterns | `Array.<string>` `string` `Function` `RegExp`  |  | &nbsp; |
| shouldNegate | `boolean`  |  | *Optional* |
| alphaOmega | `boolean`  |  | *Optional* |




##### Returns


- `Array.&lt;any&gt;`  




### src/deps/meta/decorated.js


#### module.exports() 

istanbul ignore next: wip build






##### Returns


- `Void`




### src/deps/meta/index.js


#### ensureInitialized() 

prettier-ignore






##### Returns


- `Void`



#### has(key[, prop&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| prop&#x3D;undefined | `Primitive`  |  | *Optional* |




##### Returns


- `boolean`  



#### get(key[, prop&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| prop&#x3D;undefined | `Primitive`  |  | *Optional* |




##### Returns


- `any`  



#### set(key[, prop&#x3D;undefined, value&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| prop&#x3D;undefined | `Primitive`  |  | *Optional* |
| value&#x3D;undefined | `Primitive`  |  | *Optional* |




##### Returns


-  



#### meta(key[, prop&#x3D;undefined, value&#x3D;undefined]) 

THIS IS BEST!!! A SINGLE MINIFIABLE FUNCTION, NO PROPERTY NESTING




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| key | `Primitive`  |  | &nbsp; |
| prop&#x3D;undefined | `Primitive`  |  | *Optional* |
| value&#x3D;undefined | `any`  | (when no value, it's a getter) | *Optional* |




##### Returns


- `Void`




### src/deps/meta/observers.js


#### module.exports() 

istanbul ignore next: wip build






##### Returns


- `Void`




### src/deps/meta/shorthands.js


#### module.exports() 

istanbul ignore next: wip build






##### Returns


- `Void`




### src/deps/meta/transformers.js


#### module.exports() 

istanbul ignore next: wip build






##### Returns


- `Void`




### src/deps/reduce-entries.js


#### module.exports(reduced) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| reduced | `Object` `any`  |  | &nbsp; |




##### Returns


- `Function`  Function(values: Object)




### src/deps/reduce.js


#### module.exports(map) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| map | `Map`  |  | &nbsp; |




##### Returns


- `Object`  




### src/deps/to-arr.js


#### module.exports(ar) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ar | `any`  |  | &nbsp; |




##### Returns


- `Array`  




### src/deps/to-test.js


#### module.exports(matchable, arg1, arg2) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| matchable | `Matchable`  |  | &nbsp; |
| arg1 | `any`  |  | &nbsp; |
| arg2 | `any`  |  | &nbsp; |




##### Returns


- `boolean`  




### src/deps/traverse.js


#### isPureObj() 

eslint func-style: "off"






##### Returns


- `Void`



#### forEach(xs, fn) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| xs | `Array` `Object` `any`  |  | &nbsp; |
| fn | `Function`  |  | &nbsp; |




##### Returns


- `Void`



#### Traverse(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Travcersable`  |  | &nbsp; |




##### Returns


- `Void`



#### Traverse.get(ps) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ps | `Array.<string>`  | paths | &nbsp; |




##### Returns


- `any`  value at dot-prop



#### Traverse.has(ps) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ps | `Array.<string>`  | paths | &nbsp; |




##### Returns


- `boolean`  



#### Traverse.map(cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb | `Function`  |  | &nbsp; |




##### Returns


- `any`  



#### Traverse.forEach(cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb | `Function`  |  | &nbsp; |




##### Returns


- `any`  this.value



#### Traverse.forEachs(cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cb | `Function`  |  | &nbsp; |




##### Returns


- `any`  this.value




### src/deps/traversers/eq.js


#### traverse() 

eslint eqeqeq: "off"






##### Returns


- `Void`



#### module.exports() 

prettier-ignore






##### Returns


- `Void`




### src/deps/validators/error.js


#### if() 

istanbul ignore next: dev






##### Returns


- `Void`



#### if() 

istanbul ignore next: dev






##### Returns


- `Void`




### src/deps/validators/validatorFactory.js


#### is(validators) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| validators | `Object`  |  | &nbsp; |




##### Returns


- `Void`



#### validationKeys() 

prettier-ignore






##### Returns


- `Void`



#### factory(fullKey) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| fullKey | `string` `Function` `Primitive`  |  | &nbsp; |




##### Returns


- `Function`  




### src/FactoryChain.js


#### new FactoryChain() 








##### Returns


- `Void`



#### FactoryChain.chainUpDowns(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `Array.<string>`  |  | &nbsp; |




##### Returns


- `FactoryChain`  @chainable



#### FactoryChain.props(names) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| names | `Array.<string>`  |  | &nbsp; |




##### Returns


- `FactoryChain`  @chainable



#### FactoryChain.prop(name[, cb&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `Primitive`  |  | &nbsp; |
| cb&#x3D;undefined | `Function`  |  | *Optional* |




##### Returns


- `FactoryChain`  @chainable



#### FactoryChain.getData([prop&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prop&#x3D;undefined | `any`  | key of the data, or returns all data | *Optional* |




##### Returns


- `any`  



#### factory([obj&#x3D;{}]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj&#x3D;{} | `Object`  |  | *Optional* |




##### Returns


- `FactoryChain`  @chainable




### src/MergeChain.js


#### new MergeChain() 








##### Returns


- `Void`



#### MergeChain.init(parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Chainable`  | required, for merging | &nbsp; |




##### Returns


- `MergeChain`  @chainable



#### MergeChain.constructor() 








##### Returns


- `Void`



#### merger(opts) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| opts | `Object` `Function`  |  | &nbsp; |




##### Examples

```javascript
{
  stringToArray: true,
  boolToArray: false,
  boolAsRight: true,
  ignoreTypes: ['null', 'undefined', 'NaN'],
  debug: false,
}
```
```javascript
 .merger(require('lodash.mergewith')())
```


##### Returns


- `MergeChain`  @chainable



#### merge(obj2) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj2 | `Object`  | object to merge in | &nbsp; |




##### Returns


- `MergeChain`  @chainable




### src/MethodChain.js


#### new MethodChain() 








##### Returns


- `Void`



#### this.name(methods) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| methods | `string` `Object` `Array.<string>`  |  | &nbsp; |




##### Returns


- `MethodChain`  



#### if() 








##### Returns


- `Void`



#### schema(obj) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| obj | `Object`  | schema | &nbsp; |




##### Returns


- `MethodChain`  @chainable



#### build([returnValue&#x3D;undefined]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| returnValue&#x3D;undefined | `any`  | returned at the end of the function for ease of use | *Optional* |




##### Returns


- `MethodChain`  @chainable



#### _defaults(name, parent, built) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `Primitive`  |  | &nbsp; |
| parent | `Object`  |  | &nbsp; |
| built | `Object`  |  | &nbsp; |




##### Returns


- `Void`



#### _build(name, parent) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `Primitive`  |  | &nbsp; |
| parent | `Object`  |  | &nbsp; |




##### Returns


-  



#### if() 

istanbul ignore next: dev






##### Returns


- `Void`



#### if() 

istanbul ignore next: dev






##### Returns


- `Void`



#### decorate(parentToDecorate) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parentToDecorate | `Object`  |  | &nbsp; |




##### Returns


- `ChainedMap`  @chainable



#### autoIncrement() 








##### Returns


- `MethodChain`  @chainable




### src/TraverseChain.js


#### module.exports() 








##### Returns


- `Void`



#### constructor() 








##### Returns


- `Void`



#### traverse([shouldReturn&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| shouldReturn&#x3D;false | `boolean`  | returns object | *Optional* |




##### Returns


- `any`  this.obj/data cleaned



#### traversed() 








##### Returns


- `Object` `Array` `any`  




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
