const Path = require('path');

const pages = [
  {
    entryName: 'app',
    entryPath: 'index.js',
    title: 'Index',
    template: Path.resolve(__dirname, '../src/index.ejs'),
    filename: 'index',
  },
  {
    entryName: 'page_1',
    entryPath: 'pages/page_1/index.js',
    title: 'page_1',
    template: Path.resolve(__dirname, '../src/pages/page_1/page_1.ejs'),
    filename: 'pages/page_1/page_1',
  }
];

module.exports = pages;
