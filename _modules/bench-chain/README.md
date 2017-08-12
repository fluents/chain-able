# 🏋️⛓ bench-chain

> chainable benchmark recording - averages & graphs.

[![Build Status][travis-image]][travis-url]
[![NPM version][bench-chain-npm-image]][bench-chain-npm-url]
[![MIT License][license-image]][license-url]
[![bench-chain][gitter-badge]][gitter-url]
[![Dependencies][david-deps-img]][david-deps-url]
[![fluents][fluents-image]][fluents-url]

[fluents-image]: https://img.shields.io/badge/⛓-fluent-9659F7.svg
[fluents-url]: https://www.npmjs.com/package/flipchain

[bench-chain-npm-image]: https://img.shields.io/npm/v/bench-chain.svg
[bench-chain-npm-url]: https://npmjs.org/package/bench-chain
[license-image]: http://img.shields.io/badge/license-mit-blue.svg?style=flat
[license-url]: https://spdx.org/licenses/mit
[gitter-badge]: https://img.shields.io/gitter/room/bench-chain/pink.svg
[gitter-url]: https://gitter.im/bench-chain/Lobby

[travis-image]: https://travis-ci.org/${org}/bench-chain.svg?branch=master
[travis-url]: https://travis-ci.org/bench-chain/bench-chain

[david-deps-img]: https://david-dm.org/bench-chain/bench-chain.svg
[david-deps-url]: https://david-dm.org/bench-chain/bench-chain

<img width="1199" alt="screen shot 2017-04-24 at 5 51 21 am" src="https://cloud.githubusercontent.com/assets/4022631/25358171/616dcc44-28f5-11e7-80ab-883ce5a9ae9a.png">

<!--
[![Standard JS Style][standard-image]][standard-url]
[standard-image]: https://img.shields.io/badge/%F0%9F%91%95%20code%20style-standard%2Bes6+-blue.svg
[standard-url]: https://github.com/aretecode/eslint-config-aretecode
-->

extension of [benchmark.js](https://benchmarkjs.com/)

## 📦 install
```bash
yarn add bench-chain
npm i bench-chain --save
```

```js
const Bench = require('bench-chain')
```

## [🌐 documentation](./docs)
## [🔬 tests](./tests)
## [📘 examples](./examples)

### 👋 basic
```js
const Bench = require('bench-chain')

Bench
  // location to store benchmarks
  .init(__dirname, 'basic.json')
  // tag current benchmarks with, to mark what changes caused differences
  .tags('v1')
  // actual benchmarks
  .add('1 * 1', () => 1 * 1)
  .add('1 + 1', () => 1 + 1)
  .run()
```

### 💍 async
```js
const Bench = require('bench-chain')

const sleep = sleepDuration => new Promise(resolve => setTimeout(resolve, sleepDuration))

Bench
  .init().dir(__dirname).filename('asyncs.json').setup()
  .name('sleepy')
  .tags('v1,v2')

  // can also use .add, and then .runAsync()
  .addAsync('sleep1', async done => {
    await sleep(1000)
    done()
  })
  .addAsync('sleep2', async done => {
    await sleep(2000)
    done()
  })
  .run()
```


### 🚩 flags

[using funwithflags](https://github.com/aretecode/funwithflags)

* `--graph` will show only the graph reporting, rather than run the benchmarks
* `--run-times=10` will run the test `10` times


### 📇 metadata

<details>
  <summary>🔋 battery parsing when available</summary>
  - will be used for comparing more benchmark results with averages
  - amperage (number)
  - currentCapacity (number)
  - percent (number)
  - charging (boolean)
  - temp (number)
</details>

- **mem**: operating system memory, nodejs memory
- **num**: operations a second from benchmarkjs hertz
- **sampled**: total runs samples from benchmarkjs
- **variation**: variation from benchmarkjs
- **timesFor**: microtime | performance.now times for beginning & end of each run
- **now**: Date.now for changes over time

### graphs for trends and variation

<img width="1024" alt="screen shot 2017-04-29 at 9 08 50 pm" src="https://cloud.githubusercontent.com/assets/4022631/25561422/1aede9b4-2d20-11e7-8da3-9573ebecefa7.png">


### grouped by tags

<img width="571" alt="screen shot 2017-05-01 at 5 45 33 am" src="https://cloud.githubusercontent.com/assets/4022631/25579961/7348f63c-2e31-11e7-8195-ae928c411c31.png">


### progress bars
![digress progress](https://cloud.githubusercontent.com/assets/4022631/25579989/ac2dc194-2e31-11e7-832b-75fa16b241e3.gif)



<!-- ### in the wild -->
