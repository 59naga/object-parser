# Object-parser [![NPM version][npm-image]][npm] [![Build Status][travis-image]][travis] [![Coverage Status][coveralls-image]][coveralls]

[![Sauce Test Status][sauce-image]][sauce]

> Multiple parse/stringify libraries

## Installation
### Via npm
```bash
$ npm install object-parser --save
```
```js
var OP= require('object-parser');
console.log(OP); //object
```

### Via bower
```bash
$ bower install object-parser --save
```
```html
<script src="bower_components/object-parser/object-parser.min.js"></script>
<script>
  console.log(OP); //object
</script>
```

# API

## `OP.stringify(type,object,replacer,indent)`
```js
var object= {foo:'bar',['baz']};

OP.stringify('yaml',object);
// foo: bar\nfizz:\n    - baz

OP.stringify('json5',object);
// {foo:"bar",fizz:["baz"]}

OP.stringify('json',object);
// {"foo":"bar","fizz":["baz"]}
```

## `OP.parse(type,object)`
```js
OP.parse('yaml','foo: bar\nfizz:\n    - baz');
// {foo: "bar", fizz: ['baz']}

OP.parse('json5','{foo:"bar",fizz:["baz"]}');
// {foo: "bar", fizz: ['baz']}

OP.parse('json',{"foo":"bar","fizz":["baz"]});
// {foo: "bar", fizz: ['baz']}
```

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/

[sauce-image]: http://soysauce.berabou.me/59naga/object-parser.svg
[sauce]: https://saucelabs.com/u/59798
[npm-image]:https://img.shields.io/npm/v/object-parser.svg?style=flat-square
[npm]: https://npmjs.org/package/object-parser
[travis-image]: http://img.shields.io/travis/59naga/object-parser.svg?style=flat-square
[travis]: https://travis-ci.org/59naga/object-parser
[coveralls-image]: http://img.shields.io/coveralls/59naga/object-parser.svg?style=flat-square
[coveralls]: https://coveralls.io/r/59naga/object-parser?branch=master
