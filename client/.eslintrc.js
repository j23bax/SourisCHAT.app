module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-len': 'warn',
    'max-len': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
