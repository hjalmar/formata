# npm formata package

Jens Hjalmarsson

## index or keyword arguments, but not combined.
```javascript
var indexes = 'The quick {1} {2} jumps over the lazy {3}.';
var keywords = 'The quick {color} {animal} jumps over the lazy {lazyanimal}.';
```

#### Arguments
```javascript
indexes.format(1, 'dog', 'fox');
// or
format(indexes, 1, 'dog', 'fox');

// output:
// The quick 1 dog jumps over the lazy fox.
```

#### Array
```javascript
indexes.format([1, 'fox', 'cat']);
// or
format(indexes, [1, 'fox', 'cat']);

// output:
// The quick 1 fox jumps over the lazy cat.
```

#### Keywords
```javascript
keywords.format({color: 'blue', animal: 'rabbit', lazyanimal: 'fox'});
// or
format(keywords, {color: 'blue', animal: 'rabbit', lazyanimal: 'fox'});

// output:
// The quick blue rabbit jumps over the lazy fox.
```

#### Missing arguments
```javascript
indexes.format('blue', 'rabbit');
// or
keywords.format({color: 'blue', animal: 'rabbit'});

// output:
// The quick blue fox jumps over the lazy {3}.
// The quick blue fox jumps over the lazy {lazyanimal}.
```

#### Invalid arguments
```javascript
indexes.formata('colored', {}, ['values', 'inside', 'array']);

// output:
// The quick colored [object Object] jumps over the lazy values,inside,array.
```
