const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Pages = require("./pages.config");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        common_vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common_vendors',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...Pages.map( (page) =>
        new HtmlWebpackPlugin({
          inject: false,
          title: page.title,
          template: page.template,
          filename: `${page.filename}.html`,
        })
    )
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        },
        {
          test: /\.(html)$/i,
          loader: "html-loader",
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                'postcss-loader',
                "sass-loader",
            ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
  },
};