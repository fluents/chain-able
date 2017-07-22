const dopemergeMap = require('../../src/deps/dopemerge/map')

test.skip('dopemerge map & set', () => {
  // test
  var targetMap = new Map()
  targetMap.set('true', false)
  targetMap.set('obj', {obj: []})
  targetMap.set('arr', [1])
  var srcMap = new Map()
  srcMap.set('true', true)
  srcMap.set('obj', {obj: [Symbol]})
  srcMap.set('arr', [2])
  srcMap.set('emptyArr', [])
  var mergedMap = dopemergeMap(targetMap, srcMap, {clone: true})
})
