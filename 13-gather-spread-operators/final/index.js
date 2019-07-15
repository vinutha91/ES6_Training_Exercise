// before
var x = [1,2,3,4];
var y = [5,6,7];
var z = [];

z = [0].concat(x, y, [6]);

// after
var x = [1,2,3,4];
var y = [5,6,7];
var z = [...x, ...y, 6];

function foo(x, y, ...rest) {
	console.log(x + ' ' + y);
	console.log(rest);
}

var a = [1,2,3];
var b = [4,5,6];

foo(...a, ...b);