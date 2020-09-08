const path = require('path');

module.exports = {
  entry: './src/ebodatagrid.js',
  output: {
    filename: 'ebodatagrid.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};