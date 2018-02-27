const expect = require('expect');

/*
    Let's us load in the file we want to mock out
    We want to replace DB with something else
*/
const rewire = require('rewire'); // gives us two addition functions


var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db); //replace db with our db variable

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);

        //expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })

    it('should call saveUser with user object', () => {
        var email = 'something@example.com';
        var password = 'password';
        /*
            This method will be executed BUT db.saveUser() is not
            the method in db.js but rather the spy instead
            This allows us to use assertions like normal
        */
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});