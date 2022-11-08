const webpack = require("webpack");
const resolve = require("path").resolve;
const CompressionPlugin = require("compression-webpack-plugin");


const config = {

  entry: {
    toolkit: ['react-app-polyfill/ie9', 'react-app-polyfill/stable', __dirname + '/js/toolkit.jsx'],
    home: __dirname + '/js/home.jsx',
    socr: __dirname + '/js/socr.jsx',
    about: __dirname + '/js/about.jsx',
  },
  output: {

    filename: "[name].js",

  },

  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [

      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|css)$/,
        use: [

          "style-loader",

          "css-loader",

          "sass-loader",
        ],
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
  plugins: [new CompressionPlugin({
    algorithm: 'gzip'
  })],

};
module.exports = (env, argv) => {

  if (argv.mode === "development") {
    config.output.path = resolve("../../static/public/devBuild")
    config.output.publicPath = resolve("../../static/public/devBuild")
    config.devtool = "source-map"

    config.devServer = {
      contentBase: resolve("../../templates"),
      port: 5000,
    }

  
  }

  if (argv.mode === 'production') {

    config.output.path = resolve("../../static/public")
  
    config.optimization = {
      chunkIds: 'named',
    }
  }

  return config
}
