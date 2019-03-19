// webpack v4
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: './src',
    open: true,
    watchContentBase: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: devMode,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardDuplicates: { removeAll: true },
          discardComments: { removeAll: true }
        }
      })
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new CleanWebpackPlugin('dist', {}),
    new CopyWebpackPlugin([
      {
        from: './src/data',
        to: './data'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
