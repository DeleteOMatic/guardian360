module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: [2, 'single', { avoidEscape: true }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
