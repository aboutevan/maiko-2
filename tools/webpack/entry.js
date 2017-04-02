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
      path.join(__dirname, '../../src', 'index.jsx')
    ]
  };

  if(env === 'development') {
    entry.app.unshift("react-hot-loader/patch",
      "babel-polyfill",
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server")
  } else {
    entry.app.unshift(
      "babel-polyfill")
  }

  return entry;
}