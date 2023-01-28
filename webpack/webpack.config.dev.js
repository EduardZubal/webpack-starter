const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.common.js');

const PORT = 9000;

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    chunkFilename: 'assets/js/[name].chunk.js',
    publicPath: `http://localhost:${PORT}/`,
    hotUpdateChunkFilename: 'hot/main.hot-update.js',
    hotUpdateMainFilename: 'hot/main.hot-update.json',
  },
  devServer: {
    static: {
        directory: Path.resolve(__dirname, '../src'),
    },
    hot: true,
    client: {
        overlay: true,
    },
    // open: true,
    compress: true,
    port: PORT,
    devMiddleware: {
      writeToDisk: true,
    }
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ESLintPlugin({
      extensions: 'js',
      emitWarning: true,
      files: Path.resolve(__dirname, '../src'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
    ],
  },
});