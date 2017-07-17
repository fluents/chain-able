var traverse = require('./')

test('stringify', () => {
  var obj = [5, 6, -3, [7, 8, -2, 1], {f: 10, g: -13}]

  var s = ''
  traverse(obj).forEach(function(node) {
    if (Array.isArray(node)) {
      this.before(() => {
        s += '['
      })
      this.post(child => {
        if (!child.isLast) s += ','
      })
      this.after(() => {
        s += ']'
      })
    }
    else if (typeof node === 'object') {
      this.before(() => {
        s += '{'
      })
      this.pre((x, key) => {
        s += '"' + key + '"' + ':'
      })
      this.post(child => {
        if (!child.isLast) s += ','
      })
      this.after(() => {
        s += '}'
      })
    }
    else if (typeof node === 'function') {
      s += 'null'
    }
    else {
      s += node.toString()
    }
  })

  expect(s).toEqual(JSON.stringify(obj))
})
