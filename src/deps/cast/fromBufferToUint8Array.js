// @TODO https://github.com/fluents/chain-able/issues/59
// `Wasm` does **not** understand node buffers, but thankfully a node buffer
// is easy to convert to a native Uint8Array.
module.exports = function fromBufferToUint8Array(buffer) {
  var u = new Uint8Array(buffer.length)
  for (var i = 0; i < buffer.length; ++i) {
    u[i] = buffer[i]
  }
  return u
}
