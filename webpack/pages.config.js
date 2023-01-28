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
    title: 'Profile',
    entryName: 'profile',
    template: Path.resolve(__dirname, '../src/pages/profile/profile.ejs'),
    filename: 'pages/profile/profile',
    chunk: ['profile'],
  }
];

module.exports = pages;
