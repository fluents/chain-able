module.exports = {
  extends: ['chain-able'],
  // ext: ['.ts', '.js', '.jsx', '.tsx', 'ts'],
  rules: {
    strict: 'OFF',
    'func-names': 'OFF',
    'prefer-rest-params': 'OFF',
    'jsdoc/require-example': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'inferno/display-name': 'OFF',
    'inferno/display-no-depreciated': 'OFF',
  },
  plugins: ['jest', 'jsdoc'],
  globals: {
    expect: true,
    test: true,
  },
}
