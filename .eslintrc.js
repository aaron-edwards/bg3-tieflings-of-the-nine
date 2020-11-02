module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'require-jsdoc': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
  },
};
