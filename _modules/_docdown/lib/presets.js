/*----------------------------------------------------------------------------*/
/*         ADDING NEW STUFF HERE                                              */
/*----------------------------------------------------------------------------*/

const {isMatch} = require('./chain-able')

// @TODO as a factory
// @TODO + even icon!
// stackoverflow, npm, github, mozilla
var sites = [
  'stack-overflow',
  'npm',
  'github.com',
  'mozilla',
]

// @TODO USING THE ROUTE CHAIN HERE PARSING URLS, ENCODING, ALSO FOR LOCAL
var transforms = new Map()

transforms.set('npm', (href, label) => {
  label = '📦  ' + label
  return {href, label}
})
transforms.set('mozilla', (href, label) => {
  if (href.includes('Reference/')) {
    label = 'mozilla: ' + href.split('Reference/').pop()
  }
  label = '🦊  ' + label
  return {href, label}
})
transforms.set('chain-able/', (href, label) => {
  label = '⛓  ' + label
  return {href, label}
})
transforms.set('github', (href, label) => {
  label = '😺  ' + label
  return {href, label}
})

const overflowImg = `<img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a" width="24px" height="24px" alt="stack overflow logo"/>`
transforms.set('stack-overflow', (href, label) => {
  label = overflowImg + label
  return {href, label}
})

function presets(href, label) {
  const keys = Array.from(transforms.keys())
  const matching = keys.filter(key => isMatch(label, key))

  if (matching.length) {
    const key = matching.shift()
    const transformer = transforms.get(key)
    return transformer(href, label)
  }
  else {
    return {href, label}
  }
}

module.exports = presets


// @HUGE EXPLANATION, WHY NOT JUST USE MAP?
// it's like Map & Set, on steroids
// show design patterns like builders, factories,
// transforms.set('stack-overflow', {})
// transforms.set('npm')

// cannot do this...
// const siteTransformers = {
//   'stack-overflow': {},
// }
// transforms.from(siteTransformers)
//
// var transformers = {
//   'stack-overflow'
// }

// var knownSiteFormatting = x => {
//   if (sites.includes(x)) {
//
//   }
// }

// https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#nosideeffects-modifies-thisarguments
// **Note:**

// https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System
// @enum, @kind

// const getFile = chain.build([
//   'file',
//   'filedesc',
//   'filedescription',
//   'fileoververview',
//   'overview',
//   'exports',
//   'requires',
// ])
// const getEvents = chain.build(['event'])
// const getInterface = chain.build(['interface', 'implements'])
// const getEmits = chain.build(['emits', 'fires'])
// const getSubscribes = chain.build(['listens', 'subscribes'])
// const getAllEvents = () => {
//   return {
//     events: getEvents(),
//     emits: getEmits(),
//     subs: getSubscribes(),
//   }
// }
