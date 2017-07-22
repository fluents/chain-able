var doctrineAPI = require('doctrine')

var parsed = doctrineAPI.parse(
  [
    `
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
        `,
    `
          /**
           * @param  {*} x value
           * @return {boolean} isDate
           *
           * @since 3.0.0
           * @memberOf is
           * @func isDate
           *
           * @example
           *
           *  isDate(new Date())
           *  //=> true
           *  isDate(Date.now())
           *  //=> false
           *  isDate(1)
           *  //=> false
           *  isDate('')
           *  //=> false
           *
           * @example
           *
           *  const e = {}
           *  eh[Symbol.toStringTag] = '[Object Date]'
           *  isDate(eh)
           *  //=> true
           *
           * @example
           *
           *  class Eh extends Date()
           *  isDate(new Eh())
           *  //=> true
           */
        `,
    // '/**',
    // ' * This function comment is parsed by doctrine',
    // ' * @param {{ok:String}} userName',
    // '*/',
  ].join('\n'),
  {unwrap: true}
)

var ast = {
  description: '/**',
  tags: [
    {
      title: 'classdesc',
      description:
        'this is to avoid circular requires\n      because MergeChain & MethodChain extend this\n      yet .method & .merge use those chains',
    },
    {title: 'since', description: '4.0.0-alpha.1'},
    {title: 'inheritdoc', description: null},
    {
      title: 'class',
      description: null,
      type: null,
      name: 'ChainedMapBase',
    },
    {
      title: 'member',
      description: null,
      type: null,
      name: 'ChainedMapBase',
    },
    {title: 'category', description: 'Chainable'},
    {
      title: 'extends',
      description: null,
      type: {type: 'NameExpression', name: 'Chainable'},
      name: null,
    },
    {
      title: 'type',
      description: null,
      type: {type: 'NameExpression', name: 'Chainable'},
    },
    {title: 'types', description: 'ChainedMapBase'},
    {title: 'tests', description: 'ChainedMap'},
    {
      title: 'prop',
      description: null,
      type: {type: 'NameExpression', name: 'Meta'},
      name: 'meta',
    },
    {
      title: 'prop',
      description:
        '{@link https://ponyfoo.com/articles/es6-maps-in-depth pony-map}\n{@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map mozilla-map}',
      type: {type: 'NameExpression', name: 'Map'},
      name: 'store',
    },
    {title: 'see', description: '{@link pony-map}'},
    {title: 'see', description: '{@link mozilla-map}'},
    {title: 'see', description: 'ChainedMap'},
    {title: 'see', description: 'Chainable'},
    {title: 'see', description: 'MergeChain'},
    {title: 'see', description: 'MethodChain'},
    {title: 'see', description: 'ChainedMap\n\n/\n\n\n/**'},
    {
      title: 'param',
      description: 'value',
      type: {type: 'AllLiteral'},
      name: 'x',
    },
    {
      title: 'return',
      description: 'isDate',
      type: {type: 'NameExpression', name: 'boolean'},
    },
    {title: 'since', description: '3.0.0'},
    {title: 'memberOf', description: 'is'},
    {title: 'func', description: null, name: 'isDate'},
    {
      title: 'example',
      description:
        'isDate(new Date())\n //=> true\n isDate(Date.now())\n //=> false\n isDate(1)\n //=> false\n isDate(\'\')\n //=> false',
    },
    {
      title: 'example',
      description:
        'const e = {}\n eh[Symbol.toStringTag] = \'[Object Date]\'\n isDate(eh)\n //=> true',
    },
    {
      title: 'example',
      description: 'class Eh extends Date()\n isDate(new Eh())\n //=> true\n/',
    },
  ],
}
