const log = require('fliplog')
const {Chain, addTypes} = require('../src')

const {is, reduce} = Chain
const {isDate} = is

const todo = console.log
todo('.schema')
todo('.?schema')
todo('.&schema')
todo('.[enum:,/]schema')

test('.addTypes(validator)', () => {
  expect.assertions(1)
  const custom = {}
  custom.enums = enums => x => enums.includes(x)
  custom['*'] = x => true
  addTypes(custom)

  const chain = new Chain().methods().schema({
    enumd: custom.enums(['me!']),
    star: '*',
  })

  chain.enumd('me!').star('*')

  expect(() => chain.enumd(false)).toThrow()
})

test.skip('.schema - array', done => {
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

  done.fail()
})

test('.!schema()', () => {
  expect.assertions(1)

  const chain = new Chain()
  chain.methods().define().schema({
    notString: '!string',
  })

  // valid
  chain.notString = new Date(0, 0, 0, 0)

  expect(() => (chain.notString = 'string!')).toThrow()
})

test('.method().alias().getSet().onInvalid().onValid().type().returns()', () => {
  const chain = new Chain()
  ;+chain
    .method('ehOh')
    .alias(['canada'])
    .getSet()
    .define()
    .onInvalid(e => {})
    // .onInvalid(e => log.data(e).echo(false))
    .onValid(() => console.log('valid'))
    .type('?string[]')
    .returns(chain)
})

test('.schema - shared .onInvalid', () => {
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .define()
    // .onInvalid((error, arg, key, instance) => log.data(error).echo(false))
    .onInvalid((error, arg, key, instance) => {})
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
  expect(isDate(chain.created_at)).toBe(true)

  // invalid
  chain.updated_at = false

  // log.prettyformat(reduce(chain.meta.store.schema)).bold('schema:').echo()
  // delete chain.meta
  // log.data(chain).echo()
})

test('typed - shorthand', () => {
  const typed = new Chain()
    // can be used shorthand
    .method('short')
    // .onValid((val, c) => c.set('eh', val))
    // log.data(error).echo(false)
    .onInvalid((error, arg, key, instance) => {})
    .type(x => typeof x === 'string')
    .build()

  typed.short('string')
  typed.short(!'boolean')
})

test('.schema - nested', () => {
  expect.assertions(2)
  const chain = new Chain()
  /* prettier-ignore */
  chain
    .methods()
    .onValid(created => expect(isDate(created.at)).toBe(true))
    .onInvalid(error => expect(error instanceof TypeError).toBe(true))
    .schema({
      created: {
        at: 'date',
      },
    })

  chain.created({at: new Date()})
  chain.created({at: 'NOT-DATE'})
})

test('.schema enum', () => {
  expect.assertions(1)

  const chain = new Chain()
  chain.methods().schema({status: 'enabled|disabled'}).status('enabled')

  expect(() => chain.status('other')).toThrow()
})

test.skip('.schema - nested + array', () => {
  expect.assertions(2)

  const chain = new Chain()
  chain
    .methods()
    .onValid(created => expect(isDate(created.at)).toBe(true))
    .onInvalid(error => expect(error instanceof TypeError).toBe(true))
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

test('.schema[] .call', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain
    .methods()
    .getSet()
    .schema({eh: 'string|string[]'})
    .setEh('string')
    .setEh(['string'])

  expect(() => chain.eh(false)).toThrow()
})

test('.schema[] .set', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain
    .methods()
    .getSet()
    .schema({eh: 'string|string[]'})
    .setEh('string')
    .setEh(['string'])

  expect(() => chain.setEh(false)).toThrow()
})

test.skip('arrayof', t => {
  new Chain().methods().schema({
    prop: [
      {
        nested: 'boolean',
        optional: '?string',
      },
    ],
  })
})

test('.schema|', () => {
  expect.assertions(1)
  const chain = new Chain()
  chain.methods().getSet().schema({
    eh: 'string|boolean',
    eh2: 'boolean|string',
  })

  chain.setEh('string')
  chain.setEh(false)
  chain.setEh2('string')
  chain.setEh2(false)

  expect(() => chain.setEh(100)).toThrow()
})
