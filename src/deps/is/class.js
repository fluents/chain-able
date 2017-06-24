/* istanbul ignore next: build - things are compiled so isClass is not used */
module.exports = o => o && (/^\s*class\s/).test(o.toString())
