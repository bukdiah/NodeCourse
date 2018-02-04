//Where Reading and Writing funcitons will be stored
console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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
