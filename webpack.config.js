const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'browserslist',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
};