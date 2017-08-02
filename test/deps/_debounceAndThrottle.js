jest.useFakeTimers()

const _ = require('../../exports')

const push = Array.prototype.push

_.forEach(['debounce', 'throttle'], function(methodName) {
  var func = _[methodName]
  var isDebounce = methodName === 'debounce'

  const recursive = '`_.' + methodName + '` supports recursive calls'
  const shouldNotErrWithoutOpts = '`_.' + methodName + '` should not error for non-object `options` values'
  const default0 = '`_.' + methodName + '` should use a default `wait` of `0`'
  const rightContext = '`_.' +
    methodName +
    '` should invoke `func` with the correct `this` binding'
  const cancelDelayed = '`_.' + methodName + '` should support cancelling delayed calls'
  const reset = '`_.' + methodName + '` should reset `lastCalled` after cancelling'
  const flushing = '`_.' + methodName + '` should support flushing delayed calls'
  const cancelAndNoop = '`_.' +
    methodName +
    '` should noop `cancel` and `flush` when nothing is queued'


  test(shouldNotErrWithoutOpts, function() {
    expect.assertions(1)

    func(_.noop, 32, 1)
    expect(true).toBeTruthy()
  })

  test(default0, function() {
    expect.assertions(1)

    var callCount = 0
    var funced = func(() => callCount++)

    funced()

    setTimeout(function() {
      funced()
      eq(callCount, isDebounce ? 1 : 2)
      // done()
    }, 32)

    jest.runAllTimers()
  })

  test(rightContext, function() {
    expect.assertions(1)

    var actual = []
    var object = {
      funced: func(function() {
        actual.push(this)
      }, 32),
    }
    var expected = _.times(isDebounce ? 1 : 2, _.always(object))

    object.funced()
    if (!isDebounce) {
      object.funced()
    }

    setTimeout(function() {
      eq(actual, expected)
      // done()
    }, 64)

    jest.runAllTimers()
  })

  test(recursive, function() {
    expect.assertions(2)

    var actual = []
    console.log('mapping strings?')
    var args = _.map(['a', 'b', 'c'], letter => [{}, letter])
    console.log('uh oh')
    var expected = args.slice()
    var queue = args.slice()

    console.log({args, actual})

    var funced = func(function() {
      var current = [this]
      push.apply(current, arguments)
      actual.push(current)

      var next = queue.shift()
      if (next) {
        funced.call(next[0], next[1])
      }
    }, 32)

    console.log({args, actual})

    var next = queue.shift()
    funced.call(next[0], next[1])
    eq(actual, expected.slice(0, isDebounce ? 0 : 1))

    setTimeout(function() {
      eq(actual, expected.slice(0, actual.length))
      // done()
    }, 256)

    jest.runAllTimers()
  })

  test(cancelDelayed, function() {
    expect.assertions(1)

    var callCount = 0

    var funced = func(
      () => callCount++,
      32,
      {leading: false}
    )

    funced()
    funced.cancel()

    setTimeout(function() {
      eq(callCount, 0)
      // done()
    }, 64)

    jest.runAllTimers()
  })


  test(reset, function() {
    expect.assertions(3)

    var callCount = 0

    var funced = func(
      () => ++callCount,
      32,
      {leading: true}
    )

    eq(funced(), 1)
    funced.cancel()

    eq(funced(), 2)
    funced()

    setTimeout(function() {
      eq(callCount, 3)
      // done()
    }, 64)

    jest.runAllTimers()
  })


  test(flushing, function() {
    expect.assertions(2)

    var callCount = 0

    var funced = func(
      () => ++callCount,
      32,
      {leading: false}
    )

    funced()
    eq(funced.flush(), 1)

    setTimeout(function() {
      eq(callCount, 1)
      // done()
    }, 64)

    jest.runAllTimers()
  })

  test(cancelAndNoop, function() {
    expect.assertions(2)

    var callCount = 0
    var funced = func(() => callCount++, 32)

    funced.cancel()
    eq(funced.flush(), undefined)

    setTimeout(function() {
      eq(callCount, 0)
      // done()
    }, 64)

    jest.runAllTimers()
  })
})
