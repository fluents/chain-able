jest.useFakeTimers()

const _ = require('../../exports')

var done = () => {}
const push = Array.prototype.push

// const _clearTimeout = global.clearTimeout
// const _setTimeout = global.setTimeout
// const restoreTimeout = () => {
//   global.clearTimeout = _clearTimeout
//   global.setTimeout = _setTimeout
// }
// let timeouts = []
// global.clearTimeout = function(index) {
//   console.log({'clearTimeout': index})
//   const [fn, timeout] = timeouts[index]
//   fn()
// }
// global.setTimeout = function(fn, timeout) {
//   timeouts.push([fn, timeout])
//   return timeouts.length
// }
//
// global.callAllTimeouts = function() {
//   timeouts = timeouts.filter(timeout => {
//     timeout()
//     return false
//   })
// }

// https://github.com/jasmine/jasmine.github.io/blob/master/lib/jasmine-1.3.1/jasmine.js
test('should debounce a function', function() {
  expect.assertions(6)

  var callCount = 0

  var debounced = _.debounce(function(value) {
    ++callCount
    return value
  }, 32)

  var results = [debounced('a'), debounced('b'), debounced('c')]
  eq(results, [undefined, undefined, undefined])
  eq(callCount, 0)

  setTimeout(function() {
    eq(callCount, 1)

    var results = [debounced('d'), debounced('e'), debounced('f')]
    eq(results, ['c', 'c', 'c'])
    eq(callCount, 1)
  }, 128)

  setTimeout(function() {
    eq(callCount, 2)
    done()
  }, 256)

  jest.runAllTimers()
})

test('subsequent debounced calls return the last `func` result', function() {
  expect.assertions(2)

  var debounced = _.debounce(_.identity, 32)
  debounced('a')

  setTimeout(function() {
    neq(debounced('b'), 'b')
  }, 64)

  setTimeout(function() {
    neq(debounced('c'), 'c')
    done()
  }, 128)

  jest.runAllTimers()
})

test('should not immediately call `func` when `wait` is `0`', function() {
  expect.assertions(2)

  var callCount = 0
  var debounced = _.debounce(function() { ++callCount }, 0)

  debounced()
  debounced()
  eq(callCount, 0)

  setTimeout(function() {
    eq(callCount, 1)
    done()
  }, 5)

  jest.runAllTimers()
})

test('should apply default options', function() {
  expect.assertions(2)

  var callCount = 0
  var debounced = _.debounce(function() { callCount++ }, 32, {})

  debounced()
  eq(callCount, 0)

  setTimeout(function() {
    eq(callCount, 1)
    done()
  }, 64)

  jest.runAllTimers()
})

test('should support a `leading` option', function() {
  expect.assertions(4)

  var callCounts = [0, 0]

  var withLeading = _.debounce(function() {
    callCounts[0]++
  }, 32, {'leading': true})

  var withLeadingAndTrailing = _.debounce(function() {
    callCounts[1]++
  }, 32, {'leading': true})

  withLeading()
  eq(callCounts[0], 1)

  withLeadingAndTrailing()
  withLeadingAndTrailing()
  eq(callCounts[1], 1)

  setTimeout(function() {
    eq(callCounts, [1, 2])

    withLeading()
    eq(callCounts[0], 2)

    done()
  }, 64)

  jest.runAllTimers()
})

test('subsequent leading debounced calls return the last `func` result', function() {
  expect.assertions(2)


  var debounced = _.debounce(_.identity, 32, {'leading': true, 'trailing': false})
  var results = [debounced('a'), debounced('b')]

  eq(results, ['a', 'a'])

  setTimeout(function() {
    var results = [debounced('c'), debounced('d')]
    eq(results, ['c', 'c'])
    done()
  }, 64)

  jest.runAllTimers()
})

test('should support a `trailing` option', function() {
  expect.assertions(4)

  var withCount = 0
  var withoutCount = 0

  var withTrailing = _.debounce(function() {
    withCount++
  }, 32, {'trailing': true})

  var withoutTrailing = _.debounce(function() {
    withoutCount++
  }, 32, {'trailing': false})

  withTrailing()
  eq(withCount, 0)

  withoutTrailing()
  eq(withoutCount, 0)

  setTimeout(function() {
    eq(withCount, 1)
    eq(withoutCount, 0)
    done()
  }, 64)

  jest.runAllTimers()
})

test('should support a `maxWait` option', function() {
  expect.assertions(4)


  var callCount = 0

  var debounced = _.debounce(function(value) {
    ++callCount
    return value
  }, 32, {'maxWait': 64})

  debounced()
  debounced()
  eq(callCount, 0)

  setTimeout(function() {
    eq(callCount, 1)
    debounced()
    debounced()
    eq(callCount, 1)
  }, 128)

  setTimeout(function() {
    eq(callCount, 2)
    done()
  }, 256)

  jest.runAllTimers()
})

test('should support `maxWait` in a tight loop', function() {
  expect.assertions(1)


  //  (argv || isPhantom) ? 1000 :
  var limit = 320
  var withCount = 0
  var withoutCount = 0

  var withMaxWait = _.debounce(function() {
    withCount++
  }, 64, {'maxWait': 128})

  var withoutMaxWait = _.debounce(function() {
    withoutCount++
  }, 96)

  var start = +new Date()
  while ((new Date() - start) < limit) {
    withMaxWait()
    withoutMaxWait()
  }
  var actual = [Boolean(withoutCount), Boolean(withCount)]
  setTimeout(function() {
    eq(actual, [false, true])
    done()
  }, 1)

  jest.runAllTimers()
})

console.log('@TODO queue')
test.skip('should queue a trailing call for subsequent debounced calls after `maxWait`', function() {
  expect.assertions(1)

  var callCount = 0

  var debounced = _.debounce(function() {
    ++callCount
  }, 200, {'maxWait': 200})

  debounced()

  setTimeout(debounced, 190)
  setTimeout(debounced, 200)
  setTimeout(debounced, 210)

  setTimeout(function() {
    eq(callCount, 2)
    done()
  }, 500)

  jest.runAllTimers()
})

console.log('@TODO maxDelayed - jest changes times for it')

test.skip('should cancel `maxDelayed` when `delayed` is invoked', function() {
  expect.assertions(2)

  var callCount = 0

  var debounced = _.debounce(function() {
    callCount++
  }, 32, {'maxWait': 64})

  debounced()

  setTimeout(function() {
    debounced()
    eq(callCount, 1)
  }, 128)

  setTimeout(function() {
    eq(callCount, 2)
    done()
  }, 192)

  jest.runAllTimers()
})

test('should invoke the trailing call with the correct arguments and `this` binding', function() {
  expect.assertions(2)

  var actual
  var callCount = 0
  var object = {}

  var debounced = _.debounce(function(value) {
    actual = [this]
    push.apply(actual, arguments)
    return ++callCount != 2
  }, 32, {'leading': true, 'maxWait': 64})

  // @HACK
  while (true) {
    if (!debounced.call(object, 'a')) {
      break
    }
  }
  setTimeout(function() {
    eq(callCount, 2)
    eq(actual, [object, 'a'])
    done()
  }, 64)

  jest.runAllTimers()
})
