const path = require('path')
import CopyWebpackPlugin from 'copy-webpack-plugin'
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'popup.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({patterns: [
      { from: 'src/public', to: '.'}
    ]}),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'popup.html',
    }),
    // new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
  }
}
