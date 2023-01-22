const Path = require('path');

const pages = [
  {
    entryName: 'app',
    pathTemplate: Path.resolve(__dirname, '../src/index.html'),
    filename: 'index',
    chunk: 'index'
  },
  {
    entryName: 'profile',
    pathTemplate: Path.resolve(__dirname, '../src/pages/profile/profile.html'),
    filename: 'pages/profile/profile',
    chunk: 'profile'
  }
];

module.exports = pages
