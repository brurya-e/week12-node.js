// In your own capsules work as a group and do the following:
// What is the difference between import and require?


//https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/

// How can you enable using the import syntax using node js

// Give 2 node.js environment variables that are not available
// when using the import syntax.


// Create 3 functions using the export/import syntax.
// Import the file system module using the import syntax.

// const add = require('./add');
// const sub = require('./sub');

import add from './add'
import {sub} from './sub'

console.log(add(5,2));
console.log(sub(5,2));



