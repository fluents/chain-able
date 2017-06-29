require('module-alias/register')
const Chain = require('chain-able')

// to use for debugging or instance checks
class CommentChain extends Chain {}
const chain = new CommentChain()

chain
  .methods()
  .onInvalid((error, arg, instance) => console.error(error))
  .schema({
    enabled: 'boolean',
    data: '!string',
    name: '?string',
    location: 'number|number[]',
    // nested
    dates: {
      created: {
        at: 'date',
      },
      updated: {
        at: 'date',
        pretty: 'string',
      },
    },
  })

chain
  .dates({created: {at: new Date()}})
  .location(1)
  .enabled(true)
  .name('string')
  .name(['strings!'])
  .name(['? is optional :-)'])

// validates with .merge or .set as well
chain.merge({data: {notString: true}})

// invalid
chain.enabled('not boolean')
chain.data('not valid')

// pretty print
console.log('\n')
console.log(
  require('util')
    .inspect(chain, {
      depth: 30,
      maxArrayLength: 30,
      showHidden: false,
      showProxy: true,
      colors: true,
    })
    .replace(/[\{\}]|(\s+\[)|(\])(?:,)|[,]/g, '')
    .replace(/( {2}\])/g, '')
)

console.log('\n')
