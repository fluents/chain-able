// https://github.com/sindresorhus/matcher/blob/master/index.js
const toarr = require('./to-arr')
const toRegExp = require('./to-regexp')
const isMatcher = require('./is/matcher')

// const toarr = x => [].concat(x)
// const escapeStringRegexp = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
// const toRegExp = pattern => escapeStringRegexp(pattern).replace(/\\\*/g, '.*')
// const isMatcher = x =>
//   typeof x === 'function' || x instanceof Function || x instanceof RegExp

const m = {}

m.make = (pattern, shouldNegate, alphaOmega) => {
  if (isMatcher(pattern) && !pattern.test) pattern.test = pattern
  if (isMatcher(pattern)) return pattern

  let negated = pattern[0] === '!'
  if (negated) pattern = pattern.slice(1)
  pattern = toRegExp(pattern)

  if (negated && shouldNegate) pattern = `(?!${pattern})`
  if (alphaOmega) pattern = `^${pattern}$`

  let re = new RegExp(`${pattern}`, 'i')
  re.negated = negated
  return re
}

m.matcher = (inputs, patterns, shouldNegate, alphaOmega) => {
  patterns = toarr(patterns).map(p => m.make(p, shouldNegate, alphaOmega))
  const firstNegated = patterns[0].negated
  const matchesToReturn = []

  toarr(inputs).forEach(input => {
    // If first pattern is negated we include everything to match user expectation
    let matches = firstNegated
    for (let j = 0; j < patterns.length; j++) {
      if (patterns[j].test(input)) {
        matches = !patterns[j].negated
      }
    }

    if (matches) matchesToReturn.push(input)
  })

  return matchesToReturn
}

module.exports = Object.assign(m.matcher, m)
