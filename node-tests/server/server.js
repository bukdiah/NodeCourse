const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users
// give users a name prop and age prop
app.get('/users', (req, res) => {
    var users = [{
            name: "Poop",
            age: 10
        },
        {
            name: "Hoop",
            age: 15
        },
        {
            name: "Loop",
            age: 20
        }
    ];

    res.status(200).send(users);
});

app.listen(3000);

//export the app, can now access from other files

module.exports.app = app;