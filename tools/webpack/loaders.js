'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {

  const loaders = [
    {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: path.join(__dirname, '../../node_modules')
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.modernizrrc.js$/,
      loader: "modernizr"
    },
    {
      test: /\.modernizrrc(\.json)?$/,
      loader: "modernizr!json"
    }
  ];

  // check env
  if(env === 'development') {
    loaders.push({
      test: /\.(scss|sass)$/,
      loader: 'style!css?sourceMap!postcss-loader!sass?sourceMap',
      include: path.join(__dirname, '../../src')
    });
  } else {
    loaders.push({
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
      include: path.join(__dirname, '../../src')
    });
  }

  return loaders;
}
