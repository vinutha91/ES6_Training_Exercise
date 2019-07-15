// before
function foo() {
	// can access arguments here
	console.log(arguments);
}

foo(2,3,4,5);

// now - rest operator/gather operator
function fooRest(...myArgs) {
	console.log(myArgs);
	bar(42, ...myArgs);
}

function bar(x, ...myArgs = [1,2,3]) {
	console.log(myArgs);
}

fooRest(2,3,4,5);