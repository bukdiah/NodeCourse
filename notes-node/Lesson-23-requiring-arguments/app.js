//Where your app starts

//Import FileSystem module and store in const fs
const fs = require('fs');
const _ = require('lodash');
const yargs = require("yargs");

//Loading our custom notes module (relative path)
const notes = require('./notes.js');

const titleOptions = {
    describe: "Title of note",
    demand: true, //add command requires title
    alias: 't'
}

const bodyOptions = {
        describe: "Body of the note",
        demand: true, //add command requires title
        alias: 'b'
}

const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions

})
.command('list', 'List all the notes')
.command('read', 'Read a note', {
    title: titleOptions
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];

if (command === 'add') {
    //console.log('Adding new Note');
    var note = notes.addNote(argv.title, argv.body)

    if (note) {
        console.log("Note created");
        notes.logNote(note);

    } else {
        console.log("Note title already in use");
    }
} else if (command === 'list') {
    //console.log('Listing all notes');
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach((note) =>{
        notes.logNote(note);
    });


} else if (command === 'read') {
    //console.log('reading note');
    var note = notes.getNote(argv.title);

    if (note) {
        console.log("Note read");
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === 'remove') {
    //console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('COmmand not recognized');
}