/**
 * @member matcher
 * @see https://github.com/sindresorhus/matcher/blob/master/index.js
 */

const toarr = require('./to-arr')
const toRegExp = require('./to-regexp')
const isMatcher = require('./is/matcher')
const ObjectAssign = require('./util/assign')
const cache = require('./cache')

const m = {}

/**
 * @desc turn any string[], function[], or RegExp[] into a matcher
 * @memberOf matcher
 * @since 3.0.0
 *
 * @param  {Array<string> | string | Function | RegExp} pattern a matchable pattern
 * @param  {boolean | undefined} shouldNegate turn into a negated regex
 * @param  {boolean | undefined} alphaOmega should have regex start at the beginning and the end
 * @return {Array<string> | string | Function | RegExp} matchable
 *
 * @example
 *
 *    matcher.make('*')
 *    //=> RegExp('.*', 'i')
 *
 * @example
 *
 *    var any = new RgExp('.*', 'i')
 *    matcher.make(any)
 *    //=> any
 *
 * @example
 *
 *    var strings = x => typeof x === 'string'
 *    matcher.make(strings)
 *    // {test: strings}
 *
 * @example
 *
 *    var tester = {test: x => x === true}
 *    matcher.make(tester)
 *    // tester
 *
 * @example
 *
 *    var noName = '!name'
 *    matcher.make(noName, true)
 *    // new RegExp('(?:name)', 'i')
 *
 * @example
 *
 *    var noName = '!name'
 *    matcher.make(noName, true, true)
 *    // new RegExp('^(?:name)$', 'i')
 *
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
 * @desc same as .make but also accepts inputs, and returns an array
 * @param  {Array<string> | string} inputs input to use patterns as predicates on
 * @param  {Array<string> | string | Function | RegExp} patterns predicates to match with, transformed to Matcher
 * @param  {boolean | undefined} shouldNegate should negate, passed to matcher.make
 * @param  {boolean | undefined} alphaOmega should enforce regex @beginning and end, passed to .matcher
 * @return {Array<any>}
 *
 * @see Matcher.make
 *
 *
 * @example
 *
 *
 *   matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
 *   //=> ['moo']
 *
 *   matcher(['foo', 'bar', 'moo'], ['!*oo']);
 *
 *
 * @example
 *
 *
 *   matcher('kinga', 'kinga')
 *   //=> ['kinga']
 *   matcher('k*nga', 'kinga')
 *   //=> ['kinga']
 *   matcher('kinga', 'nope')
 *   //=> []
 *
 *   matcher(new RegExp(/kinga/), 'kinga')
 *   //=> ['kinga']
 *   matcher(new RegExp(/kinga/), 'nope')
 *   //=> ['nope']
 *
 *   matcher(x => x === 'kinga', 'kinga')
 *   //=> ['kinga']
 *   matcher(x => x === 'kinga', 'nope')
 *   //=> []
 *
 *   matcher({test: x => x === 'kinga'}, 'kinga')
 *   //=> ['kinga']
 *   matcher({test: x => x === 'kinga'}, 'nope')
 *   //=> []
 *
 *
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
