module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'no-return-assign': 'off',
    'global-require': 'off',
    'no-unused-expressions': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
