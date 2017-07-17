module.exports = {
  extends: ['chain-able'],
  // ext: ['.ts', '.js', '.jsx', '.tsx', 'ts'],
  rules: {
    'prefer-rest-params': 'OFF',
    'jsdoc/require-example': 'OFF',
    'jsdoc/require-param': 'OFF',
    'jsdoc/require-param-description': 'OFF',
    'jsdoc/require-returns-type': 'OFF',
    'valid-jsdoc': 'OFF',
    // 'inferno/display-name': 'OFF',
    // 'inferno/display-no-depreciated': 'OFF',
  },
  plugins: ['jest', 'jsdoc'],
  globals: {
    expect: true,
    test: true,
  },
}
