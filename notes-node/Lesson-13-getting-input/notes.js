//Where Reading and Writing funcitons will be stored
console.log('Starting notes.js');

//Inside all node files, we have access to a variable called module
//We are gonna use the exports property

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};
