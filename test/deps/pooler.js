const addPoolingTo = require('../../src/deps/cache/pooler')
const isFunction = require('../../src/deps/is/function')
const isArray = require('../../src/deps/is/array')
const isNumber = require('../../src/deps/is/number')

test('pooling', () => {
  // expect.assertions(5)
  let count = 0

  function Eh() {
    this.count = this.count || count
    count = count + 1
    this.canada = true
  }

  // expect this is called
  Eh.prototype.destructor = function() {
    this.canada = undefined
    // expect(this.canada).toBe(undefined)
  }

  addPoolingTo(Eh)

  expect(isFunction(Eh.release)).toBe(true)
  expect(isFunction(Eh.getPooled)).toBe(true)
  expect(isArray(Eh.instancePool)).toBe(true)
  expect(isNumber(Eh.poolSize)).toBe(true)

  const eh = Eh.getPooled()
  const eh2 = Eh.getPooled()
  expect(Eh.instancePool.length).toBe(0)

  // back into the pool
  Eh.release(eh)
  expect(Eh.instancePool.length).toBe(1)

  // again
  Eh.release(eh2)
  expect(Eh.instancePool.length).toBe(2)

  // back out of the pool
  const eh3 = Eh.getPooled()
  expect(Eh.instancePool.length).toBe(1)
  expect(eh3 instanceof Eh).toBe(true)

  Eh.release(eh3)

  // we used 3 times
  expect(count).toBe(3)

  // but we actually created only 2 of them
  // usually we would not leave leftover props, but this is for the test
  expect(Eh.instancePool[0].count).toBe(0)
  expect(Eh.instancePool[1].count).toBe(1)
})
