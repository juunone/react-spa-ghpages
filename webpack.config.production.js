const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'production',  
  entry: {
    'dist/build/vendor': ['semantic-ui-react'],
    'dist/build/app': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        // 'Extract Text Plugin' 구성한다.
        use: ExtractTextPlugin.extract({
          // CSS가 추출되지 않으면 loader가 실행된다.
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // @import(ed) 리소스에 css-loader를 적용하기 전 로더를 구성한다.
                importLoaders: 1,
                camelCase: true,
                // CSS 파일을 위해 소스 맵을 생성한다.
                sourceMap: true
              }
            },
            {
              // css-loader 전에 PostCSS이 실행되어 압축(minify)하고 CSS 룰을 적용하고 
              // 자동 전처리(autoprefixer)를 실행한다.
              // 자동 전처리 단계에서 최신 브라우저 2 사양을 사용한다.
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    // 'styles' 디렉터리 내 스타일시트를 생성한다.
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
};