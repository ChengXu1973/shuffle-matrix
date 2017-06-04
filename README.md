# Shuffle-Matrix

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/shuffle-matrix)

A JavaScript implementation of the Fisher-Yates Shuffle algorithm for array and matrix.

## Requirements

* Node.js 6+

## Installation

`npm install shuffle-matrix --save`

## Usage

```js
let shuffle = require('shuffle-matrix');
let origin = [1 , 2 , 3 , 4 , 5 , 6 ,  7 , 8 , 9];
let result = shuffle(origin);
```

```js
let randomFunc = function() {
    return 0.618
};
let shuffle = require('shuffle-matrix');
let origin = ['a', 'b', 'c', 'd', 'e', 'f'];
let result = shuffle(origin, randomFunc);
```

```js
let shuffle = require('shuffle-matrix');
let origin = [
    [0, 1],
    2,
    [3, 4, 5, 6, 7],
    [8, 9, 10],
    11,
    [12, 13]
];
let result = shuffle(origin);
```