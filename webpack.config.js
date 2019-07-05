const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
      rules: [
          {
              test: /\.txt$/,
              use: [
                  {
                      loader: path.resolve('src/myLoader.js'),
                  }
              ],
          }
      ]
  },
};