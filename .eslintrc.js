module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-set-state': 'off',
    'max-lines-per-function': [1, 40],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
  },
};
