'use strict';
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

module.exports = function (env) {

  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        BROWSER: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"}),
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../../src/index.tpl.html"),
        inject: "body"
    }),
  ];

  if (env === 'development') {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new StyleLintPlugin({
        configFile: '.stylelintrc',
        files: ['**/*.sass'],
        syntax: 'sugarss',
        failOnError: false,
      }),
      new WebpackBundleSizeAnalyzerPlugin(path.resolve(__dirname, '../../plain-report.txt'))
    );
  } else {
    plugins.push(
      // new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '../../src', 'assets'),
          to: path.join(__dirname, '../../dist', 'assets'),
          ignore: [{ glob: 'vendor/**/*'}]
        },
        // {
        //   from: path.join(__dirname, '../../src', 'index.ejs'),
        //   to: path.join(__dirname, '../../dist', 'index.ejs')
        // }
      ]),
      new ExtractTextPlugin('bundle.css')
    );
  }
  return plugins;
}
