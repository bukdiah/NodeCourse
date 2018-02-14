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
    //console.log('Getting note', title)

    //fetch notes
    var notes = fetchNotes();

    //console.log('Notes returned: ',notes)
    //filter notes, find one where title matches
    var retrievedNote = notes.filter((note) => {
        return note.title === title;
    });

    console.log("retrievedNote", retrievedNote);
    
    if (retrievedNote.length > 0) {
        return retrievedNote[0];
    } else {
        return false;
    }

};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => {
        return note.title != title;
    });
    // save new notes array
    saveNotes(filteredNotes);

    //if notes array length does not equal filteredNotes array
    //then that means a note was removed
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    //break on this line and use repl to output note
    debugger;
    //use read command with --title
    console.log('--');
    console.log(`Title:  ${note.title}`);
    console.log(`Body:  ${note.body}`);
};

//Exporting the addNote function
module.exports = {
    //addNote: addNote if the key and value the same, can do the bottom syntax
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};