// function doWork (shouldFail){
// 	return new Promise(function (resolve, reject){
// 		setTimeout(function(){
// 			if (shouldFail === true && typeof shouldFail === 'boolean'){
// 				reject('error')
// 			}
// 			else{
// 				resolve('success')
// 			}
// 		}, 3000)
// 	})
// }

// doWork().then(function (message){
// 	console.log(message)
// 	return doWork(true);
// }).then(function (message){
// 	console.log(message);
// }).catch(function (error){
// 	console.log(error);
// })

function getLocation(){
	return new Promise(function (resolve, reject){
		resolve('Seattle')
	})
}

function getWeather(location){
	return new Promise(function (resolve, reject){
		resolve('It\'s 80 degress in ' + location )
	})
}


getLocation().then(function (location){
	return getWeather(location);
}).then(function (currentWeather){
	console.log(currentWeather);
})





