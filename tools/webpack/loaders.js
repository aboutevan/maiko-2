'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {

  const loaders = [
    {
      test: /.jsx?$/,
      loaders: "babel-loader",
      // this was prohibiting test
      // include: path.join(__dirname, "../../src"),
      exclude: path.join(__dirname, '../../node_modules')
    },
    {
        test: /\.html$/,
        loader: "html-loader"
    },
    {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    },
    {
      test: /\.modernizrrc.js$/,
      loader: "modernizr-loader"
    },
    {
      test: /\.modernizrrc(\.json)?$/,
      use: [
        {
          loader: "modernizr-loader",
        },
        {
          loader: "json-loader",
        }
      ]
      // loader: "modernizr-loader!json"
    }
  ];

  // check env
  if(env === 'development') {
    loaders.push(
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            configFile: path.join(__dirname, '../../.eslintrc.js'),
            emitWarning: true
          }
        }],
        include: path.join(__dirname, '../../src')
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ],
        include: path.join(__dirname, '../../src')
      }
    );
  } else {
    loaders.push({
      test: /\.(scss|sass)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]}),
      include: path.join(__dirname, '../../src')
    });
  }

  return loaders;
}
