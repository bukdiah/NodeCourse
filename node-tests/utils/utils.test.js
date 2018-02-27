const utils = require("./utils");

const expect = require('expect'); //assertion library

// Groups tests together
describe('Utils', () => {
    describe('#add', () => {
        // create a test case
        it("Should add two numbers", () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
            /*
            if (res !== 44) {
                throw new Error(`Expected 44, but got ${res}.`);
            }*/
        });

        // Assertion never runs because Mocha says our test passes before our callback ever fires
        // pass the done argument
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    it("Should square the number", () => {
        var res = utils.square(3);

        expect(res).toBe(9).toBeA('number');
        /*
        if (res !== 9) {
            throw new Error(`Expected 4, but got ${res}.`);
        }*/
    });

    it('should async square the number', (done) => {
        utils.asyncSquare(2, (product) => {
            expect(product).toBe(4).toBeA("number");
            done();
        });
    });
});


// verify first and last names are set
// assert it includes firstName and lastName with proper values
it("should set first and last names", () => {
        var user = {
            age: 30,
            location: "Los Angeles"
        }

        var res = utils.setName(user, "Poop McGee");

        expect(res).toBeA('object').toInclude({
            firstName: "Poop",
            lastName: "McGee"
        });
    })
    /*
    it('should expect some values', () => {
        //expect(12).toNotBe(12);
        //expect({ name: 'Andrew' }).toBe({ name: 'Andrew' }); //to be uses triple = to check sameness, so fails
        //expect({ name: 'Andrew' }).toEqual({ name: 'Andrew' }); // this passes
        //expect([2, 3, 4]).toInclude(5); // check if array has the value 5 in it. FAILS
        expect({
            name: "Andrew",
            age: 25,
            location: "Philadelphia"
        }).toInclude({
            age: 25
        })
    });*/