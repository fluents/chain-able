module.exports = chain => {
  chain.store = new Map()
  chain.get = name => chain.store.get(name)
  chain.set = (name, val) => {
    chain.store.set(name, val)
    return chain
  }
  return chain
}
