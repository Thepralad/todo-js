const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new htmlWebpackPlugin({
        template: './src/index.html'
    })
  ]
};
