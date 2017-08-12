#  



### src/index.js


#### flow(funcs) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| funcs | `Array.&lt;Function&gt;`  | functions to flow left to right | &nbsp; |




##### Returns


- `Function`  passes args through the functions, bound to this



#### module.exports() 








##### Returns


- `Void`



#### formatNumber(number) 

Converts a number to a more readable comma-separated string representation.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| number | `number`  | The number to convert. | &nbsp; |




##### Returns


- `string`  The more readable string representation.



#### constructor(dir) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| dir | `string`  | directory for the file with the record | &nbsp; |




##### Returns


- `Void`



#### cycle(event)  *private method*






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| event | `Benchmark.Event`  |  | &nbsp; |




##### Returns


- `Record`  @chainable



#### filename() 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| filename&#x3D;&#x27;./results.json&#x27; | `String`  |  | *Optional* |




##### Returns


- `Record`  @chainable



#### load([force&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| force&#x3D;false | `Boolean`  | force reload | *Optional* |




##### Returns


- `Record`  @chainable



#### save() 








##### Returns


- `Record`  @chainable



#### getDiv(max) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| max | `number`  |  | &nbsp; |




##### Returns


- `number`  



#### trend() 








##### Returns


- `Object.&lt;points, max, min&gt;`  trend graph data



#### avgs(prop) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| prop | `string`  | map to this property to average with that data | &nbsp; |




##### Returns


- `Averages`  averages



#### avg(data) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data | `Array.&lt;number&gt;`  |  | &nbsp; |




##### Returns


- `number`  average



#### fastest() 








##### Returns


- `Array.&lt;string&gt;`  test case name



#### echoAvgs() 








##### Returns


- `Record`  @chainable



#### echoFastest() 








##### Returns


- `Record`  @chainable



#### echoTrend() 








##### Returns


- `Record`  @chainable



#### suite(dir[, auto&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| dir | `string`  |  | &nbsp; |
| auto&#x3D;false | `Boolean`  |  | *Optional* |




##### Returns


- `Object`  {suite, record}



#### suite([auto&#x3D;false]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| auto&#x3D;false | `Boolean`  |  | *Optional* |




##### Returns


- `Benchmark.Suite`  



#### setup([auto&#x3D;true]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| auto&#x3D;true | `Boolean`  | automatically sets up echoing and saving | *Optional* |




##### Returns


- `Record`  @chainable



#### add(name, cb) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  |  | &nbsp; |
| cb | `Function`  |  | &nbsp; |




##### Returns


- `Record`  @chainable



#### run(async) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| async | `boolean`  |  | &nbsp; |




##### Returns


- `Record`  @chainable



#### runAsync(async) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| async | `boolean`  |  | &nbsp; |




##### Returns


- `Record`  @chainable



#### runTimes([times&#x3D;10]) 






##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| times&#x3D;10 | `Number`  |  | *Optional* |




##### Returns


- `Record`  @chainable




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
