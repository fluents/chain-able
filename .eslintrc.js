module.exports = {
  extends: ['chain-able'],
  // ext: ['.ts', '.js', '.jsx', '.tsx', 'ts'],
  rules: {
    strict: 'OFF',
    'func-names': 'OFF',
    'prefer-rest-params': 'OFF',
  },
  plugins: ['jest'],
  globals: {
    expect: true,
    test: true,
  },
}
