const ChainAble = require('../../../exports')
const props = require('../../../src/deps/util/props')
const isNullOrUndefined = require('../../../src/deps/is/nullOrUndefined')

const {is} = ChainAble
is.isNullOrUndefined = isNullOrUndefined

const ChainAbleWithIs = Object.assign(ChainAble, is)

const {isUndefined, merge, MethodChain, traverse, matcher} = ChainAbleWithIs

// also add this merge plugin factory
function autoMergeMethodFactory(name, parent) {
  function autoMerge(arg) {
    if (isUndefined(arg)) {
      return this.get(name)
    }
    else if (this.has(name)) {
      return this.set(name, merge(this.get(name), arg))
    }
    else {
      return this.set(name, arg)
    }
  }

  // so we know if we defaulted them
  autoMerge.mergeFactory = true

  return this.onSet(autoMerge).onGet(autoMerge).onCall(autoMerge)
}

// @TODO: extend with `mergeName` to merge in
// @example
// .methods('eh')
// .eh([])
// .mergeEh(1)
MethodChain.add({
  autoMerge: autoMergeMethodFactory,
})

ChainAbleWithIs.autoMergePlugin = autoMergeMethodFactory
ChainAbleWithIs.props = props

ChainAbleWithIs.filesMatcher = list => regexp => {
  const matched = matcher(list, regexp)
  if (matched.length >= 1) return matched
  return list.filter(item => item.includes(regexp))
}

module.exports = ChainAbleWithIs
