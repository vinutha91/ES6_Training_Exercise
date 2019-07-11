var promiseToGiveChocolate = new Promise(function(resolve, reject) {
  // Do something here
});

var myPromise = new Promise(function(resolve, reject) {
  var name1 = 'Ankit';
  var name2 = 'Ankit';

  if (name1 === name2) {
    resolve();
  } else {
    reject();
  }

  // throw new Error('Some error has occured');
});

myPromise
.then(successHandler, failureHandler)
.catch(errorHandler);

function successHandler() {
  console.log('Promise Resolved');
}

function failureHandler() {
  console.log('Promise Rejected');
}

function errorHandler(errorMessage) {
  console.log(errorMessage);
}


var p1 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('one'), 1000); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('two'), 2000); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error('reject'));
});

Promise.all([p1, p2, p3, p4, p5])
.then(function(values) {
  console.log(values);
})
.catch(function(error) {
  console.log(error);
});

/*
  Promise.allSettled()
  Promise.race()
*/



var myVehicle = {
  type: 'CAR|BIKE|SCOOTY',
  name: 'STRING',
  number: 'MH12AB1111',
  kms: 'NUMBER',
};

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("POST", "https://api.jsonbin.io/b", true);
req.setRequestHeader("Content-type", "application/json");
req.setRequestHeader("secret-key", "$2a$10$ElZHgujRRmY7qDrb32yvduI81ERG11xUIewIOi5Q5oK.hIXhQOVCy");
req.setRequestHeader("collection-id", "5d25740a2c39867519e268fc");
req.send();


var makeRequest = function (url, method) {

	// Create the XHR request
	var request = new XMLHttpRequest();

	// Return it as a Promise
	return new Promise(function (resolve, reject) {

		// The rest of our XHR stuff will go here...

	});
};


function makeRequest(method, url, data) {
	if (url.trim() === '' || method.trim() === '') {
		return false;
	}

	var request = new XMLHttpRequest();

	return new Promise((resolve, reject) => {
		request.open(method, url);
		request.onreadystatechange = function() {
           if (request.readyState == XMLHttpRequest.DONE) {
    			console.log(request.responseText);
				resolve(request.responseText);
  			}

//             else {
//                 reject('Some Error occurred')
//             }
		}
		
		if (!!data) {
			request.send(data);
		} else {
			request.send();
		}
	});
}