//Where Reading and Writing funcitons will be stored
console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    //Retrieve existing notes if it exists
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        //console.log("ERROR: ",e);
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notes = fetchNotes();

    var note = {
        title: title,
        body: body
    }

    //Check for notes with duplicate titles
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading note title', title)
};

var removeNote = (title) => {
    console.log('Removing note title', title)
};

//Exporting the addNote function
module.exports = {
    //addNote: addNote if the key and value the same, can do the bottom
    addNote,
    getAll,
    getNote,
    removeNote
};