// starting point for weather application

const yargs = require("yargs");

//Refactored requests and geocode logic to this module
const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

//node app.js --address '1301 lombard street'
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help() //adds help method
    .alias('help', 'h') //alias for help
    .argv;

console.log("argv: ", argv)
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);

        // lat, lng, callback
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}`);
            }
        });
    }
});

