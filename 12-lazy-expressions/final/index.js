// before
function foo(x = 42) {
	console.log(x);
}

// after
function bar() {
	return 42;
}

function foo(x = bar()) {
	console.log('function called');
}

foo();
foo(23);

// #Usecase 1
// after
function uniqueId() {
	return 42;
}

function foo(x = uniqueId()) {
	console.log('function called');
}

foo();
foo(23);

// #Usecase 2
// after
function required() {
	throw 'Parameter required';
}

function foo(id = required()) {
	console.log('function called');
}

foo();
foo(23);

// addon
function required() {
	throw 'Parameter required';
}

function foo(id = required(), x = id) {
	console.log('function called');
}

foo();
foo(23);

// cannot do like this
function foo(x = id, id = required()) {
	console.log('function called');
}

foo();
foo(23);

var x = 1;
function foo(x = 2, f = function() { return x }) {
	var x = 5;
	console.log(f());
}

foo();
