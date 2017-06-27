const stress = require('../_stress')
const {isObj, isDate, isRegExp, isArray, isError, isFunction} = require('./')

test('should work for objects', () => {
  function Test() {}
  var instance = new Test()
  var literal = {}
  var create = Object.create(null)

  expect(isObj(instance)).toBe(true)
  expect(isObj(literal)).toBe(true)
  expect(isObj(create)).toBe(true)
  stress(isObj)
})

test('should work for dates', () => {
  expect(isDate(new Date())).toBe(true)
  stress(isDate)
})

test('should work for arrays', () => {
  expect(isArray([])).toBe(true)
  expect(isArray([1, 2, 3])).toBe(true)
  expect(isArray(new Array())).toBe(true)
  stress(isArray)
})

test('should work for regular expressions', () => {
  expect(isRegExp(/[\s\S]+/)).toBe(true)
  expect(isRegExp(new RegExp('^' + 'foo$'))).toBe(true)
  stress(isRegExp)
})

test('should work for functions', () => {
  expect(isFunction(t => {})).toBe(true)
  expect(isFunction(new Function())).toBe(true)
  stress(isFunction)
})

test('should work for Errors', () => {
  expect(isError(new Error(''))).toBe(true)
  stress(isError)
})
