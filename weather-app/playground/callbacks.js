var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Poop'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(10, (user) => {
    console.log(user);
});

//output

/*
    after 3 seconds
    {'id': 10, 'name': Poop}
*/