var traverse = require('./')

test('dateEach', () => {
  var obj = {x: new Date(), y: 10, z: 5}

  var counts = {}

  traverse(obj).forEach(node => {
    var time = (node instanceof Date && 'Date') || typeof node
    counts[time] = (counts[time] || 0) + 1
  })

  expect(counts).toEqual({
    object: 1,
    Date: 1,
    number: 2,
  })
})

test('dateMap', () => {
  var obj = {x: new Date(), y: 10, z: 5}

  var res = traverse(obj).map(function(node) {
    if (typeof node === 'number') this.update(node + 100)
  })

  expect(obj.x !== res.x).toBeTruthy()
  expect(res).toEqual({
    x: obj.x,
    y: 110,
    z: 105,
  })
})
