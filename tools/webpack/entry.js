'use strict';
const path = require('path');

module.exports = function (env) {
  const entry = {
    // vendor: [
    //     "react-hot-loader/patch",
    //     "babel-polyfill",
    //     "webpack-dev-server/client?http://localhost:3000",
    //     "webpack/hot/only-dev-server"
    // ],
    app: [
      "react-hot-loader/patch",
      "babel-polyfill",
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server",
      path.join(__dirname, '../../src', 'index.jsx')
    ]
  };

  if(env === 'development') {
    // entry.app.unshift('webpack-hot-middleware/client')
  } else {
    // any production settings
  }

  return entry;
}