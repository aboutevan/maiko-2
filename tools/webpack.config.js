const webpack = require('webpack');
const path = require('path');
const requireDir = require('require-dir');
const settings = requireDir('./webpack');

const env = process.env.NODE_ENV || 'development';

const config = {
  devtool: env !== 'development' ? '' : 'eval-source-map',

  entry: settings.entry(env),

  output: settings.output(env),

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modernizr$: path.resolve(__dirname, '../.modernizrrc')
    }
  },

  plugins: settings.plugins(env),

  module: {
    preLoaders: settings.preloaders(env),
    loaders: settings.loaders(env),
    postLoaders: settings.postloaders(env)
  },

  // postcss: function () {
  //  return [
  //    require('autoprefixer')
  //  ]
  // },

  eslint: {
    configFile: path.join(__dirname, '../.eslintrc'),
    emitWarning: true
  }
}

module.exports = config;