var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        vendor: [
            "react-hot-loader/patch",
            "babel-polyfill",
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/only-dev-server"
        ],
        app: "./src/index.jsx",
    },
    // entry: [
    //   "react-hot-loader/patch",
    //   "webpack-dev-server/client?http://localhost:3000",
    //   "webpack/hot/only-dev-server"
    //   "./src/index.js",
    // ],
    output: {
        filename: "bundle-[hash].js",
        path: path.join(__dirname, "dist", "static"),
        publicPath: "/"
    },
    performance: {hints: false},
    module: {
        rules: [
            {
              test: /.jsx?$/,
              loaders: "babel-loader",
              include: path.join(__dirname, "src"),
              exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
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
                // loader: ExtractTextPlugin.extract({
                //     fallbackLoader: "style-loader",
                //     loader: "css-loader!sass-loader"
                // }),
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
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname), "node_modules"],
        alias: {
            actions: "src/actions",
            components: "src/components",
            config: "src/config",
            helpers: "src/helpers",
        },
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle-[hash].js"}),
        // new ExtractTextPlugin("src-[hash].css"),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.tpl.html",
            inject: "body"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ],
    devServer: {
      // contentBase: "./dist",
      stats: { colors: true},
      host: 'localhost',
      port: '3000',
      hot: true,
    }
};
