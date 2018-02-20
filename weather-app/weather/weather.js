const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/b9487195bf785a53473382d580605c7f/${lat},${lng}`,    
        json: true //converts JSON to object
    }, (error, response, body) => {
    
        if (!error && response.statusCode === 200) {
            //console.log(body.currently.temperature);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
            //console.log('Unable to fetch weather');
        }
    });  
};

module.exports.getWeather = getWeather;

//secret key for dark sky weather api b9487195bf785a53473382d580605c7f