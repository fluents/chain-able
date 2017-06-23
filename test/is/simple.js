const test = require('ava')
const stress = require('../_stress')
const {isObj, isDate, isRegExp, isArray, isError, isFunction} = require('./')

test('should work for objects', t => {
  function Test() {}
  var instance = new Test()
  var literal = {}
  var create = Object.create(null)

  t.true(isObj(instance))
  t.true(isObj(literal))
  t.true(isObj(create))
  stress(isObj)
})

test('should work for dates', t => {
  t.true(isDate(new Date()))
  stress(isDate)
})

test('should work for arrays', t => {
  t.true(isArray([]))
  t.true(isArray([1, 2, 3]))
  t.true(isArray(new Array()))
  stress(isArray)
})

test('should work for regular expressions', t => {
  t.true(isRegExp(/[\s\S]+/))
  t.true(isRegExp(new RegExp('^' + 'foo$')))
  stress(isRegExp)
})

test('should work for functions', t => {
  t.true(isFunction(t => {}))
  t.true(isFunction(new Function()))
  stress(isFunction)
})

test('should work for Errors', t => {
  t.true(isError(new Error('')))
  stress(isError)
})
