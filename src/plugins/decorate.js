const isObj = require('../deps/is/obj')
const DECORATED_KEY = require('../deps/meta/decorated')
const meta = require('../deps/meta')

// @TODO: this is more like a preset since it *adds* plugins?
module.exports = function(parentToDecorate) {
  // @TODO is objStrict?
  // if (parentToDecorate) {
  this.target(parentToDecorate)

  // can use this to "undecorate"
  // if (!parentToDecorate.meta) <- checks already inside of meta()
  parentToDecorate.meta = meta(parentToDecorate)

  // default returns result of calling function,
  // else .parentToDecorate
  return this.plugin(function(name, parent) {
    parentToDecorate.meta(DECORATED_KEY, name)

    // @NOTE: so we can return...
    /* prettier-ignore */
    return this
      .returns(parentToDecorate)
      .callReturns(function returnsFunction(result) {
        return result || parentToDecorate
      })
  })
}
