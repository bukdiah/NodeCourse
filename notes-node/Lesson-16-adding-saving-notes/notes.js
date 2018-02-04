//Where Reading and Writing funcitons will be stored
console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notes = [];

    var note ={
        title: title,
        body: body
    }

    //Retrieve existing notes if it exists
    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);        
    } catch (e) {
        //console.log("ERROR: ",e);
    }

    //Check for notes with duplicate titles
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
