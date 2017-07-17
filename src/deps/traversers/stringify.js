const isArray = require('../is/array')
const isFunction = require('../is/function')
const isObj = require('../is/obj')
const traverse = require('../traverse')

function stringify(arg) {
  const trav = traverse(arg)

  let s = ''
  trav.before(function() {
    if (isArray(trav.iteratee)) s += '['
    else if (isObj(trav.iteratee)) s += '{'
  })

  trav.pre(function() {
    const key = trav.key || trav.path.join('')

    if (key && isObj(trav.iteratee) && !isArray(trav.iteratee)) {
      s += '"' + key + '"' + ':'
    }
  })

  trav.after(function() {
    if (s.endsWith(',')) s = s.slice(0, -1)

    if (isArray(trav.iteratee)) s += ']'
    else if (isObj(trav.iteratee)) s += '}'
  })

  trav.post(child => (s += ','))

  /* prettier-ignore */
  trav.forEach(function(key, node) {
    if (isFunction(node)) {
      s += 'null'
    }
    // aka isPrimitive
    else if (!isArray(node) && !isObj(node)) {
      s += node.toString()
    }
  })
  return s
}

module.exports = stringify
