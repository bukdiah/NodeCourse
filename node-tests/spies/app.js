var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    // save the user to the DB
    // send the welcome email

    db.saveUser({
        email: email,
        password: password
    });
};