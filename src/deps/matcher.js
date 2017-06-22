// https://github.com/sindresorhus/matcher/blob/master/index.js
const toarr = require('./to-arr')
const toRegExp = require('./to-regexp')
const isMatcher = require('./is/matcher')
const ObjectAssign = require('./util/assign')
const cache = require('./cache')

const m = {}

/**
 * @since 3.0.0
 * @param  {Array<string> | string | Function | RegExp} pattern
 * @param  {boolean | undefined} shouldNegate
 * @param  {boolean | undefined} alphaOmega
 * @return {Array<string> | string | Function | RegExp} matchable
 */
m.make = (pattern, shouldNegate, alphaOmega) => {
  if (cache.has(pattern)) return cache.get(pattern)

  let matchable = pattern
  if (isMatcher(matchable) && !matchable.test) matchable.test = matchable
  if (isMatcher(matchable)) return matchable

  let negated = matchable[0] === '!'
  if (negated) matchable = matchable.slice(1)
  matchable = toRegExp(matchable)

  if (negated && shouldNegate) matchable = `(?!${matchable})`
  if (alphaOmega) matchable = `^${matchable}$`

  matchable = new RegExp(`${matchable}`, 'i')
  matchable.negated = negated

  cache.set(pattern, matchable)
  return matchable
}

/**
 * @since 3.0.0
 * @param  {Array<string> | string} inputs
 * @param  {Array<string> | string | Function | RegExp} patterns
 * @param  {boolean | undefined} shouldNegate
 * @param  {boolean | undefined} alphaOmega
 * @return {Array<any>}
 */
m.matcher = (inputs, patterns, shouldNegate, alphaOmega) => {
  patterns = toarr(patterns).map(p => m.make(p, shouldNegate, alphaOmega))
  inputs = toarr(inputs)

  const firstNegated = patterns[0].negated
  const matchesToReturn = []

  for (var i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    // If first pattern is negated we include everything to match user expectation
    let matches = firstNegated
    for (let j = 0; j < patterns.length; j++) {
      if (patterns[j].test(input)) {
        matches = !patterns[j].negated
      }
    }

    if (matches) matchesToReturn.push(input)
  }

  return matchesToReturn
}

module.exports = ObjectAssign(m.matcher, m)
