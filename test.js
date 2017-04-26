var format = require('./formata');

var indexes = 'The quick {1} {2} jumps over the lazy {3}.';
var keywords = 'The quick {color} {animal} jumps over the lazy {lazyanimal}.';

var tests = [
  indexes.format(1, 'dog', 'fox'),
  format(indexes, 1, 'dog', 'fox'),
  indexes.format([1, 'fox', 'cat']),
  format(indexes, [1, 'fox', 'cat']),
  keywords.format({color: 'blue', animal: 'rabbit', lazyanimal: 'fox'}),
  format(keywords, {color: 'blue', animal: 'rabbit', lazyanimal: 'fox'}),
  indexes.format('blue', 'rabbit'),
  keywords.format({color: 'blue', animal: 'rabbit'}),
  indexes.format('colored', {}, ['values', 'inside', 'array'])
];

for(var i in tests)
  console.log(tests[i]);
