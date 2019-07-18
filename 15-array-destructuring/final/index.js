// before
function foo() {
	return [1,2,3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];
// Known as De-structuring

// Now - ES6
var [a,b,c] = foo();

// LHS looks like an array
// But it is not an array
// Array - Target of an assignment? non-sense
// Array is a value

// JS Developers are allergic to whitespace
var [
	a,
	b,
	c
] = foo();

// fewer values
function foo() {
	return [1, 2];
}

var [
	a,
	b,
	c
] = foo();


// more values
function foo() {
	return [1, 2, 3, 4];
}

var [
	a,
	b,
	c
] = foo();