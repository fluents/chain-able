const test = require('ava')
const stress = require('../_stress')
const {isReal, isBoolean, isNumber, isString} = require('./')

test('should work for undefined', t => {
  t.false(isReal(undefined))
  t.true(isReal(true))
  stress(isReal)
})

test('should work for null', t => {
  t.false(isReal(null))
})

test('should work for booleans', t => {
  t.true(isBoolean(true))
  t.true(isBoolean(false))
  t.true(isBoolean(new Boolean(true)))
  stress(isBoolean)
})

test('should work for numbers', t => {
  t.true(isNumber(42))
  t.true(isNumber(new Number(42)))
  stress(isNumber)
})

test('should work for strings', t => {
  t.true(isString('str'))
  t.true(isString(new String('str')))
  stress(isString)
})

test('should work for template strings', t => {
  var str = `Welcome buddy`
  t.true(isString(str))
})
