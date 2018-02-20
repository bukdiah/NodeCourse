var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (typeof a === "number" && typeof b === "number") {
                resolve(a+b);
            }
            else {
                reject("Arguments must be NUMBERS");
            }
        }, 1500);
    });
};

asyncAdd(5,7).then((result)=>{
    console.log('Result: ', result);
    return asyncAdd(result, 33); //returning a promise so we can chain them
}).then((res) => {
    console.log('Should be 45', res);
}).catch((error) => {
    console.log(error);
});
/*
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("It worked!");
        reject('Unable to fulfill promise');        
    }, 2500);
});

// called when promise gets fulfilled
somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});
*/