const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './client/src/index.js',
    './node_modules/react-image-gallery/styles/scss/image-gallery.scss'
  ],
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    'static': {
      directory: './client/dist'
    }
  }
};

module.exports = config;