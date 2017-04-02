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
    extensions: ['.js', '.jsx'],
    alias: {
      modernizr$: path.resolve(__dirname, '../.modernizrrc'),
      actions: path.resolve(__dirname, "../src/actions"),
      components: path.resolve(__dirname, "../src/components"),
      presentation: path.resolve(__dirname, "../src/components/presentation"),
      container: path.resolve(__dirname, "../src/components/container"),
      layout: path.resolve(__dirname, "../src/components/layout"),
      page: path.resolve(__dirname, "../src/components/page"),
      config: path.resolve(__dirname, "../src/config"),
      helpers: path.resolve(__dirname, "../src/helpers"),
    }
  },

  plugins: settings.plugins(env),

  module: {
    rules: settings.loaders(env),
  },

  // postcss: function () {
  //  return [
  //    require('autoprefixer')
  //  ]
  // },
  devServer: {
    // contentBase: path.resolve(__dirname, '../src/'),
    historyApiFallback: true,
    stats: { colors: true},
    host: 'localhost',
    port: '3000',
    hot: true,
  }
}

module.exports = config;