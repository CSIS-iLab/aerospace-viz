const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    china: './src/china.js',
    russia: './src/russia.js',
    styles: './src/styles.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    open: true,
    watchContentBase: true,
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(svg)$/,
        exclude: /img\/css-icons/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(svg)$/,
        include: /img\/css-icons/,
        loader: 'file-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader'
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/data',
          to: './data',
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: false,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['china', 'styles']
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: false,
      template: './src/index.html',
      filename: 'china.html',
      chunks: ['china', 'styles']
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: false,
      template: './src/index.html',
      filename: 'russia.html',
      chunks: ['russia', 'styles']
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
