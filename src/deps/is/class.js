/* istanbul ignore next: build - things are compiled so isClass is not used */
module.exports = x => x && (/^\s*class\s/).test(x.toString())
