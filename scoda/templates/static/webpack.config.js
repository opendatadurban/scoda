const webpack = require("webpack");
const resolve = require("path").resolve;

const config = {
  devtool: 'eval-source-map',
  //entry: __dirname + '/js/scoda-index.jsx',
  entry: {
    toolkit: ['react-app-polyfill/ie9', 'react-app-polyfill/stable', __dirname + '/js/toolkit.jsx'],
    home:  __dirname + '/js/home.jsx',
    socr:  __dirname + '/js/socr.jsx',
    about:  __dirname + '/js/about.jsx'
  },
  output: {
    path: resolve("../../static/public"),
    filename: "[name].js",
    publicPath: resolve("../../static/public"),
  },
  devServer: {
    inline: true,
    port: 5000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
          },
        },
      },
    ],
  },
};
module.exports = config;
