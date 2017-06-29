const stress = require('../_stress')
const {isReal, isBoolean, isNumber, isString} = require('./')

test('should work for undefined', () => {
  expect(isReal(undefined)).toBe(false)
  expect(isReal(true)).toBe(true)
  stress(isReal)
})

test('should work for null', () => {
  expect(isReal(null)).toBe(false)
})

test('should work for booleans', () => {
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(new Boolean(true))).toBe(true)
  stress(isBoolean)
})

test('should work for numbers', () => {
  expect(isNumber(42)).toBe(true)
  expect(isNumber(new Number(42))).toBe(true)
  stress(isNumber)
})

test('should work for strings', () => {
  expect(isString('str')).toBe(true)
  expect(isString(new String('str'))).toBe(true)
  stress(isString)
})

test('should work for template strings', () => {
  var str = `Welcome buddy`
  expect(isString(str)).toBe(true)
})
