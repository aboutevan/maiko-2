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
      core: path.resolve(__dirname, "../src/core"),
      img: path.resolve(__dirname, "../src/assets/img"),
      TweenLite: path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TweenLite.min.js'),
      TweenMax: path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TweenMax.min.js'),
      TimelineLite: path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TimelineLite.min.js'),
      TimelineMax: path.resolve(__dirname, '../node_modules', 'gsap/src/minified/TimelineMax.min.js'),
      ScrollMagic: path.resolve(__dirname, '../node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
      ScrollMagicGSAP: path.resolve(__dirname, '../node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
      debugAddIndicators: path.resolve(__dirname, '../node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'),
      pixi: path.resolve(__dirname, '../node_modules', 'pixi.js/dist/pixi.min.js'),
    }
  },

  plugins: settings.plugins(env),

  module: {
    rules: settings.loaders(env),
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    historyApiFallback: true,
    stats: { colors: true},
    host: 'localhost',
    port: '3000',
    hot: true,
  }
}

module.exports = config;