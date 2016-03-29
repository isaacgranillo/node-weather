// function doWork (data, callback){
// 	callback('done')
// }

// function doWorkPromise (data){
// 	return new Promise(function (resolve, reject){
// 		setTimeout(function(){
// 			reject('didn\'t work')
// 		}, 2000)
// 		// reject({
// 		// 	error: 'something went wrong'
// 		// })
// 	})
// }

// doWorkPromise('data').then(function (data){
// 	console.log(data);
// }, function (error){
// 	console.log(error);
// });

var request = require('request');

function getWeather (location){
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


getWeather('seattle').then(function (currentWeather){
	console.log(currentWeather);
}, function (error){
	console.log(error)
})




