// starting point for weather application

// library for making HTTP requests
const request = require("request");

// provide with GET options and callback function
request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
    json: true //converts JSON to object
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    var geometry = body.results[0].geometry;
    var loc = geometry.location;
    //console.log(geometry);
    //console.log(loc)
    console.log(`Lat: ${loc.lat} Lng: ${loc.lng}`);
});