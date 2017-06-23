const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

const {is, reduce} = Chain
const {isDate} = is

test.todo('.schema')
test.todo('.!schema')
test.todo('.schema[]')
test.todo('.?schema')
test.todo('.schema|')

test.skip('schema.add(validator)', t => {
  is.enums = enums => x => enums.includes(x)
  is['*'] = x => true

  const chain = new Chain()
  chain.schema().add(is)
})

test('.method().alias().getSet().onInvalid().onValid().type().returns()', t => {
  const chain = new Chain()
  ;+chain
    .method('ehOh')
    .alias(['canada'])
    .getSet()
    .define()
    .onInvalid(e => log.data(e).echo(false))
    .onValid(() => console.log('valid'))
    .type('?string[]')
    .returns(chain)
})

test('.schema - shared .onInvalid', t => {
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .onInvalid((error, arg, c) => log.data(error).echo(false))
    .schema({
      id: '?number',
      users: '?object|array',
      topic: '?string[]',
      status: ['enabled', 'disabled'],
      roles: '?array',
      comments: [
        {
          admin: 'boolean',
          text: 'string',
          author: 'users',
        },
      ],
      creator: {
        email: 'email',
        name: 'string',
        id: 'uuid',
      },
      created_at: 'date',
      updated_at: 'date|date[]',
      summary: 'string',
    })

  // valid
  chain.created_at = new Date(0, 0, 0, 0)
  t.true(isDate(chain.created_at))

  // invalid
  chain.updated_at = false

  log.prettyformat(reduce(chain.meta.store.schema)).bold('schema:').echo()
  delete chain.meta
  log.data(chain).echo()
})

test('typed - shorthand', t => {
  const typed = new Chain()
    // can be used shorthand
    .method('short')
    // .onValid((val, c) => c.set('eh', val))
    .onInvalid((error, arg, instance) => log.data(error).echo(false))
    .type(x => typeof x === 'string')
    .build()

  typed.short('string')
  typed.short(!'boolean')
})

test('.schema - nested', t => {
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .onInvalid((error, arg, c) => log.data(error).echo(false))
    .schema({
      status: ['enabled', 'disabled'],
      comments: [
        {
          admin: 'boolean',
          text: 'string',
          author: 'users',
        },
      ],
      created: {
        at: 'date',
      },
    })

  chain.created({at: new Date()})
})
