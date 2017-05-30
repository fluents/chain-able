[map]: https://ponyfoo.com/articles/es6-maps-in-depth
[compose]: https://github.com/fluents/chain-able/wiki/Compose

<!-- link to properties in docs of mozilla and such for each map or copy their definitions -->

# common interface

these core functions call `chain.store`, when updating the `store`, `this` is returned, otherwise the value is returned

👍👎 the general rule of thumb is:
- is it a list? use `Set`
- otherwise... use `Map`


# ⛓ Chainable

<!-- ##### `.clear(): Chain` [🔗 docs][clear]

##### `.delete(): Chain` [🔗 docs][delete]
 -->
[delete]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
[clear]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
[has]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
[get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get

<!--
##### `.has(key): boolean` [🔗 docs][has]
| Name | Type | Required  |
| ---- |  ----------- | -------- |
| key | string / any | true |


##### `.set(key, value): Chain` [🔗 docs][set]
| Name | Type | Required  |
| ---- |  ----------- | -------- |
| key | string / any | true |
| value | any | true |

##### `.get(key): any` [🔗 docs][get]
| Name | Type | Required  |
| ---- |  ----------- | -------- |
| key | string / any | true |


| Name | Type | Description | Returns  |
| ---- | ---- | ----------- | -------- |
| delete | <code>string &#124; Array&lt;string&gt;</code> | clear the .store | Chain | -->

<!--
clean:
* @desc goes through the maps,
*       and the map values,
*       reduces them to array
*       then to an object using the reduced values -->
[merge]: https://github.com/fluents/chain-able/wiki/merge

#### Map & Set .store wrappers
- clear(): `Chain` _clears the store, resets to empty_
- values(): `[index: value]` _spreads the entries from ChainedMap.store.values_
- delete(): `Chain`
- has(`key`): `bool`

#### chaining specials
- [.parent](./parent)
- compose([`Classes`, `Objects`]): `Chain` [example](#-compose)
- end(): [`Chain.parent`](parent)
- when(`condition`, `onTrue`, `onFalse`):
  ```js
  const prod = process.env.NODE_ENV === 'production'
  chains.when(prod, c => c.set('prod', true), c => c.set('prod', false))
  ```
  <!-- _when the condition is true,_
  _trueBrancher is called,_
  _else, falseBrancher is called_ -->
- [.merge & .from][merge]
