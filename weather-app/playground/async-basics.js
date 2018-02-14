console.log('Starting app');

//Async callback
setTimeout(() => {
    console.log('Inside of callback');
}, 2000)

setTimeout(() => {
    console.log('Second setTimeOut');
}, 0)
console.log('FInishing up');

// Output

/*
    Starting app
    Finishing Up
    Second setTimeOut
    Inside of callback
*/