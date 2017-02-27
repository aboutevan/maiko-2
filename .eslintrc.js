const path = require('path');
module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
    'global-require': 0,
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './tools/webpack.config.js')
      }
    }
  },
  env: {
    'browser': true
  }
}
