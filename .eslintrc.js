module.exports = {
  "rules": {
    "import/extensions": ["error", "always"],
    "no-param-reassign": [2, { "props": false }],
    
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
  "env": {
    "browser": true
  },
  "extends": "airbnb-base"
};
