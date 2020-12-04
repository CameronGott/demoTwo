//this file configures
//our webpack setup
const path = require('path');

//define our exports
module.exports = {
  mode: 'development',
  entry: { app: ['./src/App.jsx'] }, //entry point
  output: {
    filename: '[name].bundle.js', //bundled file
    path: path.resolve(__dirname, 'public'), //file path
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, //save bandwidth
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  devtool: 'source-map',
};
