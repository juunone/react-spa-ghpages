const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',  
  output: {
    filename: '[name].[hash].bundle.js'
  },
  devtool: 'source-map',
  plugins:[
    new MiniCssExtractPlugin({ filename: '[name].[hash].style.css' }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        chunkFilter: (chunk) => {
          if (chunk.name === 'vendor') {
            return false;
          }
          return true;
        }
      }),
    ],
  },
});