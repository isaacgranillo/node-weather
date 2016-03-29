var request = require('request')

module.exports = function (location){

	return new Promise(function (resolve, reject){
			var encodedLocation = encodeURIComponent(location);
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial'

			if (!location) {
				return reject('No Location Given')
			}
				request({
				url: url, 
				json: true
				}, 
				function (error, response, body) {
					if (error){
					reject('Unable to get weather');
					}
					else {
					// console.log(JSON.stringify(body, null, 4));
					resolve("It's " + body.main.temp + " degrees in " + body.name)
					}
				}
			);
		
	});
};