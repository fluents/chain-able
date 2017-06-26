module.exports = specification => call => (onInvalid, onValid) => (a, b, c) => {
  const result = call(a, b, c)
  if (specification(result)) return onInvalid(result)
  else return onValid(result)
}
