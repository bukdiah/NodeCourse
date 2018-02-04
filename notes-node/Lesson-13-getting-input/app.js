//Where your app starts
console.log("Starting app.");

//Import FileSystem module and store in const fs
const fs = require('fs');
const _ = require('lodash');

//Loading our custom notes module (relative path)
const notes = require('./notes.js');

//get CLI arguments passed in
var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
    console.log('Adding new Note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('COmmand not recognized');
}