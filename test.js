var formata = require('./formata');

var indexes = 'The quick {1} {2} jumps over the lazy {3}.';
var keywords = 'The quick {color} {animal} jumps over the lazy {lazyanimal}.';

var tests = [
  indexes.formata(1, 'dog', 'fox'),
  formata(indexes, 1, 'dog', 'fox'),
  indexes.formata([1, 'fox', 'cat']),
  formata(indexes, [1, 'fox', 'cat']),
  keywords.formata({color: 'blue', animal: 'rabbit', lazyanimal: 'fox'}),
  formata(keywords, {color: 'blue', animal: 'rabbit', lazyanimal: 'fox'}),
  indexes.formata('blue', 'rabbit'),
  keywords.formata({color: 'blue', animal: 'rabbit'}),
  indexes.formata('colored', {}, ['values', 'inside', 'array'])
];

for(var i in tests)
  console.log(tests[i]);
