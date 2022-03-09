const webpack = require("webpack");
const resolve = require("path").resolve;

const config = {
  devtool: 'eval-source-map',
  // entry: __dirname + '/js/scoda-index.jsx',
  entry: __dirname + '/js/socr.jsx',
  entry: {
    bundle:  __dirname + '/js/scoda-index.jsx',
    socr:  __dirname + '/js/socr.jsx',
  },
  output: {
    path: resolve("../../static/public"),
    // filename: "bundle.js",
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
        test: /\.(jpg|png)$/,
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
