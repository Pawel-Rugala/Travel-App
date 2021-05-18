const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'var',
    library: 'Client',
  },
};
