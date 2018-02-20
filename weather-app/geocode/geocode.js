//Beginning of Geocode File

// library for making HTTP requests
const request = require("request");

module.exports.geocodeAddress = (address, callback) => {
    console.log('address = ', address);
    var encodedAddress = encodeURIComponent(address);
    
    console.log(encodedAddress);
    // provide with GET options and callback function
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //converts JSON to object
    }, (error, response, body) => {
    
        //Check for error codes and status codes
        if (error) {
            callback('Unable to connect to Google Servers.')
            //console.log('Unable to connect to Google Servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
            //console.log('Unable to find that address.')
        } else if (body.status === 'OK') {
            //error message isn't provided when things go well
            console.log('Entered here')
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });     
        } 
    });    
};

//secret key for dark sky weather api b9487195bf785a53473382d580605c7f