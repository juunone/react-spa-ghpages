const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',  
  output: {
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].style.css' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot:true,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'dist'),
    port: port,
    historyApiFallback: true,
    open: true,
    stats: {
      color: true
    },
  }
});