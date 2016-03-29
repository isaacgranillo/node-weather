
var weather = require('./weather.js')
var location = require('./location.js');

// weather(function (currentWeather){
// 	console.log(currentWeather);
// });

// location(function (location){
// 	if (!location){
// 		console.log("Can't find location");
// 		return;
// 	}

// 	console.log('city: ' + location.city);
// 	console.log('long/lat ' + location.loc)
// })

var argv = require('yargs')
	.option('location', {
		alias: 'l',
		description: 'Location to get weather for',
		type: 'string'
	})
	.help('help')
	.argv;

	if(typeof argv.l === 'string' && argv.l.length > 0){
		console.log('Getting you the current weather for ' + argv.l + '!')
		// weather(argv.l, function (currentWeather){
		// 	console.log(currentWeather);
		// });
		weather(argv.l).then(function (currentWeather){
			console.log(currentWeather);
		}).catch(function (error) {
			console.log(error);
	})

	}
	else{
		console.log('no location given, guessing current location...');
		// location(function (location){
		// 	if(location){
		// 		weather(location.city, function (currentWeather){
		// 			console.log(currentWeather);
		// 		});
		// 	}
		// 	else{
		// 		console.log('Can\'t get location')
		// 	}
		// });
		location().then(function (location){
			return weather(location.city);
		}).then(function (currentWeather){
			console.log(currentWeather);
		}).catch(function (error){
			console.log(error);
		})
	}





