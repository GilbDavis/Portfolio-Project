const path = require('path');

const terserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/JS/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contentHash].bundle.js',
    publicPath: '/dist'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new terserJSPlugin({
        extractComments: false
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attrs: [":data-src", "img:src", ":data-srcset", ":srcset", ":data-background-image"],
          esModule: false,
          interpolate: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|manifest)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: '/images',
              esModule: false
            }
          }
        ]
      }
    ]
  }
}