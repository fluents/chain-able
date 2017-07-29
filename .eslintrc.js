module.exports = {
  extends: ['chain-able'],
  // ext: ['.ts', '.js', '.jsx', '.tsx', 'ts'],
  rules: {
    'prefer-rest-params': 'OFF',
    'jsdoc/require-example': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'import/max-dependencies': 'OFF',
    // 'dot-notation': ["error", { "allowKeywords": false }],
    /* eslint 'dot-notation': ["error", { "allowKeywords": false }] */

    // 'filenames/match-regex': [2, '^[a-z_]+[a-zA-Z_]+$', true],
    // "filenames/match-exported": [2, [ null, "kebab", "snake" ] ],
    // "filenames/match-exported": [ 2, null, "\\.react$" ],
    // 'filenames/match-regex': 2,
    // 'filenames/match-exported': 2,
    // 'filenames/no-index': 2,

    // 'inferno/display-name': 'OFF',
    // 'inferno/display-no-depreciated': 'OFF',
  },
  plugins: ['jest', 'jsdoc'],
  globals: {
    expect: true,
    test: true,
  },
}
