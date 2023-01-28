const Path = require('path');

const pages = [
  {
    title: 'Index',
    entryName: 'app',
    template: Path.resolve(__dirname, '../src/index.ejs'),
    filename: 'index',
    chunk: ['index'],
  },
  {
    title: 'page_1',
    entryName: 'page_1',
    template: Path.resolve(__dirname, '../src/pages/page_1/page_1.ejs'),
    filename: 'pages/page_1/page_1',
    chunk: ['page_1'],
  }
];

module.exports = pages;
