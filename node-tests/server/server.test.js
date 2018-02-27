const request = require('supertest');
const expect = require('expect'); //adding assertion library to use with supertest
var app = require('./server').app;

// server
// GET /
// some test case
// GET /users
// some test case
describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            /*
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!') //make an assertion
                .end(done);*/
            /*
            request(app)
                .get('/')
                .expect(404)
                .expect({
                    error: 'Page not found.'
                }) //make an assertion
                .end(done);*/
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe("GET /users", () => {
        // Make a new test
        // assert 200
        // assert that your user exists in users array

        it('should verify that YOUR user exists', (done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: "Poop",
                        age: 10
                    });
                })
                .end(done);
        });
    });

});