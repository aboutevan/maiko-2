'use strict';
const path = require('path');

module.exports = function (env) {

  const output = {
    filename: 'bundle.js',
    publicPath: '/'
  };

  // check env
  if(env === 'development') {
    output.path = path.join(__dirname, '../../src', 'static');
  } else {
    output.publicPath = '/static/compiled',
    output.path = path.join(__dirname, '../../dist', 'static', 'compiled');
  }

  return output;
}
