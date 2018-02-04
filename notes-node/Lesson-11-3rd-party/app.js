//Where your app starts
console.log("Starting app.");

//Import FileSystem module and store in const fs
const fs = require('fs');

const os = require('os');

const _ = require('lodash'); //searches node_modules folder

//Loading our custom notes module (relative path)
const notes = require('./notes.js');

//Some lodash functions
console.log(_.isString(true));
console.log(_.isString('POOP'));

var filteredArray = _.uniq(['Poop', 'Poop', 1, 2, 3, 1, 4]);

console.log(filteredArray);

//Since our dependent modules are already in package.json
//We can delete our node_modules folder
//Just run npm install to download your dependencies again