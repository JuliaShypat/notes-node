console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log(`Command ${command}`);
console.log(process.argv);
if (command === 'add') {
  console.log('Adding new node');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log("Fetching the node");
} else if (command === 'remove') {
  console.log('Removing the node');
} else {
  console.log('Not exist!');
}
