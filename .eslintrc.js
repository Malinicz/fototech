const OFF = 0;
const ON = 2;

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-one-expression-per-line': OFF,
    'react/no-unescaped-entities': OFF,
    'react/no-array-index-key': OFF,
    'arrow-body-style': OFF,
    'arrow-parens': [ON, 'always'],
    'react/jsx-filename-extension': OFF,
    'react/prefer-stateless-function': OFF,
    'import/no-unresolved': OFF,
    'import/prefer-default-export': OFF,
    'object-curly-newline': OFF,
    'implicit-arrow-linebreak': OFF,
    indent: OFF,
    'operator-linebreak': OFF,
    'no-nested-ternary': OFF,
    'comma-dangle': OFF,
    'react/jsx-closing-bracket-location': OFF,
    'react/sort-comp': OFF,
    'lines-between-class-members': OFF,
    'react/forbid-prop-types': OFF,
    'no-confusing-arrow': OFF,
    'import/order': OFF,
  },
};
