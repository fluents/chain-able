/* eslint jsdoc/require-example: "OFF" */
/* eslint valid-jsdoc: "OFF" */
/* prettier-ignore */
const _ = require('lodash')
const {toArr, camelCase} = require('./chain-able')
const {getAsStr} = require('./util.js')

const defaultToString = data => {
  const {tag, desc} = data
  const found = tag ? desc : ''
  return found
}

const defaultPredicate = x => !x.tag
const toCamelGet = x => (!x.includes('get') ? camelCase('get-' + x) : x)

function build(method) {
  let {tags, onFormat, predicate, fallback} = method

  tags = toArr(tags).filter(name => !name.startsWith('get'))
  if (!onFormat) onFormat = defaultToString
  if (!predicate) predicate = defaultPredicate
  if (!fallback) fallback = ''

  return function builtTagBuilder() {
    let i = 0
    let tag
    let prop
    let value

    while (!tag && i < tags.length) {
      prop = tags[i]
      tag = this.getTag(prop)
      value = this.getValue(prop)

      if (this.getDebug()) console.log({tag, value, prop, i})

      i++
    }

    const desc = getAsStr(tag, 'description')
    const type = getAsStr(tag, 'type.name') || '*'

    // console.log({[prop]: tag, type})
    const data = {
      tag,
      desc,
      type,
      prop,
      value,
    }

    if (predicate(data)) return fallback
    else return onFormat(data)
  }
}

const easyTags = [
  'sig',
  'symb',
  'modifies',
  'enum',
  'variation',
  'mixins',
  'class',
]

const methods = {
  getReturns: {
    tags: ['return', 'returns'],
    onFormat(returns) {
      // console.log({returns})
      const {type, desc} = returns
      return [type, desc]
    },
  },

  // @prop {eh} @property
  getClassProps: {
    tags: ['prop', 'property'],
    onFormat(data) {
      let result = ``

      const {tag} = data
      if (!tag) return result

      toArr(tag).map(prop => {
        result += '* '
        result += `\{${prop.name}\} `
        result += `${prop.description || ''}`
        result += ' \n'
      })
      return result
    },
  },
  getNote: {
    tags: ['note', 'NOTE'],
    onFormat(data) {
      return toArr(data.tag).map(tag => '* ' + tag.description + '\n').join('')
    },
  },
  getTodo: {
    tags: ['todo', 'TODO'],
    onFormat(data) {
      return toArr(data.tag)
        .map(tag => '- [ ] ' + tag.description + '\n')
        .join('')
    },
  },
  getExtends: {
    tags: ['extends', 'augments'],
    onFormat(data) {
      // log.bold('__EXTENDS__').data(data.debug()).echo()
      const {type, desc, tag} = data
      return toArr(tag).map(augmentation => _.get(augmentation, 'type.name'))
    },
  },
  getClassDesc: {
    tags: ['class', 'classdesc', 'classdescription'],
  },
  getKind: ['kind', 'kind'],
  getThrows: ['throws', 'exception'],
  getMixins: ['mixin', 'mixins'],
  getOverride: ['override'],
  getInherits: ['inheritdoc'],
  getModule: ['module', 'namespace'],
  getAbstract: ['abstract', 'virtual'],
  funcMethod: ['method', 'function', 'func', 'callback'],
}

easyTags.forEach(tag => (methods[toCamelGet(tag)] = {tags: tag}))

const methodKeys = Object.keys(methods)
module.exports = function(chain) {
  for (let i = 0; i < methodKeys.length; i++) {
    const methodName = methodKeys[i]
    if (chain[methodName] === undefined) {
      let methodConfig = methods[methodName]
      if (Array.isArray(methodConfig)) {
        methodConfig = {tags: methodConfig}
      }

      const fn = build(methodConfig)
      chain[methodName] = fn
    }
  }
}
