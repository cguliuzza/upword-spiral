const path = require('path');

const relativeAliases = [
  ['@base', './'],
  ['@assets', './assets/'],
  ['@icons', './assets/icons/'],
  ['@src', './src/'],
  ['@components', './src/components/'],
  ['@navigation', './src/navigation/'],
  ['@screens', './src/screens/'],
  ['#index', './index.js'],
];

const absoluteAliases = {};
relativeAliases.map((alias) => {
  absoluteAliases[alias[0]] = path.resolve(__dirname, alias[1]);
  return null;
});

module.exports.relativeAliases = relativeAliases;
module.exports.absoluteAliases = absoluteAliases;
