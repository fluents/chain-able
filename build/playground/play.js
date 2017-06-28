const reduce = NO_OP
const reduceEntries = NO_OP

function entries(chains = false) {
  const reduced = reduce(this.store)
  if (chains === false) return reduced
  else {
    const reducer = reduceEntries(reduced)
    reducer(this)
    reducer(reduced)
    return reduced
  }
}

console.log(entries)
