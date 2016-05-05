const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./js/main.js",
  output: {
    path: __dirname,
    filename: "./js/build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
