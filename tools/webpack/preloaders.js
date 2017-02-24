'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {

  const preloaders = [];

  if(env === 'development') {
    preloaders.push({
      test: /\.jsx?$/,
      loaders: ['eslint-loader'],
      include: path.join(__dirname, '../../src'),
      exclude: path.join(__dirname, '../../src', 'data')
    })
  }

  return preloaders;
}
