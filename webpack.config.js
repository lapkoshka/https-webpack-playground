'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), './build'),

  },
  resolve: {
    extensions: ['.js']
  },
};
