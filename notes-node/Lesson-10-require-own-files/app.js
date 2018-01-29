//Where your app starts
console.log("Starting app.");

//Import FileSystem module and store in const fs
const fs = require('fs');

const os = require('os');

//Loading our custom notes module (relative path)
const notes = require('./notes.js');

//The os.userInfo() method returns information about the currently effective user 
var user = os.userInfo();

//console.log(user)
//File should contain Hello kevins!
/*
fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function(err) {
    if (err) {
        console.log('Unable to write to file!');
    }
});*/

//ES6 version using template strings `` and arrow functions

fs.appendFile('greetings-template-strings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
    if (err) {
        console.log('Unable to write to file!');
    }
});