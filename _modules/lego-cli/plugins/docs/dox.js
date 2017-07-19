// const dox = require('dox')
const dox = require('../../../../_modules/_dox')
const log = require('fliplog')

const docblock = `
/**
 * @classdesc this is to avoid circular requires
 *       because MergeChain & MethodChain extend this
 *       yet .method & .merge use those chains
 *
 * @since 4.0.0-alpha.1
 * @inheritdoc
 * @class ChainedMapBase
 * @member ChainedMapBase
 * @category Chainable
 * @extends {Chainable}
 * @type {Chainable}
 *
 * @types ChainedMapBase
 * @tests ChainedMap
 *
 * @prop {Meta} meta
 * @prop {Map} store
 *
 * {@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}
 * @see {@link pony-map}
 * @see {@link mozilla-map}
 *
 * @see ChainedMap
 * @see Chainable
 * @see MergeChain
 * @see MethodChain
 * @see ChainedMap
 *
 */
// function eh() {}
`

/**
 *
 */
function doxPlugin() {
  const files = [docblock]
  files.forEach(file => {
    const obj = dox.parseComments(file)
    log.json({obj}).echo()
  })

  return this
}

doxPlugin()
