jest.useFakeTimers()

const _ = require('../../exports')

test('should throttle a function', function() {
  expect.assertions(2)

  var callCount = 0
  var throttled = _.throttle(() => callCount++, 32)

  throttled()
  throttled()
  throttled()

  var lastCount = callCount
  expect(callCount).toBeTruthy()

  setTimeout(function() {
    expect(callCount > lastCount).toBeTruthy()
    // done()
  }, 64)

  jest.runAllTimers()
})

console.log('@TODO fix jest here')
test.skip('subsequent calls should return the result of the first call', function() {
  expect.assertions(5)

  var throttled = _.throttle(_.identity, 32)
  var results = [throttled('a'), throttled('b')]

  eq(results, ['a', 'a'])

  setTimeout(function() {
    var timeoutResults = [throttled('c'), throttled('d')]
    neq(timeoutResults[0], 'a')
    eq(timeoutResults[0], 'c')

    neq(timeoutResults[1], 'd')
    eq(timeoutResults[1], 'c')
    // done()
  }, 64)

  jest.runAllTimers()
})

test('should clear timeout when `func` is called', function() {
  expect.assertions(1)

  var callCount = 0
  var dateCount = 0

  // var lodash = _.runInContext({
  //   'Date': {
  //     'now': function() {
  //       return ++dateCount == 5 ? Infinity : +new Date()
  //     },
  //   },
  // })

  var throttled = _.throttle(() => callCount++, 32)

  throttled()
  throttled()

  setTimeout(function() {
    eq(callCount, 2)
    // done()
  }, 64)

  jest.runAllTimers()
})

test('should not trigger a trailing call when invoked once', function() {
  expect.assertions(2)

  var callCount = 0
  var throttled = _.throttle(() => callCount++, 32)

  throttled()
  eq(callCount, 1)

  setTimeout(function() {
    eq(callCount, 1)
    // done()
  }, 64)

  jest.runAllTimers()
})

_.times(2, function(index) {
  test(
    'should trigger a call when invoked repeatedly' +
      (index ? ' and `leading` is `false`' : ''),
    function() {
      expect.assertions(1)

      var callCount = 0,
        // (argv || isPhantom) ? 1000 :
        limit = 320,
        options = index ? {leading: false} : {},
        throttled = _.throttle(
          function() {
            callCount++
          },
          32,
          options
        )

      var start = +new Date()
      while (new Date() - start < limit) {
        throttled()
      }
      var actual = callCount > 1
      setTimeout(function() {
        expect(actual).toBeTruthy()
        // done()
      }, 1)

      jest.runAllTimers()
    }
  )
})

// off with mock timers?
test.skip('should trigger a second throttled call as soon as possible', function() {
  expect.assertions(3)

  var callCount = 0

  var throttled = _.throttle(
    () => callCount++,
    128,
    {leading: false}
  )

  throttled()

  setTimeout(function() {
    eq(callCount, 1)
    throttled()
  }, 192)

  jest.runAllTimers()

  setTimeout(function() {
    eq(callCount, 1)
  }, 254)

  jest.runAllTimers()

  // would wait until 3rd call but is not full timeout...
  setTimeout(function() {
    eq(callCount, 2)
    // done()
  }, 384)

  jest.runAllTimers()
})

test('should apply default options', function() {
  expect.assertions(2)

  var callCount = 0
  var throttled = _.throttle(
    function() {
      callCount++
    },
    32,
    {}
  )

  throttled()
  throttled()
  eq(callCount, 1)

  setTimeout(function() {
    eq(callCount, 2)
    // done()
  }, 128)

  jest.runAllTimers()
})

test('should support a `leading` option', function() {
  expect.assertions(2)

  var withLeading = _.throttle(_.identity, 32, {leading: true})
  eq(withLeading('a'), 'a')

  var withoutLeading = _.throttle(_.identity, 32, {leading: false})
  eq(withoutLeading('a'), undefined)

  jest.runAllTimers()
})

test('should support a `trailing` option', function() {
  expect.assertions(6)

  var withCount = 0
  var withoutCount = 0

  var withTrailing = _.throttle(
    function(value) {
      withCount++
      return value
    },
    64,
    {trailing: true}
  )

  var withoutTrailing = _.throttle(
    function(value) {
      withoutCount++
      return value
    },
    64,
    {trailing: false}
  )

  eq(withTrailing('a'), 'a')
  eq(withTrailing('b'), 'a')

  eq(withoutTrailing('a'), 'a')
  eq(withoutTrailing('b'), 'a')

  setTimeout(function() {
    eq(withCount, 2)
    eq(withoutCount, 1)
    // done()
  }, 256)

  jest.runAllTimers()
})

test('should not update `lastCalled`, at the end of the timeout, when `trailing` is `false`', function() {
  expect.assertions(1)

  var callCount = 0

  var throttled = _.throttle(
    () => callCount++,
    64,
    {trailing: false}
  )

  throttled()
  throttled()

  setTimeout(function() {
    throttled()
    throttled()
  }, 96)

  setTimeout(function() {
    expect(callCount > 1).toBeTruthy()
    // done()
  }, 192)

  jest.runAllTimers()
})

test.skip('should work with a system time of `0`', function() {
  expect.assertions(3)

  // if (!isModularize) {
  //   var callCount = 0,
  //     dateCount = 0
  //
  //   var lodash = _.runInContext({
  //     'Date': {
  //       'now': function() {
  //         return ++dateCount < 4 ? 0 : +new Date()
  //       },
  //     },
  //   })
  //
  //   var throttled = lodash.throttle(function(value) {
  //     callCount++
  //     return value
  //   }, 32)
  //
  //   var results = [throttled('a'), throttled('b'), throttled('c')]
  //   eq(results, ['a', 'a', 'a'])
  //   eq(callCount, 1)
  //
  //   setTimeout(function() {
  //     eq(callCount, 2)
  //     // done()
  //   }, 64)
  // }
  // else {
  //   skipAssert(assert, 3)
  //   // done()
  // }
  // jest.runAllTimers()
})
