//Make this function a promise

// library for making HTTP requests
const request = require("request");

//converting geocodeAddress into a Promise
var geocodeAddress = (address) => {
    return new Promise((resolve, reject ) => {
        var encodedAddress = encodeURIComponent(address);
        
        console.log(encodedAddress);
        // provide with GET options and callback function
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true //converts JSON to object
        }, (error, response, body) => {
        
            //Check for error codes and status codes
            if (error) {
                reject('Unable to connect to Google Servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OK') {
                //error message isn't provided when things go well
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } 
        });    
    });
    
};

geocodeAddress('000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
});