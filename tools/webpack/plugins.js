'use strict';
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env) {

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        BROWSER: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];

  if (env === 'development') {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new StyleLintPlugin({
        configFile: '.stylelintrc',
        files: ['**/*.sass'],
        syntax: 'sugarss',
        failOnError: false,
      })
    );
  } else {
    plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '../../src', 'static'),
          to: path.join(__dirname, '../../dist', 'static'),
          ignore: ['/compiled/bundle.js']
        },
        {
          from: path.join(__dirname, '../../src', 'index.ejs'),
          to: path.join(__dirname, '../../dist', 'index.ejs')
        }
      ]),
      new ExtractTextPlugin('bundle.css')
    );
  }
  return plugins;
}
