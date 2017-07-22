var reverse = require('../../src/deps/fp/reverse')

var eq = (x, y) => expect(x).toEqual(y)

test('reverses arrays', function() {
  eq(reverse([]), [])
  eq(reverse([1]), [1])
  eq(reverse([1, 2]), [2, 1])
  eq(reverse([1, 2, 3]), [3, 2, 1])
})

test('reverses strings', function() {
  eq(reverse(''), '')
  eq(reverse('a'), 'a')
  eq(reverse('ab'), 'ba')
  eq(reverse('abc'), 'cba')
})
