const webpack = require("webpack");
const resolve = require("path").resolve;
const CompressionPlugin = require("compression-webpack-plugin");


const config = {
  devtool: 'eval-source-map',
  //entry: __dirname + '/js/scoda-index.jsx',
  entry: {
    toolkit: ['react-app-polyfill/ie9', 'react-app-polyfill/stable', __dirname + '/js/toolkit.jsx'],
     home:  __dirname + '/js/home.jsx',
    socr:  __dirname + '/js/socr.jsx',
    about:  __dirname + '/js/about.jsx',
  },
  output: {
    path: resolve("../../static/public"),
    filename: "[name].js",
   // publicPath: resolve("../../static/public"),
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
        use:{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
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
    algorithm:'gzip'
  })],
 
};
module.exports = (env, argv) =>{

  if(argv.mode === "development"){
    config.output.publicPath = resolve("../../static/public"),
    config.devtool = "source-map"
  }

  if (argv.mode === 'production') {

    
  }


 return config
}
