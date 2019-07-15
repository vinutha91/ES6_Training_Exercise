for(var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 0);
}

for(let i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 0);
}

// does not work
for (var i = 0; i < 10; i++) {
	document.getElementById('myButton').addEventListener('click', function() {
		console.log('Button ' + i + ' clicked');
	})
}

// works properly
for (let i = 0; i < 10; i++) {
	document.getElementById('myButton').addEventListener('click', function() {
		console.log('Button ' + i + ' clicked');
	})
}

// explicit blocking
function foo(x, y) {
	{
		let x = 2;
	}
}

// implicit blocking
if (true) {
	let x = 2;
}

if (true) {
	console.log(x);
	let x = 2;
}

if (true) {
	console.log(x);
	var x = 2;
}