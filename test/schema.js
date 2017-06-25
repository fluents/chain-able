const test = require('ava')
const log = require('fliplog')
const Chain = require('../dist')

const {is, reduce} = Chain
const {isDate} = is

test.todo('.schema')
test.todo('.?schema')

test.skip('schema.add(validator)', t => {
  is.enums = enums => x => enums.includes(x)
  is['*'] = x => true

  const chain = new Chain()
  chain.schema().add(is)
})

test.failing('.schema - array', t => {
  const chain = new Chain()

  chain.methods().define().schema({
    comments: [
      {
        admin: 'boolean',
        text: 'string',
      },
    ],
  })

  chain.commends([
    {
      admin: true,
      text: 'eh',
    },
  ])
  chain.commends([
    {
      text: 'eh',
    },
  ])
  chain.commends([
    {
      admin: 'eh',
    },
  ])
  chain.commends([
    {
      admin: false,
    },
  ])
  chain.commends([{}])
  chain.commends({})

  t.fail()
})
test.failing('.schema - enum - use `eq`', t => {
  t.fail()
})

test('.!schema()', t => {
  t.plan(1)

  const chain = new Chain()
  chain.methods().define().schema({
    notString: '!string',
  })

  // valid
  chain.notString = new Date(0, 0, 0, 0)

  try {
    chain.notString = 'string!'
  }
  catch (e) {
    t.true(e instanceof TypeError)
  }
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
    .define()
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
  t.plan(2)
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .onValid(created => t.true(isDate(created.at)))
    .onInvalid(error => t.true(error instanceof TypeError))
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
  chain.created({at: 'NOT-DATE'})
})

test.failing('.schema - nested + enum', t => {
  t.plan(2)
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .onValid(created => t.true(isDate(created.at)))
    .onInvalid(error => t.true(error instanceof TypeError))
    .schema({
      status: ['enabled', 'disabled'],
      comments: [
        {
          admin: 'boolean',
          text: 'string',
          author: 'users',
        },
      ],
    })

  chain.status('enabled')
  chain.comments([{}])
})

test('.schema[]', t => {
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .getSet()
    .schema({
      eh: 'string[]',
    })

  chain.setEh('string')
  chain.setEh(['string'])
  try {
    chain.setEh(false)
  }
  catch (e) {
    return t.true(e instanceof Error)
  }

  /* istanbul ignore next: fail */
  t.fail()
})

test('.schema|', t => {
  t.plan(1)
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .getSet()
    .schema({
      eh: 'string|boolean',
      eh2: 'boolean|string',
    })

  chain.setEh('string')
  chain.setEh(false)
  chain.setEh2('string')
  chain.setEh2(false)
  try {
    chain.setEh(100)
  }
  catch (e) {
    return t.true(e instanceof Error)
  }

  /* istanbul ignore next: fail */
  t.fail()
})
