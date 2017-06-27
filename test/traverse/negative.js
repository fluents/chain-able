var traverse = require('./')

test('negative update test', () => {
  var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]
  var fixed = traverse.map(obj, function(x) {
    if (x < 0) this.update(x + 128)
  })

  expect(fixed).toEqual([5, 6, 125, [7, 8, 126, 1], {f: 10, g: 115}])

  expect(obj).toEqual([5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}])
})
